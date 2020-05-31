import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

import routers from './routers';
import yupValidate from './utils/validate';
import { User } from './models';
import errorHandler from './middlewares/errorHandler';

const {
    APP_PORT = 8083,
    DB_SERVER = 'localhost:27017',
    DB_NAME = 'vomu-backend-db',

} = process.env;

(async () => {
    const app = express();

    // Middlewares.
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(errorHandler);

    // Connect to MongoDB.
    var uri = `mongodb://${DB_SERVER}/vomu-backend-db`;
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log(`Connected to mongodb @ ${DB_SERVER}!!! 🌟`);
    });

    app.use("/api", routers);

    app.listen(APP_PORT, () => console.log(`Server is up and running @ port ${APP_PORT}!!! 🚀`));
})();