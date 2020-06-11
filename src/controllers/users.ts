import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import '../config/passport';
import { User, UserDocument } from '../models/User';
import { userValidator, mongoIdValidator, userUpdateValidator } from '../utils/validators';
import validate from '../utils/validate';
import { AUTH_SECRET } from '../config/secrets';
import { BadRequestError } from '../utils/errors';

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
			const user = new User(userDetail);
			await user.save();

			// Return user.
			res.json(user);
		} catch (err) {
			next(err);
		}
	},
	getUsers: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const user = await User.find().select('email name last password type title description image');
			res.status(200).json(user);
		} catch (err) {
			next(err);
		}
	},
	getUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const user = req.user as UserDocument;

			res.status(200).json(await user.getUserProfile());
		} catch (err) {
			next(err);
		}
	},
	updateUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		const user = req.user as UserDocument;

		try {
			const userDetail = await validate(userUpdateValidator, req.body);
			await User.updateOne({ _id: user._id }, userDetail);

			res.send(userDetail);
		} catch (error) {
			next(error);
		}
	},
	deleteUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const deleteId = await validate({ id: mongoIdValidator.required() }, req.params);
			const user = await User.deleteOne(deleteId);

			res.status(200).json(user);
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
