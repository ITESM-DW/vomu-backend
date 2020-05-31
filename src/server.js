import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

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

    var uri = `mongodb://${DB_SERVER}/vomu-backend-db`;
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log(`Connected to mongodb @ ${DB_SERVER}!!! 🌟`);
    });

    const router = express.Router()

    router.get('/', (req, res) => {
        res.json({
            message: "It's working",
        });
    });

    app.use("/api", router);

    app.listen(APP_PORT, () => console.log(`Server is up and running @ port ${APP_PORT}!!! 🚀`));
})();