
/* Base de Datos de Inmuebles */

function inmuebleNuevo(id, Edifico, Dirección, Precio){
    this.id = id,
    this.Edificio = Edifico,
    this.Dirección = Dirección,
    this.Precio = Precio 
}

let inmuebleNuevo1 = new inmuebleNuevo(1, "Casa", "Santiago 100", 130000)
let inmuebleNuevo2 = new inmuebleNuevo(2, "Departamento", "Pasaje 123", 41000)
let inmuebleNuevo3 = new inmuebleNuevo(3, "Monoambiente", "Oroño 520", 39000)
let inmuebleNuevo4 = new inmuebleNuevo(4, "Monoambiente", "Santa Fe 3601", 52000)
let inmuebleNuevo5 = new inmuebleNuevo(5, "Casa", "Ov. Lagos 4230", 445000)
let inmuebleNuevo6 = new inmuebleNuevo(6, "Garage", "Av. 9 de Julio", 20000)
let inmuebleNuevo7 = new inmuebleNuevo(7, "Lote", "Cordoba 150", 35000)
let inmuebleNuevo8 = new inmuebleNuevo(8, "Departamento", "Pellegrini 3000", 78000)
let inmuebleNuevo9 = new inmuebleNuevo(9, "Departamento", "Urquiza 3200", 35000)

let nuevos = [inmuebleNuevo1, inmuebleNuevo2, inmuebleNuevo3, inmuebleNuevo4, inmuebleNuevo5, inmuebleNuevo6,
    inmuebleNuevo7, inmuebleNuevo8, inmuebleNuevo9]

/* Guardar la Base de Datos en LocalStorage */

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};


for(const productonuevo of nuevos){
    guardarLocal(productonuevo.id, JSON.stringify(productonuevo));
}

/* Filtrar Inmuebles con valor mayor a us$50.000*/

function filtrar(){
        nuevos.filter(el=>el.Precio > 50000);

    for(const parrafo of filtrar){
        let contenedor = document.getElementById("parrafo1")
        contenedor.innerHTML = `<p> Parrafo: ${parrafo}</p>`
    
        document.body.append(contenedor)}
}

let boton = document.getElementById("boton");
boton.addEventListener("click", filtrar)

/* Filtrar Inmuebles con valor menor a us$50.000*/

function filtrar2(){
    let filtro2 = nuevos.filter(el=>el.Precio < 50000);
    console.log(filtro2)
}

let boton2 = document.getElementById("boton2");
boton2.addEventListener("click", filtrar2)





































/* Preentrega 1

let huesped = [ "Daniel", "Carlos", "Maria", "Samuel"]

function hospedados(nombre){
    if(nombre != ""){
        huesped.push(nombre);
        alert('Bienvenido, su reserva a sido confirmada a nombre de ' + nombre);
    }else alert('Ingrese un nombre');
}

hospedados(prompt('Ingrese su nombre para reservar una habitación'));


for(let huespedes=0; huespedes<huesped.length; huespedes){
    console.log(huesped);
    break
}



let numerohabitación = 0

function nhabitacion(nh){
    numerohabitación = nh
    alert('Su número de habitación reservada es N° ' + numerohabitación);
}

nhabitacion(prompt('Ingrese el número de Habitación que desea reservar'));



let valor = 0

const valorhabitacion = function(cantidaddias){
    let valor = 25000;
    console.log('El precio de la reserva es de ' + cantidaddias*valor);
}

valorhabitacion(prompt('ingrese la cantidad de dias a reservar'));
*/




/*
const preciohabitacion = $2500

function sumar(numeroA, numeroB){
    preciohabitacion = numeroA + numeroB;
}

function mostrar(mensaje){
    console.log(mensaje);
}

sumar(6, 3);
mostrar(preciohabitacion);
*/



/* INTENTO DE OBJETO LITERAL + ARRAYS + PUSH---- SEGUIR INTENTANDO


let huesped = [ 
    {nombre: "Daniel", habitacion: 20},
    {nombre: "Carlos", habitacion: 31},
    {nombre: "Franco", habitacion: 43},
    {nombre: "Maria", habitacion: 22} 
    ]


function hospedados(nombre){
    if(nombre != ""){
        huesped.push(nombre);
        alert('Bienvenido ' + nombre);
    }else alert('Ingrese un nombre');
}

hospedados((prompt('Ingrese su nombre para reservar una habitación')));

function habitaciones(habitacion){
    if(habitacion != ""){
        huesped.push(habitacion);
        alert('Su numero de habitación reservada es ' + habitacion);
    }else alert('Ingrese numero de habitación');
}

habitaciones((prompt('Ingrese numero de habitacion que desea reservar')));

for(let huespedes=0; huespedes<huesped.length; huespedes){
    console.log(huesped)
    break
}
*/


/* -------------------------------------------------------------- */

/* EJEMPLOS DE CODIGO JS */



/* VARIABLES

let  platoElegido = prompt('Que desea comer?');
alert('Es un gran dia para comer ' + platoElegido);


let platoPrincipal = 1000;
let bebida = 400;
let totalPedido = platoPrincipal + bebida;

alert ('El precio total es de ' + totalPedido + ' pesos')


let nombre = prompt('ingreso su nombre');
let apellido = prompt('ingrese su apellido');
let nombreCompleto = nombre + ' ' + apellido;
console.log('bienvenido '+ nombreCompleto); 
*/



/* CICLO FOR

for(let i=0;i<10;i++){
    console.log("itinerario N° " + i);
}


SENTENCIA BREAK

for(let i=1;i<=10;i++){
    if(i==5){
        console.warn("iteracion interrumpida por el ciclo", i, "es saltada por la clausula continue.");
        break;
    }

    alert= (i);
}


SENTENCIA CONTINUE

for(let i=1;i<=10;i++){
    if(i==5){
        console.warn("iteracion numero", i, "por la clausula Continue.");
        continue;
    }

    alert= (i);
}
*/



/* CICLO WHILE: 
Evalua el codigo y luego lo ejecuta, si algo esta mal,
no llega a ejecutarlo.

let i=1;
while(i<8){
    console.log('iteración N° ' + i);
    i++;
}
*/



/* CICLO DO WHILE:
Ejecuta el Codigo y luego le evalua
en este caso el "perseInt solo permite escribir números, cuando ponermos
una letra el ciclo se corta, si no antes ejecutar esa primer letra

let numero=0;

do{
    numero = prompt("ingresar numero");
    console.log(numero);
}while(parseInt(numero))
*/



/* SWITCH 

let tiempo = prompt("¿Cual es el tiempo en tu ciudad? lluvioso, soleado, ventoso");

switch(tiempo){
    case'lluvioso':
        alert('Llevar Paraguas');
        break;
    
    case 'soleado':
        alert('Ponerse Bronceador');
        break;

    case 'ventoso':
        alert('Usar Rompeviento');
        break;
    
    default:
        alert('Introdujiste una Opción No Valida');
        break;

}
*/



/* CONDICIONALES IF y ELSE

let entrada = prompt('Ingresar un nombre');
let nombre = 'bart';

if(entrada==nombre){
    alert('Fui yo');
}else{
    alert('Yo no fui');
}
*/


/* CONDICIONALES ELSE IF

let numeroPersonaje = prompt('Ingresa un Número');

if(numeroPersonaje == '1'){
    alert('Homero');
}else if(numeroPersonaje == '2'){
    alert('Marge');
}else if(numeroPersonaje == '3'){
    alert('Bart');
}else if(numeroPersonaje == '4'){
    alert('Lisa');
}else{
    alert('ERROR')
}
*/



/* parseInt: Permite escribir solo Números 

let cantidad = parseInt(prompt('Ingrese Cantidad de Repeticiones'));

let texto = prompt('Ingresar Texto a Repetir');

for( let i = 0; i < cantidad; i++){
    console.log(texto);
}

console.log('Fin del Comunicado Repetitivo');
*/




/* FUNCION BASICA
Compuesta de la instruccion de la tarea y de la ejecución o "invocadura"

function saludar(){
    console.log('Hola, Como estas?');
}

saludar();
 */



/* FUNCION COMPLEJA
Cada funcion tiene que tener una(1) sola tarea.
En esta ejemplo hay 2 funciones, una suma y la otra muestra.

let resultado = 0

function sumar(numeroA, numeroB){
    resultado = numeroA + numeroB;
}

function mostrar(mensaje){
    console.log(mensaje);
}

sumar(6, 3);
mostrar(resultado);
*/



/* FUNCIONES con Return
Return Devuelve un dato

function operacion(numA, numB){
    return numA*numB
}

console.log(operacion(75, 3));
*/



/* SCOPE GLOBALES y LOCALES
GLOBALES: Pueden ser utilizadas en todo el codigo.
Locales Función: Pueden ser utilizadas dentro de la función.
Locales Bloque: Pueden ser utilizadas solo dentro del bloque, al menos que sea
una variable del tipo "var".


let auto = 'descapotable'

function pasear(){
    auto = 'mercedes';
    if(true){
        var otroAuto = 'tesla';
    }
    console.log('paseando en '+ auto);
    console.log('pasenado en '+ otroAuto);
    
}
pasear()
*/



/* FUNCIONES ANONIMOS

const multiplicar = function(numero){
    console.log(numero*2);
}

multiplicar(2) 
*/



/* FUNCIONES ARROW o FLECHA

------------------------
Simplificacion 1

const multiplicar = (numero)=>{
    console.log(numero*2);
}

multiplicar(5)

------------------------
Simplificacion 2 - Solo cuando exista un(1) solo Parametro

const multiplicar = numero => {
    console.log(numero*2);
}

multiplicar(11)

------------------------
Simplificacion 3 - Solo cuando exista un(1) solo Parametro


const multiplicar = numero=> numero*2;

*/



/* ARRAYS

const productos = ['harina', 'manteca', 'azucar']
console.log(productos[0])
console.table(productos)
*/


/* METODOS y PROPIEDADES DE ARRAYS: push / unshift / shift / pop / join / indexof / includes /
sort / reverse /

const frutas = ['manzana', 'naranja', 'banana']
frutas.push('pera')

console.log(frutas)
*/


/* OBJETOS LITERALES: permiten guardar datos y valores en un formate textual.

const perro = {
    nombre: 'firulais',
    edad: 5,
    castrado: true
}
*/



/* FUNCION "FOR OF": Recorre la lista buscando los elementos.

const productos = [
    { id: 1, nombre: 'arroz' },
    { id: 2, nombre: 'fideos' },
    { id: 3, nombre: 'pan' },
]

for (const producto of productos){
    console.log(producto);
}
*/



/*  ARRAYS de OBJETOS

const productos = []

const agregarProducto = () => {
    const id = prompt('ingresar id del producto');
    const nombre = prompt('ingresar nombre del producto');

    const producto = {id, nombre}
    productos.push(producto)
}

agregarProducto()
console.log(productos)
*/


