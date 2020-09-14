const burger = document.querySelector('.burger')
const activeElements = document.querySelectorAll('.active')

burger.addEventListener('click', function () {
    activeElements.forEach(item => item.classList.toggle('show'))
})


// const burger = document.querySelector('.burger')
// const times = document.querySelector('.fa-times')
// const bars = document.querySelector('.fa-bars')
// const aside = document.querySelector('aside')
// const wrapper = document.querySelector('.wrapper')

// burger.addEventListener("click", function () {
//     console.log('click')
//     times.classList.toggle("show")
//     bars.classList.toggle("show")
//     aside.classList.toggle('show')
//     wrapper.classList.toggle('show')
// })

// $('.burger').on('click', function () {
//     $('.fa, aside, .wrapper').toggleClass('show')
// })