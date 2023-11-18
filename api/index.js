import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js' 
import authRouter from './routes/auth.route.js'

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.error(err);
});
const app = express();

app.listen('3000', () => {
    console.log('Server is running on port 3000');
});
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);


