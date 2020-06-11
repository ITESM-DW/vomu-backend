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
	GET /api/users/
	Get a current user
*/
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getUser);
/*
	POST /api/users/update
	Delete a user by id
*/
router.post('/update', passport.authenticate('jwt', { session: false }), userController.updateUser);
/*
	DELETE /api/users/:id
	Delete a user by id
*/
router.delete('/', passport.authenticate('jwt', { session: false }), userController.deleteUser);
/*
	DELETE /api/users/:id
	Delete a user by id
*/
router.get('/auth', userController.isAuth);
export default router;
