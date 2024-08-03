import  express  from "express";
const app=express();
import cors from "cors";
const router=express.Router()
import bodyparser from 'body-parser'
app.use(bodyparser.json())
app.use(cors());
app.use(express.json());
import todorouter from './todo'
import userrouter from './user'
router.use('/todo',todorouter)
router.use('/user',userrouter)
export default router
