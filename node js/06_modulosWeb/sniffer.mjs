//es una pieza de software q te permite interseptar la info de una red
//te ayuda a obtener informacion de lo q va a haciendo el usuario (q btn pulsa, q teclas pulsa, en q partes de la pagina se esta moviendo, etc)

import { createServer } from "http";
import { get } from "https";

const hostname = "localhost";
const port = 3000;
const options = {
    host : "jonmircha.com",
    port : 443, //como el sitio de jonmircha es seguro el puerto es 443 si trabajaramos con el get del modulo http ahi seria 80
    path : "/cursos"
}

let htmlCode = "";

const httpClient = res => {
    console.log(`el sitio ${options.host} a respondido. Codigo respuesta: ${res.statusCode}. Mensaje: ${res.statusMessage}`);

    //el evento "data" se ejecuta cuando vaya llegando datos
    res.on("data",(data)=>{
        console.log(data,data.toString());
        htmlCode += data;
    })
}

const httpError = err =>{
    console.error("No se pudieron traer los datos");
}


const webServer = (req,res)=>{
    //para q se levante el servidor web
    res.statusCode = "200";
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    //finalizar la peticion
    res.end(htmlCode);
}

//intanciar cliente http/s
get(options,httpClient).on("error",httpError);

//intancia servidor local http
createServer(webServer).listen(port,hostname,()=>{
    console.log("servidor corriendo")
});