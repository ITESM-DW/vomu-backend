import express from 'express';

import courses from './courses';
import users from './users';

const router = express.Router();

router.use('/users', users);
router.use('/courses', courses);

export default router;