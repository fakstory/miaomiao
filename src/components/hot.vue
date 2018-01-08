<template>
  <div>

      <ul >
        <!--<router-link v-for="data in datalist" tag="li" to="/detail">-->
          <!--{{data}}-->
        <!--</router-link>-->
        <li v-for="data in datalist"  class="wai">
          <div class="shang">
            <div class="left">{{data.cate.name}}</div>
            <router-link class="right" to="/list">推荐阅读<i class="iconfont">&#xe6a7;</i></router-link>
          </div>
          <ul class="xia">
            <router-link class="xia1" to="/detail/" tag="li">
                <img :src="data.articles[0].cover_pics[0]" class="img1">
                <img :src="data.articles[0].author.avatar" class="img2">
              <p class="name1">{{data.articles[0].author.nickname}}</p>
              <p class="title1">{{data.articles[0].title}}</p>
            </router-link>
            <router-link class="xia2" to="/detail/data.articles[0].id" tag="li">
                <img :src="data.articles[1].cover_pics[0]" class="img3">
                <img :src="data.articles[1].author.avatar" class="img4">
              <p class="name2">{{data.articles[1].author.nickname}}</p>
              <p class="title2">{{data.articles[1].title}}</p>
            </router-link>
          </ul>
          <ul class="foot">
            <router-link v-for="item in data.themes" tag="li" to="/list" >
              {{item.name}}
            </router-link>
          </ul>

        </li>
      </ul>
  </div>

</template>

<script>
  import axios from 'axios'
  import router from '@/router';
    export default {
      name: "hot",
      data(){
          return{
            datalist:[]
          }
      },
      mounted(){
        axios.get('/api/index/discover').then(res=>{
          // console.log(res.data.data.recommend);
          this.datalist =res.data.data.recommend;

      })
      }
    }
</script>

<style scoped lang="scss">
  div{
    width:100%;
    height:100%;
    ul{

      .wai{
        padding: 10px;
        background-color: white;
        border-bottom: 20px solid #cccccc;
        .shang{
          display: flex;
          .left{
            flex: 1;
            height: 20px;
            text-align: left;

          }
          .right{
            text-align: right;
            flex: 1;
            height: 20px;
          }
        }
        .xia{
          display: flex;
          padding: 5px;
          .xia1{
            flex: 1;
            padding: 5px;
            position: relative;
            .img1{
              width: 100%;
              height: 100px;
              border-radius: 5px;
            }

            .img2{
              position: absolute;
              top: 85px;
              left: 30px;
              width: 30px;
              border-radius: 20px;
            }
            .name1{
              text-align: center;

            }



            .title1{
              width: 100%;
            }

          }
          .xia2{
            padding: 5px;
            flex: 1;
            position: relative;
            .img3{
              width: 100%;
              height: 100px;
              border-radius: 5px;

            }
            .img4{
              position: absolute;
              top: 85px;
              left: 30px;
              width: 30px;
              border-radius: 20px;
            }
            .name2{

              text-align: center;

            }
            .title2{
              width: 100%;
            }

          }


        }
        .foot{
          display: flex;
          li{
            flex: 1;
            border-radius: 5px;
            background-color: #EFF1F3;
            text-align: center;
            margin:10px;
            height: 30px;
            line-height: 30px;

          }
        }

      }

    }
  }


</style>
