import Swiper, { Navigation, Pagination, Keyboard, Autoplay } from "swiper";
import "../../scss/base/swiper.scss";

function initSliders() {
    if (document.querySelector(".top-home__slider")) {
        new Swiper(".top-home__slider", {
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
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },

            pagination: {
                el: ".top-home__pagination",
                type: "bullets",
                clickable: true,
            },

            navigation: {
                prevEl: ".nav__icon_prev",
                nextEl: ".nav__icon_next",
            },
        });
    }

    if (document.querySelector(".testimonials__slider")) {
        new Swiper(".testimonials__slider", {
            modules: [Pagination, Keyboard],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            speed: 800,
            loop: true,

            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },

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
