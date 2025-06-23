import express from 'express';
import { connectMongo } from './config/dbCon.js';
import cors from "cors"
import dotenv from "dotenv";
import productRoute from './routes/product.route.js'
import path from "path"

const app = express();
const port = process.env.PORT || 5000;
dotenv.config()

app.use(express.json()) //allow us to accept json data in req.body 
app.use(cors())
app.use("/api/items", productRoute)

//for production
const __dirname = path.resolve()

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}

app.listen(port, async() => {
    connectMongo()
    console.log(`Server is running on http://localhost:${port}`);
});

