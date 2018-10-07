<template>
  <div class="top">
    <div class="icon">
      <i class="mui-icon mui-icon-bars"  @click="dianji()"></i>
      <mt-popup
        v-model="popupVisible"
        position="left">
        <div class="rightMenu">
          <div class="rightimg">
            <iframe src="../images/cnodejs_light.svg" frameborder="0"></iframe>
          </div>
          <p>CNode社区</p>
          <div>
            <router-link to='/shouye' :class="{ onw : 'shouye' === $route.path.split('/')[1]}">
              <i class="mui-icon mui-icon-chatboxes"></i>
              <span>首页</span>
            </router-link>
          </div>
          <div>
            <router-link to='/personal' :class="{ onw : '/personal' === $route.path}">
              <s><i class="mui-icon mui-icon-person"></i>
              <span>个人</span></s>

            </router-link>
          </div>
          <div>
            <router-link to='/published' :class="{ onw : '/published' === $route.path}">
              <s><i class="mui-icon mui-icon-compose"></i>
              <span>发表</span></s>
            </router-link>
          </div>
          <div>
            <router-link to='/about' :class="{ onw : '/about' === $route.path}">
              <i class="mui-icon mui-icon-info"></i>
              <span>关于</span>
            </router-link>
          </div>
        </div>
      </mt-popup>
    </div>

    <div class="img">
      <iframe src="../images/cnodejs_light.svg" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      popupVisible:false
    }
  },
  methods:{
    dianji(){
      this.popupVisible = true;
    }
  }
}
</script>


<style lang="scss" scoped>
  .top{
    position: relative;
    background-color: #444444;
    .icon{
      color: #fff;
      position: absolute;
      top: 14px;
      left: 20px;
      i{
        z-index: 999;
      }
      .rightMenu{
        height: 500px;
        width: 250px;
        background-color: #444444;
        .rightimg{
          display: block;
          text-align: center;
          width: 100%;
          height: 3.5rem;
        }
        p{
          text-align: center;
          color: #fff;
          font-size: 18px;
          padding: 10px;
          display: block;
        }
        div{
          display: block;
          text-align: center;
          width: 250px;
          height: 64px;
          line-height: 64px;
        }
        a{
          color: white;
        }
        .onw{
          background-color:rgba(158, 259, 100, 0.4);
          width: 250px;
          display: block;
          color: #fff;
        }
        iframe{
          z-index: 99;
          width: 200px;
          height: 190px;
        }
      }
    }
    .img{
      display: block;
      text-align: center;
      padding: 5px;
      z-index: 50;
      margin: 0 50px;
      iframe{
        width: 140px;
        height: 40px;
      }
    }
  }
</style>

