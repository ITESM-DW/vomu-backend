import express from 'express';
import * as yup from 'yup';

import { USER_TYPE } from '../constants';
import { User } from '../models';
import { userValidator, mongoIdValidator } from '../utils/validators';
import validate from '../utils/validate';

const router = express.Router();

router.post('/', async (req, res, next) => {
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
});

router.get('/', async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
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
        const deleteId = await validate({ id: mongoIdValidator.required()}, req.params);
        const user = await User.deleteOne(deleteId);
    
        res.json(200, user);
    } catch(err) {
        next(err);
    }
});

export default router;