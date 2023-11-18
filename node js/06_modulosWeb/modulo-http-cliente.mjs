//mientras q el servidor provee el servicio 
//el cliente nos podria permitir obtener informacion de una peticion q hagamos a una URL

import {get} from 'http';

const urlSite = {
    hostname : "jonmircha.com",
    port : 80,
    path : "/cursos"
}

get(urlSite,(res)=>{
    console.log(`el sitio ${urlSite.hostname} a respondido. Codigo ${res.statusCode}. Mensaje ${res.statusMessage}.`);
}).on("error",(err)=>{
    console.error(`el sitio ${urlSite.hostname} no a respondido. Codigo ${err.code}. Mensaje ${err.message}.`);
});