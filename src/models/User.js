import mongoose, { get } from 'mongoose';

import { defaultErrorHandler, resourceHandler } from '../middlewares/mongoErrorHandler';

const Schema = mongoose.Schema;

const FollowUps = new Schema({
	course_id: Number,
	subject_id: Number,
});

const UserSchema = new Schema({
  	email: String,
  	name: String,
  	last: String,
  	password: String,
  	type: String,
  	title: String,
  	description: String,
  	image: String,
  	followup: [FollowUps],
});

// Set handler for methods to use with mongoose.
UserSchema.post('save', defaultErrorHandler);
UserSchema.post('deleteOne', defaultErrorHandler);
UserSchema.post('deleteOne', resourceHandler);
UserSchema.post('findOne', defaultErrorHandler);
UserSchema.post('findOne', resourceHandler);

export default UserSchema;