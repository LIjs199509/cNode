<template>
  <div>
    <top></top>
    <div class="content">
      <span class="li">关于项目</span>
      <span class="describe">本项目是基于Vue2开发的cNode社区，期间使用到
        Vue-resource、Vue-router、Mui、MintUI，通过webpack构建工具打包项目。
      </span>
      <span class="li">源码地址</span>
      <span class="describe">
        <a href="https://coding.net/u/Qwest/p/cNode/git">
         https://coding.net/u/Qwest/p/cNode/git
        </a>
      </span>
      <span class="li">技术支持</span>
      <span class="describe">目的是为了用cNode社区提供的API进行练习，主要是加强
        自己对于vue框架的学习，以及数据渲染、数据请求的操作。十分感谢
        <a href="https://cnodejs.org/">cNode社区</a>提供的免费API接口，作为练习
        很适合，并且社区里的帖子能对自己提高有很大的帮助，自己也不用再去下载APP了
        😄😄😄😄
      </span>
      <span class="li">当前版本</span>
      <span class="describe">
        Version1.0 End By Qwest
      </span>
      <div class="img">
        <img src="../images/haha.jpg" alt="">
        <p>The End . Thanks .🎧</p>
      </div>
    </div>
  </div>
</template>


<script>
import top from "./top.vue";
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
div{
  height: 100%;
}
.content{
  margin: 5px;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  .img{
    text-align: center;
    margin-top: 15px;
    img{
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
  }
  span{
    margin: 10px;
  }
  .li{
    display: block;
    font-size: 13px;
  }
  .describe{
    text-indent: 20px;
    display: block;
    font-size: 12px;
  }
}
</style>
