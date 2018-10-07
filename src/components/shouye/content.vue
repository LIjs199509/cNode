<template>
  <div>
    <div class="top">
      <i class="mui-icon mui-icon-undo" @click="$router.back()"></i>
      <div class="img">
          <iframe src="../images/cnodejs_light.svg" frameborder="0"></iframe>
        </div>
      </div>
      <div class="post">
        <div class="title">
          <div class="brief">
            <div class="icon">
              <img :src="text.author.avatar_url" v-if="img">
              <div class="information">
                <span class="author" v-if="img">{{ text.author.loginname }}</span>
                <span s>{{ text.visit_count }} 次浏览</span>
                <span>发布于 {{ text.time }}</span>
              </div>
            </div>
            <div>
            </div>
          </div>
          <span class="theme">
            <span class="iconfont icon-tuijian red" v-if="text.top"></span>
            <span class="tab">{{ tab }}</span>
            {{ text.title }}
          </span>
        </div>
        <div class="main" v-html="text.content">
        </div>

      </div>
      <div class="replies">
        <span class="title">{{ replies.length }}条回复</span>
        <div class="comments" v-for="item in replies" :key="item.id">
          <img :src="item.author.avatar_url" v-if="img">
          <span class="author">{{ item.author.loginname }}</span>
          <div class="lou">
            <span class="small">{{ item.num }}</span>
            <span class="small">{{ item.time }}</span>
          </div>
          <div class="louxia" v-html="item.content">
          </div>
        </div>
      </div>
      <hui></hui>
  </div>
</template>


<script>
import top from "../top.vue";
import hui from "../hui.vue";
export default {
  data(){
    return{
      id : this.$route.params.id,
      text:'',
      tab:'',
      replies:'',
      img:false
    }
  },
  components:{
    top,
    hui
  },
  created(){
    this.content(this.id)
  },
  methods:{
    content(id){
      this.$http.get('https://cnodejs.org/api/v1/topic/' + id).then(res => {
        var text = JSON.parse(res.bodyText).data;
        var oldtime = Date.parse(text.create_at);
        var time = new Date().getTime() - oldtime;
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        var monthC =time/month;
        var weekC =time/(7*day);
        var dayC =time/day;
        var hourC =time/hour;
        var minC =time/minute;
        var chatime = new Array();
        var cTime = new Object();
        if(monthC>=1){
          text.time=(parseInt(monthC) + "月前");
        }
        else if(weekC>=1){
          text.time=(parseInt(weekC) + "周前");
        }
        else if(dayC>=1){
          text.time=(parseInt(dayC) +"天前");
        }
        else if(hourC>=1){
          text.time=(parseInt(hourC) +"小时前");
        }
        else if(minC>=1){
          text.time=(parseInt(minC) +"分钟前");
        }else{
          text.time=('刚刚')
        }
        switch (text.tab) {
          case 'ask':
            this.tab = '问答'
            break;
          case 'share':
            this.tab = '分享'
            break;
          case 'job':
            this.tab = '招聘'
            break;
          case 'good':
            this.tab = '精华'
            break;
        }
        this.text = text;
        for (let i = 0; i < text.replies.length; i++) {
          text.replies[i].num = i + 1 +'楼'
          var taolun = Date.parse(text.replies[i].create_at);
          var taolunold = new Date().getTime() - taolun;
          var monthO =taolunold/month;
          var weekO =taolunold/(7*day);
          var dayO =taolunold/day;
          var hourO =taolunold/hour;
          var minO =taolunold/minute;
          // this.img = text.replies[i].author.avatar_url;
          if(monthO>=1){
            text.replies[i].time=(parseInt(monthO) + "月前");
          }
          else if(weekO>=1){
            text.replies[i].time=(parseInt(weekO) + "周前");
          }
          else if(dayO>=1){
            text.replies[i].time=(parseInt(dayO) +"天前");
          }
          else if(hourO>=1){
            text.replies[i].time=(parseInt(hourO) +"小时前");
          }
          else if(minO>=1){
            text.replies[i].time=(parseInt(minO) +"分钟前");
          }else{
            text.replies[i].time=('刚刚')
          }

        }
        this.replies = text.replies;
        this.img = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.replies{
  background-color: #fff;
  margin: 5px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;
  padding: 5px;
  .comments{
    .author{
      font-size: 12px;
    }
    padding: 3px;
    border: 1px solid #80BD01;
    border-radius: 5px;
    margin-bottom: 5px;
    .louxia{
      p{
        font-size: 12px;
      }
    }
  }
  .title{
    display: block;
    margin: 5px 0;
  }
  .lou{
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid #F5F5F5;
  }
  img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  p{
    font-size: 10px;
    margin: 0;
  }
}
.top{
    position: relative;
    background-color: #444444;
    .mui-icon-undo{
      color: #fff;
      position: absolute;
      top: 14px;
      left: 20px;
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
      }}
}
.post{
  background-color: #fff;
  margin: 5px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;
  padding: 5px;
  .main{
    padding: 5px 2px;
    display: inline-block;
    white-space:normal;
    font-size: 12px;
    height: auto!important;
        max-width: 100%!important;
  }
  .title{
    line-height: 22px;
    .brief{
      margin: 5px 0;
      font-size: 12px;
      color: #aaa;
      position: relative;
      .information{
        position: absolute;
        left: 55px;
        top: 3px;
        .author{
          color: #000;
          font-size: 12px;
        }
      }
      p{
        font-size: 10px;
        line-height: 12px;
        margin: 2px 0;
      }
      img{
        height: 42px;
        margin-top: 3px;
        width: 42px;
        border-radius: 50%;
        display: inline-block;
      }
      .author{
        display: flex;
        justify-content: space-between;
        line-height: 15px;
      }
    }
    .red{
      color: #80BD01;
      font-size: 22px;
      margin-top: 5px;
    }
    .tab{
      font-size: 10px;
      color: #ccc;
      line-height: 10px
    }
    .theme{
      font-size: 13px;
      display: inline-block;
      padding: 5px 2px;
      border-top: 1px solid #F5F5F5;
      border-bottom: 1px solid #F5F5F5;
    }
  }
}
.small{
  font-size: 10px;
  color: #aaa;
}

</style>
