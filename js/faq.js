const contenedor = document.getElementById('contenedor-faq');

fetch('https://tp3-back-xtfk.onrender.com/api/faq')

    .then(response => response.json())

    .then(data => {

        data.forEach(faq => {

            contenedor.innerHTML += `
            
                <div class="faq-item">
                    <h3>${faq.pregunta}</h3>
                    <p>${faq.respuesta}</p>
                </div>

            `;
        });

    })

    .catch(error => {
        console.log('Error:', error);
    });