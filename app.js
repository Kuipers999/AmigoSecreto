// Array para almacenar nombres de amigos
let listaAmigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación: Verificar si el campo está vacío
    if (!nombre) {
        alert("Por favor, inserte un nombre."); // Mostrar alert si el campo está vacío
        return; // Detener la ejecución de la función
    }

    if (nombre && typeof nombre === 'string') {
        listaAmigos.push(nombre);
        console.log(`${nombre} ha sido agregado a la lista de amigos.`);
        actualizarListaAmigos();
        input.value = ''; // Limpiar el campo de entrada
    } else {
        console.log("Por favor, ingresa un nombre válido.");
    }
}

// Función para actualizar la lista de amigos en la UI
function actualizarListaAmigos() {
    const listaAmigosUI = document.getElementById('listaAmigos');
    listaAmigosUI.innerHTML = ''; // Limpiar la lista actual

    listaAmigos.forEach((amigo, indice) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosUI.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length > 0) {
        const indiceGanador = Math.floor(Math.random() * listaAmigos.length);
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>¡El amigo sorteado es: ${listaAmigos[indiceGanador]}!</li>`;
    } else {
        console.log("No hay amigos en la lista para sortear.");
    }
}
