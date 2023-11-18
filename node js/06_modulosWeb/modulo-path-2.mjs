import { resolve } from "path";

//recorda q tenemos 2 tipos de rutas : relativas (./directorioDondeEmpezarAbuscar/archivo.js) y absolutas (ruta especifica donde se encuentra nuestra app : C:\Users\User\Desktop\Coder House\Cv_Proyecto\node js\06_modulosWeb)

const rutaRelativa = "../carpeta/archivo.txt";

//resolve nos sirve para dado una ruta relativa, construir una ruta absoluta
const rutaAbsoluta = resolve(rutaRelativa);

console.log("Ruta absoluta:", rutaAbsoluta); // C:\Users\User\Desktop\Coder House\Cv_Proyecto\node js\carpeta\archivo.txt --> fijate q en "rutaRelativa" le indicamos con el ../ q suba un nivel y busque en la carpeta pardre de 06_modulosWeb y una ves q estes parado en su carpeta padre construi la ruta