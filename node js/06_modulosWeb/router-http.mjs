import {createServer} from 'http';

//req es la peticion q hace el usuario, dentro de req va la URL indicando a donde se esta queriendo acceder
const server = createServer((req,res)=>{
    //con un condicional compramos el contenido de lo q venga dentro de req.url con las diferenctes rutas q tengamos
    if (req.url === "/") { //si la ruta es el home
        res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"});
        res.end("<h1>Home</h1>"); //This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response
    }
    else if (req.url === "/contactos") {
        res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"});
        res.end("<h1>Contactos</h1>");
    }
    else if (req.url === "/acerca") {
        // res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"});
        // res.end("<h1>Acerca</h1>");
        res.write("<h1>hola</h1>");
        res.end();
    }
    else{
        res.writeHead(404,{"Content-Type" : "text/html; charset=utf-8"});
        res.end("<h1>Ruta no encontrada</h1>");
    }

});

server.listen(3000,"127.0.0.1",()=>{
    console.log("servidor web en ejecucion en http://127.0.0.1:3000");
})

