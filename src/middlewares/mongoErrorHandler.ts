import { DBInterfaceError, DBConnectionError, ResourceNotFoundError } from '../utils/errors';
import { Document, NativeError } from 'mongoose';
import { MongoError } from 'mongodb';

export const defaultErrorHandler = function (error: MongoError, doc: Document, next: (err?: NativeError) => void ): void {
	if (error.name === 'MongoError') {
		next(new DBInterfaceError('Error in handling mongo operation'));
	}
	else if (error.name === 'MongoNetworkError') {
		next(new DBConnectionError('Error in connecting to MongoDB'));
	}
	else {
		next();
	}
};

export const resourceHandler = function (doc: any, next: (err?: NativeError) => void): void {
	// Emtpy response.
	if(!doc || !doc.nModified) {
		throw new ResourceNotFoundError('Could not find the resource asked for');
	}
	if(doc && doc.deletedCount === 0) {
		throw new ResourceNotFoundError('Could not delete the resource asked for');
	}
	next();
};
