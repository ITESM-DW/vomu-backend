import { Router } from 'express';
import coursesController from '../controllers/courses';

const router = Router();
/*
	POST /api/courses/
	
*/
router.post('/', coursesController.addCourse);
/*
	GET /api/courses/
	
*/
router.get('/', coursesController.getCourses);
/*
	GET /api/courses/:id
	
*/
router.get('/:id', coursesController.getCourse);
/*
	DELETE /api/courses/:id
	
*/
router.delete('/:id', coursesController.deleteCourse);

export default router;
