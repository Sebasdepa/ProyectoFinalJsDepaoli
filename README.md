
Explicación del Proyecto: 

La función de la pagina web es realizar una busqueda de inmubles, previamente cargadas en 
una base de datos (objetos de arrays), por medio de tres filtros. Estos tres filtros
despliegan una lista de inmuebles, según el precio seleccionado, donde figuran algunas
caracteristicas de los inmubles (foto, dirección, tipo de inmueble, y precio) y un 
boton de contactar por cada uno de ellos, que nos dirigira a un formulario en donde
el usuario debera ingresar los datos para luego ser contactado por la inmobiliaria x.
Este formulario tiene como caracteristicas que no se puede enviar sin completar 
todos los datos solicitados, o si el email no contiene un @, mostrar un error en
estos casos. En cambio, si el formulario es cargado correctamente dara un mensaje 
informando que el mensaje se ha enviado. (los datos del formulario se encuentra
completados de forma correcta, y según los requerimientos del proyecto final).
Al realizar una búsqueda y cerrar la página, la lista desplegada por ultima vez
queda guardada en el LocalStorage, por lo cual, al volver a abrir la página
nos encontraremos con esa ultima lista desplegada.

Se utiliza try, catch and finally en el formulario desplegable de contacto.
Se utiliza Bootstraps para el Nav (de un solo boton).
En el footer se agrega enlace de contacto por email mediante DOM