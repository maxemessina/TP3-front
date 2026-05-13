const userId = localStorage.getItem('usuarioId');
const API_PERFIL = `https://tp3-back-xtfk.onrender.com/api/perfil/${userId}`;

async function cargarDatosPerfil() {
    try {
        const respuesta = await fetch(API_PERFIL);
        if (!respuesta.ok) throw new Error("Error al obtener datos");
        
        const data = await respuesta.json();

        document.getElementById('user-name').innerText = data.nombre;
        document.getElementById('user-email').innerText = data.email;
        document.getElementById('user-date').innerText = data.miembroDesde;
        document.getElementById('user-goal').innerText = data.objetivo;

        const container = document.getElementById('pedidos-container');
        if (container) {
            container.innerHTML = "";
            if (data.pedidos && Array.isArray(data.pedidos) && data.pedidos.length > 0) {
                // si hay pedidos los muestra
                data.pedidos.forEach(pedido => {
                    container.innerHTML += `
                        <div class="servicio">
                            <img src="../assets/img/${pedido.imagen}" alt="${pedido.titulo}">
                            <h3 class="titulo-servicio">${pedido.titulo}</h3>
                            <p class="descripcion">Estado: <span style="color: #00ff88">${pedido.estado}</span></p>
                            <p class="precio">$${pedido.precio}</p>
                        </div>
                    `;
                });
            } else {
                // si no hay pedidos
                container.innerHTML = `
                    <div style="text-align: center; width: 100%; padding: 20px; color: #888;">
                        <p>Todavía no tenés planes o servicios activos registrados en el sistema.</p>
                    </div>
                `;
            }
        }

    } catch (error) {
        console.error("Error cargando el perfil del usuario:", error);
    }
}

function cerrarSesion() {
    localStorage.removeItem('usuarioId');
    window.location.href = '../index.html';
}

document.addEventListener('DOMContentLoaded', cargarDatosPerfil);