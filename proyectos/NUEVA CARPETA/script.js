Document.getElementById("btnMenu").addEventListener("click",
    function () {
        let elemento =document.getElementById("navbar");
        if (elemento.classList.contains("navbar")) {
            elemento.classList.remove("navbar");
            elemento.classList.add("no_navbar");
        } else {
            elemento.classList.remove("no_navbar");
            elemento.classList.add("navbar")
        }
    })



const Nombre = document.querySelector("#Nombre");
const Telefono = document.querySelector("#Telefono");
const correo = document.querySelector("#Email");
const mensaje = document.querySelector("#Mensaje");
const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", validarformulario);

function validarformulario(e) {
    e.preventDefault();

    if (Nombre.value === "" || Telefono.value === "" || correo.value === "" || mensaje.value === "") {
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    alert('Hemos recibido tus datos, pronto nos pondremos en contacto');
    window.location.reload();

    console.log(`El nombre es: ${Nombre.value}, su número de Teléfono es: ${Telefono.value}, su correo electrónico es: ${correo.value}, y el mensaje es: ${mensaje.value}`);
}

function mostrarError(mensaje) {
    const alerta = document.createElement("p");
    alerta.textContent = mensaje;
    alerta.style.background = "blue";
    alerta.style.color = "white";
    alerta.style.padding = "10px";
    alerta.style.marginTop = "10px";
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}






