/**
 *  @module 1-Inicio Express
 *  @description Iniciando en express
 *  @todo Abrimos la consola, ejecutamos: 
 *  <pre>nodemon -L notas/3-express/app.js</pre>
 */
/* Esto lo uso para tener la dir del root */
const root = require('../../root.js')

/**
 * @description Llamo a express y lo asigno
 * aca pongo un link {@link otro}
 * @param express
 * @default
 */
const express = require('express');

/** 
 * @constant {} app 
 * @description por convension se usa este nombre
 * {@link ~express Utilizo uno de sus metodos}
*/
const app = express();

/** El puerto 3000 por defecto */
const port = 3000;


/* el __dirname representa toda la ruta hasta la raiz del repo actual por esto es que despues le sumamos el public */
// app.use(express.static(__dirname + '/public/404.html')); //(tuve que cambiar la ruta por el orden del directorio)
app.use(express.static(root.basedir + '/public'));
/* al colocar el .use estamos creando un middelware 
que genera una respuesta antes de hacerle peticiones al servidor*/

/** estas paginas dinamicas no se mostrarian si tuviera 
respuestas automaticas con un middelware por lo que 
es conveniente tener cuidado.
La res por status 404 deberia ir abajo para que se pueda leer esta parte */
app.get('/servicios' , (req , res) => {
    res.send('Esto seria una pagina de servicios dinamica');
});

app.listen(port , () => {
    console.log(`server escucha: http://localhost:${port}/`);
});

/* aca estamos usando una respuesta automatica con el html 404
cuando el status de la respuesta del servidor es 404 */
app.use((req , res , next) => {
    res.status(404).sendFile(root.basedir + '/public/404.html');
    //res.status(404).sendFile(__dirname + '/public/404.html');
});