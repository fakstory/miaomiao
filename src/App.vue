<template>
    <section>
      <router-view></router-view>
    </section>
</template>


<script>
export default {
  name: 'app',
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
    font-size: 12px;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color:#000000;
  }

</style>
