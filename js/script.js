$(function(){

    $('.dropdown').click(function(){
        $(".dropItem").slideToggle('300')
    })
})
$(function(){

    $('.dropdown6').click(function(){
        $(".dropItem6").slideToggle('300')
    })
})
$(function(){

    $('.drop').click(function(){
        $(".dropItem7").css('transform' , 'translateX(0)')
    })

    $('.dropping').click(function(){
        $(".dropItem7").css('transform' , 'translateX(-500%)')
    })

    $('.none4').click(function(){
        $(".none3").slideToggle('300')
    })

})
$(function(){

    $('.dropdown1').click(function(){
        $(".dropItem1").slideToggle('300')
        $(".dropItem4").slideUp('300')
        $(".dropItem2").slideUp('300')
        $(".dropItem3").slideUp('300')
        $(".dropItem5").slideUp('300')
    })
})
$(function(){

    $('.dropdown2').click(function(){
        $(".dropItem2").slideToggle('300')
        $(".dropItem1").slideUp('300')
        $(".dropItem4").slideUp('300')
        $(".dropItem3").slideUp('300')
        $(".dropItem5").slideUp('300')
    })
})
$(function(){

    $('.dropdown3').click(function(){
        $(".dropItem3").slideToggle('300')
        $(".dropItem1").slideUp('300')
        $(".dropItem2").slideUp('300')
        $(".dropItem4").slideUp('300')
        $(".dropItem5").slideUp('300')
    })
})
$(function(){

    $('.dropdown4').click(function(){
        $(".dropItem4").slideToggle('300')
        $(".dropItem1").slideUp('300')
        $(".dropItem2").slideUp('300')
        $(".dropItem3").slideUp('300')
        $(".dropItem5").slideUp('300')
    })
})
$(function(){

    $('.dropdown5').click(function(){
        $(".dropItem5").slideToggle('300')
        $(".dropItem1").slideUp('300')
        $(".dropItem2").slideUp('300')
        $(".dropItem3").slideUp('300')
        $(".dropItem4").slideUp('300')
    })

})
$('.slider').slick({
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),
});
$('#slider').slick({
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.prev-btn2'),
    nextArrow: $('.next-btn2'),
    responsive : [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3
            }
            
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2
            }
            
        },
        {
            
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
            
        }
    ]
});
$('#slider11').slick({
    infinite: true,
    arrows: false, 
    dots: true
})
$('.main').slick({
    infinite: true,
    arrows: false, 
    dots: true
})

$('.slick1').slick({
    infinite: true,
    arrows: false, 
    slidesToShow:4,
    slidesToScroll: 1,
    centerPadding: '60px',
    responsive : [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2
            }
            
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
            
        }
    ]
})


// Show the first tab and hide the rest
$('.tab-nav li:first-child').addClass('active');
$('.content').hide();
$('.content:first').show();

// Click function
$('.tab-nav li').click(function(){
  $('.tab-nav li').removeClass('active');
  $(this).addClass('active');
  $('.content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

// Show the first tab and hide the rest
$('.tab-nav1 li:first-child').addClass('active1');
$('.content1').hide();
$('.content1:first').show();

// Click function
$('.tab-nav1 li').click(function(){
  $('.tab-nav1 li').removeClass('active1');
  $(this).addClass('active1');
  $('.content1').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});