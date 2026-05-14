async function cargarContacto() {
    try {
        const respuesta = await fetch('https://tp3-back-xtfk.onrender.com/api/contacto');
        const datos = await respuesta.json();
        const pagina = datos.pagina;
        const titulo = document.querySelector('main h2');
        titulo.textContent = pagina.titulo;

        const contactos = document.querySelectorAll('.Contacto');
        contactos[0].innerHTML = `
            <img class="imagenes_contacto"
                 src="../assets/img/Footer_phone.png"
                 alt="Telefono de Contacto">
            ${pagina.footer.contacto.telefono}
        `;
        contactos[1].innerHTML = `
            <img class="imagenes_contacto"
                 src="../assets/img/Footer_mail.png"
                 alt="Mail de contacto">
            ${pagina.footer.contacto.email}
        `;
        contactos[2].innerHTML = `
            <img class="imagenes_contacto"
                 src="../assets/img/Footer_instagram.png"
                 alt="Instagram de contacto">
            ${pagina.footer.contacto.instagram}
        `;
        const copyright = document.getElementById('Copyright');

        copyright.innerHTML = `
            <p>
                ${pagina.footer.copyright}
                | ${pagina.footer.direccion}
                | <a href="../pages/contacto.html">Contacto</a>
            </p>
        `;

    } catch (error) {
        console.error('Error al cargar los datos de contacto:', error);
    }
}
document.addEventListener('DOMContentLoaded', cargarContacto);