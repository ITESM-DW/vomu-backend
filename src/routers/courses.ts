import { Router } from 'express';
import coursesController from '../controllers/courses';
import { isProfessor } from '../config/passport';
import passport from 'passport';

const router = Router();
/*
	POST /api/courses/
	
*/
router.post('/', passport.authenticate('jwt', { session: false }), isProfessor, coursesController.addCourse);
/*
	GET /api/courses/
	
*/
router.get('/', coursesController.getCourses);
/*
	POST /api/courses/update
	Update course sending id in body
*/
router.post('/update', passport.authenticate('jwt', { session: false }), isProfessor, coursesController.updateCourse);
/*
	GET /api/courses/:id
	
*/
router.get('/:_id', coursesController.getCourse);
/*
	DELETE /api/courses/:id
	
*/
router.delete('/:_id', passport.authenticate('jwt', { session: false }), isProfessor, coursesController.deleteCourse);

export default router;
