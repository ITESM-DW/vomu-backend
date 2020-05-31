import express from 'express';
import * as yup from 'yup';

import { USER_TYPE } from '../constants';
import { User } from '../models';
import validate from '../utils/validate';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        console.info('1');
        const userDetail = await validate(
          {
            id: yup.number().integer().required(),
            email: yup.string().required(),
            name: yup.string().required(),
            last: yup.string().required(),
            password: yup.string().required(),
            type: yup.string().oneOf(USER_TYPE).required(),
            title: yup.string().required(),
            description: yup.string().required(),
            image: yup.string().required(),
            followup: yup.array().required(),
          },
          req.body,
        );

        console.info('2')
        const student = new User(userDetail);
        student.save((err) => {
            if(err) {
                console.log(err);
                res.send(err);
                return;
            }
            res.json({message: "User created"});
        });

   } catch (error) {
       console.error(error)
        next(error);
   }
});

router.get('/', (req, res) => {
    User.find((err, users) => {
        if (err) {
            console.error("???");
            return;
        }

        res.status(200).send({ users });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    User.find({ id }, (err, user) => {
        if(err) {
            send.status(404).send({ message: "not found"});
            return;
        }
        res.json(200);
    })
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    User.deleteOne({ id }, (err, user) => {
        if(err) {
            send.status(404).send({ message: "not found"});
            return;
        }
        res.json(200);
    });
});

export default router;