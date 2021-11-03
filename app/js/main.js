$(function(){

    $('.burger, .menu__mobile').on('click',function(){
      $('.menu__mobile').toggleClass('menu__mobile--active');
       $('.burger').toggleClass('burger--active'); 
         $('.overlay').toggleClass('overlay--active'); 
    });
      
  var mixer = mixitup('.popular-product__content'); 

  $('.reviews__inner').slick({
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

 $(".best-restauran__content").slick({
  dots: true,
  infinite: false,
  prevArrow: false,
  nextArrow: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
   responsive: [{
      breakpoint: 1905,
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
