<template>
    <div>
        <header>
            <div class="left">
                <router-link to="/home"><i class="iconfont">&#xe697;</i>很赞</router-link>
            </div>
            <span>登陆</span>
            <div class="right">
                <router-link to="/register" >注册<i class="iconfont">&#xe6a7;</i></router-link>
            </div>
        </header>
        <div class="log">
            <p>用户名：</p>
            <input type="text" v-model="username"/><br><br>
            <p>密码：</p>
            <input type="password" v-model="password"/>
            <div v-show='isshow' class="sss">用户名或者密码错误</div>

            <button @click="login">登陆</button>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import router from "../router"
    export default {
        name: "login",
        data(){
            return{
                username:'',
                password:'',
                isshow:false
            }
        },
        methods:{
            login(){
                axios.post('/ppi/login',{username:this.username,password:this.password}).then(res=>{
                    console.log(res)
                    if(res.data.result){
                        router.push('/')
                    }else{
                        this.isshow=true
                    }
                })
            },
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
        .log{
            width: 80%;
            height: 100%;
            margin: 60px auto;
            input{
                width: 100%;
                height: 20px;
                border: 1px solid #404040;
            }
            p{
                line-height: 20px;
                font-size: 16px;
                padding: 5px;
            }
            button{
                width: 100%;
                height: 40px;
                background-color: #EC4A41;
                color: white;
                font-size: 18px;
                border-radius: 5px;
                margin-top: 30px;
            }
            .sss{
                font-size: 18px;
                color: #EC4A41;
            }


        }


    }

</style>