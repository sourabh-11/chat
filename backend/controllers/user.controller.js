import userModel from '../models/user.model.js';
import { validationResult } from 'express-validator';

import userService  from '../services/user.service.js'

export const  creatUserController = async()=>{
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({errors:errors.array()})
        }
        try{
            const user = await userService.creatUser(req.body);
            res.status(201).send(user);

        }
        catch(error)
        {
            res.status(400).send(error.message);
        }
}