
import Swal from "sweetalert2";

function updateLocalStorage(cart){
    localStorage.setItem('cart',JSON.stringify(cart))
}
const cart = {
    namespaced : true,
    state : {
        count : 3,
        cart : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): []
    },
    getters:{
        basket(state){
            return state.cart.length
        },
        allItems(state){
            console.log(state.cart)
            return state.cart
        },
        totoalPrices(state){
            if(state.cart.length > 0) {
                return state.cart.reduce((total,p)=>{
                    return total + p.default_variant.price?.selling_price * p.quantity
                },0)
            } else {
                return ''
            }
            
        }
    },
   
    mutations : {
       add(state,input){
        const item = state.cart.find(p => p.id == input.id)
        if(!item){
            state.cart.push({
                ...input,
                quantity : 1
            })
        }else{
            item.quantity++
            
        }

        updateLocalStorage(state.cart)
      
       },

       increment(state,id){
        const item = state.cart.find(p => p.id == id)
        if(item){
            item.quantity++
        }
        updateLocalStorage(state.cart)
       },

       decrement(state,id){
        const item = state.cart.find(p => p.id == id)
        
        if(item){
            if(item.quantity > 1){
                item.quantity--
            }else{
                const item2 = state.cart.findIndex(p => p.id == id)
                state.cart.splice(item2,1)
        
            }
        }
        updateLocalStorage(state.cart)
       },

       removeItem(state,id){
        const item = state.cart.findIndex(p => p.id == id)
        console.log(item)
        state.cart.splice(item,1)
        
        updateLocalStorage(state.cart)
       },
       clearAllCart(state){
        state.cart = [];
        updateLocalStorage(state.cart)
       }


    },
    actions : {
         addToCart( context,product){
            context.commit("add",product)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'product added to basket',
                showConfirmButton: false,
                timer: 1500
              })
              
        },
        increment( context,id){
            context.commit("increment",id)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'product updated',
                showConfirmButton: false,
                timer: 1500
              })
              
        },
        decrement( context,id){
            context.commit("decrement",id)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'product updated',
                showConfirmButton: false,
                timer: 1500
              })
              
        },
        removeItem( context,id){
            context.commit("removeItem",id)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'product deleted',
                showConfirmButton: false,
                timer: 1500
              })
              
        },
        clearAllCart(context){
            context.commit("clearAllCart")
            Swal.fire({
                position: 'center',
                icon: 'deleted',
                title: 'All Product Cleared',
                showConfirmButton: false,
                timer: 1500
              })
        }
        
    }
}
export default cart;