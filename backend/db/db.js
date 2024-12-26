import mongoose from "mongoose";
function connect(){
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log('connect to mongoose');  
    }).catch(err=>{
        console.log(err);
        
    })
}
export default connect;