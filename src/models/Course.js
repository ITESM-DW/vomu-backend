import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    id: Number,
  	title: String,
  	description: String,
  	videoURL: String, 
});

const CourseSchema = new Schema({
  	id: Number,
  	title: String,
  	description: String,
  	imgURL: String,
  	subjects: [SubjectSchema],
  	students: [Number],
  	professor: Number,
});

export default CourseSchema;