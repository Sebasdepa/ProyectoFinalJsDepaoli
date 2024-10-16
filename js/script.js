/* Base de Datos de Inmuebles */

function inmuebleNuevo(id, Edificio, Dirección, Precio, Imagen) {
    this.id = id;
    this.Edificio = Edificio;
    this.Dirección = Dirección;
    this.Precio = Precio;
    this.Imagen = Imagen;
}

let inmuebleNuevo1 = new inmuebleNuevo(1, "Casa", "Santiago 100", 130000, "./assets/img/casa.avif");
let inmuebleNuevo2 = new inmuebleNuevo(2, "Departamento", "Pasaje 123", 41000, "./assets/img/depto1.jpg");
let inmuebleNuevo3 = new inmuebleNuevo(3, "Monoambiente", "Oroño 520", 39000, "./assets/img/depto2.jpg");
let inmuebleNuevo4 = new inmuebleNuevo(4, "Monoambiente", "Santa Fe 3601", 52000, "./assets/img/depto3.avif");
let inmuebleNuevo5 = new inmuebleNuevo(5, "Casa", "Ov. Lagos 4230", 445000, "./assets/img/casa1.avif");
let inmuebleNuevo6 = new inmuebleNuevo(6, "Garage", "Av. 9 de Julio", 20000, "./assets/img/garage1.avif");
let inmuebleNuevo7 = new inmuebleNuevo(7, "Lote", "Cordoba 150", 35000, "./assets/img/lote1.jpg");
let inmuebleNuevo8 = new inmuebleNuevo(8, "Casa", "Pellegrini 3000", 78000, "./assets/img/casa3.jpg");
let inmuebleNuevo9 = new inmuebleNuevo(9, "Departamento", "Urquiza 3200", 35000, "../assets/img/depto4.jpg");
let inmuebleNuevo10 = new inmuebleNuevo(10, "Casa", "San Martin 700", 74000, "./assets/img/casa2.jpg");

let nuevos = [inmuebleNuevo1, inmuebleNuevo2, inmuebleNuevo3, inmuebleNuevo4, inmuebleNuevo5, inmuebleNuevo6, 
    inmuebleNuevo7, inmuebleNuevo8, inmuebleNuevo9, inmuebleNuevo10];

/* Funciones de Filtrado */

function filtrar() {
    let filtrados = nuevos.filter(el => el.Precio < 50000);

    let contenedor = document.getElementById("parrafo1");
    contenedor.innerHTML = '';

    filtrados.forEach(inmueble => {
        let img = document.createElement('img');
        img.src = inmueble.Imagen;
        img.alt = inmueble.Edificio;
        img.style.width = '300px';

        let parrafo = document.createElement('p');
        parrafo.innerText = `Inmueble: ${inmueble.Edificio}, 
                            Dirección: ${inmueble.Dirección}, 
                            Precio: $${inmueble.Precio}`;
        
        let botonContactar = document.createElement('button');
        botonContactar.innerText = 'Contactar';
        botonContactar.addEventListener('click', () => mostrarFormularioContacto(inmueble));

        contenedor.appendChild(img);
        contenedor.appendChild(parrafo);
        contenedor.appendChild(botonContactar);
    });

    localStorage.setItem("ultimoBoton", JSON.stringify("filtrar"));
}

function filtrar2() {
    let filtrados2 = nuevos.filter(el => el.Precio > 50000 && el.Precio <= 100000);

    let contenedor2 = document.getElementById("parrafo1");
    contenedor2.innerHTML = '';

    filtrados2.forEach(inmueble => {
        let img = document.createElement('img');
        img.src = inmueble.Imagen;
        img.alt = inmueble.Edificio;
        img.style.width = '300px';

        let parrafo = document.createElement('p');
        parrafo.innerText = `Inmueble: ${inmueble.Edificio}, 
                            Dirección: ${inmueble.Dirección}, 
                            Precio: $${inmueble.Precio}`;

        let botonContactar = document.createElement('button');
        botonContactar.innerText = 'Contactar';
        botonContactar.addEventListener('click', () => mostrarFormularioContacto(inmueble));

        contenedor2.appendChild(img);
        contenedor2.appendChild(parrafo);
        contenedor2.appendChild(botonContactar);
    });

    localStorage.setItem("ultimoBoton", JSON.stringify("filtrar2"));
}

function filtrar3() {
    let filtrados3 = nuevos.filter(el => el.Precio > 100000);

    let contenedor3 = document.getElementById("parrafo1");
    contenedor3.innerHTML = '';

    filtrados3.forEach(inmueble => {
        let img = document.createElement('img');
        img.src = inmueble.Imagen;
        img.alt = inmueble.Edificio;
        img.style.width = '300px';

        let parrafo = document.createElement('p');
        parrafo.innerText = `Inmueble: ${inmueble.Edificio}, 
                            Dirección: ${inmueble.Dirección}, 
                            Precio: $${inmueble.Precio}`;

        let botonContactar = document.createElement('button');
        botonContactar.innerText = 'Contactar';
        botonContactar.addEventListener('click', () => mostrarFormularioContacto(inmueble));

        contenedor3.appendChild(img);
        contenedor3.appendChild(parrafo);
        contenedor3.appendChild(botonContactar);
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

/* Ultimo Boton Usado -LocalStorage- */
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

/* Formulario de Contacto */
function mostrarFormularioContacto(inmueble) {
    try {
        Swal.fire({
            title: `Contactar por ${inmueble.Edificio} en ${inmueble.Dirección}`,
            html:
                `<label for="swal-input1">Nombre:</label>
                 <input id="swal-input1" class="swal2-input" placeholder="Ingrese su nombre" value="Sebastián Depaoli" required>
                 <label for="swal-input2">Teléfono:</label>
                 <input id="swal-input2" class="swal2-input" placeholder="Ingrese su teléfono" value="3416177300" required>
                 <label for="swal-input3">Email:</label>
                 <input id="swal-input3" type="email" class="swal2-input" placeholder="Ingrese su email" value="sebastiandepaoli@gmail.com" required>
                 <label for="swal-input4">Mensaje:</label>
                 <textarea id="swal-input4" class="swal2-textarea" placeholder="Ingrese su mensaje" required>Hola, quiero más información sobre este inmueble!</textarea>`,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            preConfirm: () => {
                const nombre = document.getElementById('swal-input1').value;
                const telefono = document.getElementById('swal-input2').value;
                const email = document.getElementById('swal-input3').value;
                const mensaje = document.getElementById('swal-input4').value;

                if (!nombre || !telefono || !email || !mensaje) {
                    Swal.showValidationMessage('Todos los campos son requeridos');
                } else if (!email.includes('@')) {
                    Swal.showValidationMessage('Por favor ingrese un email válido');
                } else {
                    return { nombre, telefono, email, mensaje };
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const { nombre, telefono, email, mensaje } = result.value;
                Swal.fire({
                    title: 'Su mensaje ha sido enviado',
                    text: `Gracias por contactarse con nosotros, ${nombre}!`,
                    icon: 'success'
                });
            }
        });
    } catch (error) {
        console.error("Error al mostrar el formulario de contacto: ", error);
        Swal.fire({
            title: 'Error',
            text: 'Ha ocurrido un error al intentar enviar su mensaje. Por favor, inténtelo de nuevo más tarde.',
            icon: 'error'
        });
    } finally {
        console.log("Intento de mostrar el formulario de contacto finalizado.");
    }
}


/* Enlace de Contacto en el Footer */
let enlaceContacto = document.createElement('a');
enlaceContacto.href = 'mailto:sebastiandepaoli@gmail.com';
enlaceContacto.innerText = 'Contáctenos por Email';

let contenedorFooter = document.getElementById('contacto');
contenedorFooter.appendChild(enlaceContacto);
