<template>
  <swiper 
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    autoplay
    
    :pagination="{ clickable: true }"
    
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="rounded"><img class="w-full"  src="@/assets/one.jpg" alt=""></swiper-slide>
    <swiper-slide class="rounded"><img class="w-full"  src="@/assets/two.png" alt=""></swiper-slide>
    <swiper-slide class="rounded"><img class="w-full"  src="@/assets/three.webp" alt=""></swiper-slide>
  </swiper>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/autoplay';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      };
    },
  };
</script>