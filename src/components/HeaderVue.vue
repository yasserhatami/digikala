<template>
  <div>
    <nav
      class="
        flex
        items-center
        justify-between
        flex-wrap
        text-black
        bg-gray-500
        p-4
        
      "
    >
      <div class="flex items-center flex-no-shrink mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Products</span>
      </div>
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="
            flex
            items-center
            px-3
            py-2
            border
            rounded
            text-teal-lighter
            border-teal-light
            hover:text-white hover:border-white
          "
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
      >
        <div class="text-sm sm:flex-grow">
          <router-link
            to="/"
            class="
              no-underline
              block
              mt-4
              sm:inline-block sm:mt-0
              text-teal-lighter
              hover:text-white
              mr-4
            "
          >
            Home
          </router-link>
          <router-link
            to="/prodocts"
            class="
              no-underline
              block
              mt-4
              sm:inline-block sm:mt-0
              text-teal-lighter
              hover:text-white
              mr-1
            "
          >
            Products
          </router-link>

           <router-link
            to="/contact"
            class="
              no-underline
              block
              mt-4
              sm:inline-block sm:mt-0
              text-teal-lighter
              hover:text-white
              ml-3
            "
          >
            Contact
          </router-link>
          
        </div>
        <div>
          <router-link
            to="/products/basket"
            class="
              no-underline
              inline-block
              text-sm
              px-2
              py-2
              leading-none
              border
              rounded
              text-white
              border-white
              hover:border-transparent hover:text-teal hover:bg-white
              mt-4
              sm:mt-0
            "
          >
            <div class="flex">
            <div
              class="
                inline-flex
                justify-center
                text-xs
                w-5
                h-5
                mt-1
                mr-1
                text-white
                bg-blue-500
                rounded-full
                border-1 border-white
              "
            >
              {{basketLenght}}
            </div>
             <img
              class="object-cover h-6 w-6"
              src="../assets/159430.svg"
              alt="sds"
            />
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "HeaderVue",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
  setup(){
    const store = useStore();
    
    let basketLenght = computed(() => store.getters["cart/basket"]);
    return{basketLenght}
  }
};
</script>

<style scoped>
.colla {
  transition-delay: 4;
}
</style>