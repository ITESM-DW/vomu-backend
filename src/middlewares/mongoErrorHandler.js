import { DBInterfaceError, DBConnectionError, ResourceNotFoundError } from "../utils/errors";

const defaultErrorHandler = async function (error, res, next) {
    if (error.name === 'MongoError') {
        next(new DBInterfaceError("Error in handling mongo operation"));
    } else if (error.name === 'MongoNetworkError') {
        next(new DBConnectionError("Error in connecting to MongoDB"));
    } else {
        next();
    }
};

const resourceHandler = function (resource) {
    // Emtpy response.
	if(!resource) {
		throw new ResourceNotFoundError("Could not find the resource asked for");
    }
    if(resource && resource.deletedCount === 0) {
		throw new ResourceNotFoundError("Could not delete the resource asked for");
    }
}

export { defaultErrorHandler, resourceHandler };