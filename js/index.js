const API_URL = "https://tp3-back-xtfk.onrender.com/api/index";

async function cargarContenidoPrincipal() {
    const contenedor = document.getElementById('contenedor-dinamico');
    const loading = document.getElementById('loading');

    try {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
            throw new Error(`HTTP error! estado: ${respuesta.status}`);
        }

        const data = await respuesta.json();

        if (loading) loading.style.display = 'none';

        // 1. Construcción del bloque HERO
        let htmlDinamico = `
            <article class="hero-article">
                <h2 class="hero-titulo">${data.hero.titulo}</h2>
                <p class="hero-subtitulo">${data.hero.subtitulo}</p>
                <figure class="imagen-destacada">
                    <img src="./assets/img/ON_Gym_frente.png" alt="${data.hero.titulo}">
                    <figcaption>Nuestra sucursal principal</figcaption>
                </figure>
                <a href="./pages/pedido.html" class="boton hero-cta">${data.hero.cta}</a>
            </article>
            
            <hr class="separador">
        `;

        // 2. Construcción de CLASES DESTACADAS
        htmlDinamico += `
            <section class="seccion-dinamica">
                <h3 class="titulo-seccion">Clases Destacadas</h3>
                <div class="grid-dinamica">
        `;

        data.clasesDestacadas.forEach(clase => {
            htmlDinamico += `
                <div class="servicio servicio-destacado">
                    <img src="./assets/img/${clase.imagen}" alt="${clase.nombre}">
                    <h4>${clase.nombre}</h4>
                    <p class="descripcion"> ${clase.horario}</p>
                </div>
            `;
        });

        htmlDinamico += `
                </div>
            </section>
            
            <hr class="separador">
        `;

        // 3. Construcción de la GALERÍA
        htmlDinamico += `
            <section class="seccion-dinamica">
                <h3 class="titulo-seccion">Instalaciones</h3>
                <div class="grid-dinamica">
        `;

        data.galeria.forEach(item => {
            htmlDinamico += `
                <div class="tarjeta-galeria">
                    <img class="imagen-galeria" src="./assets/img/${item.url}" alt="${item.descripcion}">
                    <p class="titulo-galeria">${item.descripcion}</p>
                </div>
            `;
        });

        htmlDinamico += `
                </div>
            </section>
        `;

        // Inyectamos todo el HTML generado en el DOM
        contenedor.innerHTML = htmlDinamico;

    } catch (error) {
        console.error("Error al consumir la API de Render en index.js:", error);
        
        contenedor.innerHTML = `
            <article class="mensaje-error">
                <h3>Falla temporal en el servidor</h3>
                <p>No pudimos cargar la información en vivo desde Render. Por favor, verificá que el backend esté encendido o intentalo nuevamente más tarde.</p>
            </article>
        `;
    }
}

document.addEventListener('DOMContentLoaded', cargarContenidoPrincipal);