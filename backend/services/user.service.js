import userModel from '../models/user.model.js'

export const creatUser = async({
    email,password
})=>{
    if(!email || !password)
    {
        throw new Error('Email and password are required');
    }

    const hashpassword = await userModel.hashpassword(password)
    const user =await userModel.create({
        email,
        password: hashpassword
    });
    return user;
}