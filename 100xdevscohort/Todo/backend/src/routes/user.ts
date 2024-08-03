import  express  from "express";

import { PrismaClient } from "@prisma/client";
import { Client } from "pg";
import secret from '../secret'
import jwt, { JwtPayload } from 'jsonwebtoken'



const prisma = new PrismaClient()
const router=express.Router()
interface User{
    email:string,
    password:string,
    firstname:string,
    lastname?:string
}
async function createnewuser(inputs:User) {
    await prisma.$connect()
    try{
        const exists= await prisma.users.findFirst({
            where:{
                email:inputs.email
            }
        })
        if (exists){
            return { status: 409, message: "User already exists" };
        }
        const res= await prisma.users.create({
            data:{
                email:inputs.email,
                password:inputs.password,
                firstname:inputs.firstname,
                lastname:inputs.lastname
            }
        })
        

        return {status:200, message:"user created"}
        
    } catch (err){
        

        return {status:400, message:err}
    } finally{
        await prisma.$disconnect();

    }
}
router.post('/signup',async(req,res)=>{

    const inputs:User = req.body;
    const result=await createnewuser(inputs)
    res.status(result.status).json(result.message)
})
router.post('/signin',async (req,res)=>{
    const username:string=req.body.username;
    const password:string=req.body.password;
    await prisma.$connect();
    const response=await prisma.users.findFirst({
        where:{
            email:username,
            password:password
        }
    })
    if(response){
        const userId=response.id.toString();
        const token=jwt.sign(userId,secret)
        res.setHeader('Authorization', `Bearer ${token}`);
        res.status(200).json({response,token})
    }
    else{
        res.status(404).json("user not found")
    }
    
})

export default router