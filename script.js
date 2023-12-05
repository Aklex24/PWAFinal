// Imprime "holamundo" en la consola

console.log("holamundo")
// Intenta registrar un service worker si el navegador lo soporta

try {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("sw.js")
            .then(registration => {
                                // Registro exitoso del service worker

            }).catch(err => {
                                // Error durante el registro del service worker

            })
    }
} catch (error) {
        // Manejo de excepciones en caso de error durante el registro del service worker

}
// Configuración de la animación de revelado utilizando la biblioteca ScrollReveal

ScrollReveal().reveal('.reveal', {
    delay: 200,
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
})
// Función para calcular y mostrar el contador de días, horas, minutos y segundos hasta Navidad

function navidad() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25);

    const difference = christmas - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    // Actualiza el contenido del elemento con id 'countdown'

    document.getElementById('countdown').innerHTML =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
    // Llama recursivamente a la función cada segundo

    setTimeout(navidad, 1000);
}
// Inicia la función para el contador de Navidad

navidad();

// Estado de disponibilidad para las redes sociales

const discordOnline = true;
const twitterOnline = true;
const whatsappOnline = true;
// Función para actualizar el estado visual de disponibilidad

function updateStatus(elementId, isOnline) {
    const statusElement = document.getElementById(elementId);
    if (isOnline) {
        statusElement.classList.add('online');
    } else {
        statusElement.classList.remove('online');
    }
}
// Función que se ejecuta cuando la ventana ha cargado completamente

window.onload = function () {
        // Actualiza los estados de las redes sociales

    updateStatus('discord-status', discordOnline);
    updateStatus('twitter-status', twitterOnline);
    updateStatus('whatsapp-status', whatsappOnline);
};
// Redirecciona a la URL proporcionada

function redirectTo(url) {
    window.location.href = url;
}
// Abre una ventana de WhatsApp con un mensaje predefinido

function openWhatsApp() {
    const phoneNumber = '+5214581122218';
    const message = 'Hola, estoy visitando tu portafolio.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Abre una nueva ventana con la URL de WhatsApp

    window.open(whatsappUrl, '_blank');
}


