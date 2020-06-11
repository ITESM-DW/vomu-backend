
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import setTimeout from 'connect-timeout';
import passport from 'passport';
import cors from 'cors';

import errorHandler from './middlewares/errorHandler';
import routers from './routers';
import { PORT, MONGO_URI, MONGO_DB_NAME } from './config/secrets';

(async () => {
	const app = express();

	// Middlewares.
	app.use(morgan('dev'));
	app.use(passport.initialize());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(cors());
	app.use(setTimeout('5s'));

	// API routes.
	app.use('/api', routers);
	// Custom Error Handler.
	app.use(errorHandler);

	// Connect to MongoDB.
	mongoose.connect(`${MONGO_URI}/${MONGO_DB_NAME}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	const connection = mongoose.connection;
	connection.once('open', () => {
		console.log(`Connected to mongodb @ ${MONGO_URI}!!! 🌟`);
	});

	app.listen(PORT, () => console.log(`Server is up and running @ port ${PORT}!!! 🚀`));
})();
