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
});
