$(document).ready(function () {
    $('.hits-section .show-moreprod').click(function () {
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

    var fscrHeight = $('.main-top-section').height();
    var fullHeight = $(window).height();
    var btnTop = fullHeight - fscrHeight + 30;
    $('.main-top-section .vertical-btn').css('bottom', btnTop);
    if(fullHeight < fscrHeight ) {
        $('.main-top-section .vertical-btn').css('bottom', '30px');
    }
});