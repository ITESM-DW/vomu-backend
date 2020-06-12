import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import '../config/passport';
import { User, UserDocument } from '../models/User';
import { userValidator, mongoIdValidator, userUpdateValidator } from '../utils/validators';
import validate from '../utils/validate';
import { AUTH_SECRET } from '../config/secrets';
import { BadRequestError } from '../utils/errors';
import { translateUser, translateUsers, translateGeneric } from '../utils/translateModel';

const controller = {
	logIn: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			passport.authenticate('local', { session: false }, (err, user, info) => {
				if (err) {
					return next(err);
				}
				req.login(user, { session: false }, (err) => {
					if (err) {
						return next(err);
					}
					const token = jwt.sign(user._doc, AUTH_SECRET, {
						expiresIn: '1h'
					});
					return res.json({ token });
				});
			})(req, res, next);
		} catch (err) {
			if (err.message === 'payload is required') {
				next(new BadRequestError('Bad request'));
			} else {
				next(err);
			}
		}

	},
	signUp: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			// Validate schema.
			const userDetail = await validate(userValidator, req.body);

			// Create and save new user. 
			const user = new User(userDetail) as UserDocument;
			await user.save();

			// Return user.
			res.json(translateUser(user, req.get('lang')));
		} catch (err) {
			next(err);
		}
	},
	getUsers: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const user = await User.find().select('email name last password type title description image') as UserDocument[];
			res.status(200).json(translateUsers(user, req.get('lang')));
		} catch (err) {
			next(err);
		}
	},
	getUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const user = req.user as UserDocument;

			res.status(200).json(translateUser((await user.getUserProfile())[0], req.get('lang')));
		} catch (err) {
			next(err);
		}
	},
	updateUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		const user = req.user as UserDocument;

		try {
			const userDetail = await validate(userUpdateValidator, req.body) as UserDocument;
			await User.updateOne({ _id: user._id }, userDetail);

			res.send(translateUser(userDetail, req.get('lang')));
		} catch (error) {
			next(error);
		}
	},
	deleteUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const {_id } = await validate({ _id: mongoIdValidator.required() }, req.params) as any;
			const dbResponse = await User.deleteOne(_id);

			res.status(200).json(translateGeneric({
				status: 200,
				message: 'Deleted User',
				dbResponse,
			}, req.get('lang')));
		} catch (err) {
			next(err);
		}
	},
	isAuth: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			passport.authenticate('jwt', { session: false }, (err, user) => {
				if (err) {
					res.status(401).json({ status: 200, message: false });
				} else {
					res.send({ status: 200, message: true });
				}
			})(req, res, next);
		} catch (error) {
			next(error);	
		}
	}
};

export default controller;
