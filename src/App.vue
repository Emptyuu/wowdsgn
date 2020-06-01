<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>  
</template>


<script>
import Tabbar from '@/views/Tabbar/index'
export default {
  components:{
    Tabbar
  }
}
</script>

<style lang="scss">
@import url("assets/css/reset.css");
</style>
