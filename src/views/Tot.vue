<template>
  <div class="TopPage flex">
    <div class="home-top">
      <icon name="tot-title" class="tot-top"></icon>
    </div>
    <div class="history">
      <h1 class="title">历史总结</h1>
      <ul class="list-ul">
        <li class="item" v-for="(item,index) in historyList" :key="index">
          <div class="header flex">
            <div class="number">
              <Icon name="totSubTitle" class="totSubTitle"></Icon>
              <span class="num">{{index+1}}</span>
            </div>
            <div class="subTitle">{{item.subTitle}}</div>
          </div>
          <div class="history-content">
            <ul v-if="item.type==='array'">
              <li v-for="(sub,subIndex) in item.subList" :key="subIndex">
                <div class="subItem">{{sub}}</div>
              </li>
            </ul>
              <div v-if="item.type==='string'" class="content-vaule">
                <div class="iCountUp">
                  <ICountUp
                          v-if="item.subTitle==='实时总功率'"
                          :endVal="totalPowerVal"
                          :options="options"
                          @ready="onUpdate"
                  />
                  <span v-else>{{item.value}}</span>
                </div><p>{{item.unit}}</p>
              </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="currprogress">
      <h1 class="title">当前进展</h1>
      <div class="currprogress-content flex">
        <div class="multisource f_r_center">
          <h2 class="cardTitle">多源<Icon name="totTitleBtn" class="totTitleBtn"></Icon></h2>
          <div class="multisource-content">
            <div class="cont-container f_r_between">
              <div class="box f_column f_c_center anima box_anima">
                <Icon name="systemData" class="systemData"></Icon>
                <span class="sublabel">用采系统数据</span>
                <Icon name="arrows" class="system-arrows"></Icon>
              </div>
              <div class="box f_column f_c_center anima box_anima">
                <Icon name="wisdomData" class="systemData"></Icon>
                <span class="sublabel">智慧电务数据</span>
                <Icon name="arrows" class="system-arrows"></Icon>
              </div>
            </div>
            <div class="cont-container f_r_center anima real_anima">
              <div class="f_column f_c_center">
                <span class="realTime">实时接入</span>
                <Icon name="wisdomData_i" class="wisdomData_i"></Icon>
                <span class="sublabel">智慧物联平台</span>
              </div>
            </div>
          </div>
        </div>
        <div class="cut-off-line"></div>
        <div class="standard f_c_center f_column">
          <h2 class="cardTitle">标准<Icon name="totTitleBtn" class="totTitleBtn"></Icon></h2>
          <div class="standard-content">
            <div class="cont-container">
              <ul class="col ab_center">
                <li class="f_c_center f_column anima ">
                  <icon class="isometric_i ICON standardIcon"></icon>
                  <span class="standard-text">主备电源供电测试</span>
                </li>
                <li class="f_c_center f_column anima">
                  <icon class="isometric_iv ICON standardIcon"></icon>
                  <span class="standard-text">边缘计算能力检测</span>
                </li>
              </ul>
              <ul class="row ab_center">
                <li class="f_c_center f_column anima">
                  <icon class="isometric_iii ICON standardIcon"></icon>
                  <span class="standard-text">初步检测</span>
                </li>
                <li class="f_c_center f_column row-width anima">
                  <icon class="isometric_ii ICON standardIcon"></icon>
                  <span class="standard-text">以太网，wifi串口等通讯能力测试</span>
                </li>
              </ul>
              <ul class="arrows ab_center">
                <li v-for="(item,index) in [1,2,3,4]" :key="index" class="anima">
                  <Icon name="rotateArrows" class="rotateArrows"></Icon>
                </li>
              </ul>
            </div>
            <div class="tips anima">
              <p>开发边缘计算设备标准和检测流程</p>
              <p>适配标准设备协议</p>
            </div>
          </div>
        </div>
        <div class="cut-off-line"></div>
        <div class="control f_c_center f_column">
          <h2 class="cardTitle">控制<Icon name="totTitleBtn" class="totTitleBtn"></Icon></h2>
          <div class="control-content flex">
            <ul class="control-ul f_column f_c_center">
              <li class="anima">
                <Icon name="controlIcon_i" class="controlIcon" ></Icon>
                <span class="control-text">云端控制</span>
                <div class="line"></div>
              </li>
              <li class="anima">
                <Icon name="controlIcon_ii" class="controlIcon" ></Icon>
                <span class="control-text">智能网关</span>
              <div class="line"></div>

              </li>
              <li class="anima">
                <Icon name="controlIcon_iii" class="controlIcon" ></Icon>
                <span class="control-text">智能电表</span>
              <div class="line"></div>

              </li>
            </ul>
            <div class="switch f_column f_r_center anima">
              <Icon name="controlIcon_iv" class="controlIcon" ></Icon>
              <span class="control-text">回路开关</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ICountUp from 'vue-countup-v2';
  import Icon from '@/components/Icon.vue'
  export default {
    name: "Tot",
    components: {
      Icon,
      ICountUp
    },
    data() {
      return {
        historyList: [],
        currHour:null,
        totalPowerVal:null,
        endVal: 120500,
        instance:null,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        },
        timer:null
      }
    },
    created() {
      this.historyList = [
        {
          subTitle:'新一代边缘计算设备开发',
          type:'array',
          subList:[
                  '7X24稳定运行',
                  '报警毫秒级相应',
                  '支持远程配置',
                  '大规模计算成本低'
          ]
        },
        {
          subTitle:'累计积累能源数据',
          type:'string',
          value:'69.7',
          unit:'TB'
        },
        {
          subTitle:'完成现场设备及表计协议的开发',
          type:'string',
          value:'100+',
          unit:'种'
        },
        {
          subTitle:'总装机容量',
          type:'string',
          value:'773,020',
          unit:'kVa'
        },
        {
          subTitle:'完成现场数据接入',
          type:'string',
          value:'1,500',
          unit:'个'
        },
        {
          subTitle:'实时总功率',
          type:'string',
          value:'72,838.07',
          unit:'kW'
        }
      ]
      this.setInter()
    },
    methods: {
      onUpdate(instance) {
        const that = this;
        if (!this.instance) {
          this.instance = instance
        }
        instance.update(that.totalPowerVal);
      },
      setInter() {
        this.getTotalPower()
        this.timer = setTimeout(() => {
          clearTimeout(this.timer)
          this.setInter()
        },60000)

      },
      getTotalPower() {
        let hour = new Date().getHours()
        // hour=7
        let val
        // if (this.currHour === hour) return
        if (hour>=0&&hour<7){
          val = this.getRandom(43891,51755,3)
        } else if (hour>=7&&hour<9){
          val = this.getRandom(51755,156432,2)
        } else if (hour>=9&&hour<11){
          val = this.getRandom(15438,197618,3)
        } else if (hour>=11&&hour<13){
          val = this.getRandom(72141,131921,3)
        } else if (hour>=13&&hour<19){
          val = this.getRandom(131912,201891,3)
        } else if (hour>=19&&hour<21){
          val = this.getRandom(84366,102766,1)
        } else if (hour>=21&&hour<24){
          val = this.getRandom(51369,85437,3)
        }
        this.currHour = hour
        this.totalPowerVal = Number(val)
        // console.log(val)
      },
      getRandom(min,max,status) {
        // console.log(min,max,status)
        if(min>max) return new Error('参数不正确')
        let val
        if (this.totalPowerVal) {
          if (status===1) {
            let temp = Math.floor((((max - min)/60)/2)/2)
            val = Number(this.totalPowerVal)  - Math.floor(Math.random()*(temp)+temp)
          } else if(status===2) {
            let temp = Math.floor((((max - min)/60)/2)/2)
            val = Number(this.totalPowerVal) +  Math.floor(Math.random()*(temp)+temp)
          } else {
            val = String(Math.floor(Math.random()*(max-min)+min))
          }
        } else {
          if (status ===1||status===2) {
            let temp = Math.floor(Math.random()*(max-min)+min)
            let median = min+((max-min)/2)
            if (status===1&&temp>=median){
              console.log('下降')
              val = temp
            }else if(status===2&&temp<=median) {
              console.log('上升')
              val = temp
            } else {
             val = this.getRandom(min,max,status)
            }
          }else {
            val = String(Math.floor(Math.random()*(max-min)+min))
          }
        }
        return String(val)
      },
    },
    watch: {
      // totalPowerVal(val) {
      //   console.log(val)
      //   if (!val) return
      //   this.onReady(this.instance)
      // }
    }
  }
</script>

<style scoped lang="scss">
.TopPage{
  width: 100%;
  height: 100%;
  padding: 165px 100px 0;
}
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
.title{
  font-size: 64px;
  line-height: 83px;
  margin: 0 0  33.82px 10px;
  font-family: 'YouSheBiaoTiHei';
  background-image: -webkit-linear-gradient(-90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
  font-weight: normal;
}
.history{
  /*width: 1302.94‬px;*/
  /*1370.94px*/
  width: 1370.94px;
  color: #fff;

  .list-ul{
    display: flex;
    flex-flow: wrap;
    .item{
      /*width: 651.47px;*/
      width: 681.47px;
    }
  }
}
  .totSubTitle{
    width: 88.89px;
    height: 64.35px;
    line-height: 64.35px;
  }
  .number{
    position: relative;
    /*margin-right: 32.5px;*/
    .num{
      font-family: 'YouSheBiaoTiHei';
      position: absolute;
      line-height: 64.35px;
      font-size: 64px;
      color: #37DAFE;
      left: 0;
      margin-left: 44px;
    }
  }
  .subTitle{
    width: 651.47px;
    height: 64.35px;
    line-height: 64.35px;
    font-size: 36px;
    padding-left: 38px;
}
  .history-content{
    padding: 47.83px 86.05px 48.82px 138.89px;
    ul{
      display: flex;
      flex-flow: wrap;
      li{
        margin-right: 0;
        &:nth-child(2n-1){
          margin-right: 43px;
        }
        &:nth-child(1),&:nth-child(2){
          margin-bottom: 35px;
        }

      }
    }
    .content-vaule{
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      font-size: 36px;
      /*line-height: 83px;*/
      .iCountUp{
        font-family: 'YouSheBiaoTiHei';
        font-size: 64px;
        color: #56CCF2;
      }
      span{
        font-family: 'YouSheBiaoTiHei';
        font-size: 64px;
        color: #56CCF2;
      }
      p{
        margin: 0 0 10px 15px;
      }
    }
  }
.subItem{
  position: relative;
  color:#56CCF2;
  font-size: 24px;
  /*width: 251px;*/
  height: 36px;
  width: 205px;
  line-height: 36px;

  &:before{
    content: '';
    position: absolute;
    left: -25px;
    top: 10px;
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #56CCF2;
  }
}
.currprogress-content{
  position: relative;
}
  .multisource{
    width: 675px;
    padding: 0 100px 0 0;
    flex-direction: column;
    align-items: center;
  }
  .standard{
    width: 894px;
    padding: 0 20px 0 100px;
  }
  .control{
    width: 675px;
    padding: 0 0 0 61px;
  }
.cardTitle{
  position: relative;
  width: 354px;
  height: 83.74px;
  line-height: 83.74px;
  text-align: center;
  font-weight: 600;
  font-size: 48px;
  color: #FFFFFF;
  .totTitleBtn{
    position: absolute;
    left: 0;
    top: 0;
    width: 354px;
    height: 83.74px;
    line-height: 83.74px;
  }
}
  .cut-off-line{
    position: absolute;
    left: 236px;
    top: 300px;
    width: 884px;
    height: 8px;
    background: radial-gradient(50% 50% at 50% 50%, rgba(0, 209, 255, 0.5) 0%, rgba(1, 194, 255, 0.127604) 99.99%, rgba(17, 206, 248, 0) 100%);
    transform: rotate(90deg);
    &:nth-child(2) {
      left: 1130px;
    }
  }
  .multisource-content{
    margin-top: 105px;
    display: flex;
    flex-flow: wrap;
    .cont-container{
      width: 100%;
      .box{
        position: relative;
        &:nth-child(2) .system-arrows{
          transform: rotateY(180deg);
          left: 15px;
        }
      }
      &:nth-child(2){
        margin-top: 75px;
      }
    }
  }

  .realTime{
    font-size: 36px;
    line-height: 50px;
    color: rgba(255, 255, 255, 0.6);
  }
  .sublabel{
    font-size: 36px;
    line-height: 50px;
    color: #FFFFFF;
  }

  .standard-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    .cont-container{
      position: relative;
      width: 100%;
      height: 600px;
      .col{
        display: flex;
        flex-direction: column;
        li:first-child{
          margin-bottom: 108px;
        }
      }
      .row{
        display: flex;
        flex-direction: row;
        li:first-child{
          margin-right: 399px;
          margin-left: 27px;
        }
        .row-width{
          width: 225px;
        }
      }
    }
  }
  .standard-text{
    font-size: 24px;
    line-height: 34px;
    color: #FFF;
    margin-top: 10px;
  }
  .tips{
    font-size: 36px;
    line-height: 50px;
    color: #56CCF2;
    animation-delay: 4.8s;
    p{
      position: relative;
      &::before{
        content: '';
        position: absolute;
        left: -25px;
        top: 15px;
        display: block;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #56CCF2;
        box-shadow: 0px 0px 20px #56CCF2;
      }
    }
  }

  .control-content{
    padding: 47px 0 0 61px;
    .control-ul{
      position: relative;
      margin-right: 119px;
      li{
        position: relative;
        &:nth-child(1) {
          margin-bottom: 82px;
          .line{
            position: absolute;
            left: 78px;
          }
        }
        &:nth-child(2) {
          margin-bottom: 82px;
          .line{
            position: absolute;
            left: 78px;
          }
        }
        &:nth-child(4) {
          margin-bottom: 10px;
        }
        &:nth-child(3) .line{
          position: absolute;
          right: -85px;
          bottom: 40px;
          height: 180px;
          transform: rotate(225deg);
        }
        .control-text{
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: 18px;
          line-height: 25px;
          text-align: center;
          color: #FFFFFF;
          margin: 0 -35px -10px 0;
        }
        .line{
          position: relative;
          width: 6px;
          border-radius: 3px;
          height: 70px;
          background: #FFFFFF;
          &:before{
            content:'';
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-7.5px);
            display: block;
            width: 15px;
            height: 15px;
            border-radius:50%;
            background: #FFFFFF;
          }
          &:nth-child(4) {
            height: 50px;
          }
          &:nth-child(6) {
            position: absolute;
            right: -85px;
            bottom: 40px;
            height: 180px;
            transform: rotate(225deg);
          }
        }
      }

    }
    .switch{
      .control-text{
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #FFFFFF;
      }
    }
  }
  .arrows{
    width: 100%;
    height: 100%;
    position: relative;
    li{
      &:nth-child(1) {
        position: absolute;
        top: 140px;
        right: 35px;
        transform: rotate(70deg);
      }
      &:nth-child(2) {
        position: absolute;
        right: 74px;
        bottom: 194px;
        transform: rotate(170deg);
      }
      &:nth-child(3) {
        position: absolute;
        top: 145px;
        left: 23px;
        transform: rotate(-14deg);
      }
      &:nth-child(4) {
        position: absolute;
        bottom: 179px;
        left: 25px;
        transform: rotate(241deg);
      }
    }
  }


.standardIcon{
  width: 177px;
  height: 121px;
}

  /*animation*/
.anima{
  opacity:0;
  animation: opacity 2s;
  animation-fill-mode: forwards;
}
.box_anima{
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.8s;
  }
}
.real_anima{
  animation-delay: 1.2s;
}
.col .anima{
  &:nth-child(1){
    animation-delay: 0s;
  }
  &:nth-child(2){
      animation-delay: 0.4s;
    }
}
.row .anima{
  &:nth-child(1){
    animation-delay: 0.6s;
  }
  &:nth-child(2){
    animation-delay: 0.2s;
  }
}
.arrows{
  .anima {
    &:nth-child(1) {
      animation-delay: 0.8s;
    }

    &:nth-child(2) {
      animation-delay: 1s;
    }

    &:nth-child(3) {
      animation-delay: 1.4s;
    }

    &:nth-child(4) {
      animation-delay: 1.2s;
    }
  }
}

.control-ul{
  .anima{
    &:nth-child(1) {
      animation-delay: 1.2s;
    }
    &:nth-child(2) {
      animation-delay: 0.8s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}
.switch{
  animation-delay: 0s;
}

  /*icon*/
  .systemData{
    width: 128px;
    height: 128px;
    margin-bottom: 43px;
  }
  .wisdomData_i{
    width: 128px;
    height: 128px;
    margin:36px 0 7px;
  }
  .isometric_i{
    background-image: url("../assets/imgs/isometric_i.png");
  }
  .isometric_ii{
    background-image: url("../assets/imgs/isometric_ii.png");
  }
  .isometric_iii{
    background-image: url("../assets/imgs/isometric_iii.png");
  }
  .isometric_iv{
    background-image: url("../assets/imgs/isometric_iii.png");
  }
  .controlIcon{
    width: 165px;
    height: 146px;
  }
  .rotateArrows{
    width: 117.82px;
    height: 82.26px;
  }
  .system-arrows{
    width: 120px;
    height: 120px;
    position: absolute;
    bottom: -154px;
    right: 20px;

  }

@keyframes opacity {
  to{
    opacity:1
  }
}
</style>