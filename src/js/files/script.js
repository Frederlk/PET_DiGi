// Подключение функционала "Чертогов Фрилансера"
import Masonry from "masonry-layout";

let msnry = new Masonry(".news__masonry", {
    itemSelector: ".news__grid-item",
    gutter: 33,
    fitWidth: true,
});
