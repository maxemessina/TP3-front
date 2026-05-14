async function cargarEquipo() {

    try {

        const response = await fetch('https://tp3-back-xtfk.onrender.com/api/equipo');

        const equipo = await response.json();

        const contenedor = document.getElementById('contenedorEquipo');

        equipo.forEach(persona => {

            contenedor.innerHTML += `
            
                <div class="Presentacion">

                    <h2>${persona.nombre}</h2>

                    <img 
                        class="Imagen_equipo"
                        src="${persona.imagen}"
                        alt="${persona.nombre}"
                    >

                    <h3>${persona.cargo}</h3>

                    <p>${persona.descripcion}</p>

                </div>
            `;
        });

    } catch (error) {

        console.log('Error:', error);

    }
}

cargarEquipo();