import mongoose, { Document, Mongoose, Aggregate } from 'mongoose';
import bcrypt from 'bcrypt';

import { defaultErrorHandler, resourceHandler } from '../middlewares/mongoErrorHandler';
import { Course } from './Course';

const Schema = mongoose.Schema;

type FollowUpsDocument = mongoose.Document & {
	course_id: mongoose.Types.ObjectId,
	subject_id: mongoose.Types.ObjectId;
};

export enum UserRoles {
	STUDENT = 'student',
	PROFESSOR = 'professor',
	ADMIN = 'admin'
}

export type UserDocument = Document & {
	email: string,
	name: string,
	last: string,
	password: string,
	type: UserRoles,
	title: string,
	description: string,
	image: string,
	followup: FollowUpsDocument[],
	comparePassword: comparePasswordFunction;
	getUserCourses: getUserCoursesFunction;
	getUserProfile: getUserProfileFunction;
};
// Compare login password with user's password.
type comparePasswordFunction = (candidatePassword: string) => Promise<boolean>;
// Get the courses of that user (depending on role) and students as size of array.
type getUserCoursesFunction = (this: UserDocument) => Promise<any[]>;
// Get the user profile only: email, name, last, title, description, image
type getUserProfileFunction = (this: UserDocument) => Promise<any>;


const FollowUps = new Schema({
	course_id: {
		type: mongoose.Types.ObjectId,
		ref: 'Course'
	},
	subject_id: {
		type: mongoose.Types.ObjectId,
		ref: 'Subject'
	},
});

const UserSchema = new Schema({
	email: String,
	name: String,
	last: String,
	password: String,
	type: {
		type: String,
		enum: ['student', 'professor']
	},
	title: String,
	description: String,
	image: String,
	followup: [FollowUps]
});

const comparePassword: comparePasswordFunction = async function (candidatePassword) {
	try {
		return await bcrypt.compare(candidatePassword, this.password);
	} catch (err) {
		return err;
	}
};

const getUserCourses: getUserCoursesFunction = async function (this: UserDocument) {
	const match = {};
	if (this.type === UserRoles.STUDENT) {
		match['students'] = this._id;
	} else if (this.type === UserRoles.PROFESSOR) {
		match['professor'] = this._id;
	}
	return await Course.aggregate()
		.match(match)
		.project({
			_id: 1,
			title: 1,
			description: 1,
			imgURL: 1,
			subjects: 1,
			students: {
				$size: '$students'
			}
		});
};

const getUserProfile: getUserProfileFunction = async function(this: UserDocument) {
	return await User.aggregate()
		.match({
			_id: this._id
		})
		.project({
			_id: 0,
			email: 1,
			name: 1,
			last: 1,
			title: 1,
			description: 1,
			image: 1
		});
};

// Set handler for methods to use with mongoose.
//FIXME Error handlers implementationfunction save(next) {
UserSchema.pre('save', async function save(next) {
	const user = this as UserDocument;
	if (!user.isModified('password')) {
		return next();
	}
	try {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(user.password, salt);
		user.password = hash;
	} catch (err) {
		return next(err);
	}
	next();
});
UserSchema.post('save', defaultErrorHandler);
UserSchema.post('deleteOne', defaultErrorHandler);
UserSchema.post('deleteOne', resourceHandler);
UserSchema.post('findOne', defaultErrorHandler);
UserSchema.post('findOne', resourceHandler);

UserSchema.methods.comparePassword = comparePassword;
UserSchema.methods.getUserCourses = getUserCourses;
UserSchema.methods.getUserProfile = getUserProfile;

export const User = mongoose.model('User', UserSchema);
