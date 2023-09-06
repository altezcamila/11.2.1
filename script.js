document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('registroForm');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        // Crear objeto de datos a enviar
        const datos = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };

        // Realizar solicitud POST
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar la respuesta del servidor en la consola
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Hubo un error en la solicitud:', error);
        });
    });
});

