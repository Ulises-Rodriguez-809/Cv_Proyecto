import express from 'express';
import {resolve} from 'path';

const app = express();

app.get("/",(req,res)=>{
    // res.end("<h1>Hola desde Express JS</h1>");
    res.sendFile(resolve("index.html"));
})

app.listen(3000,()=>{
    console.log("iniciando express desde http://localhost:3000");
})