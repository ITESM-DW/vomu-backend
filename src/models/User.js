import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FollowUps = new Schema({
	course_id: Number,
	subject_id: Number,
});

const UserSchema = new Schema({
  	id: Number,
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

export default UserSchema;