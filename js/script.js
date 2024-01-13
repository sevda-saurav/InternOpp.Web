document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centerSlide :true,
        fade : true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints:{
            0: {
                slidesPerView:1,
            },
            520: {
                slidesPerView:2,
            },
            950: {
                slidesPerView:3,
            },
        },
    });
});


const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}