$(function(){

// PRELOADER

    $(document).ready(function() {
        if ($.fn.jpreLoader){
            $('body').jpreLoader({
                showPercentage: false,
                loaderVPos: '50%'
            });
        }
    });

    $(window).smartload(function(){
        if ($.fn.matchHeight){
            $('.match-height').matchHeight();
        }
    });

// SWITCHING PAGES

  $(document).on('ready page:load', function() {

// On Click of HOME
    $('#home-click').on('click', function() {
      $('#home').css('display', 'table')
      $('#contact-page').addClass('hide-section')
      $('#contact-page').removeClass('show-section')
      $('#about-page').addClass('hide-section')
      $('#about-page').removeClass('show-section')
      $('#skills-page').addClass('hide-section')
      $('#skills-page').removeClass('show-section')
      $('#portfolio-page').addClass('hide-section')
      $('#portfolio-page').removeClass('show-section')



    });

// On Click of CONTACT

    $('#contact-click').on('click', function() {
      $('#contact-page').addClass('show-section')
      $('#contact-page').removeClass('hide-section')
      $('#home').css('display', 'none')
      $('#about-page').addClass('hide-section')
      $('#about-page').removeClass('show-section')
      $('#skills-page').addClass('hide-section')
      $('#skills-page').removeClass('show-section')
      $('#portfolio-page').addClass('hide-section')
      $('#portfolio-page').removeClass('show-section')


    });

// On Click of ABOUT ME

    $('#about-click').on('click', function() {
      $('#about-page').addClass('show-section')
      $('#about-page').removeClass('hide-section')
      $('#home').css('display', 'none')
      $('#contact-page').addClass('hide-section')
      $('#contact-page').removeClass('show-section')
      $('#skills-page').addClass('hide-section')
      $('#skills-page').removeClass('show-section')
      $('#portfolio-page').addClass('hide-section')
      $('#portfolio-page').removeClass('show-section')

    })

// On Click of SKILLS

    $('#skill-click').on('click', function() {
      $('#skills-page').addClass('show-section')
      $('#skills-page').removeClass('hide-section')
      $('#home').css('display', 'none')
      $('#contact-page').addClass('hide-section')
      $('#contact-page').removeClass('show-section')
      $('#about-page').addClass('hide-section')
      $('#about-page').removeClass('show-section')
      $('#portfolio-page').addClass('hide-section')
      $('#portfolio-page').removeClass('show-section')

    })

// On Click of PORTFOLIO
    $('#portfolio-click').on('click', function() {
      $('#portfolio-page').addClass('show-section')
      $('#portfolio-page').removeClass('hide-section')
      $('#home').css('display', 'none')
      $('#contact-page').addClass('hide-section')
      $('#contact-page').removeClass('show-section')
      $('#skills-page').addClass('hide-section')
      $('#skills-page').removeClass('show-section')
      $('#about-page').addClass('hide-section')
      $('#about-page').removeClass('show-section')

    })

  });

// RESPONSIVE
    function setResizeContent() {
        var minHeight = $(window).height();
        $('.full-screen').css('min-height', minHeight);
    }

    setResizeContent();

    $(window).smartresize(function(){
        setResizeContent();
    });


    $('body').on('activate.bs.scrollspy', function(){
        $('.page-scroll.dropdown > .dropdown-toggle').each(function(){
            $(this).attr('data-target', '#');
        });
    });


// On Hover menu

    var toggleNavbarMethod = function(){
        var ww = Math.max($(window).width(), window.innerWidth),
        dropdown = $('.navbar .dropdown');

        if (ww >= 992){
            dropdown.on('mouseover', function(){
                if (!$(this).hasClass('open')){
                    $(this).addClass('open');
                }
            }).on('mouseout', function(){
                if ($(this).hasClass('open')){
                    $(this).removeClass('open');
                }
            });
        }
        else {
            dropdown.off('mouseover').off('mouseout');
        }
    };

    toggleNavbarMethod();

    // Call toggleNavbarMethod(); when window is resized.
    $(window).smartresize(function(){
        toggleNavbarMethod();
    });



    $('.dropdown-menu').click(function(e){
        e.stopPropagation();
    });




// CIRCLE CHART
  var circleChart = function (){
      $('.circle-chart').find('.item-progress').each(function(){
          var item = $(this),
          maxHeight = 108,
          newHeight = maxHeight * ($(this).data('percent') / 100);

          // Only animate elements when using non-mobile devices
          // if (jQuery.browser.mobile === false){
          //     item.one('inview', function(isInView) {
          //         if (isInView){
          //             // Animate item
          //             item.animate({
          //                 height: newHeight
          //             },1500);
          //         }
          //     });
          // }
          // else{
          //     item.css('height', newHeight);
          // }
      });
  };

// Call circleChart() when window is loaded.
  $(window).smartload(function(){
      circleChart();
  });

});
