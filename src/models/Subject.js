import mongoose from 'mongoose';

import { defaultErrorHandler } from '../middlewares/mongoErrorHandler';

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  	title: String,
  	description: String,
  	videoURL: String, 
});

SubjectSchema.pre('save', defaultErrorHandler);

export default SubjectSchema;