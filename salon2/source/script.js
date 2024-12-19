// SERVICES:
const sliderTrack = document.getElementById('slider-track');
const sliderButtons = document.querySelectorAll('.slider-button');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const sliderCounter = document.getElementById('slider-counter');

let currentCategory = 'women';
let currentIndex = 0;

// Фільтрування слайдів за категорією
function filterSlides(category) {
    const allSlides = document.querySelectorAll('.slider-item');
    allSlides.forEach(slide => {
        slide.style.display = slide.classList.contains(category) ? 'block' : 'none';
    });
    updateCounter();
}

// Оновлення індекса
function updateCounter() {
    const visibleSlides = document.querySelectorAll(`.slider-item.${currentCategory}`);
    const totalSlides = visibleSlides.length;
    sliderCounter.textContent = `${currentIndex + 1} / ${totalSlides}`;
}

// Перемикання категорії
sliderButtons.forEach(button => {
    button.addEventListener('click', () => {
        sliderButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentCategory = button.getAttribute('data-category');
        currentIndex = 0;
        filterSlides(currentCategory);
    });
});

// Управління навігацією
prevButton.addEventListener('click', () => {
    const visibleSlides = document.querySelectorAll(`.slider-item.${currentCategory}`);
    if (currentIndex > 0) {
        currentIndex--;
    }
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateCounter();
});

nextButton.addEventListener('click', () => {
    const visibleSlides = document.querySelectorAll(`.slider-item.${currentCategory}`);
    if (currentIndex < visibleSlides.length - 1) {
        currentIndex++;
    }
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateCounter();
});

// Початковий фільтр
filterSlides(currentCategory);
 

//  PORTFOLIO:
 // Масиви з фотографіями для кожної категорії
 const imageCategories = {
    manicure: [
        './image/logo.png',
        'https://via.placeholder.com/200?text=Манікюр+2',
        'https://via.placeholder.com/200?text=Манікюр+3',
        'https://via.placeholder.com/200?text=Манікюр+4',
        'https://via.placeholder.com/200?text=Манікюр+5',
        'https://via.placeholder.com/200?text=Манікюр+6'
    ],
    hair: [
        'https://via.placeholder.com/200?text=Зачіска+1',
        'https://via.placeholder.com/200?text=Зачіска+2',
        'https://via.placeholder.com/200?text=Зачіска+3',
        'https://via.placeholder.com/200?text=Зачіска+4',
        'https://via.placeholder.com/200?text=Зачіска+5',
        'https://via.placeholder.com/200?text=Зачіска+6'
    ],
    makeup: [
        'https://via.placeholder.com/200?text=Макіяж+1',
        'https://via.placeholder.com/200?text=Макіяж+2',
        'https://via.placeholder.com/200?text=Макіяж+3',
        'https://via.placeholder.com/200?text=Макіяж+4',
        'https://via.placeholder.com/200?text=Макіяж+5',
        'https://via.placeholder.com/200?text=Макіяж+6'
    ],
    lashes: [
        'https://via.placeholder.com/200?text=Вії+1',
        'https://via.placeholder.com/200?text=Вії+2',
        'https://via.placeholder.com/200?text=Вії+3',
        'https://via.placeholder.com/200?text=Вії+4',
        'https://via.placeholder.com/200?text=Вії+5',
        'https://via.placeholder.com/200?text=Вії+6',
    ]
};

// Функція для завантаження фотографій
function loadImages(category, button) {
    const container = document.getElementById('imagesContainer');
    container.innerHTML = ''; // Очищуємо попередні зображення

    imageCategories[category].forEach((imageSrc) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = category;
        container.appendChild(img);
    });

    // Активуємо натиснуту кнопку
    const buttons = document.querySelectorAll('.nav-buttons button');
    buttons.forEach(btn => btn.classList.remove('active')); // Видаляємо клас active з усіх кнопок
    button.classList.add('active'); // Додаємо клас active до натиснутої кнопки
}

// Завантаження категорії за замовчуванням
document.addEventListener('DOMContentLoaded', () => {
    const defaultButton = document.querySelector('.nav-buttons button.active');
    loadImages('manicure', defaultButton); // Викликаємо функцію з категорією за замовчуванням
});










