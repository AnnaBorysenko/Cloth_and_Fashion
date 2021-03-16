const menuCls = 'open__menu'
const basketCls = 'open__basket'

$(document).ready(function () {
    const menuBtnsBasket = document.querySelector('.basket__menu-btn');
    const menuBtns = document.querySelector('.menu__btn');
    const menuMask = document.querySelector('.menu-mask');

    menuBtns.onclick = () => openModal(menuCls);
    menuBtnsBasket.onclick = () => openModal(basketCls);
    menuMask.onclick = () => closeModals([menuCls, basketCls]);

    function openModal(cls) {
        document.body.classList.add(cls);
    }

    function closeModals(cls) {
        cls.forEach(item => document.body.classList.remove(item));
    }


    $('.top-slider').owlCarousel({
        center: true,
        items: 1,
        margin: 0,
    });

    $('.store-slider').owlCarousel({
        stagePadding: 80,
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        dots: false,

        responsive: {
            768: {
                items: 4,
                stagePadding: 60,
                margin: 10,
                center: false,
                nav: true,

            },
            1024: {
                items: 6,
                stagePadding: 0,
                margin: 10,
                center: false,
                nav: true,
                loop: false,
            }
        }
    });

    $('.insta__slider').owlCarousel({
        stagePadding: 80,
        center: true,
        items: 1,
        loop: true,
        margin: 5,
        dots: false,
        responsive: {
            768: {
                items: 5,
                stagePadding: 0,
                margin: 10,
                center: false,
            },
            1024: {
                items: 5,
                stagePadding: 0,
                margin: 10,
                center: false,
                loop: false,
            }
        }
    });

    $('.usa__slider').owlCarousel({
        stagePadding: 80,
        center: true,
        items: 1,
        loop: true,
        margin: 20,
        dots: false,
        responsive: {
            768: {
                items: 4,
                stagePadding: 0,
                margin: 10,
                center: false,
            },
            1024: {
                items: 4,
                stagePadding: 0,
                margin: 10,
                center: false,
                loop: false,
            }
        }
    });
});
