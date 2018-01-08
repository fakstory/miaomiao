<template>
    <div>
        <header>
            <div class="left">
                <router-link to="/home">很赞</router-link>
            </div>
            <div class="right">
                <router-link to="/good" tag="a">好物榜单</router-link>
                <router-link to="/down" tag="a">降价直播</router-link>
                <router-link to="/login" tag="a">我的</router-link>
                <router-link to="/search" tag="a"> <i class="iconfont">&#xe6ac;</i></router-link>
            </div>
        </header>
          <ul>
            <router-link v-for="data in datalist"  to="/down" tag='li' activeClass="active">
              <a href="">{{data.name}}</a>
            </router-link>

          </ul>
          <router-view></router-view>
    </div>
</template>

<script>
  import axios from 'axios'
  import router from '@/router';

  export default {
        name: "down",
      data(){
          return{
            datalist:[]
          }
      },
      mounted(){
        //http://www.miaomiaozhe.com/api/pricelive_cates
        axios.get('/api/pricelive_cates').then(res=>{
          console.log(res.data.data);
          this.datalist =res.data.data;
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
            a{
                color:white;
                padding: 5px;

            }
            .left{
                float: left;
                a{
                    font-size: 28px;
                }

            }
            .right{
                float: right;
                font-size: 14px;
            }
        }
        ul{
          position:relative;
          top: 50px;
          left: 0;
          display: flex;
          white-space: nowrap;
          line-height: 20px;
          li{
            flex: 1;
            padding:0 10px;
            a{
              margin:10px  0;
              font-size: 16px;
            }



          }
        }
    }

</style>
