<template>
<div>
  <top></top>
  <div class="tbar">
    <div>
      <router-link to='/shouye/all'>
        <span>全部</span>
      </router-link>
    </div>
    <div>
      <router-link to='/shouye/fine'>
        <span>精华</span>
      </router-link>
    </div>
    <div>
      <router-link to='/shouye/share'>
        <span>分享</span>
      </router-link>
    </div>
    <div>
      <router-link to='/shouye/answer'>
        <span>问答</span>
      </router-link>
    </div>
    <div>
      <router-link to='/shouye/recruitment'>
        <span>招聘</span>
      </router-link>
    </div>

  </div>
</div>

</template>

<script>
import top from "../top.vue";
export default {
  data(){
    return{

    }
  },
  components:{
    top
  }
}
</script>


<style lang="scss" scoped>
.tbar{
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  background-color: #444444;
  border-top: 1px solid #4B4B4B;
  line-height: 30px;
  .on{
    color: #80BD01;
    span{
      font-size: 14px;
    }
  }
  span{
    display: block;
    text-align: center;
    font-size: 12px;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
}
</style>
