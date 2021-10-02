// const slides = document.querySelectorAll('.slide')

// массив slide какой слайд будет главным при загрузки страницы без внедрения класса active в HTML
// slides[0].classList.add('active');

// Цикл
// for (const slide of slides) {
//     slide.addEventListener('click', () => {
//         clearActiveClasses()
//         slide.classList.add('active')
//     })
// }

// function clearActiveClasses() {
//     slides.forEach((slide) => {
//         slide.classList.remove('active')
//     })
// }

// Создаем плаггин обьединяем все функций 
function slidesPlugin (activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');

     slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }
    
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}
//вызываем функцию slidesPlugin и номер активного слайда массива начинаеться отсчет с 0
slidesPlugin(3);