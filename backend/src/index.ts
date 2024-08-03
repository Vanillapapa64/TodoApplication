import express from 'express';
import cors from 'cors'
import rootrouter from './routes/index'
import bodyparser from 'body-parser'
const app=express();
app.use(bodyparser.json())
app.use(cors())
app.use(express.json())
app.use("/api/v1",rootrouter)
app.listen(3000)




