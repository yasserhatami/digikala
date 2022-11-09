import { createRouter,createWebHistory } from "vue-router";

import Home from './components/HomeRoot.vue';
import product from "./components/productRoot.vue"
import buyProduct from "./components/buyProduct"
import basketIndex from "./components/basketIndex"
import contact from "./components/ContactVue.vue"

const routes =[
    {path : "/" , component : Home},
    {path : "/prodocts", component : product},
    {path : "/products/buyProduct/:id", component : buyProduct},
    {path : "/products/basket", component : basketIndex},
    {path : "/contact", component : contact}
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router