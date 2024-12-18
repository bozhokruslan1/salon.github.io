// SERVICES:
const carousels = document.querySelectorAll('.carousel-container');
        const switchButtons = document.querySelectorAll('.switch-button');
        const tracks = document.querySelectorAll('.carousel-track');
        const counters = document.querySelectorAll('.carousel-counter');
        const prevButtons = document.querySelectorAll('.carousel-button.prev');
        const nextButtons = document.querySelectorAll('.carousel-button.next');

        // Перемикання між каруселями
        switchButtons.forEach(button => {
            button.addEventListener('click', () => {
                switchButtons.forEach(btn => btn.classList.remove('active'));
                carousels.forEach(carousel => carousel.classList.remove('active'));
                document.getElementById(`carousel-${button.dataset.carousel}`).classList.add('active');
                button.classList.add('active');
            });
        });

        // Логіка для кожної каруселі
        carousels.forEach((carousel, index) => {
            let currentIndex = 0;
            const items = carousel.querySelectorAll('.carousel-item');
            const track = tracks[index];
            const counter = counters[index];

            const updateCarousel = () => {
                const itemWidth = items[0].getBoundingClientRect().width;
                track.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
                counter.textContent = `${currentIndex + 1} / ${items.length}`;
            };

            prevButtons[index].addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                updateCarousel();
            });

            nextButtons[index].addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % items.length;
                updateCarousel();
            });

            updateCarousel();
        });
 

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










