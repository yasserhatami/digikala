<template>
 <div>
  <HeaderVue></HeaderVue>
  <router-view></router-view>
  <FooterVue></FooterVue>
  <div>haaaaa</div>

 </div>
</template>

<script>


import HeaderVue from "./components/HeaderVue.vue"
import FooterVue from "./components/FooterVue.vue"
export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterVue
  }
  
}
</script>

<style>

</style>
