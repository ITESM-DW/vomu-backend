import { Request, Response, NextFunction } from 'express';

import { Graph } from '../models/Graph';

const controller = {
	getGraphs: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const graphs = await Graph.find();
			if (graphs.length === 0) {
				res.status(200).json([
					{
						datasets: [
							{
								data: [
									100,
									130,
									145,
									150,
									163,
									169,
									180,
									220,
									247,
									290,
									300,
									315
								],
								label: 'Students'
							},
							{
								data: [
									5,
									8,
									14,
									16,
									16,
									18,
									20,
									26,
									25,
									27,
									30,
									33
								],
								label: 'Professor'
							}
						],
						labels: [
							'January',
							'February',
							'March',
							'April',
							'May',
							'June',
							'July',
							'August',
							'September',
							'October',
							'November',
							'December'
						],
						_id: '5ee35294987ff3789823fb02',
						title: '# of Users (Cumulative)',
						type: 'line',
						legend: true,
						options: {
							responsive: true
						}
					},
					{
						datasets: [
							{
								data: [
									330,
									600,
									260,
									700
								],
								label: 'Account A'
							},
							{
								data: [
									120,
									455,
									100,
									340
								],
								label: 'Account B'
							},
							{
								data: [
									45,
									67,
									800,
									500
								],
								label: 'Account C'
							}
						],
						labels: [
							'January',
							'February',
							'Mars',
							'April'
						],
						_id: '5ee35294987ff3789823fb03',
						title: '# of Professors (Cumulative)',
						type: 'line',
						legend: true,
						options: {
							responsive: true
						}
					},
					{
						datasets: [
							{
								data: [
									100,
									30,
									15,
									5,
									13,
									6,
									11,
									40,
									27,
									43,
									10,
									15
								],
								label: 'Student Signups'
							},
							{
								data: [
									5,
									3,
									6,
									2,
									0,
									2,
									2,
									6,
									-1,
									2,
									3,
									3
								],
								label: 'Professor Signups'
							}
						],
						labels: [
							'January',
							'February',
							'March',
							'April',
							'May',
							'June',
							'July',
							'August',
							'September',
							'October',
							'November',
							'December'
						],
						_id: '5ee35294987ff3789823fb04',
						title: 'Signups per Month',
						type: 'bar',
						legend: true,
						options: {
							responsive: true
						}
					},
					{
						labels: [
							'Technology',
							'Self Improvement',
							'History'
						],
						_id: '5ee35294987ff3789823fb05',
						title: 'Overall Course Contents',
						type: 'pie',
						data: [
							40,
							23,
							7
						],
						legend: true,
						plugins: [],
						options: {
							responsive: true
						}
					}
				]);
			} else {
				res.status(200).json(graphs);
			}
		} catch (err) {
			next(err);
		}
	},
};

export default controller;
