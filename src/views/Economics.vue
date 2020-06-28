<template>
  <div class="elasticPage">
    <div class="header page-header">
      <Icon name="financial_title" class="tot-top"></Icon>
    </div>
    <main class="flex">
      <div class="financial">
        <h1 class="title">金融价值</h1>
        <div class="content">
          <ul class="content-ul">
            <li class="content-li" v-for="(item,index) in financial" :key="index">
              <!--              金融价值的sub标题-->
              <div class="subTitle">{{item.title}}</div>
              <!--              list-->
              <ul class="subData f_wrap" v-if="item.type==='data'">
                <div class="topbot"></div>
                <li class="dataItem "  v-for="(sub,subIndex) in item.subList" :key="subIndex">
                  <div class="dataBox f_column">
                    <p class="subText">{{sub.text}}</p>
                    <div :class="[`val_${subIndex}`, 'flex','text']">
                      <ICountUp
                              :endVal="sub.value"
                              :options="options"
                      />
<!--                      <span>{{sub.value}}</span>-->
                      <p>{{sub.unit}}</p>
                    </div>
                  </div>
                </li>
                <div class="bottombot"></div>
              </ul>
              <!--              服务提供list-->
              <ul class="subProvide f_r_between" v-if="item.type==='provide'">
                <li>
                  <template v-for="(sub,subIndex) in item.subList">
                    <div class="provideItem f_column f_c_center"  :key="subIndex" v-if="subIndex===0||subIndex===2">
                      <icon :class="[ sub.img ,'ICON','provideIcon']"></icon>
                      <p>{{sub.text}}</p>
                    </div>
                  </template>
                </li>
                <li>
                  <template v-for="(sub,subIndex) in item.subList">
                    <div class="provideItem f_column f_c_center"  :key="subIndex" v-if="subIndex===1||subIndex===3">
                      <icon :class="[ sub.img ,'ICON','provideIcon']"></icon>
                      <p>{{sub.text}}</p>
                    </div>
                  </template>
                </li>
              </ul>
              <!--              对接机构list-->
              <ul class="subButtJoint" v-if="item.type==='buttJoint'">
                <div class="f_r_between buttJoint-subTitle">
                  <p v-for="(subTitle,i) in item.subTitle" :key="i">{{subTitle}}</p>
                </div>
                <li class="buttJointItem f_r_between" v-for="(sub,subIndex) in item.subList" :key="subIndex">
                  <div class="text">{{sub.text}}</div>
                  <div class="f_r_between buttJointItem_icon">
                    <Icon v-if="sub.cooperation==1" class="selected" name="selected"></Icon>
                    <Icon v-if="sub.agreement==1" class="selected" name="selected"></Icon>
                  </div>
                </li>
              </ul>
              <!--              拟开展业务list-->
              <ul class="subCarryOut  flex"  v-if="item.type==='carryOut'">
                <li class="subCarryOut-box">
                  <template v-for="(sub,subIndex) in item.subList">
                    <div class="carryOutItem f_c_center"  :key="subIndex" v-if="subIndex===0||subIndex===2">
                      <div class="number">
                        <Icon name="totSubTitle" class="totSubTitle"></Icon>
                        <span class="num">{{subIndex+1}}</span>
                      </div>
                      <div class="f_c_center" style="margin-left: 47px;">
                        <Icon :name="sub.icon" :class="sub.icon"></Icon>
                        <p class="text">{{sub.text}}</p>
                      </div>
                    </div>
                  </template>
                </li>
                <li class="subCarryOut-box">
                  <template v-for="(sub,subIndex) in item.subList">
                    <div class="carryOutItem f_c_center"  :key="subIndex" v-if="subIndex===1||subIndex===3">
                      <div class="number">
                        <Icon name="totSubTitle" class="totSubTitle"></Icon>
                        <span class="num">{{subIndex+1}}</span>
                      </div>
                      <div class="f_c_center" style="margin-left: 47px;">
                        <Icon :name="sub.icon" :class="sub.icon"></Icon>
                        <p :class="['text',{ml:subIndex===3}]" >{{sub.text}}</p>
                      </div>
                    </div>
                  </template>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="value flex">
        <div class="economics value-module">
          <h1 class="title">经济价值</h1>
          <div class="economics-content">
                <div :class="[`em_box_${index} ab_center f_c_center em`, {f_column:index>4 },'em_animation']" v-for="(item,index) in economics" :key="index">
                  <Icon :name="item.icon" :class="item.icon"></Icon>
                  <span :class="['text' ,{ab_center:index<=4}]">{{item.text}}</span>
                </div>
                <span class="support ab_center">支持</span>
          </div>
        </div>
        <div class="business value-module">
          <h1 class="title">商业模式</h1>
          <div class="content">
            <div class="arrow">
              <span class="bs_text">电力公司</span>
              <Icon name="bs_i" class="bs_i"></Icon>
              <span class="establish bs_text">建立</span>
            </div>
            <div class="arrow">
              <Icon name="bs_ii" class="bs_ii"></Icon>
              <span class="bs_text">服务矩阵</span>
            </div>
            <div class="arrow">
              <span class="purchase bs_text">采购</span>
              <Icon name="bs_iii" class="bs_iii"></Icon>
              <span class="bs_text">政府部门</span>
              <span class="bs_text">金融机构</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import ICountUp from 'vue-countup-v2';
  import Icon from '@/components/Icon.vue'
  export default {
    name: "Economics",
    components: {
      Icon,
      ICountUp
    },
    data() {
      return {
        financial:[],
        economics:[],
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        },
      }
    },
    created() {
      this.financial=[
        {
          title:'服务数据',
          type:'data',
          subList: [
            {
              text:'已对接金融机构',
              unit:'家',
              value:3
            },
            {
              text:'已完成业务数',
              unit:'笔',
              value:76
            },
            {
              text:'已对接企业',
              unit:'家',
              value:62
            },
            {
              text:'企业贷款金额',
              unit:'万元',
              value:1920
            }
          ]
        },
        {
          title:'服务提供',
          type:'provide',
          subList: [
            {
              text:'空壳企业检测模型',
              img:'provide_monitor'
            },
            {
              text:'贷后预警模型',
              img:'provide_warning'
            },
            {
              text:'授信服务模型',
              img:'provide_serve'
            },
            {
              text:'企业微标签',
              img:'provide_label'
            }
          ]
        },
        {
          title:'对接机构',
          type:'buttJoint',
          subTitle:[
                  '对接银行','合作情况','协议签署'
          ],
          subList: [
            {
              text:'中国农业银行',
              cooperation:1,
              agreement:1,
            },{
              text:'中国建设银行',
              cooperation:1,
              agreement:0,
            },{
              text:'中国交通银行',
              cooperation:1,
              agreement:0,
            },
          ]
        },
        {
          title:'拟开展业务',
          type:'carryOut',
          subList: [
            {
              text:'企业用能量预测',
              icon:'co_forecast'
            },{
              text:'电费水平分析',
              icon:'co_analyze'
            },{
              text:'企业电力消费画像',
              icon:'co_portrayal'
            },{
              text:'优秀企业推介',
              icon:'co_introduce'
            },
          ]
        }
      ]
      this.economics=[
        {
          text:'行业景气分析',
          icon:'em_icon_i'
        },
        {
          text:'复工复产分析',
          icon:'em_icon_ii'
        },
        {
          text:'辅助决策',
          icon:'em_icon_iii'
        },
        {
          text:'人口分析',
          icon:'em_icon_iv'
        },
        {
          text:'能源规划参考',
          icon:'em_icon_v'
        },
        {
          text:'城市大脑',
          icon:'em_icon_vi'
        },
        {
          text:'',
          icon:'em_icon_triangle'
        },
        {
          text:'能源分脑',
          icon:'em_icon_mental'
        }

      ]
    }
  }
</script>

<style scoped lang="scss">
  .elasticPage{
    width: 100%;
    height: 100%;
    padding: 165px 0 0;
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
  main{

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
  .cut-off-line{
    position: absolute;
    left: 50%;
    top: 58%;
    height: 884px;
    width: 8px;
    background: radial-gradient(50% 50% at 50% 50%, rgba(0, 209, 255, 0.5) 0%, rgba(1, 194, 255, 0.127604) 99.99%, rgba(17, 206, 248, 0) 100%);

  }
  .financial,.value{
    position: relative;
    width: 50%;
    padding: 0 108px;
  }
  .financial{
    .content{
      display: flex;
      .left{
        ul li:nth-child(2) {
          margin:0 181px 0 254px;

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
  .capacity-text{
    font-size: 24px;
    line-height: 34px;
    margin-top: 17px;
    color: #FFFFFF;
  }
  .value-module{
    .content{
      .text{
        position: absolute;
        bottom: 0;
        left: 0;
        margin-left: 109px;
        font-size: 32px;
        line-height: 45px;
        color: #FFFFFF;
      }
    }
  }
  .value{
    .economics{
      position: relative;
      width: 1082px;
    }
    .business{
      flex: 1;
      position: relative;
    }
  }

  .content-ul{
    display: flex;
    flex-flow: wrap;
    .content-li{
      position: relative;
      width: 774px;
      .subTitle{
        font-size: 36px;
        line-height: 50px;
        color: #FFFFFF;
        padding: 0 10px;
        margin-bottom: 12px;
      }
      &:nth-child(2n-1){
        margin-right: 40px;
      }
      &:nth-child(1),&:nth-child(2){
        margin-bottom: 29.5px;
      }
    }
  }
  .subData{
    position: relative;
    width: 774px;
    height: 346px;
    background: rgba(86, 204, 242, 0.1);
    &::before,&::after{
      content:'';
      display: block;
      position: absolute;
      width: 6px;
      height: 6px;
      background: #56CCF2;
    }
    &::after{
      right: -8px;
      bottom:-6px;
    }
    &::before{
      right: -8px;
      top: -6px;
     }
    .topbot,.bottombot{
      position: absolute;
      width: 6px;
      height: 6px;
      background: #56CCF2;
    }
    .topbot{
      left: -8px;
      bottom:-6px;
    }
    .bottombot{
      left: -8px;
      top:-6px;
    }
  }

  .dataItem{
    width: 50%;
    height: 50%;
    padding:  22px 0 29px 60px;
    box-sizing: border-box;

    .dataBox{
      .subText{
        font-size: 36px;
        line-height: 50px;
        color: #FFFFFF;
      }
      .text span {
        font-family: YouSheBiaoTiHei;
        font-style: normal;
        font-weight: normal;
        font-size: 64px;
        line-height: 83px;
        color: #56CCF2;
      }
      .text p{
      font-size: 24px;
      line-height: 34px;
        margin-top: 40px;
        margin-left: 10px;
      color: rgba(255, 255, 255, 0.8);
    }
      .text{
        justify-content: flex-end;
      }
      .val_0{
        margin-right: 100px;
      }
      .val_1{
        margin-right: 76px;
      }
      .val_2{
        margin-right: 100px;
      }
      .val_3{
        margin-right: 54px;
      }
    }
  }

  .subProvide{
    padding: 12px 0 0 121px;
    box-sizing: border-box;
    .provideItem{
      p{
        font-size: 24px;
        line-height: 34px;
        color: #FFFFFF;
      }
      &:nth-child(1){
        /*margin-right: 316px;*/
        margin-bottom: 42px;
      }
      &:nth-child(2){
        margin-bottom: 42px;
      }
      &:nth-child(3){
        margin-right: 42px;
      }
      /*&:nth-child(2){*/
      /*  margin-bottom: 42px;*/
      /*}*/
    }
  }

.subButtJoint{
  .buttJoint-subTitle{
    width: 754px;
    height: 48px;
    padding: 0 130px 0 33px;
    background: rgba(86, 204, 242, 0.4);
    /*margin-top: 22px;*/
    p{
      font-size: 24px;
      height: 48px;
      line-height: 48px;
      color: #56CCF2;
    }
  }
  .buttJointItem{
    padding: 0 190px 0 33px;
    margin-top: 30px;

    &:nth-child(1){
      margin-top: 39px;

    }
    .text{
      font-size: 24px;
      line-height: 34px;
      color: #FFFFFF;
    }
  }
}

.subCarryOut{
  width: 1030px;
  padding: 52px 0 0 44px;
  .subCarryOut-box{
    width:491px;
  }
  .carryOutItem{
    &:nth-child(1){
      margin-bottom: 54px;
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
    .text{
      font-size: 24px;
      line-height: 34px;
      margin-left: 15px;
      color: #FFFFFF;
    }
    .ml{
      margin-left: 30px;
    }
  }
}

.economics{
  width: 100%;
  position: relative;
  .economics-content{
    position: absolute;
    left: 254px;
    top: 101px;
    .support{
      font-size: 24px;
      line-height: 34px;
      color: rgba(255, 255, 255, 0.6);
      transform: translate(81px, 160px);
    }
    .em{
      font-size: 36px;
      line-height: 50px;
      color: #FFFFFF;
    }
    .em_box_0{
      transform: translate(-474px, 11px);
      animation: opacity 2s;
      animation-delay: 0.2s;
      .text{
        width: 144px;
        text-align: center;
      }
    }
    .em_box_1{
      transform: translate(-434px, -309px);
      animation: opacity 2s;
      animation-delay: 0.4s;
      .text{
        width: 144px;
        text-align: center;

      }
    }
    .em_box_2{
      transform: translate(-25px, -486px);
      animation: opacity 2s;
      animation-delay: 0.6s;
      .text{
        width: 72px;
      }
    }
    .em_box_3{
      transform: translate(259px, -316px);
      animation: opacity 2s;
      animation-delay: 0.8s;
      .text{
        width: 72px;
      }
    }
    .em_box_4{
      transform: translate(271px, -45px);
      animation: opacity 2s;
      animation-delay: 1s;
      .text{
        width: 144px;
        text-align: center;
      }
    }
    .em_box_5{
      animation: opacity 2s;
      animation-delay: 1.2s;
    }
    .em_box_6{
      transform: translate(-30px, 110px);
      animation: opacity 2s;
      animation-delay: 1.4s;

    }
    .em_box_7{
      transform: translate(-63px, 218px);
      animation: opacity 2s;
      animation-delay: 1.6s;
      .text{
        margin-top: 9px;
      }


    }
    .em_animation{
      animation-fill-mode: forwards;
      opacity:0;
      /*animation: opacity 2s;*/
    }
  }
}

.business .content{
  display: flex;
  flex-direction: column;
  align-items: center;
  .arrow{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &:nth-child(2) {
      margin: 40px 0 31px;
    }
    .bs_text{
      font-size: 36px;
      line-height: 50px;
      color: #FFFFFF;
    }
    .establish{
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(85px, -74px);
      color: #56CCF2;
    }
    .purchase{
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(85px,85px);
      color: #F2C94C;
    }
  }
}


.buttJointItem_icon{
  width: 266px;
}

  /*  icon*/
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
  .provideIcon{
    width: 96px;
    height: 96px;
    margin-bottom: 10px;
    transition: all 0.8s;
    &:hover{
      transform: scale(1.2);
    }
  }
  .provide_monitor{

    background-image: url("../assets/imgs/provide_monitor.png");
  }
  .provide_warning{
    background-image: url("../assets/imgs/provide_warning.png");
  }
  .provide_serve{
    background-image: url("../assets/imgs/provide_serve.png");
  }
  .provide_label{
    background-image: url("../assets/imgs/provide_label.png");
  }
  .selected{
    width: 28px;
    height: 28px;
  }
  .totSubTitle{
    width: 88.89px;
    height: 64.35px;
    line-height: 64.35px;
  }
  .co_forecast{
    width: 56px;
    height: 73px;
  }
  .co_analyze{
    width: 57px;
    height: 83px;
  }.co_portrayal{
     width: 52px;
     height: 83px;
   }.co_introduce{
      width: 41px;
      height: 63px;
    }
  .em_icon_i{
    width: 221px;
    height: 190px;
  }
  .em_icon_ii{
    width: 185px;
    height: 162px;
  }
  .em_icon_iii{
    width: 151px;
    height: 131px;
  }
  .em_icon_iv{
    width: 151px;
    height: 131px;
  }
  .em_icon_v{
    width: 221px;
    height: 190px;
  }
  .em_icon_vi{
    width: 128px;
    height: 128px;
  }
  .em_icon_triangle{
    width: 69px;
    height: 69px;
  }
  .em_icon_mental{
    width: 128px;
    height: 128px;
  }
  .bs_i{
    width: 119px;
    height: 149px;
  }
  .bs_ii{
    width: 107px;
    height: 107px;
    margin-bottom:13px;
  }
  .bs_iii{
    width: 119px;
    height: 175px;
  }
/*  动画*/
  @keyframes opacity {
    to{
      opacity:1
    }
  }
</style>