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
const authmiddleware_1 = __importDefault(require("../authmiddleware"));
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
function putnewTodo(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        try {
            const res = yield prisma.todo.create({
                data: {
                    title: inputs.title,
                    description: inputs.description,
                    userId: inputs.userId
                }
            });
        }
        catch (err) {
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
function completetodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        try {
            const res = yield prisma.todo.update({
                where: {
                    id: id
                },
                data: {
                    done: true
                }
            });
        }
        catch (err) {
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
router.post('/newtodo', authmiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.userId, 10);
    const title = req.body.title;
    const description = req.body.description;
    const inputs = { title, description, userId };
    yield putnewTodo(inputs);
    res.status(201).send("Todo created successfully");
}));
router.get('/completedtodos', authmiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.userId, 10);
    try {
        yield prisma.$connect();
        const completedtodos = yield prisma.todo.findMany({
            where: {
                userId: userId,
                done: true
            }
        });
        res.status(200).json(completedtodos);
    }
    catch (err) {
        return (err);
    }
    finally {
        yield prisma.$disconnect();
    }
}));
router.get('/incompletedtodos', authmiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.userId, 10);
    try {
        yield prisma.$connect();
        const completedtodos = yield prisma.todo.findMany({
            where: {
                userId: userId,
                done: false
            }
        });
        res.status(200).json(completedtodos);
    }
    catch (err) {
        return (err);
    }
    finally {
        yield prisma.$disconnect();
    }
}));
router.get('/incompletetodos', authmiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.userId, 10);
    try {
        yield prisma.$connect();
        const incompletetodos = yield prisma.todo.findMany({
            where: {
                userId: userId,
                done: false
            }
        });
        res.status(200).json(incompletetodos);
    }
    catch (err) {
        return (err);
    }
    finally {
        yield prisma.$disconnect();
    }
}));
router.put('/complete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Id = req.query.id;
    if (typeof Id !== 'string') {
        return res.status(400).json({ error: 'Invalid Id parameter' });
    }
    const id = parseInt(Id, 10);
    try {
        yield prisma.$connect();
        const response = yield prisma.todo.update({
            where: {
                id: id
            }, data: {
                done: true
            }
        });
        res.json(response);
    }
    catch (err) {
        res.json(err);
    }
    finally {
        prisma.$disconnect();
    }
}));
exports.default = router;
