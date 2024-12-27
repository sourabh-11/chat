import userModel from '../models/user.model.js';
import * as userService  from '../services/user.service.js'
import { validationResult } from 'express-validator';
import redisClient from '../services/redis.service.js';


export const  creatUserController = async(req,res)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty())
        {
            return res.status(400).json({errors:errors.array()})
        }
        try{
            const user = await userService.creatUser(req.body);

            const token = await user.generateJWT();

            res.status(201).json({user,token});

        }
        catch(error)
        {
            res.status(400).send(error.message);
        }
}
export const  loginController = async(req,res)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty())
        {
            return res.status(400).json({errors:errors.array()})
        }
        try{
            const {email,password} =req.body;

            const user = await userModel.findOne({email}).select('+password');
            if(!user)
            {
               return res.status(401).json({
                    errors: 'invalid credntilas'
                })
            }

           const isMatch = await user.isValidPassword(password)
           if(!password)
            {
                res.status(401).json({
                    errors: 'invalid credntilas'
                })
            }
            const token = await user.generateJWT();
            res.status(201).json({user,token});

        }
        catch(error)
        {
            res.status(400).send(error.message);
        }
}

export const  profileController = async(req,res)=>{
       
         res.status(200).json({user:req.user})
}
export const  logoutController = async(req,res)=>{
        try {
           
            const token = req.cookie.token || req.headers.authorization.split('')[1];
            redisClient.set(token,'logout','EX',60*60*24);

            res.status(200).json({message:'Logged out successful'})


            
        } catch (error) {
            res.status(400).send(error.message)
        }
         res.status(200).json({user:req.user})
}