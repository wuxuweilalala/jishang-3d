<template>
  <div class="home-box">
    <!--    <v-chart :options="barOption"/>-->
    <div class="home-top page-header">
      <icon name="tot-top" class="tot-top"></icon>
    </div>
    <div class="center">
      <div class="center-left">
        <div class="left-title">
          <p>物联侧</p>
          <router-link class="title-box" to="./Tot">
            <icon name="title-bg" class="title-bg"></icon>
            <icon name="arrow-right" class="arrow-right"></icon>
          </router-link>
        </div>
        <div class="loop-box">
          <icon name="loop-bg" class="loop-bg"></icon>
          <div class="loop-1 loop">
            <icon name="loop-icon1" class="loop-icon"></icon>
            <p>数据融合</p>
          </div>
          <div class="loop-2 loop">
            <icon name="loop-icon2" class="loop-icon"></icon>
            <p>边缘计算</p>
          </div>
          <div class="loop-3 loop">
            <icon name="loop-icon3" class="loop-icon"></icon>
            <p>实时可控</p>
          </div>
        </div>
      </div>
      <div class="center-img">
        <icon name="tot-center" class="tot-center"></icon>
      </div>
      <div class="center-right">
        <p class="right-title">业务侧</p>
        <icon v-if="currIndex===1"  name="home-right-line-1_1" class="home-right-1_0"></icon>
        <icon v-else name="home-right-line-1_0" class="home-right-1_0"></icon>
        <icon v-if="currIndex===2" name="home-right-line-2_1" class="home-right-2_0"></icon>
        <icon v-else name="home-right-line-2_0" class="home-right-2_0"></icon>
        <icon v-if="currIndex===3" name="home-right-line-3_1" class="home-right-3_0"></icon>
        <icon v-else name="home-right-line-3_0" class="home-right-3_0"></icon>
        <router-link class="right-link1 bs-text" to="./PowerGrid" @mousemove.native="currIndex=1" @mouseout.native="currIndex=null">
          <icon v-if="currIndex===1" name="home-right-1_1" class="link-icon"></icon>
          <icon v-else name="home-right-1_0" class="link-icon"></icon>
        </router-link>
        <router-link class="right-link2 bs-text" to="./Industry" @mousemove.native="currIndex=2" @mouseout.native="currIndex=null">
          <icon v-if="currIndex===2" name="home-right-2_1" class="link-icon"></icon>
          <icon v-else name="home-right-2_0" class="link-icon"></icon>
        </router-link>
        <router-link class="right-link3 bs-text" to="./Economics" @mousemove.native="currIndex=3" @mouseout.native="currIndex=null">
          <icon v-if="currIndex===3" name="home-right-3_1" class="link-icon"></icon>
          <icon v-else name="home-right-3_0" class="link-icon"></icon>
        </router-link>
      </div>
    </div>
    <div class="time-axis-box">
      <icon name="time-axis" class="time-axis"></icon>
    </div>
  </div>
</template>

<script>
  // import ECharts from 'vue-echarts';
  // import 'echarts/lib/chart/line';
  import Icon from "@/components/Icon";

  export default {
    name: "index",
    components: {
      // 'v-chart': ECharts,
      Icon
    },
    data() {
      return {
        currIndex: null
        /*barOption:{
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }]
        }*/
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-box {
    width: 3840px;
    height: 1080px;
    position: relative;

    .home-top {
      position: absolute;
      top: 0;
      left: 50%;
      width: 1537.03px;
      height: 136px;
      transform: translate(-50%, 0);

      .tot-top {
        height: 100%;
        width: 100%;
      }
    }

    .center {
      display: flex;
      position: relative;

      .center-left {
        margin: 159px 0 0 71px;
        display: flex;
        flex-direction: column;
        width: 856px;

        .left-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 83px;

          P {
            font-family: YouSheBiaoTiHei;
            font-style: normal;
            font-weight: normal;
            font-size: 64px;
            line-height: 83px;
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            text-fill-color: transparent;
          }

          .title-box {
            display: flex;
            justify-content: space-between;
            width: 239px;
            height: 46.74px;

            .title-bg {
              width: 177.53px;
              height: 100%;
            }

            .arrow-right {
              width: 34px;
              height: 100%;
              transition: transform .8s;
            }
          }
          .title-box:hover .arrow-right{
            transform: translate(20px,0);
          }
        }

        .loop-box {
          width: 100%;
          height: 606px;
          display: flex;
          align-items: center;
          position: relative;

          .loop-bg {
            height: 514px;
            width: 514px;
            margin-left: 198px;
          }

          .loop {
            position: absolute;
            height: 274px;
            width: 200px;

            p {
              font-family: YouSheBiaoTiHei;
              font-style: normal;
              font-weight: normal;
              font-size: 36px;
              line-height: 50px;
              color: #fff;
              text-align: center;
              padding-top: 24px;
            }

            .loop-icon {
              width: 200px;
              height: 200px;
              transition: all .8s;
            }
          }

          .loop-1 {
            left: 355px;
            top: -50px;
          }

          .loop-2 {
            right: 75px;
            top: 338px;
          }

          .loop-3 {
            left: 125px;
            top: 338px;
          }

          .loop:hover .loop-icon {
            transform: scale(1.2);
          }
        }
      }

      .center-img {
        margin-top: 225px;
        margin-left: 184px;
        width: 943px;
        height: 655px;

        .tot-center {
          width: 100%;
          height: 100%;
        }
      }

      .center-right {
        position: relative;
        top: 159px;
        left: 94px;
        width: 1430px;
        height: 592px;

        .right-title {
          font-family: YouSheBiaoTiHei;
          font-style: normal;
          font-weight: normal;
          font-size: 64px;
          line-height: 83px;
          background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          margin-left: 94px;
        }

        .home-right {
          width: 100%;
          height: 421px;
          position: absolute;
          top: 171px;
        }
        a {
          position: absolute;
          height: 200.43px;
          width: 231.45px;
          /*transition: all 0.8s;*/
          .link-icon1 {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }
          .link-icon {
            width: 100%;
            height: 100%;
          }
        }
        .bs-text span{
          position: absolute;
          left: 59px;
          top: 63px;
          font-style: normal;
          font-weight: 600;
          font-size: 36px;
          line-height: 50px;
          color: #FFFFFF;
        }
        .right-link1 {
          left: 703.97px;
          top: 192.71px;

        }
        .right-link2 {
          left: 702.97px;
          top: 397.71px;
          span{
            width: 183px;
            left: 26px;
            top: 48px;
            text-align: center;
          }
        }
        .right-link3 {
          left: 881.97px;
          top: 296.71px;
          span{
            width: 146px;
            left: 50px;
            top: 48px;
          }
        }

        /*a:hover {*/
        /*  z-index: 2;*/
        /*  transform: scale(1.1);*/
        /*}*/
      }
    }

    .time-axis-box {
      position: absolute;
      width: 100%;
      height: 159px;
      bottom: 38px;

      .time-axis {
        height: 100%;
        width: 100%;
      }
    }
  }
/*  icon*/
  .home-right-1_0{
    position: absolute;
    left: -45px;
    top: 180px;
    width: 771.5px;
    height: 276px;
  }
  .home-right-2_0{
    position: absolute;
    left: 353px;
    bottom: 13px;
    width: 357.5px;
    height: 115px;
  }
  .home-right-3_0{
    position: absolute;
    right: 12px;
    top: 357px;
    width: 312px;
    height: 122px;
  }

</style>