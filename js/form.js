// Seleccionar el formulario y el mensaje
const form = document.querySelector("form");
const submit = document.getElementById("submit");
const message = document.querySelector("#success-message");

// Agregar un escuchador al evento submit del formulario
submit.addEventListener("click", function(event){
    event.preventDefault();
    message.classList.remove("hidden");
    setTimeout(function(){
        message.classList.add("hidden");
    }, 3000);
    
});
