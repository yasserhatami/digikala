import { createStore } from 'vuex';
import products from './modules/products.js';
import getTheProduct from './modules/getTheProduct.js'
import cart from './modules/cart.js'


const store = createStore({
    modules: {
      products,
      getTheProduct,
      cart
    },
    state:{
      count : 0
    }
  })
  export default store;

  