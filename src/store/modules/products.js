import axios from "axios"
// import Swal from "sweetalert2"

const products = {
    namespaced : true ,

    state : {
       products:[],
       basket: []
    },
    getters : {
        allproducts(state){
            return state.products
        },
        myBasket(state){
            return state.basket
        }
    },
    mutations : {
        setProducts(state,productsArray){
            
            state.products = productsArray
        },
        addToBasket(state,product){
            state.basket.push(product)
        }
    },
    actions : {
        async fetchProdoct(context){
            const response = await axios.get('https://api.digikala.com/v1/product/6460974/');
            const fetchProducts = response.data.data.recommendations.new_related_products.products
            context.commit('setProducts',fetchProducts)
            
            

        }
    }

}

export default products;