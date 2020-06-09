import { Request, Response, NextFunction } from 'express';

import { Course } from '../models/Course';
import { User, UserRoles, UserDocument } from '../models/User';
import { mongoIdValidator, courseValidator } from '../utils/validators';
import validate from '../utils/validate';
import { AuthorizationError } from '../utils/errors';

const controller = {
	addCourse: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const user = req.user as UserDocument;
			if (user.type === UserRoles.PROFESSOR) {
				// Validate schema.
				const courseDetail = await validate(courseValidator, req.body);
	
				// Create and save new course. 
				const course = new Course({ ...courseDetail, students: [], professor: user._id });
				await course.save();
			} else {
				next(new AuthorizationError('User is not authorized for course creation'));
			}

		} catch (err) {
			next(err);
		}
	},
	getCourses: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const user = req.user as UserDocument;
			const courses = await user.getUserCourses();
			res.status(200).json(courses);
		} catch (err) {
			next(err);
		}
	},
	//TODO Change according to req.user
	getCourse: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const findId = await validate({ id: mongoIdValidator.required() }, req.params);
			const user = await User.findOne(findId);

			res.status(200).json(user);
		} catch (err) {
			next(err);
		}
	},
	deleteCourse: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const deleteId = await validate({ id: mongoIdValidator.required() }, req.params);
			const course = await Course.deleteOne(deleteId);

			res.status(200).json(course);
		} catch (err) {
			next(err);
		}
	}
};

export default controller;
