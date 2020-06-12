import { Request, Response, NextFunction } from 'express';

import { Course } from '../models/Course';
import { UserDocument } from '../models/User';
import { mongoIdValidator, courseValidator, courseUpdateValidator } from '../utils/validators';
import validate from '../utils/validate';
import { ObjectId } from 'bson';
import { translateCourse, translateCourses, translateGeneric } from '../utils/translateModel';

const controller = {
	addCourse: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const user = req.user as UserDocument;
			// Validate schema.
			const courseDetail = await validate(courseValidator, req.body);

			// Create and save new course. 
			const course = new Course({ ...courseDetail, students: [], professor: user._id });
			await course.save();
			res.status(200).json(translateCourse(course, req.get('lang')));
		} catch (err) {
			next(err);
		}
	},
	getCourses: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const user = req.user as UserDocument;
			const courses = await user.getUserCourses();
			res.status(200).json(translateCourses(courses, req.get('lang')));
		} catch (err) {
			next(err);
		}
	},
	//TODO Change according to req.user
	getCourse: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { _id } = await validate({ _id: mongoIdValidator.required() }, req.params) as any;
			const course = await Course.getCourse(_id);

			res.status(200).json(translateCourse(course, req.get('lang')));
		} catch (err) {
			next(err);
		}
	},
	updateCourse: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const user = req.user as UserDocument;

			// Validate schema.
			const courseDetail = await validate(courseUpdateValidator, req.body);
			const id = (courseDetail as Record<string, any>)._id;
			delete (courseDetail as Record<string, any>)._id;
			// Update and save. 
			await Course.updateOne({ _id: new ObjectId(id), professor: user._id }, courseDetail);
			res.json(translateGeneric({
				status: 200,
				message: 'Updated Course'
			}, req.get('lang')));
		} catch (err) {
			next(err);
		}
	},
	deleteCourse: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const deleteId = await validate({ _id: mongoIdValidator.required() }, req.params) as any;
			const course = await Course.deleteOne(deleteId);

			res.status(200).json(translateGeneric({
				status: 200,
				message: 'Deleted Course',
				dbResponse: course,
			}, req.get('lang')));
		} catch (err) {
			next(err);
		}
	}
};

export default controller;
