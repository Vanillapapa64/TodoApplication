import secret from './secret'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { Express, RequestHandler } from 'express';

const authmiddleware:RequestHandler=(req,res,next)=>{

    const authorization=req.headers.authorization;
    
    if (!authorization || !authorization.startsWith('Bearer')){
        return res.status(403).json({msg:'no auth'})
    }
    const token=authorization.split(' ')[1];
    try {
        const decoded=jwt.verify(token,secret);
        if(typeof decoded==='string'){
            req.userId=decoded as string

        } else if(typeof decoded==='object' && 'id' in decoded ){
            req.userId=(decoded as JwtPayload).id as string;

        }else{
            throw new Error("invalid token")
        }
        
        next()
    }catch(err){
        res.status(403).json({msg:'bad auth'})
    }
}
export default authmiddleware;