//line-through text-gray-400 quando marcar o checkbox
'use strict';

const lista = document.querySelector('.lista');

const botao = document.querySelector('.btnAdd');
const texto = document.querySelector('.texto')


botao.addEventListener('click',function(){
    const remove = document.createElement('button');
    const elemento = document.createElement('li');
    const check = document.createElement('input');
    //altero o tipo do input para ckeckbox
    remove.classList.add('block' ,'mx-auto')
    remove.textContent = '🗙';
    check.type = 'checkbox';
    check.classList.add('check-box')
    elemento.appendChild(check)
    elemento.classList.add('item-main')
    const textoArea = document.createElement('div');
    textoArea.textContent = texto.value
    
    //flex-1 para pegar os espaços disponiveis break-words: quebra palavras longas.  whitespace-pre-wrap: respeita quebras de linha e espaços.  overflow-hidden: impede que o texto vaze para fora da <li>.
    textoArea.classList.add('flex-1', 'break-words', 'whitespace-pre-wrap', 'overflow-hidden', 'tablet:text-3xl');
    if(textoArea.textContent ===""){
        return
    } else {
        elemento.appendChild(textoArea)
        lista.appendChild(elemento)
    }
    elemento.appendChild(remove)
    //uso o value para pegar o que o usuário digita
    
    texto.value = ''; 


    check.addEventListener('change', () => {
        if(check.checked) {
            textoArea.classList.add('checked-line');
        } else {
            textoArea.classList.remove('checked-line');
        }
    })
    
    remove.addEventListener('click', () => {

            lista.removeChild(elemento)
    })
})



