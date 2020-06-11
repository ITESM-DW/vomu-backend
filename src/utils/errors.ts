// Bad Request
export class BadRequestError extends Error {
	constructor(message: string) {
		const trueProto = new.target.prototype;
		super(message);
		this.name = 'BadRequestError';
		Object.setPrototypeOf(this, trueProto);
	}
}

// Invalid credentials
export class AuthenticationError extends Error {
	constructor(message: string) {
		const trueProto = new.target.prototype;
		super(message);
		this.name = 'AuthenticationError';
		Object.setPrototypeOf(this, trueProto);
	}
}

// Not authorized
export class AuthorizationError extends Error {
	constructor(message: string) {
		const trueProto = new.target.prototype;
		super(message);
		this.name = 'AuthorizationError';
		Object.setPrototypeOf(this, trueProto);
	}
}

// User facing.
export class DBInterfaceError extends Error {
	constructor(message: string) {
		const trueProto = new.target.prototype;
		super(message);
		this.name= 'DBInterfaceError';
		Object.setPrototypeOf(this, trueProto);
	}
}

// User facing.
export class DBConnectionError extends Error {
	constructor(message: string) {
		const trueProto = new.target.prototype;
		super(message);
		this.name= 'DBConnectionError';
		Object.setPrototypeOf(this, trueProto);
	}
}

// Internal.
export class ResourceNotFoundError extends Error {
	constructor(message: string) {
		const trueProto = new.target.prototype;
		super(message);
		this.name = 'ResourceNotFoundError';
		Object.setPrototypeOf(this, trueProto);
	}
}
