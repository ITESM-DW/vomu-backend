import mongoose, { Document, Model } from 'mongoose';

import { defaultErrorHandler, resourceHandler } from '../middlewares/mongoErrorHandler';
import { ObjectId } from 'bson';

const Schema = mongoose.Schema;

type SubjectDocument = Document & {
	title: string;
	description: string;
	videoURL: string;
};

export type CourseDocument = Document & {
	title: string;
	description: string;
	imgURL: string;
	subjects: SubjectDocument[],
	students: mongoose.Types.ObjectId[],
	professor: mongoose.Types.ObjectId;
};

type getCourseFunction = (id: string) => Promise<any>;

interface CourseModel extends Model<CourseDocument> {
	getCourse: getCourseFunction;
}

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

CourseSchema.post('save', defaultErrorHandler);
CourseSchema.post('deleteOne', defaultErrorHandler);
CourseSchema.post('deleteOne', resourceHandler);
CourseSchema.post('updateOne', defaultErrorHandler);
CourseSchema.post('updateOne', resourceHandler);
CourseSchema.post('findOne', defaultErrorHandler);
CourseSchema.post('findOne', resourceHandler);

const getCourse: getCourseFunction = async (id: string) => {
	const course = await Course.aggregate()
		.match({
			_id: new ObjectId(id)
		})
		.project({
			_id: 1,
			title: 1,
			description: 1,
			imgURL: 1,
			subjects: 1,
			students: 1,
			professor: 1,
			// students: {
			// 	$size: '$students'
			// }
		});

	return course[0];
};

CourseSchema.statics.getCourse = getCourse;

export const Course: CourseModel = mongoose.model<CourseDocument, CourseModel>('Course', CourseSchema);
