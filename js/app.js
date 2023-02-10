//Slider
const bestSlider = new Swiper('.bestsellers-slider', {
    loop: true,
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  
  //Copyright year
  copyrightYear.textContent = new Date().getFullYear();