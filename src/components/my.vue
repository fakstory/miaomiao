<template>
  <div>
    <header>
        <div class="left">
            <router-link to="/home"><i class="iconfont">&#xe697;</i>很赞</router-link>
        </div>
        <span>欢迎你</span>
        <div @click="unlog" class="right">注销</div> 
    </header>
    <div class="center">
          欢迎你{{list.username}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {

  name: 'my',

  data () {
    return {
    	username:'',
      list:null
    }
  },
  mounted(){
  	axios.get('/ppi/my').then(res=>{
      console.log(res.data);
  		if(res.data){
        this.list=res.data;

  			
  		}else{
  			router.push('/login')
  		}
  	})
  },
  methods:{
  	unlog(){
  		axios.get('/ppi/unlog').then(res=>{
  			if(res.data.result){
  				router.push('/login')
  			}
  		})
  	}
  }
}
</script>
<style src="@/assets/font/iconfont.css"></style>


<style lang="scss" scoped>
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
                  color: white;
                  font-size: 14px;
                  line-height: 50px;
                  padding-right:5px;
              }
          }
  .center{
    position:relative;
    top: 50px;
    left:0;

  }
 }
</style>