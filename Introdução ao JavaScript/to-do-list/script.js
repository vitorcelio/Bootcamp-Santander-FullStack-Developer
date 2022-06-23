const form = document.getElementById('form-tarefa');
const lista = document.getElementById('lista');

form.onsubmit = function(e) {
    e.preventDefault();
    const input = document.getElementById('tarefa-input');
    addTarefa(input.value);
    form.reset();
}

function addTarefa(descricao) {
    const containerTarefa = document.createElement('div');
    const novaTarefa = document.createElement('input');
    const labelTarefa = document.createElement('label');
    const descricaoTarefa = document.createTextNode(descricao);

    novaTarefa.setAttribute('type', 'checkbox');
    novaTarefa.setAttribute('name', descricao);
    novaTarefa.setAttribute('id', descricao);

    labelTarefa.setAttribute('for', descricao);
    labelTarefa.appendChild(descricaoTarefa);

    containerTarefa.classList.add('itemTarefa');
    containerTarefa.appendChild(novaTarefa);
    containerTarefa.appendChild(labelTarefa);

    lista.appendChild(containerTarefa);
}
