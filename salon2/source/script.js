// SERVICES:
const sliderTrack = document.querySelector('.slider-track');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const categoryButtons = document.querySelectorAll('.slider-button');
const allSlides = document.querySelectorAll('.slider-item');

let currentCategory = 'women';
let slideWidth = allSlides[0].offsetWidth + 15;
let currentIndex = 0;

// Для свайпу
let startX = 0;
let endX = 0;

function filterSlides(category) {
    sliderTrack.style.transition = 'none';
    currentIndex = 0;
    currentCategory = category;
    const slides = Array.from(allSlides);
    slides.forEach(slide => {
        slide.style.display = slide.classList.contains(category) ? 'block' : 'none';
    });
    sliderTrack.style.transform = 'translateX(0)';
}

function moveSlider() {
    const visibleSlides = Array.from(allSlides).filter(slide =>
        slide.classList.contains(currentCategory)
    );
    const totalSlides = visibleSlides.length;

    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;

    sliderTrack.style.transition = 'transform 0.5s ease-in-out';
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex--;
    moveSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    moveSlider();
});

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterSlides(button.dataset.category);
    });
});

// Події для свайпів
sliderTrack.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sliderTrack.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

sliderTrack.addEventListener('touchend', () => {
    const threshold = 50; // Мінімальна відстань для реєстрації свайпу
    const swipeDistance = startX - endX;

    if (swipeDistance > threshold) {
        // Свайп вліво
        currentIndex++;
        moveSlider();
    } else if (swipeDistance < -threshold) {
        // Свайп вправо
        currentIndex--;
        moveSlider();
    }
});

// Оновлення ширини слайду при зміні розміру вікна
window.addEventListener('resize', () => {
    slideWidth = allSlides[0].offsetWidth + 15; // Ширина слайду + відступ
    moveSlider();
});

// Ініціалізація
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










