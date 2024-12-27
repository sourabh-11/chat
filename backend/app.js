import express from 'express'
import morgan from 'morgan';
import connect from './db/db.js';
import userRoute from './routes/user.route.js'
import cookieParser from 'cookie-parser';
connect();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.use('/users',userRoute);
app.get('/',(req,res)=>{
    res.send("hello");
})

export default app;
