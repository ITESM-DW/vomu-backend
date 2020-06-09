import mongoose from 'mongoose';

import { defaultErrorHandler } from '../middlewares/mongoErrorHandler';

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
	title: String,
	description: String,
	videoURL: String,
});

const CourseSchema = new Schema({
  	title: String,
  	description: String,
  	imgURL: String,
  	subjects: [SubjectSchema],
  	students: [{
		  type: mongoose.Types.ObjectId,
		  ref: 'User',
	  }],
  	professor: { type: mongoose.Types.ObjectId, ref: 'User' },
});

CourseSchema.post('save', defaultErrorHandler );

export const Course = mongoose.model('Course', CourseSchema);
