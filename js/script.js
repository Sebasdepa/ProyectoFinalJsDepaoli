
/* Base de Datos de Inmuebles */
function inmuebleNuevo(id, Edifico, Dirección, Precio) {
    this.id = id,
    this.Edificio = Edifico,
    this.Dirección = Dirección,
    this.Precio = Precio;
}

let inmuebleNuevo1 = new inmuebleNuevo(1, "Casa", "Santiago 100", 130000);
let inmuebleNuevo2 = new inmuebleNuevo(2, "Departamento", "Pasaje 123", 41000);
let inmuebleNuevo3 = new inmuebleNuevo(3, "Monoambiente", "Oroño 520", 39000);
let inmuebleNuevo4 = new inmuebleNuevo(4, "Monoambiente", "Santa Fe 3601", 52000);
let inmuebleNuevo5 = new inmuebleNuevo(5, "Casa", "Ov. Lagos 4230", 445000);
let inmuebleNuevo6 = new inmuebleNuevo(6, "Garage", "Av. 9 de Julio", 20000);
let inmuebleNuevo7 = new inmuebleNuevo(7, "Lote", "Cordoba 150", 35000);
let inmuebleNuevo8 = new inmuebleNuevo(8, "Departamento", "Pellegrini 3000", 78000);
let inmuebleNuevo9 = new inmuebleNuevo(9, "Departamento", "Urquiza 3200", 35000);
let inmuebleNuevo10 = new inmuebleNuevo(10, "Departamento", "San Martin 700", 74000);

let nuevos = [inmuebleNuevo1, inmuebleNuevo2, inmuebleNuevo3, inmuebleNuevo4, inmuebleNuevo5, inmuebleNuevo6, 
    inmuebleNuevo7, inmuebleNuevo8, inmuebleNuevo9, inmuebleNuevo10];

/* Funciones de Filtrado */

function filtrar() {
    let filtrados = nuevos.filter(el => el.Precio < 50000);

    let contenedor = document.getElementById("parrafo1");
    contenedor.innerHTML = '';

    filtrados.forEach(inmueble => {
        let parrafo = document.createElement('p');
        parrafo.innerText = `Inmueble: ${inmueble.Edificio}, 
                            Dirección: ${inmueble.Dirección}, 
                            Precio: $${inmueble.Precio}`;
        contenedor.appendChild(parrafo);
    });

    localStorage.setItem("ultimoBoton", JSON.stringify("filtrar"));
}

function filtrar2() {
    let filtrados2 = nuevos.filter(el => el.Precio > 50000 && el.Precio <= 100000);

    let contenedor2 = document.getElementById("parrafo1");
    contenedor2.innerHTML = '';

    filtrados2.forEach(inmueble => {
        let parrafo = document.createElement('p');
        parrafo.innerText = `Inmueble: ${inmueble.Edificio}, 
                            Dirección: ${inmueble.Dirección}, 
                            Precio: $${inmueble.Precio}`;
        contenedor2.appendChild(parrafo);
    });

    localStorage.setItem("ultimoBoton", JSON.stringify("filtrar2"));
}

function filtrar3() {
    let filtrados3 = nuevos.filter(el => el.Precio > 100000);

    let contenedor3 = document.getElementById("parrafo1");
    contenedor3.innerHTML = '';

    filtrados3.forEach(inmueble => {
        let parrafo = document.createElement('p');
        parrafo.innerText = `Inmueble: ${inmueble.Edificio}, 
                            Dirección: ${inmueble.Dirección}, 
                            Precio: $${inmueble.Precio}`;
        contenedor3.appendChild(parrafo);
    });

    localStorage.setItem("ultimoBoton", JSON.stringify("filtrar3"));
}

/* Botones para Filtrar */

let boton = document.getElementById("boton");
boton.addEventListener("click", filtrar);

let boton2 = document.getElementById("boton2");
boton2.addEventListener("click", filtrar2);

let boton3 = document.getElementById("boton3");
boton3.addEventListener("click", filtrar3);

/* Ultimo Boton Usado */
let ultimoBoton = JSON.parse(localStorage.getItem("ultimoBoton"));

if (ultimoBoton) {
    if (ultimoBoton === "filtrar") {
        filtrar();
    } else if (ultimoBoton === "filtrar2") {
        filtrar2();
    } else if (ultimoBoton === "filtrar3") {
        filtrar3();
    }
}