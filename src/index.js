import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./index.scss";

const swiperBenefits = new Swiper(".benefits__swiper", {
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperGallery = new Swiper(".gallery__swiper", {
  spaceBetween: 50,
  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const swiperEmployees = new Swiper(".employees__swiper", {
    spaceBetween: 50,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
