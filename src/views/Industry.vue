<template>
  <div class="industry">
    <div class="industry-top-box page-header">
      <icon name="industry-top" class="industry-top"></icon>
    </div>
    <div class="industry-left">
      <div class="left-content">
        <content3-d/>
      </div>
    </div>
    <div class="industry-right">
      <div class="industry-content">
        <div class="content-top">
          <icon name="industry-text" class="text-bg"></icon>
          <p class="industry-text">
            本试点对展邦电子厂区131个用电回路及关键设备进行了电力物联采集，基于工业互联网思维，应用采集的海量用能数据，在智慧电务、设备节能改造、产线精细化管理、智慧工厂等方面全面打造智慧综合能效试点工程。</p>
        </div>
        <p class="content-title">商业模式</p>
        <div class="content-bottom">
          <div class="pattern-top">
            <span>建设服务</span>
            <icon name="industry-arrow-down" class="industry-arrow"></icon>
            <icon name="industry-arrow-top" class="industry-arrow"></icon>
            <div class="pattern-top-title">
              <span>建设费用</span>
              <span>SaaS服务费</span>
            </div>
          </div>
          <div class="pattern-bototm">
            <div class="pattern-bototm-content">
              <icon name="industry-icon1" class="industry-icon"></icon>
              <span>终端企业</span>
            </div>
            <div class="pattern-bototm-content pattern-bototm-content1">
              <icon name="industry-icon2" class="industry-icon"></icon>
              <span>园区</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="right-title">
      <div class="title-top-box">
        <p>服务案例</p>
        <div class="title-content">
          <icon name="industry-titlebg" class="industry-titlebg"></icon>
          <span>电厂</span>
        </div>
      </div>
      <div class="title-bototm-box">
        <p>未来开发</p>
        <div class="title-content" v-for="(item,index) in titleList" :key="index">
          <icon name="industry-titlebg" class="industry-titlebg"></icon>
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from "@/components/Icon";
  import Content3D from "../components/Content3D";
  export default {
    name: "Industry",
    components: {
      Icon,
      Content3D
    },
    data(){
      return {
        titleList:[
          {title:'服装厂'},
          {title:'小家电厂'},
          {title:'汽摩配厂'},
          {title:'智慧园区'}
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .industry {
    position: relative;
    width: 3840px;
    height: 1080px;
    display: flex;

    .industry-top-box {
      position: absolute;
      top: 0;
      left: 50%;
      width: 1537.03px;
      height: 136px;
      transform: translate(-50%, 0);

      .industry-top {
        width: 100%;
        height: 100%;
      }
    }

    .industry-left {
      margin-left: 137px;
      padding-top: 116px;

      .left-content {
        box-sizing: border-box;
        width: 2280px;
        height: 950px;
        border: 4px solid #ddd;
        border-image: linear-gradient(#00F0FF, rgba(0, 240, 255, 0)) 30 30;
        overflow: hidden;
      }
    }

    .industry-right {
      display: flex;
      margin: 169.92px 0 0 45.3px;

      .industry-content {
        display: flex;
        flex-direction: column;

        .content-top {
          width: 785px;
          height: 222px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 160px;

          .text-bg {
            width: 100%;
            height: 100%;
          }

          .industry-text {
            position: absolute;
            width: 703px;
            text-align: justify;
            top: 26.8px;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 42px;
            color: #FFFFFF;
          }
        }

        .content-title {
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

        .content-bottom {
          display: flex;
          flex-direction: column;
          width: 920px;

          .pattern-top {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 26.62px;

            span {
              font-style: normal;
              font-weight: normal;
              font-size: 24px;
              line-height: 42px;
              color: #FFFFFF;
            }

            .industry-arrow {
              width: 119.43px;
              height: 120.5px;
              margin: 0 25.57px;
            }

            .pattern-top-title {
              display: flex;
              flex-direction: column;
            }
          }

          .pattern-bototm {
            display: flex;
            justify-content: center;

            .pattern-bototm-content {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

              .industry-icon {
                width: 141px;
                height: 141px;
              }

              span {
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 42px;
                color: #FFFFFF;
              }
            }

            .pattern-bototm-content1 {
              padding: 0 40px;
            }
          }
        }
      }
    }

    .right-title {
      margin-top: 68px;
      display: flex;
      flex-direction: column;

      .title-top-box {
        display: flex;
        flex-direction: column;
        flex: 1;

        p {
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

        .title-content {
          width: 246px;
          height: 117px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .industry-titlebg {
            width: 100%;
            height: 100%;
          }

          span {
            position: absolute;
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 50px;
            color: #FFFFFF;
          }
        }
      }
      .title-bototm-box {
        display: flex;
        flex-direction: column;
        flex: 1;
        p {
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

        .title-content {
          width: 246px;
          height: 117px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .industry-titlebg {
            width: 100%;
            height: 100%;
          }

          span {
            position: absolute;
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 50px;
            color: rgba(255, 255, 255, 0.6);
          }
        }
      }
    }
  }
</style>