// Подключение функционала "Чертогов Фрилансера"
import Masonry from "masonry-layout";
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let msnry = new Masonry(".news__masonry", {
    itemSelector: ".news__grid-item",
    gutter: 33,
    fitWidth: true,
});
