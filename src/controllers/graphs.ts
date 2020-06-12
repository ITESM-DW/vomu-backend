import { Request, Response, NextFunction } from 'express';

import { Graph } from '../models/Graph';

const controller = {
	getGraphs: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const graphs = await Graph.find();
			res.status(200).json(graphs);
		} catch (err) {
			next(err);
		}
	},
};

export default controller;
