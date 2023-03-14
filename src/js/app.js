$(document).ready(function () {
    const slides = $(".hero__slide").toArray();
    const moveR = $(".fa-chevron-right");
    const moveL = $(".fa-chevron-left");

    const currentFract = $(".hero__curentSlide");
    const allFract = $(".hero__AllSlides");

    let numOfSlide = 1;

    $(currentFract).html(numOfSlide);
    $(allFract).html(slides.length);

    $(moveR).click(function (e) {
        e.preventDefault();
        for (let i = 0; i < slides.length; i++) {
            if ($(slides[i]).hasClass("active")) {
                $(slides[i]).removeClass("active");

                if (numOfSlide === slides.length) {
                    numOfSlide = 1;
                } else {
                    numOfSlide++;
                }

                $(currentFract).html(numOfSlide);
                if (i + 1 === slides.length) {
                    $(slides[0]).addClass("active");
                } else {
                    $(slides[i + 1]).addClass("active");
                }
                break;
            }
        }
    });
    $(moveL).click(function (e) {
        e.preventDefault();
        for (let i = 0; i < slides.length; i++) {
            if ($(slides[i]).hasClass("active")) {
                $(slides[i]).removeClass("active");

                if (numOfSlide === 1) {
                    numOfSlide = slides.length;
                } else {
                    numOfSlide--;
                }
                $(currentFract).html(numOfSlide);

                if (i - 1 === -1) {
                    $(slides[slides.length - 1]).addClass("active");
                } else {
                    $(slides[i - 1]).addClass("active");
                }
                break;
            }
        }
    });

    // btnDown on hero section ============================
    const btnDown = $(".hero__moveDown");
    const target = $("#container");
    $(btnDown).click(function (e) {
        e.preventDefault();
        const targetPosition = target.offset().top;
        $("html, body").animate({ scrollTop: targetPosition }, 600);
    });

    // slider =============================================

    const fontSize = parseInt($("html").css("font-size"));
    const width800px = fontSize * 50;
    const width1300px = fontSize * 81.25;

    new Swiper(".row__slider", {
        speed: 700,
        breakpoints: {
            // when window width is >= 320px
            200: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // // when window width is >= 480px
            [width800px]: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            // // when window width is >= 640px
            [width1300px]: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",

            renderFraction: function (currentClass, totalClass) {
                return `<div class="row__curentSlide text--blue ${currentClass}"></div>
                        <div class="row__AllSlides  ${totalClass}"></div>
                `;
            },
        },

        navigation: {
            nextEl: ".goRigth",
            prevEl: ".goLeft",
        },
    });

    new Swiper(".row__slider2", {
        speed: 700,
        breakpoints: {
            // when window width is >= 320px
            350: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // // when window width is >= 480px
            [width800px]: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            // // when window width is >= 640px
            [width1300px]: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        pagination: {
            el: ".swiper-pagination2",
            type: "fraction",

            renderFraction: function (currentClass, totalClass) {
                return `<div class="row__curentSlide2 text--blue ${currentClass}"></div>
                        <div class="row__AllSlides2  ${totalClass}"></div>
                `;
            },
        },

        navigation: {
            nextEl: ".goRigth2",
            prevEl: ".goLeft2",
        },
    });

    $(".news__formBox").validate();
});
