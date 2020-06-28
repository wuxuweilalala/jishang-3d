<template>
  <div class="power-grid">
    <div class="power-top-box page-header">
      <icon name="power-top" class="power-top"></icon>
    </div>
    <div class="power-left">
      <p class="left-title">智慧电务</p>
      <p class="left-title1">每月接入户数</p>
      <v-chart :options="houseOption" class="houseChart"></v-chart>
      <p class="left-title1">提供服务价值</p>
      <div class="title1-content">
        <i>
          <span class="li-icon"></span>
          <span>配电房代运行</span>
        </i>
        <i>
          <span class="li-icon"></span>
          <span>预防性试验</span>
        </i>
        <i>
          <span class="li-icon"></span>
          <span>远程监控</span>
        </i>
        <i>
          <span class="li-icon"></span>
          <span>专业化巡视</span>
        </i>
        <i>
          <span class="li-icon"></span>
          <span>故障抢修</span>
        </i>
      </div>
      <p class="left-title1">商业模式</p>
      <p class="left-title2">协同小微园向企业提供价值。投资部分由电网独立承担或小微园协同承担，向企业收取能源服务等费用。</p>
    </div>
    <div class="center-left">
      <p class="center-left-title">业务成果</p>
      <div class="accident-box">
        <div class="accident-top">
          <icon name="power-warning" class="power-event"></icon>
          <span>月均发生事故数量</span>
        </div>
        <div class="accident-bottom">
          <div class="bottom1">
            <p>建设前</p>
            <p>65</p>
          </div>
          <div class="bottom2">
            <div class="power-event1"></div>
          </div>
          <div class="bottom3">
            <p>建设后</p>
            <p>12</p>
          </div>
        </div>
      </div>
      <div class="accident-box">
        <div class="accident-top">
          <icon name="power-end" class="power-event"></icon>
          <span>月均非计划停机次数</span>
        </div>
        <div class="accident-bottom">
          <div class="bottom1">
            <p>建设前</p>
            <p>32</p>
          </div>
          <div class="bottom2">
            <div class="power-event1"></div>
          </div>
          <div class="bottom3">
            <p>建设后</p>
            <p>5</p>
          </div>
        </div>
      </div>
      <div class="center-bottom">
        <div class="bottom-content">
          <icon name="power-order" class="power-order"></icon>
          <p class="bottom-p">紧急处理单数</p>
          <p class="bottom-p1">189单</p>
        </div>
        <div class="bottom-content">
          <icon name="power-set" class="power-order"></icon>
          <p class="bottom-p">常规处理单数</p>
          <p class="bottom-p1">761单</p>
        </div>
      </div>
    </div>
    <div class="center-right">
      <p class="center-right-title">小微园业务</p>
      <p class="center-title1">每月接入园区数</p>
      <v-chart :options="villageOption" class="village-chart"></v-chart>
      <p class="center-title1">园区接入企业总数 </p>
      <v-chart :options="parkOption" class="village-chart1"></v-chart>
    </div>
    <div class="power-right">
      <p class="center-title1">基于数据分析的拟投资项目 </p>
      <div class="project-list">
        <div class="project">
          <icon name="project-icon1" class="project-icon"></icon>
          <span>光伏</span>
        </div>
        <div class="project">
          <icon name="project-icon2" class="project-icon"></icon>
          <span>储能</span>
        </div>
        <div class="project">
          <icon name="project-icon3" class="project-icon"></icon>
          <span>充电桩</span>
        </div>
      </div>
      <p class="center-title1">衍生能源项目 </p>
      <div class="project-list2">
        <div class="project1">
          <icon name="project-icon4" class="project-icon1"></icon>
          <span>压缩空气集中供给</span>
        </div>
        <div class="project1">
          <icon name="project-icon5" class="project-icon1"></icon>
          <span>待开展</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from "../components/Icon";
  import ECharts from 'vue-echarts';
  import 'echarts/lib/chart/bar';
  import 'echarts/lib/chart/line';

  export default {
    name: "PowerGrid",
    components: {
      'v-chart': ECharts,
      Icon
    },
    data() {
      return {
        houseOption: {
          title: {
            text: '每月接入户数',
            textStyle: {
              color: "#fff"
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
              var tar = params[1];
              return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
          },
          grid: {
            left: '0',
            right: '4%',
            bottom: '1%',
            top: '8%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            name: '月份',
            nameLocation: "end",
            nameTextStyle: {
              color: '#fff',
            },
            data: [7, 8, 9, 10, 11, 12,1, 2, 3, 4, 5, 6],
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dotted'
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff"
            }
          },
          yAxis: {
            type: 'value',
            name: '户数',
            nameTextStyle: {
              color: '#fff',
              align: 'center'
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dotted'
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff"
            }
          },
          series: [
            {
              name: '辅助',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                itemStyle: {
                  barBorderColor: 'rgba(0,0,0,0)',
                  color: 'rgba(0,0,0,0)'
                }
              },
              data: [0, 201, 201, 201, 232, 443, 510, 602, 687, 790, 868, 962]
            },
            {
              name: '接入户数',
              type: 'bar',
              stack: '总量',
              label: {
                show: true,
                position: 'top',
                color: "#fff"
              },

              data: [
                {
                  value: 92,
                  itemStyle: {
                    color: "#04F0FF"
                  },
                },
                {
                  value: 85,
                  itemStyle: {
                    color: "#56CCF2"
                  },
                },
                {
                  value: 103,
                  itemStyle: {
                    color: "#56CCF2"
                  },
                },
                {
                  value: 78,
                  itemStyle: {
                    color: "#56CCF2"
                  },
                },
                {
                  value: 94,
                  itemStyle: {
                    color: "#56CCF2"
                  },
                },
                {
                  value: 451,
                  itemStyle: {
                    color: "#56CCF2"
                  },
                },
                {
                  value: 201,
                  itemStyle: {
                    color: "#04F0FF"
                  },
                },
                {
                  value: 0,
                  itemStyle: {
                    color: "#04F0FF"
                  },
                },
                {
                  value: 0,
                  itemStyle: {
                    color: "#04F0FF"
                  },
                },
                {
                  value: 31,
                  itemStyle: {
                    color: "#04F0FF"
                  },
                },
                {
                  value: 211,
                  itemStyle: {
                    color: "#04F0FF"
                  },
                },
                {
                  value: 67,
                  itemStyle: {
                    color: "#04F0FF"
                  },
                }
              ]
            }
          ]
        },
        villageOption: {
          title: {
            text: '每月接入园区数',
            textStyle: {
              color: "#fff"
            }
          },
          xAxis: {
            type: 'category',
            name: '月份',
            nameTextStyle:{
              color:'#fff'
            },
            data: [7, 8, 9, 10, 11, 12,1, 2, 3, 4, 5, 6, ],
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dotted'
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff"
            }
          },
          yAxis: {
            type: 'value',
            name: '园区数',
            nameTextStyle:{
              color:'#fff',
              align: 'center'
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dotted'
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff"
            }
          },
          grid: {
            left: '1%',
            right: '5%',
            bottom: '1%',
            top: '9%',
            containLabel: true
          },
          series: [{
            data: [1, 3, 2, 3, 4, 0,1, 0, 0, 2, 1, 1],
            type: 'bar',
            itemStyle: {
              color: {
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  {offset: 0, color: '#56CCF2'},
                  {offset: 1, color: 'rgba(86,204,242,0)'}
                ]
              }
            }
          }]
        },
        parkOption: {
          title: {
            text: '园区接入企业总数',
            textStyle: {
              color: "#fff"
            }
          },
          xAxis: {
            type: 'category',
            name: "月份",
            nameLocation: "end",
            nameTextStyle: {
              color: "#fff",
            },
            boundaryGap: false,
            data: [7, 8, 9, 10, 11, 12,1, 2, 3, 4, 5, 6 ],
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dotted'
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff"
            }
          },
          yAxis: {
            type: 'value',
            name: '企业数',
            nameTextStyle:{
              color:'#fff',
              align: 'center'
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dotted'
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff"
            }
          },
          grid: {
            left: '0',
            right: '5.5%',
            bottom: '1%',
            top: '11%',
            containLabel: true
          },
          series: [{
            data: [ 32, 34, 78, 54, 17, 95,12, 0, 3, 14, 27, 38],
            type: 'line',
            color: "#05EEFF",
            areaStyle: {
              color: "#0E9CFF",
              opacity: "0.2"
            }
          }]
        }

      }
    }
  }
</script>

<style scoped lang="scss">
  .power-grid {
    width: 3840px;
    height: 1080px;
    position: relative;
    display: flex;

    .power-top-box {
      position: absolute;
      top: 0;
      left: 50%;
      width: 1537.03px;
      height: 136px;
      transform: translate(-50%, 0);

      .power-top {
        width: 100%;
        height: 100%;
      }
    }

    .power-left {
      margin-left: 110px;
      padding-top: 157px;
      width: 1169.04px;

      .left-title {
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

      .left-title1 {
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 50px;
        color: #FFFFFF;
      }

      .houseChart {
        width: 1126.03px;
        height: 380.9px;
        margin: 27.66px 0;
      }

      .title1-content {
        width: 100%;
        height: 99px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 32px;

        i {
          display: flex;
          align-items: center;

          .li-icon {
            width: 13px;
            height: 13px;
            background: #56CCF2;
            box-shadow: 0 0 20px #56CCF2;
            border-radius: 50%;
            margin-right: 14px;
          }

          span {
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 34px;
            color: #FFFFFF;
          }
        }
      }

      .left-title2 {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 34px;
        color: #FFFFFF;
        padding-top: 23px;
      }
    }

    .center-left {
      margin: 263px 0 0 104.96px;

      .center-left-title {
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 50px;
        color: #FFFFFF;
        margin-bottom: 56px;
      }

      .accident-box {
        width: 575px;
        height: 220px;

        .accident-top {
          display: flex;
          align-items: center;

          .power-event {
            width: 64px;
            height: 64px;
          }

          span {
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 50px;
            color: #FFFFFF;
            margin-left: 38px;
          }
        }

        .accident-bottom {
          display: flex;
          align-items: center;
          padding: 20px 0 0 159px;

          .bottom1 {
            p:first-child {
              font-style: normal;
              font-weight: normal;
              font-size: 24px;
              line-height: 34px;
              color: #F2C94C;
            }

            P:last-child {
              font-family: YouSheBiaoTiHei;
              font-style: normal;
              font-weight: normal;
              font-size: 48px;
              line-height: 62px;
              color: #F2C656;
            }
          }

          .bottom2 {
            height: 56px;
            width: 136px;
            margin: 0 54px;

            .power-event1 {
              background: url("../assets/imgs/arrow-right.png") no-repeat;
              background-size: 100% 100%;
              width: 100%;
              height: 100%;
              animation: leftHover 4s linear infinite;
            }
          }

          .bottom3 {
            p:first-child {
              font-style: normal;
              font-weight: normal;
              font-size: 24px;
              line-height: 34px;
              color: #56CCF2;
            }

            P:last-child {
              font-family: YouSheBiaoTiHei;
              font-style: normal;
              font-weight: normal;
              font-size: 48px;
              line-height: 62px;
              color: #55FFFF;
            }
          }
        }
      }

      .center-bottom {
        display: flex;
        justify-content: space-between;

        .bottom-content {
          width: 216px;
          display: flex;
          flex-direction: column;
          align-items: center;

          .power-order {
            width: 64px;
            height: 64px;
          }

          .bottom-p {
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 50px;
            color: #FFFFFF;
            margin: 10px 0 21px;
          }

          .bottom-p1 {
            font-family: YouSheBiaoTiHei;
            font-style: normal;
            font-weight: normal;
            font-size: 48px;
            line-height: 62px;
            color: #56CCF2;
          }
        }
      }
    }

    .center-right {
      margin: 157px 0 0 176px;

      .center-right-title {
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

      .center-title1 {
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 50px;
        color: #FFFFFF;
      }

      .village-chart {
        width: 761px;
        height: 320px;
        margin: 27.66px 0;

        canvas {
          width: 100%;
          height: 100%;
        }
      }

      .village-chart1 {
        width: 761px;
        height: 320px;
        margin-top: 9px;

        canvas {
          width: 100%;
          height: 100%;
        }
      }
    }

    .power-right {
      margin: 263px 0 0 81.38px;

      .center-title1 {
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 50px;
        color: #FFFFFF;
      }

      .project-list {
        display: flex;
        justify-content: space-around;

        .project {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 43px 0 65px;

          .project-icon {
            width: 208px;
            height: 222px;
          }

          span {
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 34px;
            color: #FFFFFF;
          }
        }
      }

      .project-list2 {
        display: flex;
        justify-content: space-around;
        margin-top: 28.92px;

        .project1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 237px;
          height: 222px;

          .project-icon1 {
            width: 100%;
            height: 100%;
          }

          span {
            position: absolute;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 34px;
            color: #FFFFFF;
            text-align: center;
            bottom: 32.08px;
          }
        }
      }
    }
  }
  @keyframes leftHover {
    0% {transform: translate(-54px,0);opacity: 0}
    100%{transform: translate(54px,0);opacity: 1}
  }
</style>