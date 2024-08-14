"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const secret_1 = __importDefault(require("../secret"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
function createnewuser(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        try {
            const exists = yield prisma.users.findFirst({
                where: {
                    email: inputs.email
                }
            });
            if (exists) {
                return { status: 409, message: "User already exists" };
            }
            const res = yield prisma.users.create({
                data: {
                    email: inputs.email,
                    password: inputs.password,
                    firstname: inputs.firstname,
                    lastname: inputs.lastname
                }
            });
            return { status: 200, message: "user created" };
        }
        catch (err) {
            return { status: 400, message: err };
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
router.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputs = req.body;
    const result = yield createnewuser(inputs);
    res.status(result.status).json(result.message);
}));
router.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    yield prisma.$connect();
    const response = yield prisma.users.findFirst({
        where: {
            email: username,
            password: password
        }
    });
    if (response) {
        const userId = response.id.toString();
        const token = jsonwebtoken_1.default.sign(userId, secret_1.default);
        res.setHeader('Authorization', `Bearer ${token}`);
        res.status(200).json({ response, token });
    }
    else {
        res.status(404).json("user not found");
    }
}));
exports.default = router;
