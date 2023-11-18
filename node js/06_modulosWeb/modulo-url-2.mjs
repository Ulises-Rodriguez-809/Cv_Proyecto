import { format } from "url";
//es como JSON
//tenemos parse para convertir una cadena a en objeto JS
//y el format seria como el stringify para convertir un objeto JS a un json

//format te permite construir una url dado un objeto

const urlObj = {
  protocol: "https",
  hostname: "www.ejemplo.com",
  pathname: "/ruta",
  query: { parametro1: "valor1", parametro2: "valor2" },
};

const urlString = format(urlObj);

console.log("URL completa:", urlString);