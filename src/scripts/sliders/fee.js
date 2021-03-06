import { DOM } from '../constants';

const swiperFee = new Swiper('#swiper-fee', {
  slidesPerColumnFill: 'row',

  allowTouchMove: false,

  resizeObserver: true,
  observer: true,
  observeParents: true,

  autoplay: {
    delay: 5000
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  on: {
    resize() {
      setTimeout(() => {
        swiperFee.update();
      }, 50);
    }
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      slidesPerColumn: 1,

      allowTouchMove: true
    },
    576: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 1,

      allowTouchMove: true
    },
    992: {
      slidesPerView: DOM.feeItems.length,
      slidesPerColumn: 1,

      allowTouchMove: false
    }
  }
});

export default swiperFee;
