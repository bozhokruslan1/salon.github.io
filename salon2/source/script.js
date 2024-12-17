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










