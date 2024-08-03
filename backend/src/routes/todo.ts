import  express  from "express";

import { PrismaClient } from "@prisma/client";

import authmiddleware from "../authmiddleware";

const prisma = new PrismaClient()
const router=express.Router()

interface Todo{
    title:string,
    description:string,
    userId:number
}

async function putnewTodo(inputs:Todo) {

    await prisma.$connect()
    try{
        const res= await prisma.todo.create({
            data:{
                title:inputs.title,
                description:inputs.description,
                userId:inputs.userId
            }
        })

    }catch(err){

    }finally{
        await prisma.$disconnect();

    }
}
async function completetodo(id:number){
    await prisma.$connect();
    try{
        const res= await prisma.todo.update({
            where:{
                id:id
            },
            data:{
                done:true
            }
        })

    }catch(err){

    }finally{
        await prisma.$disconnect()

    }
}

router.post('/newtodo',authmiddleware,async (req,res)=>{
    const userId = parseInt(req.userId as string,10);
    const title=req.body.title;
    const description=req.body.description
    const inputs:Todo={title,description, userId}
    

    await putnewTodo(inputs)
    res.status(201).send("Todo created successfully");
})
router.get('/completedtodos',authmiddleware,async(req,res)=>{
    const userId = parseInt(req.userId as string,10);
    try{
        await prisma.$connect();
        const completedtodos= await prisma.todo.findMany({
            where:{
                userId:userId,
                done:true
            }
        })
        
        res.status(200).json(completedtodos)
    } catch(err){
        return(err)
    } finally{
        await prisma.$disconnect();
    }
})
router.get('/incompletedtodos',authmiddleware,async(req,res)=>{
    const userId = parseInt(req.userId as string,10);
    try{
        await prisma.$connect();
        const completedtodos= await prisma.todo.findMany({
            where:{
                userId:userId,
                done:false
            }
        })
        
        res.status(200).json(completedtodos)
    } catch(err){
        return(err)
    } finally{
        await prisma.$disconnect();
    }
})
router.get('/incompletetodos',authmiddleware,async(req,res)=>{
    const userId = parseInt(req.userId as string,10);
    try{
        await prisma.$connect();
        const incompletetodos=await prisma.todo.findMany({
            where:{
                userId:userId,
                done:false
            }
        })
        res.status(200).json(incompletetodos)
    } catch(err){
        return(err)
    } finally{
        await prisma.$disconnect();
    }
})
router.put('/complete',async(req,res)=>{
    const Id=req.query.id;
    if (typeof Id!=='string'){
        return res.status(400).json({ error: 'Invalid Id parameter' });
    }
    const id=parseInt(Id,10)
    try{
        await prisma.$connect();
        const response=await prisma.todo.update({
            where:{
                id:id
            },data:{
                done:true
            }
        })
        res.json(response)
    }catch(err){

        res.json(err)
    }finally{
        prisma.$disconnect();
    }
})

export default router