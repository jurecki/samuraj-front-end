//1. pobieramy wszystkie potrzebne elementy z DOM
const btnBigger = document.querySelector('.bigger');
const btnSmaller = document.querySelector('.smaller');
const txt = document.querySelector('p');

//2. dodanie nasłuchowania

let textSize = 12;

btnBigger.addEventListener('click', function () {
    // console.log('powieksz')
    txt.style.fontSize = ++textSize + "px";
})

btnSmaller.addEventListener('click', function () {
    // console.log('pomniejsz')
    txt.style.fontSize = --textSize + "px";
})

