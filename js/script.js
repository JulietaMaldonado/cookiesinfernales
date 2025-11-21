let nombreapellido = document.getElementById("nombreApellido");
let mail = document.getElementById("mail");
let mensaje = document.getElementById("mensaje");
let enviarbutton = document.getElementById("enviar");

enviarbutton.addEventListener('click', function(event){
    event.preventDefault;
    console.log("Hola Mundo");
    if(nombreapellido.value == ("") || mail.value == ("") || mensaje.value == ("")){
        alert("No puedes dejar estos campos vacios.");
    }else{
        alert("Formulario enviado!")
    }
});
