$(function(){
  
  var mixer = mixitup('.popular-product__content'); 

  $('.slider__inner').slick({
    dots: true,
    fade: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg><use xlink:href="images/sprite.svg#arrow-prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><svg><use xlink:href="images/sprite.svg#arrow-next"></use></svg></button>'
  });
});
