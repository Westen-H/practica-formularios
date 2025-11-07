const formulario = document.getElementById("regRoboForm");

formulario.addEventListener("submit", function (event) {
    // Prevenir el envio del formulario si hay algun error
    event.preventDefault();

    // Variable que controla si el formulario es válido
    let valido = true;

    // Obtener los campos del formulario
        const dia = formulario.elements["dia"];
        const hora = formulario.elements["hora"];
        const color = formulario.elements["color"];
        const precio = formulario.elements["precio"];
        const tipo = formulario.elements["tipo"];
        const accesorios = formulario.elements["accesorios"];
        const marca = formulario.elements["marca"];
        const precioAproximado = formulario.elements["precio-aproximado"];

    // Limpiar mensajes de error previos si los hubiera
    limpiarErrores();

    // =========== validaciones ===========
    
    // Validación del dia
    if (!dia.value) {
        mostrarError(dia, "Por favor, ingresa la fecha del robo.");
        valido = false;
    }

    // Validación del hora
    if (!hora.value) { 
        mostrarError(hora, "Por favor, ingresa la hora del robo.");
        valido = false;
    };

            // Validación del color
    if (!color.value) { 
        mostrarError(color, "Por favor, selecciona el color de la bicicleta.");
        valido = false;
    };

        // Validación del precio
    const precioValor = parseFloat(precio.value);
    if (isNaN(precioValor) || precioValor < 0 || precioValor > 10000) { 
        mostrarError(precio, "El precio debe estar entre 0 y 10.000 €.");
        valido = false;
    };

            // Validación del tipo
    if (!tipo.value) { 
        mostrarError(tipo, "Por favor, selecciona el tipo de bicicleta.");
        valido = false;
    };

    // Validación de marca
    if (!marca.value) {
        mostrarError(marca, "Por favor, ingresa la marca de la bicicleta.");
        valido = false;
    };

    // Validación de los accesorios (por lo menos uno debe ser seleccionado)
    if (accesorios.selectedOptions.length === 0) {
        mostrarError(accesorios, "Por favor, selecciona al menos un accesorio.");
        valido = false;
    }

    // Si todo es valido y correcto, enviar el formulario
    if(valido) {
        formulario.submit();
    } else {
        // Si no es válido, no hacer nada, el formulario no se envía.o.
        console.log("Formulario no válido");
    }   
});

// Función para mostrar errores
function mostrarError(input, mensaje) {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.textContent = mensaje;

    // Añadir el mensaje de error después del campo de entrada
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
    const inputs = document.querySelectorAll("input, select");
    
    // Elimina la clase "input-error" de cada campo (para quitar estilos de error)
    inputs.forEach(input => input.classList.remove("input-error"));
}