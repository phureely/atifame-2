$("img:not(.banner__item img)").each(function () {
  $(this).attr("loading", "lazy");
});

document.body.addEventListener(
  "load",
  (e) => {
    if (e.target.tagName != "IMG") {
      return;
    }
    // Remove the blurry placeholder.
    e.target.style.backgroundImage = "none";
  },
  /* capture */
  true
);

$(document).ready(function () {

  /* --- Menu --- */
  $(".lang__menu-icon").click(function (e) {
    e.preventDefault();
    $(".lang__menu_drop").toggleClass("active");
  });

  var $lang__menu = $('.lang__menu');
  $(document).mouseup(e => {

    if (!$lang__menu.is(e.target) // if the target of the click isn't the container...
      &&
      $lang__menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $(".lang__menu_drop").removeClass("active");
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $(".header").addClass("fixed");
    }
    else {
      $(".header").removeClass("fixed");
    }
  });

  $(".nav__sub li a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      var pos = $(hash).offset().top;
      var pos_y = pos;
      $('html, body').animate({
        scrollTop: pos_y
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(".menu-icon").click(function (e) {
    e.preventDefault();
    if ($(".header__main").hasClass("active")) {
      $(".nav__child").removeClass("active");
    }
    $(".header__main").toggleClass("active");


  });

  $(".close-menu").click(function (e) {
    e.preventDefault();
    $(".header__main").removeClass("active");
    $(".nav__child").removeClass("active");
  });


  function responsive() {
    if ($(document).width() < 1023) {
      $(".nav__item").removeClass("hover");

      $(".nav__icon").click(function (e) {
        e.preventDefault();
        var nav__child = $(this).parent(".nav__item").find(".nav__child");
        if (nav__child.hasClass("active")) {
          nav__child.removeClass("active");
        }
        else {
          $(".nav__child").removeClass("active");
          nav__child.addClass("active");
        }

      });
    }
    else {
      $(".nav__item").addClass("hover");
      $(".nav__child").removeClass("active");
    }

  };

  responsive();

  $(document).resize(function () {
    responsive();
  });

  // ------
  $(window).scroll(function () {
    if ($(window).scrollTop() > 450) {
      $('.back-top').addClass("show")
    }
    else {
      $('.back-top').removeClass("show")
    }
  });
  $('.back-top').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });


});
