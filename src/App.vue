<template>
  <div id="app">
    <router-view/>
    <Nav/>
  </div>
</template>
<script>
  import Nav from '@/components/Nav'
  export default {
    components: {
      Nav
    },
    mounted() {
      //获取屏幕宽高 并设置html的字体大小
      let width = document.body.clientWidth
      let html = document.getElementsByTagName('html')[0]
      if (!width) return
      if (width===3840) {
        html.style['font-size'] = '384px'
      }
      if (width===3200) {
        html.style['font-size'] = '320px'
      }
    }
  }
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    
    // background: url('./assets/imgs/body_bg.png');
    background: radial-gradient(50% 632.1% at 50% 50%, #2B4964 0%, #172130 100%);
  }
  #app {
    width: 3840px;
    height: 1080px;
    // background: radial-gradient(50% 632.1% at 50% 50%, #2B4964 0%, #172130 100%);
    position: relative;
  }
</style>
