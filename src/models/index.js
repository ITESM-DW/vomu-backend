import mongoose from 'mongoose';

import CourseSchema from './Course';
import SubjectSchema from './Subject';
import UserSchema from './User';

export const Course = mongoose.model('Course', CourseSchema);
export const Subject = mongoose.model('Subject', SubjectSchema);
export const User = mongoose.model('User', UserSchema);