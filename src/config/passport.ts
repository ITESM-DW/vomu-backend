import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import { Request, Response, NextFunction } from 'express';

import { User, UserDocument, UserRoles } from '../models/User';
import { AUTH_SECRET } from './secrets';
import { AuthenticationError, AuthorizationError } from '../utils/errors';

passport.serializeUser<any, any>((user, done) => {
	done(undefined, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});


/**
 * Sign in using Email and Password.
**/
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, async (email, password, cb) => {
	try {
		const user = await User.findOne({ email }) as UserDocument;
		if (!user || !await user.comparePassword(password)) {
			return cb(new AuthenticationError('Invalid email or password'), false, null);
		} else {
			return cb(null, user, null);
		}
	} catch (err) {
		cb(err, false, null);
	}
}));

/**
 * Verify JWT
**/
passport.use(new JWTStrategy({
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: AUTH_SECRET,
}, async (jwt_payload, done) => {
	try {
		const user = await User.findOne({ _id: jwt_payload._id });
		if (user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	} catch (err) {
		return done(err, false);
	}
}));

export const isProfessor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const user = req.user as UserDocument;
	if (user.type === UserRoles.PROFESSOR) {
		next();
	} else {
		next(new AuthorizationError('User is not authorized for course modification'));
	}
};
