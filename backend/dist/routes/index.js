"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const router = express_1.default.Router();
const body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const todo_1 = __importDefault(require("./todo"));
const user_1 = __importDefault(require("./user"));
router.use('/todo', todo_1.default);
router.use('/user', user_1.default);
exports.default = router;
