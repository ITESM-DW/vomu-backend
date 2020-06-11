import mongoose from 'mongoose';
import * as yup from 'yup';
import { UserRoles } from '../models/User';

// import { USER_TYPE } from '../constants';

export const mongoIdValidator = yup.string().test(
	'isMongoId',
	'Id is not a valid MongoDB id',
	value => !mongoose.isValidObjectId(value)
);

export const userValidator = {
	email: yup.string().required(),
	name: yup.string().required(),
	last: yup.string().required(),
	password: yup.string().required(),
	type: yup.string().oneOf([UserRoles.STUDENT, UserRoles.PROFESSOR]),
	title: yup.string(),
	description: yup.string(),
	image: yup.string().required(),
};

export const userUpdateValidator = {
	email: yup.string().required(),
	name: yup.string().required(),
	last: yup.string().required(),
	title: yup.string(),
	description: yup.string(),
	image: yup.string().required(),
};

export const subjectValidator = {
	title: yup.string().required(),
	description: yup.string().required(),
	videoURL: yup.string().url()
};

export const courseValidator = {
	title: yup.string().required(),
	description: yup.string().required(),
	imgURL: yup.string().url(),
	subjects: yup.array().of(yup.object().shape(subjectValidator))
};
