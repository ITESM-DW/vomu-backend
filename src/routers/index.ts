import express from 'express';

import courses from './courses';
import graphs from './graphs';
import users from './users';
import '../config/passport';

const router = express.Router();

router.use('/users', users);
router.use('/courses', courses);
router.use('/graphs', graphs);

export default router;
