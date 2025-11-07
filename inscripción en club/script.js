const formulario = document.getElementById("regRoboForm");

formulario.addEventListener("submit", function (event) {
    // Prevenir el envio del formulario si hay algun error
    event.preventDefault();

    // Variable que controla si el formulario es válido
    let valido = true;

    // Obtener los elemntos del formulario
    const nombre = formulario.elements["name"];
    const apellido = formulario.elements["surnames"];
    const edad = formulario.elements["age"];
    const email = formulario.elements["email"];
    const telefono = formulario.elements["phone"];
    const sexo = formulario.elements["sex"];
    const privacidad = formulario.elements["privacy"];

    // Limpiar mensajes de error previos si los hubiera
    limpiarErrores();

    // =========== validaciones ===========
    
    // Validación del nombre
    if (nombre.value.trim() === "") { // Eliminar espacios en blanco con trim
        mostrarError(nombre, "Por favor, ingresa tu nombre.");
        valido = false;
    }

    // Validación del apellidos
    if (apellido.value.trim() === "") { 
        mostrarError(apellido, "Por favor, ingresa tus apellidos.");
        valido = false;
    };

            // Validación del edad
    if (edad.value < 16 || edad.value > 120) { 
        mostrarError(edad, "La edad debe estar entre 16 y 120.");
        valido = false;
    };

        // Validación del email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]{2,4}$/; // Expresion regula para validar email
    if (!emailPattern.test(email.value)) { // comprovar que coincida el valor del patron
        mostrarError(email, "Por favor, ingresa un correo electrónico válido.");
        valido = false;
    };

            // Validación del telefono
        const telefonoPattern = /^\+34\s?[6789]\d{8}$/; 
    if (telefono.value && !telefonoPattern.test(telefono.value)) { 
        mostrarError(telefono, "Por favor, ingresa un número de teléfono válido (ej. +34 612345678).");
        valido = false;
    };

    // Validación de Sexo
    if (!sexo.value) {
        mostrarError(sexo, "Por favor, selecciona tu sexo.");
        valido = false;
    };

    // Validadión privacidad
    if (!privacidad.checked) {
        mostrarError("Debes aceptar nuestra política de privacidad para continuar.");
        valido = false;
    }

    // Si todo es valido y correcto, enviar el formulario
    if(valido) {
        formulario.submit();
    };    
});

// Función para mostrar errores
function mostrarError(input, mensaje) {
const errorDiv = document.createElement("div");
errorDiv.classList.add("error");
errorDiv.textContent = mensaje;
input.classList.add("input-error");
input.parentNode.appendChild(errorDiv);
};

// función para limpiar errores previos
function limpiarErrores() {
     // Selecciona todos los elementos con la clase "error"
    const errores = document.querySelectorAll(".error");

    // Elimina cada uno de los elementos con clase "error" del DOM
    errores.forEach(error => error.remove());
    // Selecciona todos los campos de entrada (inputs y textareas)
    const inputs = document.querySelectorAll("input, textarea");
    
    // Elimina la clase "input-error" de cada campo (para quitar estilos de error)
    inputs.forEach(input => input.classList.remove("input-error"));
}

