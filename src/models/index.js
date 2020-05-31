import mongoose from 'mongoose';

import CourseSchema from './Course';
import UserSchema from './User';

export const Course = mongoose.model('Course', CourseSchema);
export const User = mongoose.model('User', UserSchema);