<template>
  <div>
    <header v-if='info'>
      <div class="left">
        <router-link to="/home"><i class="iconfont">&#xe697;</i>很赞</router-link>
      </div>
      <span>{{info.theme.name}}</span>
      <div class="right">
        <router-link to="/list" tag="a">更多<i class="iconfont">&#xe6a7;</i></router-link>
      </div>
    </header>
    <div class="dd" v-if='info'>
      <h1>{{info.title}}</h1>
      <div class="ddtop">
        <div class="ddtleft">
          <img :src="info.author.avatar"/>
          <p>{{info.author.nickname}}</p>
        </div>
        <div class="ddtright">
          <span>赞({{info.zan_cnt}})</span>
          <span>浏览({{info.view_cnt}})</span>
        </div>
      </div>
      <div class="ddcenter">
        <!--{{info.content_data.paras}}-->
        <li v-for="item in info.content_data.paras" :key='item.id'>
          <!--{{item.lines[0].text}}-->
          <img v-if="item.type==image" :src="item.url">
          <p v-if="item.type==text" v-for="data in item.lines">{{data.text}}</p>
        </li>

      </div>

    </div>


  </div>
</template>

<script>
  import axios from 'axios'

  export default {
        name: "detail",
      data(){
          return{
            id:null,
            info:null,
            text:"text",
            image:"image"

          }
      },
      mounted(){
          this.id=this.$route.params.id
        axios.get(`/api/article/detail/${this.id}?zanners=1`).then(res=>{
          console.log(res.data.data);
          this.info=res.data.data.article_detail;
      })
      }
    }
</script>
<style src="@/assets/font/iconfont.css"></style>

<style scoped lang="scss">
  div{
    header{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
      background-color: #EC4A41;
      line-height: 50px;
      z-index: 2;
      display: flex;
      a{
        color:white;
        padding: 5px;
        font-size: 14px;
      }
      .left{
        flex: 1;
      }
      span{
        flex: 2;
        width: 100%;
        text-align: center;
        color: white;
        font-size: 18px;
      }
      .right{
        flex: 1;
        text-align: right;
      }
    }
    .dd{
      position: relative;
      top: 50px;
      left: 0;
      height: 100%;
      padding: 10px;
      h1{
        font-size: 20px;
        line-height: 30px;
      }
      .ddtop{
        height: 30px;
        padding: 5px 0;
        line-height: 30px;
        display: flex;
        .ddtleft{
          flex: 1;
          img{
            float: left;
            width: 30px;
            border-radius: 20px;
            display: inline-block;

          }
          p{
            float: left;
            height: 30px;
            line-height: 30px;
            padding-left: 15px;
          };
        }
        .ddtright{
          flex: 1;
          text-align: right;
        }
      }
      .ddcenter{
        p{
          font-size: 16px;
          letter-spacing: 2px;
        }
        img{
          width: 100%;
          padding: 10px 0;
        }
      }
    }
  }

</style>
