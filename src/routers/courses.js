import express from 'express';
import * as yup from 'yup';

import { Course } from '../models';
import { mongoIdValidator, courseValidator } from '../utils/validators';
import validate from '../utils/validate';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        // Validate schema.
        const courseDetail = await validate(courseValidator, req.body);

        // Create and save new user. 
        const course = new Course(userDetail);
        await course.save();

        // Return user.
        res.json(user);
   } catch (err) {
        next(err);
   }
});

router.get('/', async (req, res, next) => {
    try {
        const courses = await Course.find().populate({
            path: 'students',
            populate: {
                path: 'subjects',
                model: 'Subject'
            }
        }).exec();
        res.status(200).json(courses);
    } catch(err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const findId = await validate({ id: mongoIdValidator.required()}, req.params);
        const user = await User.findOne(findId);
    
        res.json(200, user);
    } catch(err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const deleteId = await validate({ id: mongoIdValidator.required() }, req.params);
        const course = await Course.deleteOne(deleteId);
    
        res.json(200, course);
    } catch(err) {
        next(err);
    }
});

export default router;