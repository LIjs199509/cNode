<template>
  <div>
    <tbar></tbar>
    <router-view></router-view>
    <hui></hui>
  </div>
</template>

<script>
import hui from "../hui.vue";
import tbar from "./tbar.vue";
export default {
  data(){
    return{

    }
  },
  components:{
    tbar,
    hui
  }
}
</script>

<style lang="scss" scoped>
tbar{
  z-index: 1000;
}
</style>
