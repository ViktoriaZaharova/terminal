$('.dropDown-wrapper').click(function () {
   $(this).find('.dropDwn-menu').fadeToggle();
});

$('.reviews-slider').slick({
    slidesToShow: 1,
    dots: true,
    infinite: false,
    appendArrows: '.reviews-slider-nav',
    fade: true,
    customPaging : function(slider, i) {
        var thumb = jQuery(slider.$slides[i]).data();
        return '<a>'+'-'+('0'+(i+1)).slice(-2)+'</a>';
    },
    prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M5.52072 9.80757L5.91897 9.41361C6.04418 9.28992 6.11345 9.12457 6.11345 8.94857C6.11345 8.77237 6.04418 8.59206 5.91897 8.46837L3.36009 5.92129H18.0015C18.3681 5.92129 18.6666 5.6565 18.6666 5.29383V4.73638C18.6666 4.37381 18.3681 4.04205 18.0015 4.04205H3.33113L5.91897 1.50005C6.04418 1.37616 6.11345 1.2203 6.11345 1.0441C6.11345 0.868095 6.04418 0.707344 5.91897 0.583554L5.52072 0.191748C5.26151 -0.064632 4.83984 -0.0635564 4.58063 0.192824L0.194044 4.53369C0.0691338 4.65728 -4.00543e-05 4.82312 -4.00543e-05 5.00059C-4.00543e-05 5.17855 0.0691338 5.34399 0.194044 5.46759L4.58053 9.80757C4.83964 10.0641 5.26151 10.0641 5.52072 9.80757Z"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M13.1459 9.80757L12.7477 9.41361C12.6224 9.28992 12.5532 9.12457 12.5532 8.94857C12.5532 8.77237 12.6224 8.59206 12.7477 8.46837L15.3065 5.92129H0.665167C0.29854 5.92129 0 5.6565 0 5.29383V4.73638C0 4.37381 0.29854 4.04205 0.665167 4.04205H15.3355L12.7477 1.50005C12.6224 1.37616 12.5532 1.2203 12.5532 1.0441C12.5532 0.868095 12.6224 0.707344 12.7477 0.583554L13.1459 0.191748C13.4051 -0.064632 13.8268 -0.0635564 14.086 0.192824L18.4726 4.53369C18.5975 4.65728 18.6667 4.82312 18.6667 5.00059C18.6667 5.17855 18.5975 5.34399 18.4726 5.46759L14.0861 9.80757C13.827 10.0641 13.4051 10.0641 13.1459 9.80757Z"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                appendArrows: '.reviews-slider-nav-mobile',
            }
        }
    ]
});

$('.news-slider').slick({
    slidesToShow: 1,
    infinite: false,
    appendArrows: '.news-slider-nav',
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M5.52072 9.80757L5.91897 9.41361C6.04418 9.28992 6.11345 9.12457 6.11345 8.94857C6.11345 8.77237 6.04418 8.59206 5.91897 8.46837L3.36009 5.92129H18.0015C18.3681 5.92129 18.6666 5.6565 18.6666 5.29383V4.73638C18.6666 4.37381 18.3681 4.04205 18.0015 4.04205H3.33113L5.91897 1.50005C6.04418 1.37616 6.11345 1.2203 6.11345 1.0441C6.11345 0.868095 6.04418 0.707344 5.91897 0.583554L5.52072 0.191748C5.26151 -0.064632 4.83984 -0.0635564 4.58063 0.192824L0.194044 4.53369C0.0691338 4.65728 -4.00543e-05 4.82312 -4.00543e-05 5.00059C-4.00543e-05 5.17855 0.0691338 5.34399 0.194044 5.46759L4.58053 9.80757C4.83964 10.0641 5.26151 10.0641 5.52072 9.80757Z"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M13.1459 9.80757L12.7477 9.41361C12.6224 9.28992 12.5532 9.12457 12.5532 8.94857C12.5532 8.77237 12.6224 8.59206 12.7477 8.46837L15.3065 5.92129H0.665167C0.29854 5.92129 0 5.6565 0 5.29383V4.73638C0 4.37381 0.29854 4.04205 0.665167 4.04205H15.3355L12.7477 1.50005C12.6224 1.37616 12.5532 1.2203 12.5532 1.0441C12.5532 0.868095 12.6224 0.707344 12.7477 0.583554L13.1459 0.191748C13.4051 -0.064632 13.8268 -0.0635564 14.086 0.192824L18.4726 4.53369C18.5975 4.65728 18.6667 4.82312 18.6667 5.00059C18.6667 5.17855 18.5975 5.34399 18.4726 5.46759L14.0861 9.80757C13.827 10.0641 13.4051 10.0641 13.1459 9.80757Z"/>\n' +
        '</svg>\n</button>'
});

$('.section-content__slider').slick({
    slidesToShow: 2,
    infinite: false,
    appendArrows: '.section-content__slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M5.52072 9.80757L5.91897 9.41361C6.04418 9.28992 6.11345 9.12457 6.11345 8.94857C6.11345 8.77237 6.04418 8.59206 5.91897 8.46837L3.36009 5.92129H18.0015C18.3681 5.92129 18.6666 5.6565 18.6666 5.29383V4.73638C18.6666 4.37381 18.3681 4.04205 18.0015 4.04205H3.33113L5.91897 1.50005C6.04418 1.37616 6.11345 1.2203 6.11345 1.0441C6.11345 0.868095 6.04418 0.707344 5.91897 0.583554L5.52072 0.191748C5.26151 -0.064632 4.83984 -0.0635564 4.58063 0.192824L0.194044 4.53369C0.0691338 4.65728 -4.00543e-05 4.82312 -4.00543e-05 5.00059C-4.00543e-05 5.17855 0.0691338 5.34399 0.194044 5.46759L4.58053 9.80757C4.83964 10.0641 5.26151 10.0641 5.52072 9.80757Z"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M13.1459 9.80757L12.7477 9.41361C12.6224 9.28992 12.5532 9.12457 12.5532 8.94857C12.5532 8.77237 12.6224 8.59206 12.7477 8.46837L15.3065 5.92129H0.665167C0.29854 5.92129 0 5.6565 0 5.29383V4.73638C0 4.37381 0.29854 4.04205 0.665167 4.04205H15.3355L12.7477 1.50005C12.6224 1.37616 12.5532 1.2203 12.5532 1.0441C12.5532 0.868095 12.6224 0.707344 12.7477 0.583554L13.1459 0.191748C13.4051 -0.064632 13.8268 -0.0635564 14.086 0.192824L18.4726 4.53369C18.5975 4.65728 18.6667 4.82312 18.6667 5.00059C18.6667 5.17855 18.5975 5.34399 18.4726 5.46759L14.0861 9.80757C13.827 10.0641 13.4051 10.0641 13.1459 9.80757Z"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.article-slider').slick({
    slidesToShow: 1,
    fade: true,
    infinite: false,
    appendArrows: '.article-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M5.52072 9.80757L5.91897 9.41361C6.04418 9.28992 6.11345 9.12457 6.11345 8.94857C6.11345 8.77237 6.04418 8.59206 5.91897 8.46837L3.36009 5.92129H18.0015C18.3681 5.92129 18.6666 5.6565 18.6666 5.29383V4.73638C18.6666 4.37381 18.3681 4.04205 18.0015 4.04205H3.33113L5.91897 1.50005C6.04418 1.37616 6.11345 1.2203 6.11345 1.0441C6.11345 0.868095 6.04418 0.707344 5.91897 0.583554L5.52072 0.191748C5.26151 -0.064632 4.83984 -0.0635564 4.58063 0.192824L0.194044 4.53369C0.0691338 4.65728 -4.00543e-05 4.82312 -4.00543e-05 5.00059C-4.00543e-05 5.17855 0.0691338 5.34399 0.194044 5.46759L4.58053 9.80757C4.83964 10.0641 5.26151 10.0641 5.52072 9.80757Z"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M13.1459 9.80757L12.7477 9.41361C12.6224 9.28992 12.5532 9.12457 12.5532 8.94857C12.5532 8.77237 12.6224 8.59206 12.7477 8.46837L15.3065 5.92129H0.665167C0.29854 5.92129 0 5.6565 0 5.29383V4.73638C0 4.37381 0.29854 4.04205 0.665167 4.04205H15.3355L12.7477 1.50005C12.6224 1.37616 12.5532 1.2203 12.5532 1.0441C12.5532 0.868095 12.6224 0.707344 12.7477 0.583554L13.1459 0.191748C13.4051 -0.064632 13.8268 -0.0635564 14.086 0.192824L18.4726 4.53369C18.5975 4.65728 18.6667 4.82312 18.6667 5.00059C18.6667 5.17855 18.5975 5.34399 18.4726 5.46759L14.0861 9.80757C13.827 10.0641 13.4051 10.0641 13.1459 9.80757Z"/>\n' +
        '</svg>\n</button>',
});

$('.btn-burger').click(function () {
    $(this).toggleClass('click');
    $('.mobile-menu').fadeToggle();
});

$(window).on('load resize', function() {
    if ($(window).width() < 576) {
        $('.advantages-wrapper:not(.slick-initialized)').slick({
            slidesToShow: 1,
            slide: '.advantages-box',
            infinite: false,
            adaptiveHeight: true,
            appendArrows: '.advantages-wrapper-nav',
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M5.52072 9.80757L5.91897 9.41361C6.04418 9.28992 6.11345 9.12457 6.11345 8.94857C6.11345 8.77237 6.04418 8.59206 5.91897 8.46837L3.36009 5.92129H18.0015C18.3681 5.92129 18.6666 5.6565 18.6666 5.29383V4.73638C18.6666 4.37381 18.3681 4.04205 18.0015 4.04205H3.33113L5.91897 1.50005C6.04418 1.37616 6.11345 1.2203 6.11345 1.0441C6.11345 0.868095 6.04418 0.707344 5.91897 0.583554L5.52072 0.191748C5.26151 -0.064632 4.83984 -0.0635564 4.58063 0.192824L0.194044 4.53369C0.0691338 4.65728 -4.00543e-05 4.82312 -4.00543e-05 5.00059C-4.00543e-05 5.17855 0.0691338 5.34399 0.194044 5.46759L4.58053 9.80757C4.83964 10.0641 5.26151 10.0641 5.52072 9.80757Z"/>\n' +
                '</svg>\n</button>',
            nextArrow: '<button type="button" class="slick-next"><svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M13.1459 9.80757L12.7477 9.41361C12.6224 9.28992 12.5532 9.12457 12.5532 8.94857C12.5532 8.77237 12.6224 8.59206 12.7477 8.46837L15.3065 5.92129H0.665167C0.29854 5.92129 0 5.6565 0 5.29383V4.73638C0 4.37381 0.29854 4.04205 0.665167 4.04205H15.3355L12.7477 1.50005C12.6224 1.37616 12.5532 1.2203 12.5532 1.0441C12.5532 0.868095 12.6224 0.707344 12.7477 0.583554L13.1459 0.191748C13.4051 -0.064632 13.8268 -0.0635564 14.086 0.192824L18.4726 4.53369C18.5975 4.65728 18.6667 4.82312 18.6667 5.00059C18.6667 5.17855 18.5975 5.34399 18.4726 5.46759L14.0861 9.80757C13.827 10.0641 13.4051 10.0641 13.1459 9.80757Z"/>\n' +
                '</svg>\n</button>',
        });

        $('.partners-logos:not(.slick-initialized)').slick({
            slidesToShow: 1,
            slide: '.partners-logo',
            infinite: false,
            adaptiveHeight: true,
            appendArrows: '.partners-logos-nav',
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M5.52072 9.80757L5.91897 9.41361C6.04418 9.28992 6.11345 9.12457 6.11345 8.94857C6.11345 8.77237 6.04418 8.59206 5.91897 8.46837L3.36009 5.92129H18.0015C18.3681 5.92129 18.6666 5.6565 18.6666 5.29383V4.73638C18.6666 4.37381 18.3681 4.04205 18.0015 4.04205H3.33113L5.91897 1.50005C6.04418 1.37616 6.11345 1.2203 6.11345 1.0441C6.11345 0.868095 6.04418 0.707344 5.91897 0.583554L5.52072 0.191748C5.26151 -0.064632 4.83984 -0.0635564 4.58063 0.192824L0.194044 4.53369C0.0691338 4.65728 -4.00543e-05 4.82312 -4.00543e-05 5.00059C-4.00543e-05 5.17855 0.0691338 5.34399 0.194044 5.46759L4.58053 9.80757C4.83964 10.0641 5.26151 10.0641 5.52072 9.80757Z"/>\n' +
                '</svg>\n</button>',
            nextArrow: '<button type="button" class="slick-next"><svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M13.1459 9.80757L12.7477 9.41361C12.6224 9.28992 12.5532 9.12457 12.5532 8.94857C12.5532 8.77237 12.6224 8.59206 12.7477 8.46837L15.3065 5.92129H0.665167C0.29854 5.92129 0 5.6565 0 5.29383V4.73638C0 4.37381 0.29854 4.04205 0.665167 4.04205H15.3355L12.7477 1.50005C12.6224 1.37616 12.5532 1.2203 12.5532 1.0441C12.5532 0.868095 12.6224 0.707344 12.7477 0.583554L13.1459 0.191748C13.4051 -0.064632 13.8268 -0.0635564 14.086 0.192824L18.4726 4.53369C18.5975 4.65728 18.6667 4.82312 18.6667 5.00059C18.6667 5.17855 18.5975 5.34399 18.4726 5.46759L14.0861 9.80757C13.827 10.0641 13.4051 10.0641 13.1459 9.80757Z"/>\n' +
                '</svg>\n</button>'
        });
    } else {
        $(".advantages-wrapper.slick-initialized").slick("unslick");
        $(".partners-logos.slick-initialized").slick("unslick");
    }
});