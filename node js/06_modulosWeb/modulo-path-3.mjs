import { basename, dirname, extname } from "path";

//de la misma manera q el modulo "url" te permite obtener las diferentes partes de una url, path nos permite hacer lo mismo pero con las rutas
//en este caso es basado en esta ruta de ejemplo
const ruta = "/ruta/principal/archivo.txt";

const nombreArchivo = basename(ruta);
const nombreDirectorio = dirname(ruta);
const extension = extname(ruta);

console.log("Nombre del archivo:", nombreArchivo);
console.log("Nombre del directorio:", nombreDirectorio);
console.log("Extensión del archivo:", extension);