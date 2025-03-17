// Crear array para almacenar los nombres de amigos
let amigos = [];
// Obtener elementos del DOM
const inputNombre = document.getElementById('nombreAmigo');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaAmigos = document.getElementById('listaAmigos');

// Evento click para validar entrada y agregar nombre
btnAdicionar.addEventListener('click', agregarAmigo);

// Función que agrega amigos al array
function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    // Validación de entrada vacía
    if (nombre === '') {
        alert('Por favor ingresa un nombre válido.');
        return;
    }

    // Agrega nombre al array
    amigos.push(nombre);

    // Limpia el campo de entrada después de agregar
    inputNombre.value = '';

    // Actualiza visualmente la lista
    actualizarLista();
}

// Función para actualizar visualmente la lista de amigos en el HTML
function actualizarLista() {
    // Limpia la lista anterior antes de mostrar la nueva lista
    listaAmigos.innerHTML = '';

    // Ciclo básico para mostrar todos los nombres ingresados
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

// Obtener botón para sortear y elemento para mostrar resultado
const btnSortear = document.getElementById('btnSortear');
const resultadoSorteo = document.getElementById('resultadoSorteo');

// Evento click para sortear el amigo secreto
btnSortear.addEventListener('click', sortearAmigo);

// Función para sortear y mostrar amigo secreto aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía. Agrega amigos antes de sortear.');
        return;
    }

    // Selecciona un nombre aleatorio del array amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Muestra el resultado en pantalla
    resultadoSorteo.textContent = ` ¡El amigo secreto es: ${amigoSecreto}! `;
}

