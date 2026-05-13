document.getElementById("formPedido").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        servicio: document.getElementById("servicio").value,
        tiempo: document.querySelector('input[name="tiempo"]:checked')?.value,
        fecha: document.getElementById("fecha").value,
        comentarios: document.getElementById("comentarios").value
    };

    try {
        const res = await fetch("https://tp3-back-xtfk.onrender.com/api/pedido", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },
            body: JSON.stringify(data)
        });

        const resultado = await res.json();
        console.log("RESPUESTA BACKEND:", resultado);

        if (res.ok) {
            alert("Pedido enviado correctamente");
        } else {
          alert("Error al enviar el pedido");
        }

    } catch (error) {
        console.error(error);
        alert("Error de conexión con el servidor");
    }
});
