import axios from "axios"

const getTheProduct = {
    namespaced : true,
    state : {
        theProductArr : {}
    },
    getters : {
        theProduct(state){
            return state.theProductArr
        }
    },
    mutations : {
        setTheProduct(state,input){
            state.theProductArr = input
        }
    },
    actions : {
        async fetchTheProduct(context,param){
            const numParam  = Number(param)
            const response = await axios.get('https://api.digikala.com/v1/product/6460974/');
            const fetchTheProduct = response.data.data.recommendations.new_related_products.products[numParam]
            context.commit('setTheProduct',fetchTheProduct)
            console.log(fetchTheProduct.default_variant.price.order_limit)
        }
    }
}
export default getTheProduct