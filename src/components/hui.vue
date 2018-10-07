<template>
  <button @click="hui()">回到顶部</button>
</template>

<script>
export default {
 data(){
   return{}
 },
 methods:{
   hui(){
     $(document).scrollTop(0)
   }
 }
}
</script>

<style lang="scss" scoped>
button{
  white-space: normal;
  position: fixed;
  width: 18px;
  right: 0;
  bottom: 20px;
  padding: 0;
}
</style>
