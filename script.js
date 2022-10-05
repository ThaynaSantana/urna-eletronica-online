'use strict';

const displat = document.getElementById('display-text')
const numbers = document.querySelectorAll('button')


const updateDisplay = (texto) => {
    displat.textContent = (texto);
}

const insertNumber = (evento) => updateDisplay(evento.target.textContent);

numbers.forEach (numero => number.addEventListener('click',insertNumber));