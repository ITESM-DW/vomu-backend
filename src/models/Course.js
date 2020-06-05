import mongoose from 'mongoose';

import { defaultErrorHandler } from '../middlewares/mongoErrorHandler';
import SubjectSchema from './Subject';

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  	title: String,
  	description: String,
  	imgURL: String,
  	subjects: [{ 
		  type: mongoose.Types.ObjectId,
		  ref: 'Subject',
	  }],
  	students: [{
		  type: mongoose.Types.ObjectId,
		  ref: 'User',
	  }],
  	professor: { type: mongoose.Types.ObjectId, ref: 'User' },
});

CourseSchema.pre('save', defaultErrorHandler);

export default CourseSchema;