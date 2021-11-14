$(function(){

  $('.select-style').styler();

  var $range = $(".filter-price__input"),
    $inputFrom = $(".filter-price__from"),
    $inputTo = $(".filter-price__to"),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});

    $('.burger').on('click',function(){   
      $('.burger').addClass('burger--active');
      $('.menu__mobile').addClass('menu__mobile--active');
      $('.overlay').addClass('overlay--active');
    });

    $('.burger-cross').on('click',function(){   
      $('.burger').removeClass('burger--active');
      $('.menu__mobile').removeClass('menu__mobile--active');   
      $('.overlay').removeClass('overlay--active'); 
      $('.filter').removeClass('filter--active'); 
      $('.overlay-catalog').removeClass('overlay-catalog--active');  
    });

      $('.catalog__burger').on('click',function(){   
      $('.catalog__burger').addClass('catalog__burger--active');
      $('.filter').addClass('filter--active');  
      $('.overlay-catalog').addClass('overlay-catalog--active');   
    });

   
  var mixer = mixitup('.popular-product__content'); 

  $('.customer-reviews__inner').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><svg><use xlink:href="images/sprite.svg#arrow-prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><svg><use xlink:href="images/sprite.svg#arrow-next"></use></svg></button>',
    responsive: [{
      breakpoint: 576,
      settings: {
      dots: false
    }}]      
  });

   $(window).on('load resize', function() {
  if ($(window).width() < 576) {
    $('.best-restaurant__content, .discounts__content:not(.slick-initialized)').slick({
      centerMode: false,
      prevArrow: false,
      nextArrow: false,
      dots: true,
      infinite: true,
      speed: 100,
      autoplay: true,
      slidesToShow: 1
    });
  } else {
    $(".best-restaurant__content.slick-initialized").slick("unslick");
    $(".discounts__content.slick-initialized").slick("unslick");
  }
});
});
