
//Formulario

function enviarCorreo(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener valores de los campos del formulario
    var nombre = document.getElementById('user').value;
    var telefono = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('message').value;

    // Validar datos
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, complete todos los campos obligatorios del formulario.');
        return;
    }

    // Construir el cuerpo del correo electrónico
    var cuerpoCorreo = `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo electrónico: ${email}\nMensaje: ${mensaje}`;

    // Enviar el correo electrónico
    window.open(
        `mailto:melanie20101@live.com.ar?subject=Contacto desde formulario&body=${encodeURIComponent(cuerpoCorreo)}`
    );
}

