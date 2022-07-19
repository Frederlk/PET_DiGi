// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Keyboard, Autoplay } from "swiper";

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector(".top-home__slider")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".top-home__slider", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation, Pagination, Autoplay, Keyboard],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            speed: 800,
            loop: true,

            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },

            keyboard: {
                // Включить\выключить
                enabled: true,
                // Включить\выключить
                // только когда слайдер
                // в пределах вьюпорта
                onlyInViewport: true,
                // Включить\выключить
                // управление клавишами
                // pageUp, pageDown
                pageUpDown: true,
            },

            // Пагинация
            pagination: {
                el: ".top-home__pagination",
                type: "bullets",
                clickable: true,
            },

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: ".nav__icon_prev",
                nextEl: ".nav__icon_next",
            },
        });
    }

    if (document.querySelector(".testimonials__slider")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".testimonials__slider", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Pagination, Keyboard],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            speed: 800,
            loop: true,

            keyboard: {
                // Включить\выключить
                enabled: true,
                // Включить\выключить
                // только когда слайдер
                // в пределах вьюпорта
                onlyInViewport: true,
                // Включить\выключить
                // управление клавишами
                // pageUp, pageDown
                pageUpDown: true,
            },

            // Пагинация
            pagination: {
                el: ".testimonials__pagination",
                type: "bullets",
                clickable: true,
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
