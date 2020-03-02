$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1200: {
            items: 3
        }
    }
});

$(document).ready(function () {
    $('#form').affix({
        offset: {
            top: 100,
            bottom: function () {
                return (this.bottom = $('#cards').outerHeight(true))
            }
        }
    });
});

