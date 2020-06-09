import mongoose from 'mongoose';
import * as yup from 'yup';

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
	type: yup.string().oneOf(['student', 'professor']).required(),
	title: yup.string().required(),
	description: yup.string().required(),
	image: yup.string().required(),
	followup: yup.array().required()
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
