const API_URL = 'https://tp3-back-xtfk.onrender.com';

async function cargarServicios() {
    const container = document.getElementById('servicios-container');
    
    try {
        const respuesta = await fetch(API_URL);
        
        const servicios = await respuesta.json();

        container.innerHTML = '';

        servicios.forEach(servicio => {
            const section = document.createElement('section');
            section.className = 'servicio';

            section.innerHTML = `
                <img src="../assets/img/${servicio.imagen}" alt="${servicio.nombre}">
                <h2 class="titulo-servicio">${servicio.nombre}</h2>
                <p class="descripcion">${servicio.descripcion}</p>
                <p class="precio">$${servicio.precio} /mes</p> 
            `;

            container.appendChild(section);
        });

    } catch (error) {
        console.error('Error al cargar servicios:', error);
        container.innerHTML = '<p class="error">Hubo un problema al cargar los servicios. Intentá más tarde.</p>';
    }
}

document.addEventListener('DOMContentLoaded', cargarServicios);