// Подключение функционала "Чертогов Фрилансера"
import { menuClose } from "../functions.js";
// Подключение дополнения для увеличения возможностей
// Документация: https://github.com/cferdinandi/smooth-scroll
// import SmoothScroll from 'smooth-scroll';
//==============================================================================================================================================================================================================================================================================================================================

// Модуль плавной проктутки к блоку
export let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
    const targetBlockElement = document.querySelector(targetBlock);
    if (targetBlockElement) {
        let headerItem = "";
        let headerItemHeight = 0;
        if (noHeader) {
            headerItem = "header.header";
            headerItemHeight = document.querySelector(headerItem).offsetHeight;
        }
        // Закрываем меню, если оно открыто
        document.documentElement.classList.contains("menu-open") ? menuClose() : null;

        // Прокрутка стандартными средствами
        let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
        targetBlockElementPosition = headerItemHeight
            ? targetBlockElementPosition - headerItemHeight
            : targetBlockElementPosition;
        targetBlockElementPosition = offsetTop
            ? targetBlockElementPosition - offsetTop
            : targetBlockElementPosition;
        window.scrollTo({
            top: targetBlockElementPosition,
            behavior: "smooth",
        });
    }
};
