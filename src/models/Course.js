import mongoose from 'mongoose';

import { defaultErrorHandler } from '../middlewares/mongoErrorHandler';
import SubjectSchema from './Subject';

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  	title: String,
  	description: String,
  	imgURL: String,
  	subjects: [SubjectSchema],
  	students: [String],
  	professor: String,
});

CourseSchema.pre('save', defaultErrorHandler);

export default CourseSchema;