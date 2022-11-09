<template >
  <div>
    <div v-if="cartItems.length > 0" class="bg-blue-100">
      <div class="basket-cantainer">
        <p class="text-center font-bold text-xl pt-1">Your shopping cart</p>

        <div v-for="product in cartItems" :key="product.id">
          <div class="grid grid-cols-4 border-4 border-gray-400 rounded my-1">
            <img
              class="ml-1"
              :src="product.images?.main.url[0]"
              alt="image broken"
            />

            <div class="col-span-3 grid md:ml-2">
              <p class="px-2 md:text-xl">{{ product.title_en }}</p>

              <div class="grid ml-2 justify-items-start">
                <div class="font-bold md:text-xl">
                  Price :
                  {{
                    compute(product.default_variant.price?.selling_price)
                  }}
                  Rial
                </div>

                <div class="justify-self-start w-36">
                  <div class="flex justify-around">
                    <div class="flex">
                      <button @click="decrement(product.id)">
                        <img class="w-5 mr-1" src="@/assets/minus.svg" alt="" />
                      </button>
                      <span class="font-bold text-xl">{{
                        product.quantity
                      }}</span>
                      <button @click="increment(product.id)">
                        <img class="w-5 ml-1" src="@/assets/plus.svg" alt="" />
                      </button>
                    </div>

                    <button
                      @click="removeItem(product.id)"
                      class="justify-self-center"
                    >
                      <img
                        class="w-8 justify-self-center"
                        src="@\assets\delete.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <p class="font-bold text-xl">
                    Sub Total :
                    {{
                      compute(
                        product.quantity *
                          product.default_variant.price?.selling_price
                      )
                    }}
                    Rial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          mt-3
          pb-3
          totalAndCleareAll
          flex
          border-4 border-indigo-200 border-t-indigo-500
          justify-between
        "
      >
        <div class="totalPrice mt-3">
          <p class="ml-3 font-bold text-xl">
            Total Prices : <span>{{ compute(totoalPrices) }} Rial</span>
          </p>
        </div>

        <div class="cleareAll">
          <button
            class="
              bg-red-600
              hover:bg-red-700
              text-white
              font-bold
              py-2
              px-4
              border border-blue-700
              rounded
              mt-1
              mr-2
            "
            @click="clearAllCart"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
    <div v-else class="bg-blue-200 text-center py-48 text-6xl">
      You have not added any products to your shopping cart yet!
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    function compute(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

    function increment(id) {
      store.dispatch("cart/increment", id);
    }
    function decrement(id) {
      store.dispatch("cart/decrement", id);
    }

    function removeItem(id) {
      console.log(id);
      store.dispatch("cart/removeItem", id);
    }
    function clearAllCart() {
      store.dispatch("cart/clearAllCart");
    }

    let cartItems = [];
    cartItems = computed(() => store.getters["cart/allItems"]);
    const totoalPrices = computed(() => store.getters["cart/totoalPrices"]);
    return {
      cartItems,
      compute,
      totoalPrices,
      increment,
      decrement,
      removeItem,
      clearAllCart,
    };
  },
};
</script>
<style lang="">
</style>