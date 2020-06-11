import express from 'express';
import passport from 'passport';

import courses from './courses';
import users from './users';
import '../config/passport';

const router = express.Router();

router.use('/users', users);
router.use('/courses', passport.authenticate('jwt', { session: false }), courses);

export default router;
