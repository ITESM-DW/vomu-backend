
import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

export type GraphDocument = Document & {
	title: string;
	type: string;
	datasets: string;
	labels: any;
    legend: boolean;
    options: any;
};

const GraphSchema = new Schema({
	title: String,
	type: String,
	datasets: Array,
	labels: Array,
	legend: Boolean,
	options: Object,
});

export const Graph = mongoose.model('Graph', GraphSchema);
