import express from 'express';
import * as yup from 'yup';

import { Subject } from '../models';
import { subjectValidator, mongoIdValidator } from '../utils/validators';
import validate from '../utils/validate';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        // Validate schema.
        const subjectDetail = await validate(subjectValidator, req.body);

        // Create and save new user. 
        const subject = new Subject(subjectDetail);
        await subject.save();

        // Return user.
        res.json(subject);
   } catch (err) {
        next(err);
   }
});

router.get('/', async (req, res, next) => {
    try {
        const subject = await Subject.find();
        res.status(200).json(subject);
    } catch(err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const findId = await validate({ id: mongoIdValidator.required()}, req.params);
        const subject = await Subject.findOne(findId);
    
        res.json(200, subject);
    } catch(err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const deleteId = await validate({ id: mongoIdValidator.required()}, req.params);
        const subject = await Subject.deleteOne(deleteId);
    
        res.json(200, subject);
    } catch(err) {
        next(err);
    }
});

export default router;