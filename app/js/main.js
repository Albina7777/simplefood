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
    });

    $('.burger-cross').on('click',function(){   
      $('.burger').removeClass('burger--active');
      $('.menu__mobile').removeClass('menu__mobile--active');    
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

 $(".best-restaurant__content").slick({
  dots: true,
  infinite: false,
  prevArrow: false,
  nextArrow: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
   responsive: [{
      breakpoint: 1920,
      settings: "unslick"        
    },

    {
      breakpoint: 768,/*почему не действует тут?*/
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      }

    }, {
      breakpoint: 576,
      settings: {    
      infinite: true,    
    }}]      
  });
});
