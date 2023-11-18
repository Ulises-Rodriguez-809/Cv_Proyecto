import {createServer} from 'http';
//el modulo http nos permite crear un servidor

//el metodo createServer como su nombre indica crea el servidor
//hay q pasarle un listener 
//a este listener hay q pasarle la peticion y la respuesta
const server = createServer((require,response)=>{
    //en inspeccionar en network te muestra la info (capaz tengas q recargar)
    // response.writeHead(200,{"Content-Type" : "text/plain"});
    response.writeHead(200,{"Content-Type" : "text/html; charset=utf-8 "});

    response.end("<h1>Hola mundo!</h1>");
});

//hay q asignarle un puerto a nuestro servidor
//cada aplicacion q nosotros levantamos necesita un puerto al cual escuchar
server.listen(3000,"127.0.0.1",()=>{
    console.log("servidor web en ejecucion en http://127.0.0.1:3000");
})

