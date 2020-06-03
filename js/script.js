// *Header Burger Menu

$("document").ready(function () {
  $(".header__burger").click(function () {
    $(this).toggleClass("active");
  });
  $(".section-feedback__slider").slick({
    dots: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
