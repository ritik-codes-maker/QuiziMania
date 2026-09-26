import express from "express";
import morgan from "morgan";
import cors from "cors";
import {config} from "dotenv";
import router from './routers/router.js';
import connect from './database/dataconn.js'

config();

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

const port  = process.env.PORT || 8080;


app.use('/api', router);

app.get('/', (req,res)=>{
    try {
        res.json("Get Request")
    } catch (error) {
        res.json("error occured while routing ", error);
    }
})

connect().then(()=>{
    app.listen(port ,()=>{
        console.log(`server running on localhost${port}`)
    })
}).catch((err)=>{
    console.log("error while connecting to database ", err );
})