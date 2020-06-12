import express from 'express';

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
	GET /api/users/profile
	Get a current user
*/
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getProfile);
/*
	GET /api/users/_id
	Get a current user
*/
router.get('/:_id', userController.getUser);
/*
	GET /api/users/_id/courses
	Get a user courses
*/
router.get('/:_id/courses', userController.getUserCourses);
/*
	POST /api/users/update
	Update a user by id
*/
router.post('/update', passport.authenticate('jwt', { session: false }), userController.updateUser);
/*
	DELETE /api/users/:id
	Delete a user by id
*/
router.delete('/', passport.authenticate('jwt', { session: false }), userController.deleteUser);


router.get('/auth', userController.isAuth);
export default router;
