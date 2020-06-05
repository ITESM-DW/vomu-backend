import express from 'express';

import courses from './courses';
import subjects from './subjects';
import users from './users';

const router = express.Router();

router.use('/users', users);
router.use('/courses', courses);
router.use('/subjects', subjects);

export default router;
