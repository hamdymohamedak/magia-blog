// start menu in header 
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    nav.classList.toggle("active");
});
// end menu in header

// start new articles slider 
var swiper = new Swiper(".swiper-holder", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});
// end new articles slider 

// start websites slider
