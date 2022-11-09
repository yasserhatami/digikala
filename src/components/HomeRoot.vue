<template>
  <div class="flex justify-center bg-blue-200 ">
    <div class="w-full h-full p-2 ">

      <SwiperSlide class="rounded"></SwiperSlide>
      
    </div>
  </div>
</template>

<script>
import SwiperSlide from "./SwiperSlider.vue";
export default {
  name: "HomeRoot",
  components: {
    SwiperSlide,
  },
};
</script>


<style scoped>
</style>
