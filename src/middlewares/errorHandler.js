
export default (err, req, res, next) => {
    // TODO(kevinwkt): [WIP] middleware.
    res.status(err.status || 502).send({
        error: {
            status: err.status || 502,
            message: err.message || 'Internal Server Error',            
        }
    });

};