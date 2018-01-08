<template>
  <div>
      <ul>
        <li v-for="data in datalist" @click="handleClick(data.id)" class="wai" :key="data.id">
          <ul class="shang">
            <li class="left">
              <div class="lleft">
                <img :src="data.author.avatar">
              </div>
              <div class="cleft">
                <span>{{data.author.nickname}}</span>
                <p>{{data.author.verify_info}}</p>
              </div>
            </li>
            <li class="right">
              <span>{{data.theme.name}}</span>
            </li>
          </ul>
          <h2>{{data.title}}</h2>
          <div class="foot">
            <h3>{{data.summary}}</h3>
            <ul>
              <li>
                <img :src="data.cover_pics[0]">
              </li>
            </ul>
          </div>
        </li>
      </ul>
  </div>

</template>

<script>
  import axios from 'axios'
  import router from '@/router';

  export default {
        name: "message",
        data(){
            return{
              datalist:[]
            }
        },
        mounted(){
          axios.get('/api/recommend/mixed?num=10&refresh=1&startid=1&idtype=article').then(res=>{
            console.log(res.data.data.items);
          this.datalist =res.data.data.items;
        })
        },
      methods:{
          handleClick(index){
            router.push(`/detail/${index}`);

          }

      }

    }
</script>

<style scoped lang="scss">
  div{
    width: 100%;
    height: 100%;
    ul{
      .wai{
        padding: 10px;
        background-color: white;
        border-bottom: 20px solid #cccccc;
        .shang{
          display: flex;
          .left{
            flex: 1;
            height: 36px;
            .lleft{
              width: 30px;
              float: left;
              img{
                width: 30px;
                border-radius: 30px;
                display: inline;
              }
            }
            .cleft{
              width: 135px;
              float: left;
              padding-left: 10px;

              span{
                width: 100px;
                height: 18px;
                line-height: 18px;
              }
              p{
                height: 18px;
                line-height: 18px;
                color: #cccccc;

              }

            }
          }
          .right{
            flex: 1;
            height: 36px;
            line-height: 36px;
            text-align: right;
            span{
              height: 20px;
              padding: 5px;
              line-height: 20px;
              background-color: #EFF1F3;
              border-radius: 10px;
            }
          }

        }
        h2{
          height: 30px;
          line-height: 30px;
          overflow: hidden;
          padding: 5px 0;
        }
        .foot{
          h3{
            height: 40px;
            overflow: hidden;
            line-height: 20px;
            font-weight: 400;
          }
          ul{
            li{
              padding: 10px;
              img{
                width: 100%;
                height: 200px;
                border-radius: 10px;

              }
            }
          }
        }
      }
    }

  }


</style>
