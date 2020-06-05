// User facing.
export class DBInterfaceError extends Error {
    constructor(message) {
        const trueProto = new.target.prototype;
        super(message);
        this.name= "DBInterfaceError";
        this.__proto__ = trueProto;
    }
}

// User facing.
export class DBConnectionError extends Error {
    constructor(message) {
        const trueProto = new.target.prototype;
        super(message);
        this.name= "DBConnectionError";
        this.__proto__ = trueProto;
    }
}

// Internal.
export class ResourceNotFoundError extends Error {
    constructor(message) {
        const trueProto = new.target.prototype;
        super(message);
        this.name = "ResourceNotFoundError";
        this.__proto__ = trueProto;
    }
}