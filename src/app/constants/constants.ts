export const CONSTANTS = {
  colors: {
    GRAY: '#808080',
    BLUE: '#0000FF',
    RED: '#FF0000',
    GREEN: '#00FF00',
    'SEA GREEN': '#2E8B57',
  },

  featureConfig: {
    autoHeight: false,
    navigation: false,
    pagination: { clickable: true, dynamicBullets: true },
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 2,
    spaceBetween: 20,
    grabCursor: true,
    direction: 'horizontal',
    loop: true,
    autoplay: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      740: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  },
  staticConfig: {
    autoHeight: false,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: false },
    centeredSlidesBounds: true,
    centeredSlides: true,
    initialSlide: 2,
    slidesPerView: 3,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    autoplay: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
    },
  },
  vehicleConfig: {
    autoHeight: false,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: true },
    centeredSlidesBounds: true,
    centeredSlides: true,
    initialSlide: 2,
    slidesPerView: 3,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      delay: 1000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  },
  reviewConfig: {
    autoHeight: false,
    navigation: false,
    pagination: { clickable: true, dynamicBullets: false },
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 2,
    spaceBetween: 20,
    grabCursor: true,
    direction: 'horizontal',
    loop: true,
    autoplay: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      740: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  },
};
