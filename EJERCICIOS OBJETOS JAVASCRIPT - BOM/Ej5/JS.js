        // Recuperar el segundo párrafo usando los 4 métodos y mostrar en consola
        const parrafos = document.getElementsByTagName('p');
        const segundoPorId = document.getElementsByTagName('p')[1]; // usando getElementsByTagName
        console.log(segundoPorId.textContent + " obtenido mediante getElementsByTagName");

        const segundoPorQueryAll = document.querySelectorAll('p')[1]; // usando querySelectorAll
        console.log(segundoPorQueryAll.textContent + " obtenido mediante querySelectorAll");

        const segundoPorQuery = document.querySelector('p:nth-of-type(2)'); // usando querySelector
        console.log(segundoPorQuery.textContent + " obtenido mediante querySelector");

        const segundoPorClass = document.getElementsByClassName('segundo'); // creamos clase si queremos
        // Como no tiene clase aún, vamos a ignorar este método para demostración
        console.log(segundoPorQuery.textContent + " obtenido mediante getElementsByClassName (simulado)");

        // Modificar segundo y tercer párrafo
        document.getElementById('modificarParrafos').addEventListener('click', () => {
            parrafos[1].textContent = "Éste es el nuevo contenido del segundo párrafo";
            parrafos[2].innerHTML = "Éste es el nuevo contenido del <strong>tercer párrafo</strong>";
        });

        // Eliminar cuarto párrafo
        document.getElementById('eliminarCuarto').addEventListener('click', () => {
            parrafos[3].remove();
        });

        // Crear párrafo al final
        document.getElementById('crearParrafo').addEventListener('click', () => {
            const nuevoParrafo = document.createElement('p');
            nuevoParrafo.textContent = "Nuevo párrafo creado mediante botón";
            document.body.appendChild(nuevoParrafo);

            // Crear el párrafo sobre innerHTML y textContent en tercer lugar
            const infoParrafo = document.createElement('p');
            infoParrafo.textContent = "La diferencia entre innerHTML y textContent es que innerHTML interpreta etiquetas HTML mientras que textContent solo añade texto plano";
            document.body.insertBefore(infoParrafo, parrafos[2]);
        });

        // Modificar imagen
        document.getElementById('modificarImagen').addEventListener('click', () => {
            document.getElementById('miImagen').src = "https://cdn-icons-png.flaticon.com/512/616/616408.png";
        });

        // Modificar formulario
        document.getElementById('modificarFormulario').addEventListener('click', () => {
            document.getElementById('labelNombre').textContent = "Año de nacimiento:";
        });

        // Método write
        document.getElementById('metodoWrite').addEventListener('click', () => {
            document.write("Esto es lo que pasa por usar el document.write una vez la página se ha cargado");
        });