<template>
  <div class="elasticPage">
    <div class="header page-header">
      <Icon name="elastic-title" class="tot-top"></Icon>
    </div>
    <main class="flex elasticPage-main">
      <div class="kernel">
        <h1 class="title">核心能力</h1>
        <div class="content f_r_between">
          <div class="content-box">
            <div class="multielement">
                <div class="item ab_center">
                    <Icon name="pg_icon-i" class="pg_icon-i anima"></Icon>
                    <span class="ab_center  pg_text  anima">高承载</span>
                    <i class="pg_arrow ICON  anima"></i>
                </div>
                <div class="item ab_center">
                    <Icon name="pg_icon-i" class="pg_icon-i anima"></Icon>
                    <span class="ab_center pg_text   anima">高效能</span>
                    <i class="pg_arrow ICON anima"></i>
                </div>
                <div class="item ab_center">
                    <Icon name="pg_icon-i" class="pg_icon-i anima"></Icon>
                    <span class="ab_center pg_text   anima">高自愈</span>
                    <i class="pg_arrow ICON anima"></i>
                </div>
                <div class="item ab_center">
                    <Icon name="pg_icon-i" class="pg_icon-i anima"></Icon>
                    <span class="ab_center pg_text   anima">高互动</span>
                    <i class="pg_arrow ICON anima"></i>
                </div>
                <div class="item ab_center">
                    <Icon name="pg_icon_v" class="pg_icon_v anima"></Icon>
                </div>
            </div>
            <ul class="flex capacity-ul">
              <li v-for="(item,index) in capacity" :key="index" class="f_column f_c_center capacity-li">
<!--                <Icon :name="item.icon" :class="item.icon"></Icon>-->

                <Icon :name="item.icon" :class="item.icon" v-if="item.icon!=='capacityIcon_i'"></Icon>
                <icon class="capacityIcon_i_png ICON" v-else></icon>
                <span class="capacity-text">{{item.title}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="garden">
        <h1 class="title">智慧园区</h1>
        <div class="content">
          <div class="gardenNum  f_c_center">
            <Icon name="garden_i" class="garden_i"></Icon>
            <div class="gardenNum_cont f_column">
              <span>高弹性电网覆盖园区数</span>
              <span class="value">35</span>
            </div>
          </div>
          <div class="gardenNum f_c_center">
            <Icon name="garden_ii" class="garden_i"></Icon>
            <div class="gardenNum_cont f_column">
              <span>园区内企业数</span>
              <span class="value">533</span>
            </div>
          </div>
            <div class="map-content">
                <div class="map" @click="currDot=null"></div>
                <ul>
                    <li v-for="(item,index) in dotList" :key="index" >
                        <div class="dot pointer" :style="`left:${item.x}px;top:${item.y}px`">
                            <div :class="['dotHalo',{'onDot':currDot===index}]" @click="currDot=index"><p></p><span></span></div>
<!--                            <span :class="[`tipsLabel_${item.position} tipsLabel_text`,{'onDotText':currDot===index}]" @click="currDot=index">{{item.tipsTitle}}</span>-->
                            <div class="msg" v-if="index===currDot">
                                <Icon name="map_dot" class="map_dot" ></Icon>
                                <div class="dot-tips" >
                                    <div class="tipTitle">{{item.tipsTitle}}</div>
                                    <ul class="dot-cont">
                                        <li class="dot-item" v-for="(sub,subIndex) in item.msg" :key="subIndex">
                                            <label>{{sub.label}}:</label>
                                            <span>{{sub.value}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <div class="future">
        <h1 class="title">未来场景</h1>
        <div class="content">
          <div class="sceneChange">
            <div class="btnBox pointer" @click="setDelay(0)">
              <Icon name="sc_btn_1" class="sc_btn" v-if="currIndex==0"></Icon>
              <Icon name="sc_btn_0" class="sc_btn" v-else></Icon>
              <span :class="{active: currIndex==0}">台风过境场景</span>
            </div>
            <div class="btnBox pointer" @click="setDelay(1)">
              <Icon name="sc_btn_1" class="sc_btn" v-if="currIndex==1"></Icon>
              <Icon name="sc_btn_0" class="sc_btn" v-else></Icon>
              <span :class="{active: currIndex==1}">夏季用电高峰场景</span>
            </div>
          </div>
            <transition name="bounce">
                <div class="sceneBox" v-if="onscene">
                    <div class="picture">
                        <Icon name="scene_1_1" class="sceneIcon2"></Icon>
                        <div class="grid"></div>
                        <!-- <img src="../assets/imgs/grid.png" alt=""> -->
                    </div>
                    <div class="sc-text">
                        <p>台风过境导致园区外部线路受损，园区市电供电不足</p>
                        <p>园区光伏发电，供给生产或储能；</p>
                        <p>储能根据用户侧需要放电，充电桩部分停止充电，切掉柔性负荷，保障生产用电</p>
                        <p>基本保证线路抢修过程中，优先满足生产用电需求。实现园区范围的局部弹性电网机制。</p>
                    </div>
                </div>
            </transition>
            <transition name="bounce">
              <div :class="['sceneBox']" v-if="delayOnscene">
                  <div class="picture">
                      <Icon name="scene_2" class="sceneIcon2"></Icon>
                      <div class="grid"></div>
                      <!-- <img src="../assets/imgs/grid.png" alt=""> -->
                  </div>
                  <div class="sc-text">
                      <p>夏季炎热居民用电负荷集中突增，园区市电供量降低</p>
                      <p>园区光伏白天发电，供给生产或储能</p>
                      <p>负荷低谷时，储能储电，充电桩充电</p>
                      <p>负荷高峰时，储能放电，充电桩部分停止充电，切掉柔性负荷，保障生产用电</p>
                      <p>保证用电高峰期间，生产用电的平稳过渡。实现源网荷储互动调节机制</p>
                  </div>
              </div>
            </transition>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
    import Icon from '@/components/Icon.vue'
    import {dotList} from '@/data/data.js'
  export default {
    name: "Elastic",
    components: {
      Icon
    },
    data() {
      return {
        capacity:[],
        currIndex:0,
          dotList:[],
          currDot:null,
          onscene:false,
          timer:null,
          isanima:true,
          delayOnscene:false
      }
    },
      mounted(){
          this.onscene=true
      },
    created() {
      this.capacity=[
        {
          icon:'capacityIcon_i',
          title:'唤醒海量资源'
        },
        {
          icon:'capacityIcon_ii',
          title:'源网荷储全交互'
        },
        {
          icon:'capacityIcon_iii',
          title:'安全效率双提升'
        }
      ]
        this.dotList=dotList
        // console.log(dotList)
    },
      methods: {
          setDelay(i) {
              if (this.currIndex==i) return
              this.currIndex = i
              if (i===1) {
                  this.onscene = !this.onscene
              } else {
                  this.delayOnscene =!this.delayOnscene
              }

              this.timer = setTimeout(() => {
                  if (i===1) {
                      this.delayOnscene =!this.delayOnscene
                  } else {
                      this.onscene =  !this.onscene
                  }

              },1200)
          }
      },
  }
</script>

<style scoped lang="scss">
    .bounce-enter-active {
        animation: bounce-in 1s;
    }
    .bounce-leave-active {
        animation: bounce-in 1s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

.elasticPage{
    width: 100%;
    height: 100%;
    padding: 140px 0 0;
  .elasticPage-main{
    height: 100%;
  }
}
  .header{
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

.title{
  font-size: 64px;
  line-height: 83px;
  margin: 0 0  0px 10px;
  font-family: 'YouSheBiaoTiHei';
  background-image: -webkit-linear-gradient(-90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
  font-weight: normal;
}
.cut-off-line{
  position: absolute;
  left: 50%;
  top: 58%;
  height: 884px;
  width: 8px;
  background: radial-gradient(50% 50% at 50% 50%, rgba(0, 209, 255, 0.5) 0%, rgba(1, 194, 255, 0.127604) 99.99%, rgba(17, 206, 248, 0) 100%);

}
  .kernel,.future{
    position: relative;
    padding: 0 108px;
      width: 915.01px;
      height: 559px;
  }
  .future{
      height: 940px;
      z-index: 9;

  }
  .kernel{
    width: 33%;
    .content{
      display: flex;
      padding-left: 88px;
      .content-box{
        .powerGrid{
          width: 100%;
        }
        .capacity-ul{
          margin-top: 87px;
          /*padding-left: 88px;*/
        }
        ul li:nth-child(2) {
          margin: 0px 181px 0 231px;
        }
      }
      .right{
        width: 485px;
        height: 550px;
        font-size: 36px;
        line-height: 50px;
        color: #FFFFFF;
      }
    }
  }
  .multielement{
        width: 915.01px;
        height: 559px;
          font-size: 24px;
          line-height: 34px;
          color: #FFFFFF;
      .item{
          position: absolute;
          span{
              width: 122.83px;
              text-align: center;
          }
          &:nth-child(1) {
              transform: translate(0,-200px);
              .pg_arrow{
                  transform: translate(149px, 67px);
              }
          }
          &:nth-child(2) {
              transform: translate(359px, 0);
              .pg_arrow{
                  transform: rotate(112deg);
                  left: -200px;
                  top: 108px;
              }
          }
          &:nth-child(3) {
              transform: translate(0, 200px);
              .pg_arrow{
                  transform: rotate(183deg);
                  left: -259px;
                  top: -79px;
              }
          }
          &:nth-child(4) {
              transform: translate(-359px,0);
              .pg_arrow{
                  transform: rotate(297deg);
                  left: 126px;
                  top: -136px;
              }
          }
          &:nth-child(5) {
              transform: translate(-28%,-12%);
          }
      }
  }
  .garden{
    width: 26%;
      z-index: 99;
    .content{
        position: relative;
        height: 800px;
      margin-top: 31px;
      .gardenNum{
        padding-left: 20px;
          margin-bottom: 20px;
        .gardenNum_cont{
          font-size: 24px;
          line-height: 34px;
          margin-left: 32px;
          color: #FFFFFF;
          .value{
            font-family: YouSheBiaoTiHei;
            font-size: 64px;
            line-height: 83px;
            color: #56CCF2;
          }
        }

      }
        .map-content{
            width: 731px;
            /*height: 1106px;*/
            .map{
                position: absolute;
                left: 115px;
                top: 0;
                background-repeat: no-repeat;
            }
            .msg{
                position: relative;
                left: -358px;
                width: 342px;
                height: 137px;
                top: -12px;
            }

        }
    }
  }
.dot{
    position: absolute;
    left: 0;
    top: 0;
    width: 10px;
    height: 10px;
    /*background: rgba(242, 153, 74, 0.37);*/
    /*background: red;*/
    .onDot{
        background: rgba(242, 153, 74, 1);
        border-color: rgba(242, 153, 74, 1);

        p,span{
            box-shadow: 0px 0px 1px rgba(242, 153, 74, 1);
        }
    }
    .onDotText{
        color: #fff;
        opacity: 1;
    }
}
.dot-tips{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 16px 36px;
    z-index:99;
    .tipTitle{
        font-size: 18px;
        line-height: 23px;
        margin-bottom: 2px;

        color: #56CCF2;
    }
    .dot-cont{
        .dot-item{
            display: flex;
            margin-top: 4px;
            font-size: 14px;
            line-height: 20px;
            color: #FFFFFF;
            label{
                display: flex;
                justify-content: flex-end;
                width: 81px;
            }
            span{
                flex: 1;
                margin-left: 10px;
            }
        }
    }
}

  .capacity-text{
    font-size: 24px;
    line-height: 34px;
    margin-top: 17px;
    color: #FFFFFF;
  }
  .future{
    position: relative;
    width: 40%;

    .content{
      width: 100%;
      height: 88%;
      .sceneChange{
        position: relative;
        display: flex;
        margin-top: 22px;
        padding-left: 15px;
        z-index: 99;
        .btnBox{
          position: relative;
          width: 236px;
          height: 83px;
          font-size: 24px;
          line-height: 34px;
            color: #56CCF2;
            &:first-child{
            margin-right: 35px;
          }
          .active{
              color: #FFFFFF;
          }
          span{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            line-height: 83px;
            text-align: center;
          }
        }
      }
      .sceneBox{
        position: relative;
        width: 100%;
        height: 88%;
        z-index: 9;
        .picture {
          width: 100%;
          height: 88%;
          .grid{
           position: absolute;
            right: 0;
            bottom: 0;
            z-index: -1;
          }
        }

        .sc-text{
          position: absolute;
          left:0;
          bottom: 0;
          transform: translate(15px, -36px);
          p{
            position: relative;
            font-size: 32px;
            line-height: 45px;
            color: #FFFFFF;
          }
          p:before{
            content:'';
            position: absolute;
            left: 0;
            top: 0;
            transform: translate(-35px, 17px);
            width: 13px;
            height: 13px;
            background: #56CCF2;
            box-shadow: 0px 0px 20px #56CCF2;
            border-radius: 50%;
          }
        }
      }
    }
  }

  .tipsLabel_left{
    white-space: nowrap;
    position: absolute;
    right: 19px;
    top: -3px;
  }
.tipsLabel_right{
    white-space: nowrap;
    position: absolute;
    left: 19px;
    top: -3px;
}
.tipsLabel_text{
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    opacity: 0.3;
}
/*  icon*/
.capacityIcon_i_png{
  width: 51.81px;
  height: 77.29px;
  background: url("../assets/imgs/capacityIcon_i.png");
}
  .capacityIcon_i{
    width: 51.81px;
    height: 77.29px;
  }
.capacityIcon_ii{
  width: 72.33px;
  height: 79.33px;

}
.capacityIcon_iii{
  width: 95px;
  height: 84px;
}
.pg_icon-i{
    width: 122.83px;
    height: 123.88px;
}
  .garden_i{
    width: 58px;
    height: 58px;
  }
  .sc_btn{
    width: 236px;
    height: 83px;
  }
  .sceneIcon{
    position: absolute;
    right: -102px;
    bottom: 0;
    width: 1641px;
    height: 1002px;
  }
  .sceneIcon2{
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(-66px, -217px);
    width: 1015px;
    height: 552px;
}
  .pg_arrow{
        position: absolute;
        left: 0;
        top: 0;
      width: 216px;
      height: 154px;
      background: url("../assets/imgs/pg_arrow.png");
  }
    .pg_icon_v{
        width: 333px;
        height: 150px;

    }
    .map_dot{
        position: absolute;
        left: 15px;
        top: 10px;
        width: 342px;
        height: 137px;
        z-index: 9;
    }

/*    pg_icon动画*/
    .anima{
        opacity:0;
        animation: opacity 2s;
        animation-fill-mode: forwards;
    }
    .item {
        &:nth-child(1) .pg_text{
            animation-delay: 0s;
        }
        &:nth-child(2) .pg_text{
            animation-delay: 0.2s;
        }
        &:nth-child(3) .pg_text{
            animation-delay: 0.4s;
        }
        &:nth-child(4) .pg_text{
            animation-delay: 0.6s;
        }
    }
    .item {
        &:nth-child(1) .pg_icon-i{
            animation-delay: 0s;
        }
        &:nth-child(2) .pg_icon-i{
            animation-delay: 0.2s;
        }
        &:nth-child(3) .pg_icon-i{
            animation-delay: 0.4s;
        }
        &:nth-child(4) .pg_icon-i{
            animation-delay: 0.6s;
        }
    }
    .item {
        &:nth-child(1) .pg_arrow {
            animation-delay: 0.8s;
        }
        &:nth-child(2) .pg_arrow {
            animation-delay: 1.4s;
        }
        &:nth-child(3) .pg_arrow {
            animation-delay: 1.2s;
        }
        &:nth-child(4) .pg_arrow {
            animation-delay: 1s;
        }
    }

    .pg_icon_v{
        animation-delay: 1.6s;
    }
/*    光晕*/
.dotHalo{
     background:rgba(86, 204, 242, 1);
    width: 6px;
    height: 6px;
    border: 4px rgba(86, 204, 242, 0.7) solid;
    border-radius:50%;
    position: relative;
    p,span{
        position: absolute;
        left: -6px;
        top: -6px;
        transform: translate(-50%,-50%);
        width: 12px;
        height: 12px;
        border-radius: 50%;
        animation: Halo 4s  infinite;
        border: 1px solid rgba(86, 204, 242, 0.3);
        margin: 0;
        padding: 0;
    }
    span{
        animation-delay: 1.6s;
    }
}
    /*  动画*/
    @keyframes Halo{
        0% {transform: scale(1);}
        50% {transform: scale(2.5);}
        100% {transform: scale(1);}
    }
    @keyframes opacity {
        to{
            opacity:1
        }
    }
</style>