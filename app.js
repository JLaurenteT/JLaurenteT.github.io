let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        mostrarAmigos();
        input.value = '';
    }
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        mostrarResultado('Agrega al menos dos amigos para sortear.');
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];
    mostrarResultado(`El amigo secreto sorteado es: ${sorteado}`);
}

function mostrarResultado(texto) {
    const ul = document.getElementById('resultado');
    ul.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = texto;
    ul.appendChild(li);
}