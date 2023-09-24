function calcularDiferenciaEdad() {
    // Obtener la edad del usuario
    var edadUsuario = parseInt(document.getElementById("edadUsuario").value);

    // Fecha de nacimiento del dueño de la página
    const dateBorn = new Date("2002-04-05");
    const dateToday = new Date();
    const milisegundosPorAnio = 1000 * 60 * 60 * 24 * 365.25;
    var edadDueñoPagina = Math.floor((dateToday - dateBorn)/milisegundosPorAnio);

    // Calcular la diferencia de edad
    var diferenciaEdad = Math.abs(edadUsuario - edadDueñoPagina);

    // Mostrar el resultado
    var resultado = "La diferencia de edad entre tú y el dueño de la página es de " + diferenciaEdad + " años.";
    if (edadUsuario >= 0){
        document.getElementById("resultado").textContent = resultado;
    }
    else{
        document.getElementById("resultado").textContent = "Edad imposible."
    }
    
}