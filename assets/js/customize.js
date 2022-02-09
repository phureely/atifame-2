


/*Mega menu*/
$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready

// breakpoint and up  
$(window).resize(function(){
	if ($(window).width() >= 980){	

      // when you hover a toggle show its dropdown menu
      $(".navbar .dropdown-toggle").hover(function () {
       $(this).parent().toggleClass("show");
       $(this).parent().find(".dropdown-menu").toggleClass("show"); 
     });

        // hide the menu when the mouse leaves the dropdown
        $( ".navbar .dropdown-menu" ).mouseleave(function() {
          $(this).removeClass("show");  
        });

		// do something here
	}	
});  

// document ready  
});


/*Daterangepicker*/
$(function(){
  $('input[name="datefilter"]').daterangepicker({
    autoUpdateInput: false,
    locale: {
      cancelLabel: 'Clear'
    }
  });

  $('input[name="datefilter').on('apply.daterangepicker', function(ev,piker){
    $('.date-in').val(piker.startDate.format('DD MMMM'));
    console.log(ev + " piker" + piker.startDate.format('DD MMMM'));
    console.log(ev + " piker" + piker.endDate.format('DD MMMM'));
    console.log(ev.timeStamp);

    $('.date-out').val(piker.endDate.format('DD MMMM'));
  });

  $('input[name="datefilter"]').on('cancel.daterangepicker',function(index,piker){
   $('.date-in').val("");

   $('.date-out').val("");


 });

});
/*Daterangepicker-js-tang giam*/

$( document ).ready(function() {
  // Handler for .ready() called.
});
/*Fancybox*/
$('[data-fancybox]').fancybox({
  youtube : {
    controls : 1,
    showinfo : 1
  },
  vimeo : {
    color : 'f00'
  }
});



$('.room-home-carousel-1').owlCarousel({
  loop:true,
  margin:30,
  stagePadding:15,
  nav:false,
  navText:["prev","next"],
  dots:false,
  dotsEach:true,
    // center: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:2
      },
      1025:{
        items:2
      },
      1400:{
        items:3
      }
    }
  });


$('.room-home-carousel-2').owlCarousel({
  loop:true,
  margin:30,
  stagePadding:15,
  nav:true,
  navText:["prev","next"],
  dots:true,
  dotsEach:true,
    // center: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      },
      1025:{
        items:1
      },
      1400:{
        items:1
      }
    }
  });

$('.single-room-carousel-100').owlCarousel({
  loop:true,
  margin:30,
  stagePadding:15,
  nav:false,
  navText:["prev","next"],
  dots:false,
  dotsEach:true,
    // center: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:3
      },
      1025:{
        items:3
      },
      1400:{
        items:1
      }
    }
  });

$('.testimonials-carousel-1').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  navText:["prev","next"],
  dots:false,
  dotsEach:false,
    // center: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      },
      1025:{
        items:1
      },
      1400:{
        items:1
      }
    }
  });
$('.testimonials-carousel-5').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  navText:["prev","next"],
  dots:true,
  dotsEach:false,
    // center: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      },
      1025:{
        items:1
      },
      1400:{
        items:1
      }
    }
  });



$(function() {
  $('#example').barrating({
    theme: 'fontawesome-stars'
  });
});




/*Tab*/
$(document).ready(function(){ 
  $('.tab-a').click(function(){  
    $(".tab").removeClass('tab-active');
    $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    $(".tab-a").removeClass('active-a');
    $(this).parent().find(".tab-a").addClass('active-a');
  });
});






/*accordion*/
const trigger = document.querySelectorAll(".trigger");
const content = document.querySelectorAll(".content");

window.addEventListener("load", (event) => {
  content.forEach((el, index) => {
    const height = el.scrollHeight;
    el.style.setProperty("--max-height", height + "px");
  });
});

trigger.forEach((el, index) => {
  el.addEventListener("click", (event) => {
    event.target.classList.toggle("is-open");
    event.target.nextElementSibling.classList.toggle("is-open");
  });
});
/*Count To*/
$('.timer').countTo();

/**/

/*Daterangepicker*/
$(function(){
  $('.single-room-map-date-right input[name="datefilter"]').daterangepicker({
    autoUpdateInput: false,
    locale: {
      cancelLabel: 'Clear'
    }
  });

  $('.single-room-map-date-right input[name="datefilter').on('apply.daterangepicker', function(ev,piker){
    $('.date-in').val(piker.startDate.format(''));
    // console.log(ev + " piker" + piker.startDate.format('DD MMMM'));
    // console.log(ev + " piker" + piker.endDate.format('DD MMMM'));
    // console.log(ev.timeStamp);

    $('.date-out').val(piker.endDate.format(''));
  });

  $('.single-room-map-date-right input[name="datefilter"]').on('cancel.daterangepicker',function(index,piker){
   $('.date-in').val("");

   $('.date-out').val("");


 });

});
// $(function(){
//   $('.tavo-calendar__day-inner').click(function(){
//       $('.tavo-calendar__day-inner').text('');
//       $('input[name="datefilter"]').text('').val("");
//   });
// });
/**/
$(function(){
//   $('.section-date-home .guests-content').click(function(){
//     // $(this).find('.is-active-guest').css("display","block");
//     // $('.guests-content .is-active-guest').addClass('is-active-guest').css('display','block');
//     // $('.guests-content').click(function() {
//     //   $('.guests-content .is-active-guest').removeClass('is-active-guest').css('display','none');
// // .find(".is-active-guest")
//     // });
//     console.log("CLICK");
//     if ($('.section-date-home .guests-content .is-active-guest-2').hasClass('is-active-guest')) {
//       $('.section-date-home .guests-content .is-active-guest-2').removeClass("is-active-guest");
//       $('.section-date-home .guests-content .is-active-guest-2').stop().slideUp('fast');
//       // console.log("FAIL");
//       return false;
//     } else {
//       $('.section-date-home .guests-content .is-active-guest-2').addClass("is-active-guest");
//       $('.section-date-home .guests-content .is-active-guest-2').stop().slideDown('fast');
//       // $(".is-active-guest").css("display","none");
//       // console.log("OKE");
//       return false;
//     }
//   });
$('.slide-up-down').click(function(){
  $('.is-active-guest').slideToggle('fast',function(){
    $(this).css('background-color','white');
  });
});
  // $('.slide-up-down').click(function() {

  // });
    // $(".plus-or-minus .fa-minus").click(function(){
    //   $('.guests-content').removeClass();
    // });
    $(".plus-or-minus .fa-plus").click(function () {
      var value = $(".number-1").text();
      var _val = parseInt(value) + 1;
      if (_val > 10 ){
        return false;
      }
      $(".number-1").text(_val);
      $(".number").text(_val);
    });
    $(".plus-or-minus .fa-minus").click(function () {
      var value = $(".number-1").text();
      var _val = parseInt(value) - 1;
      if (_val == -1 ){
        return false;
      }
      $(".number-1").text(_val);

      $(".number").text(_val);
    });
    $("#apply_btn").click(function(){
      $('.is-active-guest').slideUp("fast");
    });

  });


/*back-to-top*/
var btn = $("#button");
$(window).scroll(function(ev){
  if($(window).scrollTop() > 300 ){
    $("#button").addClass('show');
  } else {
    $("#button").removeClass('show');
  }
});
$("#button").on('click',function(ev){
  ev.preventDefault();
  $('html,body').animate({scrollTop:0}, '300');
});


/*lightgallery*/


// lightGallery(document.getElementById('animated-thumbnails-gallery'), {
//     thumbnail: true,
// });


/*Star-rating*/
$(document).ready(function(){
  
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    
    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
    }
    else {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);
    
  });
  
  
});


function responseMessage(msg) {
  $('.success-box').fadeIn(200);  
  $('.success-box div.text-message').html("<span>" + msg + "</span>");
}





// const myCalendar = new TavoCalendar('#my-calendar', {
//       format: "MM-DD-YYYY"
// })
// myCalendar.addEventListener('calendar-range', (ev) => {
//   const range = myCalendar.getRange();
//   console.log('Start', range.start)
//   console.log('End', range.end)
// });

// myCalendar.addEventListener('calendar-change', (ev) => {
//   const m = myCalendar.getFocusMonth();

//   alert(`Month change to ${m}`);
// })

// myCalendar.addEventListener('calendar-select', (ev) => {
//   alert(myCalendar.getSelected());
// })

// myCalendar.addEventListener('calendar-reset', (ev) => {
//   alert('reset');
// })

$(function(){
//   $('.section-date-home .guests-content').click(function(){
//     // $(this).find('.is-active-guest').css("display","block");
//     // $('.guests-content .is-active-guest').addClass('is-active-guest').css('display','block');
//     // $('.guests-content').click(function() {
//     //   $('.guests-content .is-active-guest').removeClass('is-active-guest').css('display','none');
// // .find(".is-active-guest")
//     // });
//     console.log("CLICK");
//     if ($('.section-date-home .guests-content .is-active-guest-2').hasClass('is-active-guest')) {
//       $('.section-date-home .guests-content .is-active-guest-2').removeClass("is-active-guest");
//       $('.section-date-home .guests-content .is-active-guest-2').stop().slideUp('fast');
//       // console.log("FAIL");
//       return false;
//     } else {
//       $('.section-date-home .guests-content .is-active-guest-2').addClass("is-active-guest");
//       $('.section-date-home .guests-content .is-active-guest-2').stop().slideDown('fast');
//       // $(".is-active-guest").css("display","none");
//       // console.log("OKE");
//       return false;
//     }
//   });
$('.slide-up-down').click(function(){
  // console.log($('this'));
   return false;
  $('.is-active-guest').slideDown('fast',function(){
    
    $('.is-active-guest').css('background-color','white');
   
  });

});
  // $('.slide-up-down').click(function() {

  // });
    // $(".plus-or-minus .fa-minus").click(function(){
    //   $('.guests-content').removeClass();
    // });
    $(".plus-or-minus .fa-plus").click(function () {
      var value = $(".number-1").text();
      var _val = parseInt(value) + 1;
      if (_val > 10 ){
        return false;
      }
      $(".number-1").text(_val);
      $(".number").text(_val);
    });
    $(".plus-or-minus .fa-minus").click(function () {
      var value = $(".number-1").text();
      var _val = parseInt(value) - 1;
      if (_val == -1 ){
        return false;
      }
      $(".number-1").text(_val);

      $(".number").text(_val);
    });
    $("#apply_btn").click(function(){
      $('.is-active-guest').slideUp("fast");
    });

  });

/*intl-tel-input-master*/
$("#demo").intlTelInput({
  allowDropdown: true,
   initialCountry: "",
   separateDialCode: true,
   formatOnDisplay: true,
   autoPlaceholder: "polite"
  });


/*Calendar*/
// const myCalendar = new TavoCalendar('#my-calendar', {
//   date: "2020-03-15"
// });

const options = {
    date: '2019-12-21'
}
const my_calendar = new TavoCalendar('#my-calendar', options);


$(function(){

$('#my-calendar .tavo-calendar__day-inner').daterangepicker({
  autoApply: true,
});
  $('#my-calendar .tavo-calendar__day-inner').on('apply.daterangepicker', function(ev,piker){
    console.log(ev);
    console.log(piker);
    $('#my-calendar .tavo-calendar__day-inner').text();
    $('.date-in').val(piker.startDate.format('MM-DD-YYYY'));
    console.log(piker.startDate.format('MM-DD-YYYY'));
    // console.log(ev + " piker" + piker.startDate.format('DD MMMM'));
    // console.log(ev + " piker" + piker.endDate.format('DD MMMM'));
    // console.log(ev.timeStamp);

    $('.date-out').val(piker.endDate.format('MM-DD-YYYY'));
  });
   $('.single-room-map-date-right input').on('apply.daterangepicker', function(ev,piker){
    console.log(ev);
    console.log(piker);
    $('.single-room-map-date-right input').text();
    $('.date-in').val(piker.startDate.format('MM-DD-YYYY'));
    console.log(piker.startDate.format('MM-DD-YYYY'));
    // console.log(ev + " piker" + piker.startDate.format('DD MMMM'));
    // console.log(ev + " piker" + piker.endDate.format('DD MMMM'));
    // console.log(ev.timeStamp);

    $('.date-out').val(piker.endDate.format('MM-DD-YYYY'));
  });

  $('#my-calendar .tavo-calendar__day-inner').on('cancel.daterangepicker',function(index,piker){
   $('.date-in').val("");

   $('.date-out').val("");
 });

});