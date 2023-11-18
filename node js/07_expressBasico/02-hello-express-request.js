//analizando el objeto request de express

import express from 'express';

//1- inicializar express
const app = express();

//2- obtenemos una ruta con get (es parecido al modulo http)
//los paremetros son --> la ruta : "/" (home en este caso) y una callback q se va a ejecutar cuando el usuario solicite esta ruta
//en la callbakc al igual q con el modulo http tenemos q mandar el require y response
app.get("/",(req,res)=>{
    res.end("<h1>Hola desde Express JS</h1>");
});


//4_express nos permite tambien la manipulacion de parametros q pasamos por la url
//muy parecido a react router con useParams

//en express para capturar dinamicamente los parametros tenes q poner ":" + "nombre del parametro"
//esto se leeria como --> /user seria la ruta --> luego dinamicamente mandamos el id,name y age del usuario
app.get("/user/:id-:name-:age",(req,res)=>{
    res.set({"content-type" : "text/html; charset=utf-8"}) //con set establecemos la cabeceras (headers) --> como el writeHead de 06-modulo-http

    //recorda q .end lo usamos para indicar la finalizacion de respuesta de un proceso
    //podemos finalizarso simplemente con .end()
    //o podemos pasarle parametros --> la data (data con lo q sea q queramos finalizar la respuesta) y el encoding (utf-8 por defecto)
    res.end(
        //aca lo q vamos a hacer es concatenar esos valores q aparecen de forma dinamica en la url
        //para obtener la info de la url q creamos vamos a usar el metodo request
        //el metodo request tiene un metodo llamado params --> en este objeto params se almacenan todos los parametros q pasemos por la url
        `<h1>${req.params.name} Bienvenidos a Express.JS, tu id es: ${req.params.id} y tienes ${req.params.age} años</h1>`

        //DATO: cuando inicies el servidor recorda de poner la ruta --> http://localhost:3000/user/1-tino-12 --> estos parametros son dinamicos asi q podes ir cambiandolos y ver los cambios
    );
});

//5- manejando la varibales de la url --> ?q=tino
app.get("/search",(req,res)=>{
    // http://localhost:3000/search?id=19&name=Tino&age=12 --> loq viene depues de la "?" son las variables q en caso de tener mas de 1 se separan por "&"
    
    res.set({"content-type" : "text/html; charset=utf-8"});

    res.end(
       //la idea es lo mismo q con params pero en ves de ese metodo usamos "query"
       `<h1>${req.query.name} Bienvenidos a Express.JS, tu id es: ${req.query.id} y tienes ${req.query.age} años</h1>`
    );
});

//AHORA CUANDO USAR LA MANERA 4- O 5- Y DEPENDE DE Q HAGAS CON TU APLICACION, POR EJEM:
//CUANDO ESTAS MANEJANDO MUCHA INFO A TRAVES DE FORMULARIOS LA OPCION 5- ES BUENA OPCION 

//3- indicarle a la aplicacion por cual puerto esta escuchando
//los paremetros son el port y una callback q se va a ejeuctar cuando se este escuchando ese puerto
app.listen(3000,()=>{
    console.log("iniciando express desde http://localhost:3000");
});