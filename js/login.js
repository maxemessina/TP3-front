const API_LOGIN = "https://tp3-back-xtfk.onrender.com/api/login";

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const respuesta = await fetch(API_LOGIN, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await respuesta.json();

        if (respuesta.ok) {
            localStorage.setItem('usuarioId', data.usuario.id);
            alert("¡Bienvenido de nuevo a ON Gym!");
            window.location.href = 'perfil.html';
        } else {
            alert(data.msg || "Credenciales incorrectas, o usuario no registrado");
        }
    } catch (error) {
        console.error("Error en el login:", error);
        alert("Falla de conexión con el servidor");
    }
});