const arrow = document.querySelector('.arrow')
// const nav = document.querySelector('nav')
const acitveElements = document.querySelectorAll('.active')
arrow.addEventListener('click', function () {
    // arrow.classList.toggle('on')
    // nav.classList.toggle('on')
    console.log(acitveElements)
    acitveElements.forEach(item => item.classList.toggle('on'))
})