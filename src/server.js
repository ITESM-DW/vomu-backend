import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { User } from './models';

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

    // TODO(kevinwkt): get rid of router here.
    const router = express.Router()

    router.get('/', (req, res) => {
        res.json({
            message: "It's working",
        });
    });

    // Declare models.
    router.route('/user')
        .post((req, res) => {
            const student = new User();
            student.id = 10;
  			student.email= 'user@gmail.com';
  			student.name= 'Iris';
  			student.last= 'Craft';
  			student.password= 'password';
  			student.type= 'student';
  			student.title= 'PhD.';
  			student.description= 'urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus';
  			student.image= 'https://source.unsplash.com/collection/190727/400x400';
            student.followup= [{ course_id: 1, subject_id: 2 }, {course_id: 5, subject_id: 2}];
              
            student.save((err) => {
                if(err) {
                    console.log(err);
                    res.send(err);
                }
                res.json({message: "User created"});
            })
        });

    app.use("/api", router);

    app.listen(APP_PORT, () => console.log(`Server is up and running @ port ${APP_PORT}!!! 🚀`));
})();