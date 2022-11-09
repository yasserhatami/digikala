<template >
  <div v-if="currentProduct" class="bg-blue-200">
    <div v-if="loading" class="loadingcontainer">
      <div
        class="
          fixed
          top-0
          right-0
          h-screen
          w-screen
          z-50
          flex
          justify-center
          items-center
        "
      >
        <div
          class="
            animate-spin
            rounded-full
            h-64
            w-64
            border-t-2 border-b-2 border-gray-900
          "
        ></div>
      </div>
    </div>

    <div v-else>
      <h2 class="text-xl font-bold mx-4">
        {{ currentProduct.title_en }}
      </h2>
      <div class="cantainer w-full">
        <div class="grid grid-cols-6 gap-4">
          <div class="col-span-6 md:col-span-3 lg:col-span-2 mt-4 ml-2">
            <img
              v-bind:src="currentProduct.images.main.url[0]"
              class="object-contain h-full w-full pb-5"
            />
          </div>
          <div
            class="
              col-span-1
              md:col-span-3
              lg:col-span-2
              ml-2
              md:ml-0 md:mt-4
              pb-4
            "
          >
            <table
              class="
                border-collapse border border-slate-400
                h-32
                md:w-80
                w-96
                rounded
              "
            >
              <tbody>
                <tr>
                  <td class="border border-gray-400">
                    <span class="ml-5">Available colors</span>
                  </td>
                  <td class="border border-gray-400">
                    <div
                      :style="{
                        'background-color':
                          currentProduct.default_variant?.color.hex_code,
                      }"
                      class="rounded-full w-6 h-6 ml-4"
                    ></div>
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-400">
                    <span class="ml-5">Inventory now</span>
                  </td>
                  <td class="border border-gray-400">
                    <span class="ml-3">{{
                      currentProduct.default_variant?.price.order_limit +
                      " " +
                      "piece"
                    }}</span>
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-400">
                    <span class="ml-5">Price</span>
                  </td>
                  <td class="border border-gray-400">
                    {{
                      compute(
                        currentProduct.default_variant?.price.selling_price
                      ) +
                      " " +
                      "R"
                    }}
                  </td>
                  <!-- product -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed,ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  
  setup() {
    const route = useRoute();
    const param = route.params.id;
    const store = useStore();
    const loading = ref(false)

    async function fetchTheProduct() {
       loading.value =true;
      await store.dispatch("getTheProduct/fetchTheProduct", param);
      loading.value = false;
    }
    fetchTheProduct();
    let currentProduct = null;
    currentProduct = computed(() => store.getters["getTheProduct/theProduct"]);

    function compute(x) {
      if (!x) return "";
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

    return { param, currentProduct, compute,loading};
  },
};
</script>
<style lang="">
</style>