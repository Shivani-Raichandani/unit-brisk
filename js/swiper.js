var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 750,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

function Circlle(el) {
  $(el)
    .circleProgress({ fill: { color: "#fff" } })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .text(String(stepValue.toFixed(2)).substr(2) + "%");
    });
}

Circlle(".rounds");
