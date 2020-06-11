import { ValidationError } from 'yup';

import { DBInterfaceError, DBConnectionError, ResourceNotFoundError, AuthenticationError, BadRequestError, AuthorizationError } from '../utils/errors';
import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: Error, req: Request, res: Response, next: NextFunction) => {
	if(err) {
		if (err instanceof BadRequestError || err instanceof ValidationError) {
			res.status(400).send({
				status: 400,
				message: err.message
			});
		} else if (err instanceof AuthenticationError) {
			res.status(401).send({
				status: 401,
				message: err.message
			});
		} else if (err instanceof AuthorizationError) {
			res.status(403).send({
				status: 403,
				message: err.message
			});
		} else if (err instanceof ResourceNotFoundError) {
			res.status(404).send({
				status: 404,
				message: err.message,
			});
		} else if(err instanceof DBInterfaceError) {
			res.status(500).send({
				status: 500,
				message: err.message, 
			});
		} else if(err instanceof DBConnectionError) {
			res.status(500).send({
				status: 500,
				message: err.message, 
			});
		} else {
			res.status(err['status'] || 502).send({
				error: {
					status: err['status'] || 502,
					message: err.message || 'Internal Server Error',            
				}
			});
		}
	}
};
