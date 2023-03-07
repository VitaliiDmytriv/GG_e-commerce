$(document).ready(function () {
    const slides = $(".hero__slide").toArray();
    const moveR = $(".fa-chevron-right");
    const moveL = $(".fa-chevron-left");

    $(moveR).click(function (e) {
        e.preventDefault();
        for (let i = 0; i < slides.length; i++) {
            if ($(slides[i]).hasClass("active")) {
                $(slides[i]).removeClass("active");
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
                if (i - 1 === -1) {
                    $(slides[slides.length - 1]).addClass("active");
                } else {
                    $(slides[i - 1]).addClass("active");
                }
                break;
            }
        }
    });
});
