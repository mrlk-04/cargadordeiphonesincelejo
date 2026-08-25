// Script interactivo para envío directo a WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    
    // Configuración del número de destino en Sincelejo (Reemplaza con tu número de WhatsApp real)
    const numeroWhatsApp = "573238863120"; // Agrega el prefijo 57 + tu número sin espacios

    const orderForm = document.getElementById('orderForm');

    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Capturar datos del formulario
            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const barrio = document.getElementById('barrio').value.trim();
            const direccion = document.getElementById('direccion').value.trim();
            const cantidad = document.getElementById('cantidad').value;

            // Construir el mensaje formateado para WhatsApp
            const mensaje = `¡Hola! 💎 Deseo realizar un pedido en *Cargador de iPhone Sincelejo*:%0A%0A` +
                `📌 *Nombre:* ${encodeURIComponent(nombre)}%0A` +
                `📞 *Teléfono:* ${encodeURIComponent(telefono)}%0A` +
                `📍 *Barrio / Ciudad:* ${encodeURIComponent(barrio)}%0A` +
                `🏠 *Dirección:* ${encodeURIComponent(direccion)}%0A` +
                `⚡ *Producto / Cantidad:* ${encodeURIComponent(cantidad)}%0A` +
                `💳 *Método de Pago:* Contraentrega en Sincelejo%0A%0A` +
                `Quedo atento a la confirmación de la entrega. ¡Gracias!`;

            // Enlace de WhatsApp API
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${573238863120}&text=${mensaje}`;

            // Abrir WhatsApp en nueva pestaña
            window.open(urlWhatsApp, '_blank');
        });
    }

    // Scroll suave para links navegables
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});