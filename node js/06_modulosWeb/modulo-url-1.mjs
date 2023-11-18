//fijate en la extencion del archivo es .mjs (esto te evita el problema de q cuando queres importar modulos te dice q tenes q ponerle el type="module" ya sea en el script o en el .json)
import { parse } from "url";
//parse --> nos permite analizar una url, este nos devuelve cada parte de una url

const urlString = "https://www.ejemplo.com:8080/ruta?parametro1=valor1&parametro2=valor2";
//recorda q cuando hay un "?" en la url significa q estas pasando datos por la url --> parametro1=valor1
//el "&" significa q vas a pasar otro valor --> parametro2=valor2

const parsedUrl = parse(urlString, true);
//con el metodo parse del modulo url

console.log("Protocolo:", parsedUrl.protocol);
console.log("Hostname:", parsedUrl.hostname);
console.log("Pathname:", parsedUrl.pathname);
console.log("Parámetros de consulta:", parsedUrl.query);