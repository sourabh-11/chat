import jwt from 'jsonwebtoken';
import redisClient from '../services/redis.service.js';


export const authUser = async (req,res,next)=>{
    try {
        const token = req.cookies.token || req.headers.authorization.split('')[1];
        if(!token)
        {
            return res.status(401).send({error: 'unauthorized user'});

        }

        const isBlackeListed = await redisClient.get(token);

        if(!isBlackeListed)
        {
            res.cookies('token',' ')
            return res.status(401).send({error : 'unauthorized user'})
        }

        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        res.status(401).send({error: 'unauthorized User'});
    }
}