import { join } from "path";
//el path es el camino desde el disco duro q es donde se encuentra la aplicacion en el servidor q estemos --> ejem:\Users\User\Desktop\Coder House\Cv_Proyecto\node js\06_modulosWeb

//el modulo path no va a permitir contruir estas rutas para q la aplicacion funcione

const directorio = "/ruta/principal";
const archivo = "archivo.txt";

//el metodo join de path lo q va a hacer es unir el contenido de "directorio" + "archivo" --> Ruta completa: \ruta\principal\archivo.txt
const rutaCompleta = join(directorio, archivo);

console.log("Ruta completa:", rutaCompleta);