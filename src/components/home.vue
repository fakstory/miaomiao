<template>
      <div>
          <header>
              <div class="left">
                  <router-link to="/home">很赞</router-link>
              </div>
              <div class="right">
                  <router-link to="/down" tag="a">降价直播</router-link>
                  <router-link to="/my" tag="a">我的</router-link>
                  <router-link to="/search" tag="a"> <i class="iconfont">&#xe6ac;</i></router-link>
              </div>
          </header>
          <section>
            <ul>
              <router-link to="/home/hot" tag="li" activeClass="active">热门频道</router-link>
              <router-link to="/home/message" tag="li" activeClass="active">优质评论</router-link>
            </ul>
              <router-view></router-view>
          </section>
      </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>
<style src="@/assets/font/iconfont.css"></style>

<style scoped lang="scss">
  .active{
    background-color: white;
    color: black;
    font-size: 20px;
  }
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
      section{
          position: relative;
          top: 50px;
          left: 0;
          ul{
              display: flex;
              color: white;
              background-color: #666666;
              li{
                  flex: 1;
                  text-align: center;
                  height: 30px;
                  line-height: 30px;
                  font-size: 16px;

              }
          }

      }

  }



</style>
