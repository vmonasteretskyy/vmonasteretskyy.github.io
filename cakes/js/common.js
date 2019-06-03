$(document).ready(function () {
    $('.hits-section .show-moreprod.vitr').click(function () {
        $('.hits-section .show-more-product').show();
    });
    // slider main page
    $('.reviews-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1102,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    autoplay: true,
                    centerPadding: '30px',
                    dots: true
                }
            }
        ]
    });
    // blog slider main page
    $('.blog-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    autoplay: true,
                    centerPadding: '25px',
                    dots: true
                }
            }
        ]
    });
    // phone menu
    $('.phone-burger').click(function () {
        $('.header_secton nav').show();
    });
    $('.close-menu').click(function () {
        $('.header_secton nav').hide();
    });
    // styling selects
    $(function () {
        $('select, input[type="number"]').styler();
    });
    // product page slider
    $('.card-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    // similar slider
    $('.similar-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: '30px',
                }
            }
        ]
    });
    // reviews slider phone
    if ($(window).width() < 768) {
        $('.phone-reviews-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: true,
            dots: true,
            centerMode: true,
            autoplay: true,
            centerPadding: '30px',
        });
    }
    // rating star

    $('.rating input').change(function () {
        var $radio = $(this);
        $('.rating .selected').removeClass('selected');
        $radio.closest('label').addClass('selected');
    });


    // to top
    $(function () {
        $("#back-top").hide();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $("#back-top").fadeIn();
            } else {
                $("#back-top").fadeOut();
            }
        });

        $("#back-top a").click(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    // menu icon desctop
    $('.cake-menupic').click(function () {
        $('.header_secton.sticky-header').addClass('open-sthead');
    });
    $('.close-menupic').click(function () {
        $('.header_secton.sticky-header').removeClass('open-sthead');
    });

    if ($(window).scrollTop() > 150) {
        $('.header_secton').addClass('sticky-header');
    } else {
        $('.header_secton').removeClass('sticky-header');
    }
});

$(document).on('scroll', function () {
    if ($(window).scrollTop() > 150) {
        $('.header_secton').addClass('sticky-header');
    } else {
        $('.header_secton').removeClass('sticky-header');
    }
});