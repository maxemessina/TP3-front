const API_REGISTRO = "https://tp3-back-xtfk.onrender.com/api/registro";

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const nuevoUsuario = Object.fromEntries(formData.entries());

    if (nuevoUsuario.password !== nuevoUsuario.confirm_password) {
        return alert("Las contraseñas no coinciden");
    }

    try {
        const respuesta = await fetch(API_REGISTRO, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoUsuario)
        });

        if (respuesta.ok) {
            alert("Registro exitoso, ahora podés iniciar sesión");
            window.location.href = 'login.html';
        } else {
            alert("Error al registrar: " + (await respuesta.json()).msg);
        }
    } catch (error) {
        console.error("Error en registro:", error);
    }
});