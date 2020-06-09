import { UserDocument } from '../models/User';

declare namespace Express {
	export interface Request {
		user?: UserDocument;
	}
}
