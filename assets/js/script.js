if ($('.select_wrap').length > 0) {
    var selectWrap = $('.select_wrap');
    var defaultOption = $('.default_option');
    $(defaultOption).on('click', function () {
        $(this).parent().toggleClass("active");
    })

    $(document).on('click', function (e) {
        if (!selectWrap.is(e.target) && selectWrap.has(e.target).length === 0) {
            selectWrap.removeClass('active');
        }
    })

    $(".select_ul li").click(function () {
        var currentel = $(this).html();
        $(".default_option li").html(currentel);
        $(this).parents(".select_wrap").removeClass("active");
    })
}

if ($('#product-list').length > 0) {
    // init Isotope
    var $grid = $('#product-list').isotope();
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $('.filter-menu .btn').click(function () {
        $('.filter-menu .btn').removeClass('active');
        $(this).addClass('active');
    })
}

if ($('#sortproduct-list').length > 0) {
    // init Isotope
    var $gridbox = $('#sortproduct-list').isotope();
    // filter items on button click
    $('.sort-product-tabs').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $gridbox.isotope({ filter: filterValue });
    });
    $('.filter-menu .btn').click(function () {
        $('.filter-menu .btn').removeClass('active');
        $(this).addClass('active');
    })
}

$(document).ready(function () {
    if ($('.pdp-slider-content').length > 0) {
        $('.pdp-slider-content').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
            dots: false,
            asNavFor: '.slider-nav-thumbnails',
        });

        $('.slider-nav-thumbnails').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.pdp-slider-content',
            dots: false,
            arrows: false,
            focusOnSelect: true
        });
    }
});


if ($('.cart-quantity-content').length > 0) {
    var minus = $(".btn-subtract")
    var add = $(".btn-add");
    var currentValue = 1;

    minus.click(function () {
        currentValue -= 1;
        $(this).parent().siblings(".item-quantity").val(currentValue);
    });

    add.click(function () {
        currentValue += 1;
        $(this).parent().siblings(".item-quantity").val(currentValue);
    });
}
