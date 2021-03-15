$(document).ready(function(){
    $('.sidenav').sidenav();
    
  });
 
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    
  });

  $('.slider2').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow:2,
    autoplay:true,
    autoplaySpeed:2000,
  });
  
