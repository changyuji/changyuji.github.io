$(document).ready(function() {
    
    
    
    $('.js--section-features').waypoint({
      handler: function(direction) {
          if (direction == 'down') {
              $('nav').addClass('sticky');
          }  else  {
              $('nav').removeClass('sticky');
              }
      },
    offset: '80px;'
    });
    
    
    
    
    $('.js--scroll-to-plan').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
  


        
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {offset: '50%'});
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {offset: '50%'});
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {offset: '50%'});
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {offset: '50%'});
    
    
    
    /*mobile    nav  */
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js-main-nav');
        
        
        var icon = $('.js--nav-icon i');
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
        nav.slideToggle(200);
    });
    
    
    
    /*        Maps            */
    
    var map = new GMaps({
        div: '.map',
        lat: '47.3954848',
        lng: 125.867592,
        zoom: 12
      
      
    });
    
    map.addMarker({
      lat: 47.3954848,
      lng: 125.867592,
      title: 'BigHaiLun',
      infoWindow: {
          content: '<p>MyBigHaiLun</p>'
      }
    });
    
    


});

