'use strict';

const lista = document.querySelector('.lista');
const botao = document.querySelector('.btnAdd');
const texto = document.querySelector('.texto');

// criando array global para salvar dados
let tarefas = [];

//criando um Storage com chave de TODO
function salvarDadosStorage() {
    //o Storage só aceita string
    localStorage.setItem('TODO', JSON.stringify(tarefas));
}

//Jogando os dados no Storage
function carregarDadosStorage() {
    //pegando o localStorage com get e selecionando a chave
    const dados = localStorage.getItem('TODO');
    if (dados) {
        //se tiver dados transforma a string em obj
        tarefas = JSON.parse(dados);
        //itero o array com foreach
        tarefas.forEach(tarefa => criarElemento(tarefa.texto, tarefa.concluida));
    }
}

function criarElemento(textoTarefa, concluida = false) {
    const remove = document.createElement('button');
    const elemento = document.createElement('li');
    const check = document.createElement('input');
    const textoArea = document.createElement('div');

    remove.classList.add('block', 'mx-auto');
    remove.textContent = '❌';

    check.type = 'checkbox';
    check.classList.add('check-box');
    check.checked = concluida;

    elemento.classList.add('item-main');

    textoArea.textContent = textoTarefa;
    textoArea.classList.add('flex-1', 'break-words', 'whitespace-pre-wrap', 'overflow-hidden', 'tablet:text-3xl');

    if (concluida) {
        textoArea.classList.add('line-through', 'text-gray-400');
    }

    elemento.appendChild(check);
    elemento.appendChild(textoArea);
    elemento.appendChild(remove);
    lista.appendChild(elemento);

    check.addEventListener('change', () => {
        if (check.checked) {
            textoArea.classList.add('line-through', 'text-gray-400');
        } else {
            textoArea.classList.remove('line-through', 'text-gray-400');
        }
        const index = Array.from(lista.children).indexOf(elemento);
        tarefas[index].concluida = check.checked;
        salvarDadosStorage();
    });

    remove.addEventListener('click', () => {
        const index = Array.from(lista.children).indexOf(elemento);
        tarefas.splice(index, 1);
        lista.removeChild(elemento);
        salvarDadosStorage();
    });
}

botao.addEventListener('click', function () {
    if (texto.value === "") {
        alert("Adicione uma tarefa!");
        return;
    }

    const novaTarefa = {
        texto: texto.value.trim(),
        concluida: false
    };

    tarefas.push(novaTarefa);
    criarElemento(novaTarefa.texto, novaTarefa.concluida);
    salvarDadosStorage();
    texto.value = '';
});

carregarDadosStorage();


