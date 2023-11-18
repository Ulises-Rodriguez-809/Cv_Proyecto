import express from 'express';

//1- inicializar express
const app = express();

//2- obtenemos una ruta con get (es parecido al modulo http)
//los paremetros son --> la ruta : "/" (home en este caso) y una callback q se va a ejecutar cuando el usuario solicite esta ruta
//en la callbakc al igual q con el modulo http tenemos q mandar el require y response
app.get("/",(req,res)=>{
    res.end("<h1>Hola desde Express JS</h1>");
    //para verlo mejor andate a la documentacion y en la parte de Required y Response se ve mucho mejor q por la terminal del VS
    console.log(req);
    console.log(res);
})

//3- indicarle a la aplicacion por cual puerto esta escuchando
//los paremetros son el port y una callback q se va a ejeuctar cuando se este escuchando ese puerto
app.listen(3000,()=>{
    console.log("iniciando express desde http://localhost:3000");
})