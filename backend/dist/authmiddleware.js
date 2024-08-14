"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const secret_1 = __importDefault(require("./secret"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authmiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith('Bearer')) {
        return res.status(403).json({ msg: 'no auth' });
    }
    const token = authorization.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret_1.default);
        if (typeof decoded === 'string') {
            req.userId = decoded;
        }
        else if (typeof decoded === 'object' && 'id' in decoded) {
            req.userId = decoded.id;
        }
        else {
            throw new Error("invalid token");
        }
        next();
    }
    catch (err) {
        res.status(403).json({ msg: 'bad auth' });
    }
};
exports.default = authmiddleware;
