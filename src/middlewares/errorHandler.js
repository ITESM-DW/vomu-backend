import { ValidationError } from 'yup';
import mongoose, { mongo } from 'mongoose';

import { SchemaValidationError, DBInterfaceError, DBConnectionError, ResourceNotFoundError } from '../utils/errors';

export default (err, req, res, next) => {
    if(err) {
        if(err instanceof ValidationError) {
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
        } else if(err instanceof ResourceNotFoundError) {
            res.status(404).send({
                status: 404,
                message: err.message, 
            });
        } else {
            res.status(err.status || 502).send({
                error: {
                    status: err.status || 502,
                    message: err.message || 'Internal Server Error',            
                }
            });
        }
    }
};