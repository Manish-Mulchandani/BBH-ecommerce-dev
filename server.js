import express from "express";
import colors from 'colors';
import dotenv from 'dotenv'
import morgan from "morgan";
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoute.js"
import cors from "cors"


//configure env -> Env used to secure application
dotenv.config();

//database config
connectDB();

// rest object
const app = express();

//middlewares
app.use(cors())
app.use(express.json())  // Instead of using bodyparser
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes);

// rest api
app.get('/',(req,res) => {
    res.send("<h1>Hello World</h1>")
})

//PORT 
const PORT = process.env.PORT || 8080 ;

//run listen
app.listen(PORT,() => {
    console.log(("Server running on "+PORT).bgCyan.white);
});