import { Router } from 'express';
import graphsController from '../controllers/graphs';

const router = Router();
/*
	GET /api/graphs/
    Get generic graphs for all users
*/
router.get(('/'), graphsController.getGraphs);

export default router;
