import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim: true,
        lowercase:true,
        minLength:[6,'Email must ba at least 6 charates long'],
        maxLength:[50,'Email must ba not lonh 50  charates '],
    },
    password:{
        type:String,
        select: false,
    }
})

userSchema.statics.hashpassword =async function(password)
{
    return await bcrypt.hash(password,10);
}

userSchema.method.isValidPassword =async function(password)
{
    return await bcrypt.compare(password,this.password);
}

userSchema.method.generateJWT = function()
{
    return jwt.sign({email: this.email},process.env.JWT_SECRET,{expiresIn:'24h'});
}

const User  = mongoose.model('user',userSchema);
export default User;