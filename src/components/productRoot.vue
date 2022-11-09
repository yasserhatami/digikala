<template lang="">
    <div>
      <div v-if="loading" class="loadingcontainer">
        <div class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div class="animate-spin rounded-full h-64 w-64 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </div>
      

      <div v-else class="bg-blue-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4 p-5">
      <div v-for="product in prosuctArr" :key="product.id" >

       <div class=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
           <a @click="goTobuy(prosuctArr.indexOf(product))">
             <img class="rounded-t-lg" :src="product.images.main.url[0]" alt="image" />
           </a>
           <div class="p-5">
              <a>
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{product.title_en.substring(0, 15)}}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{product.title_en}}</p>
              <span class="text-2xl">Price : {{compute(product.default_variant.price.selling_price)}} R </span>
              <div>
                <button @click="addToCart(product)" class="mt-4 bg-blue-300 hover:bg-blue-500 text-gray-700 font-bold py-2 px-4 border border-blue-700 rounded">
                  Add to basket
                </button>
                <!-- {{cartarr}} -->
              </div>
              
           </div>
           
        </div>
        
      </div>
    </div>
    </div>
</template>
<script>
import { useStore } from "vuex";
import { computed,ref } from "@vue/runtime-core";
export default {
  methods: {
    goTobuy(x) {
      
      this.$router.push({ path: `/products/buyProduct/${x}`});
    },
  },
  setup() {
    const store = useStore();
    const prosuctArr = computed(() => store.getters["products/allproducts"]);
    const loading = ref(false)

    

    async function fetchProdoct() {
      loading.value =true;
      await store.dispatch("products/fetchProdoct");
      loading.value = false;
    }
    fetchProdoct();

    function compute(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

    async function addToCart(product){
      await store.dispatch('cart/addToCart',product);
    }
    const cartarr = computed(()=>store.state.cart);

    return { prosuctArr, compute,loading,addToCart,cartarr };
  },
};
</script>
<style>
a {
  cursor: pointer;
}
</style>