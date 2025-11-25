let nombreapellido = document.getElementById("nombreApellido");
let mail = document.getElementById("mail");
let mensaje = document.getElementById("mensaje");
let enviarbutton = document.getElementById("enviar");
let errornombre = document.getElementById("errornombre");
let errormail = document.getElementById("errormail");
let errormensaje = document.getElementById("errormensaje");
let mensajenvi = document.getElementById("mensajenvi");

enviarbutton.addEventListener('click', function(event){
    event.preventDefault;
    console.log("Hola Mundo");
    if(nombreapellido.value == ("")){
        errornombre.textContent = "No puedes dejar esta casilla vacia.";
    } if(mail.value == ("")){
        errormail.textContent = "No puedes dejar esta casilla vacia.";
    } if(mensaje.value == ("")){
       errormensaje.textContent = "No puedes dejar esta casilla vacia.";
    }else{
        mensajenvi.textContent = "¡Mensaje enviado!"
        //alert("Formulario enviado!")
    }
});
