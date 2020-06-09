import express from 'express';
import * as yup from 'yup';

import userController from '../controllers/users';
import passport from 'passport';

const router = express.Router();
/*
	POST /api/users/login
	Log in to account
*/
router.post('/login', userController.logIn);
/*
	POST /api/users/signup
	Sign up user
*/
router.post('/signup', userController.signUp);
/*
	GET /api/users/
	Get all users
*/
//TODO Add isAuthorized	for admin
router.get('/', userController.getUsers);
/*
	GET /api/users/:id
	Get a single user by id
*/
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getUser);
/*
	DELETE /api/users/:id
	Delete a user by id
*/
router.delete('/', passport.authenticate('jwt', { session: false }), userController.deleteUser);

export default router;
