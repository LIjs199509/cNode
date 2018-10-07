<template>
<ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="i in text" :key="i.id">
        <router-link href="javascript:;" :to="'/content/' + i.id">
            <img class="mui-media-object mui-pull-left" :src="i.author.avatar_url">
            <div class="mui-media-body">
              <div class="author">
                <span>{{ i.author.loginname }}</span>
                <span class="iconfont icon-tuijian red" v-if="i.top"></span>
              </div>
              <span class="pbiao">{{ i.title }}</span>
              <div class="name">
                <div><span class="time">{{ i.time }}</span></div>
                <span class="iconfont icon-huitie pink"></span>{{ i.reply_count }}
                <span class="iconfont icon-yuedu pink"></span>{{ i.visit_count }}
              </div>
            </div>
        </router-link>
    </li>
    <div class="yuan">
    <!-- <button @click="getMore()">点击加载更多</button> -->
    <mt-spinner type="snake" color='#80BD01' class="yuan1" :size="40"></mt-spinner>
    </div>
</ul>
</template>

<script>
export default {
  data(){
    return{
      text:[],
      page: 1
    }
  },
  created(){
    this.content(this.page),
    setInterval(() => {
      this.getHeight()
    }, 3000);
  },
  methods:{
    getHeight(){
      if (window.document.body.scrollHeight < window.scrollY  + window.innerHeight * 2) {
        this.getMore()
      }
    },
    content(page){
      this.$http.get('https://cnodejs.org/api/v1/topics?tab=ask&page=' + page).then(res => {
        var text = JSON.parse(res.bodyText).data;
        for (let i = 0; i < text.length; i++) {
          var oldtime = Date.parse(text[i].last_reply_at);
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
            text[i].time=(parseInt(monthC) + "月前");
          }
          else if(weekC>=1){
            text[i].time=(parseInt(weekC) + "周前");
          }
          else if(dayC>=1){
            text[i].time=(parseInt(dayC) +"天前");
          }
          else if(hourC>=1){
            text[i].time=(parseInt(hourC) +"小时前");
          }
          else if(minC>=1){
            text[i].time=(parseInt(minC) +"分钟前");
          }else{
            text[i].time=('刚刚')
          }
        }
        this.text = this.text.concat(text);
      })
    },
    getMore(){
      this.page ++;
      this.content(this.page)
    }
  }
}
</script>

<style lang="scss" scoped>
ul{
  margin: 5px;
  border-radius: 5px
}
.yuan{
  text-align: center;
  height: 40px;
  width: 28px;
  margin: 0 auto;
}
.author{
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.6);
  .red{
    color: #80BD01;
    font-size: 20px;
  }
}
.name{
  display: flex;
  justify-content: flex-end;
  position: relative;
  border-top: 1px solid #ccc;
  padding-top: 6px;
  font-size: 13px;
  .time{
    position: absolute;
    top: 6px;
    left: 0;
  }
  .iconfont{
    color: #80BD01;
    margin: 0 5px;
  }
}
.pbiao{
  white-space:normal;
  display: block;
  margin: 10px 0;
  font-size: 13px;
}
.mui-table-view-cell:after{
  left: 0;
  background-color: #80BD01;
}
img{
  border-radius: 50%;
}
</style>
