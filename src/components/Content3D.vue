<template>
  <div class="content3d">
    <div class="canvas" ref="station">
      <div class="electric-box">
        <div class="chart-box">
          <p>本月单日用电量</p>
          <icon name="charttitle-line" class="charttitle-line"></icon>
          <span>单位:kWh</span>
          <v-chart :options="electricOption" class="electricOption"/>
        </div>
        <div class="chart-box">
          <p>当日功率变化</p>
          <icon name="charttitle-line" class="charttitle-line"></icon>
          <span>单耗:kW</span>
          <v-chart :options="powerOption" class="electricOption"/>
        </div>
        <div class="chart-box">
          <div class="swiper-title">
            <p>本月各生产环节用能排名</p>
            <span class="tab1" :class="isShowTab?'tab':''" @click="tabTrue">用电量</span>
            <span class="tab2" :class="!isShowTab?'tab':''" @click="tabFalse">功率</span>
          </div>
          <icon name="charttitle-line" class="charttitle-line"></icon>
          <ul class="swiper-box">
            <li v-for="(data,index) in linkList"
                :key="index"
                class="swiper-link"
                :class="(index+1)%2!==0?'swiper-link1':''">
              <i>
                <span class="nub"
                      :class="[index===0?'nub1':'',index===1?'nub2':'',index===2?'nub3':'']"
                >{{index+1}}</span>
                <span class="name">{{data.name}}</span>
              </i>
              <i class="value-box">
                <span class="allKwh">{{isShowTab?data.allKwh+' kWh':data.allPower+' kw'}}</span>
                <icon :name="data.isRise?'is-riseup':'is-risedown'" class="is-rise"></icon>
              </i>
            </li>
          </ul>
          <span @click="arrowDownward($event)" class="downward-box">
            <icon name="arrow-downward"
                  class="arrow-downward"></icon>
          </span>
        </div>
      </div>
      <div class="popup-chart" v-if="isShowPopup">
        <div class="popup-top">
          <span>{{popupObj.name+'环节'}}</span>
          <span @click="closePopup" class="closePopup">X</span>
        </div>
        <div class="top-title">
          <span>本月用电量: {{popupObj.allKwh}}kWh</span>
          <span>本月产量: {{popupObj.allYield}}㎡</span>
          <span>本月产量单耗: {{popupObj.allConsume}}kWhh/㎡</span>
        </div>
        <div class="chart-box">
          <p>本月单日用电量及产量图</p>
          <v-chart :options="allpowerOption" class="allpowerOption"></v-chart>
        </div>
        <div class="chart-box">
          <p>本月单日用电量及产量图</p>
          <v-chart :options="allyieldOption" class="allpowerOption"></v-chart>
        </div>
      </div>
      <div class="yield-box">
        <div class="chart-box">
          <p>本月单日产量</p>
          <icon name="charttitle-line" class="charttitle-line"></icon>
          <span>产量: m²</span>
          <v-chart :options="yieldOption" class="electricOption1"/>
        </div>
        <div class="chart-box">
          <p>本月单日单耗曲线</p>
          <icon name="charttitle-line" class="charttitle-line"></icon>
          <v-chart :options="consumeOption" class="electricOption1"/>
        </div>
        <div class="chart-box">
          <div class="swiper-title">
            <p>本月各生产环节单耗排名</p>
          </div>
          <icon name="charttitle-line" class="charttitle-line"></icon>
          <ul class="swiper-box">
            <li v-for="(data,index) in linkList"
                :key="index"
                class="swiper-link"
                :class="(index+1)%2!==0?'swiper-link1':''">
              <i>
                <span class="nub"
                      :class="[index===0?'nub1':'',index===1?'nub2':'',index===2?'nub3':'']"
                >{{index+1}}</span>
                <span class="name">{{data.name}}</span>
              </i>
              <i class="value-box">
                <span class="allKwh">{{data.allConsume}} kWh/m²</span>
                <icon :name="data.isRise?'is-riseup':'is-risedown'" class="is-rise"></icon>
              </i>
            </li>
          </ul>
          <div class="videoBg">
            <video id="myVideo" width="100%" height="100%" preload="auto" controls muted loop>
              <source type="video/mp4"
                      src="../assets/imgs/video.mp4"/>
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import * as THREE from 'three';
  import {MTLLoader, OBJLoader} from 'mtl-obj-loader';
  import OrbitControls from 'three-orbitcontrols';
  import ECharts from 'vue-echarts';
  import 'echarts/lib/chart/bar';
  import 'echarts/lib/chart/line';
  import Icon from '@/components/Icon';
  import {dayKwh, DayYield, dayConsume, dayPower, dataList} from '@/assets/js/chartData';


  export default {
    name: "Content3D",
    components: {
      'v-chart': ECharts,
      Icon
    },
    data() {
      return {
        isShowTab: true,
        electricOption: {
          title: {
            text: '本月单日用电量',
            textStyle: {
              color: "#fff"
            }
          },
          xAxis: {
            type: 'category',
            data: dayKwh.key,
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
            right: '0.5%',
            bottom: '1%',
            top: '4%',
            containLabel: true
          },
          series: [{
            data: dayKwh.value,
            type: 'bar',
            itemStyle: {
              color: '#F23FAA'
            }
          }]
        },//本月单日用电量chart
        powerOption: {
          title: {
            text: '当日功率变化',
            textStyle: {
              color: "#fff"
            }
          },
          xAxis: {
            type: 'category',
            name: "小时",
            nameLocation: "end",
            nameTextStyle: {
              color: "#fff",
              verticalAlign: "top"
            },
            boundaryGap: false,
            data: dayPower.key,
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
            name: '单耗',
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
            right: '0.5%',
            bottom: '1%',
            top: '4%',
            containLabel: true
          },
          series: [{
            data: dayPower.value,
            type: 'line',
            color: "#414BF7",
            areaStyle: {
              color: "#414BF7",
              opacity: "0.2"
            }
          }]
        },//当日功率变化chart
        yieldOption: {
          title: {
            text: '本月单日产量',
            textStyle: {
              color: "#fff"
            }
          },
          xAxis: {
            type: 'category',
            data: DayYield.key,
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
            right: '0.5%',
            bottom: '1%',
            top: '4%',
            containLabel: true
          },
          series: [{
            data: DayYield.value,
            type: 'bar',
            itemStyle: {
              color: '#3FF287'
            }
          }]
        },//本月单日产量chart
        consumeOption: {
          title: {
            text: '本月单日单耗曲线',
            textStyle: {
              color: "#fff"
            }
          },
          xAxis: {
            type: 'category',
            name: "日期",
            nameLocation: "end",
            nameTextStyle: {
              color: "#fff",
              verticalAlign: "top"
            },
            boundaryGap: false,
            data: dayConsume.key,
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
            name: '单耗',
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
            right: '0.5%',
            bottom: '1%',
            top: '4%',
            containLabel: true
          },
          series: [{
            data: dayConsume.value,
            type: 'line',
            color: "#0E9CFF",
            areaStyle: {
              color: "#0E9CFF",
              opacity: "0.2"
            }
          }]
        },//本月单日单耗曲线chart
        allpowerOption: {
          legend: {
            data: ['日用电量', '日产量']
          },
          xAxis: [
            {
              type: 'category',
              data: dayKwh.key,
              axisPointer: {
                type: 'shadow'
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
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '用能: kWh',
              nameTextStyle: {
                color: '#fff'
              },
              axisLabel: {
                color: "#fff"
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
            },
            {
              type: 'value',
              name: '产量: ㎡',
              nameTextStyle: {
                color: '#fff'
              },
              axisLabel: {
                formatter: '{value} ㎡',
                color: '#fff'
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
            }
          ],
          series: [
            {
              name: '日用电量',
              type: 'bar',
              data: [],
              color: '#F23FAA'
            },
            {
              name: '日产量',
              type: 'bar',
              data: [],
              yAxisIndex: 1,
              color: '#3FF287'
            },
          ]
        },//本月单日用电量及产量图chart
        allyieldOption: {

          legend: {
            data: ['生产一组', '生产二组'],

          },
          xAxis: [
            {
              type: 'category',
              data: dayKwh.key,
              axisPointer: {
                type: 'shadow'
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
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '单耗: kWh',
              axisLabel: {
                color: '#fff'
              },
              nameTextStyle: {
                color: '#fff'
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
            },

          ],
          series: [
            {
              name: '生产一组',
              type: 'line',
              data: [],
              color: '#414BF7',
              areaStyle: {
                color: "#414BF7",
                opacity: "0.2"
              }
            },
            {
              name: '生产二组',
              type: 'line',
              data: [],
              color: '#0E9CFF',
              areaStyle: {
                color: "#0E9CFF",
                opacity: "0.2"
              }
            },

          ]
        }, //本月单日产量单耗chart
        linkList: [],
        linkName: [
          {name: '下料环节', isRise: true, x: -260, y: -40, z: 200},
          {name: '钻孔环节', isRise: false,x: -280, y: -40, z: 500},
          {name: '清洗环节', isRise: true,x: -320, y: -40, z: 800},
          {name: '干膜湿膜环节', isRise: true,x: -360, y: -40, z: 1100},
          {name: '显影环节', isRise: false,x: -460, y: -40, z: -240},
          {name: '二铜环节', isRise: true,x: -620, y: -200, z: -240},
          {name: '蚀刻环节', isRise: true,x: -320, y: -200, z: 800},
          {name: '检验环节', isRise: false,x: -260, y: -200, z: 200},
          {name: '三修环节', isRise: true,x: -260, y: -360, z: 200},
          {name: '阻焊环节', isRise: true,x: -280, y: -360, z: 560},
          {name: '文字印刷环节', isRise: false,x: -320, y: -360, z: 1100},
          {name: '油墨烘干环节', isRise: true,x: -390, y: -360, z: -240},
          {name: '喷锡化金环节', isRise: true,x: -240, y: -490, z: -0},
          {name: '微割环节', isRise: false,x: -280, y: -490, z: 560},
          {name: '测试环节', isRise: true,x: -320, y: -490, z: 1100},
          {name: '包装环节', isRise: true,x: -500, y: -490, z: -240}
        ],
        objs: [],
        isShowPopup: false,
        popupObj: {}
      }
    },
    methods: {
      // 初始化场景
      initScene() {
        this.scene = new THREE.Scene();
      },
      // 初始化环境灯光
      initAmbient(color) {
        var ambient = new THREE.AmbientLight(color, 0.4);
        this.scene.add(ambient);
      },
      // 初始化点灯光
      initPoint(color, position) {
        // color 值 如下 0xffffff
        // position { x: x, y: y, z: z, }
        var point = new THREE.PointLight(color);
        point.position.set(position.x, position.y, position.z);
        point.castShadow = true;
        this.scene.add(point);
      },
      // 初始化 聚光灯
      initSpotLight(x, y, z) {
        var spotLight = new THREE.SpotLight(0x444444);
        spotLight.position.set(x, y, z);
        this.scene.add(spotLight);
      },
      // 初始化平行灯光
      initDireaction(color, intensity, position) {
        var directionalLight = new THREE.DirectionalLight(color, intensity);
        directionalLight.position.set(position.x, position.y, position.z);
        this.scene.add(directionalLight);
        directionalLight.castShadow = true;
        // directionalLight.shadow.camera.near = 0.5;
        // directionalLight.shadow.camera.far = 3000;
        // directionalLight.shadow.camera.left = -500;
        // directionalLight.shadow.camera.right = 500;
        // directionalLight.shadow.camera.top = 2000;
        // directionalLight.shadow.camera.bottom = -1000;

        this.directionalLight = directionalLight

      },
      //初始化环境灯光
      initRectLight(x, y, z) {
        var width = 500;
        var height = 500;
        var intensity = 1;
        var rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height);
        rectLight.position.set(x, y, z);
        rectLight.lookAt(this.scene.position);
        this.scene.add(rectLight)

        // rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
        // this.scene.add( rectLightHelper );
      },
      // 初始化控制
      initControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.minPolarAngle = 0;
        this.controls.maxPolarAngle = Math.PI / 2;
      },
      initObjLoader(mtlPath, objPath, pointPath) {
        var objLoader = new OBJLoader();//obj加载器
        var mtlLoader = new MTLLoader();//材质文件加载器

        let that = this
        mtlLoader.load(mtlPath, function (materials) {
          objLoader.setMaterials(materials);
          objLoader.load(objPath, function (obj) {
            let LocalGroundMaterial = new THREE.MeshLambertMaterial({
              // map:texture,
              color: "#00BBFF",
              // color:'#00BBFF',
              transparent: true,
              // shininess: 4,
              opacity: 0.7,
              // specular:'#00BBFF',
              // metalness: 1, //金属1 塑料0 默认0.5
              side: THREE.DoubleSide //THREE.FrontSide 正面,THREE.BackSide 反面,THREE.DoubleSide 双面
            });
            obj.scale.set(1.2, 1.2, 1.2); //放大obj组对象
            obj.rotateY(-Math.PI / 1.9)
            obj.position.set(-900, -500, 0)
            that.scene.add(obj);//返回的组对象插入场景中
            // obj.material = LocalGroundMaterial
            obj.traverse(e => {
              if (e.isMesh) {
                e.material = LocalGroundMaterial

              }
            })
            for (let i = 0; i < that.linkName.length; i++) {

              objLoader.load(pointPath, mesh => {
                var texture = new THREE.Texture(that.createCanvas(dataList[i].name));
                texture.needsUpdate = true;
                var spriteMaterial = new THREE.SpriteMaterial({map: texture, color: 0xffffff});
                var sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(100, 100, 1);
                mesh.scale.set(0.5, 0.5, 0.5);
                mesh.children[0].material.color.set('#999999')
                mesh.position.set(that.linkName[i].x, that.linkName[i].y, that.linkName[i].z);
                /*if (i === 0) {
                  mesh.position.set(-260, -40, 200);//下料
                } else if (i === 1) {
                  mesh.position.set(-280, -40, 500);//钻孔
                } else if (i === 2) {
                  mesh.position.set(-320, -40, 800);//清洗
                } else if (i === 3) {
                  mesh.position.set(-360, -40, 1100);//干膜湿膜
                } else if (i === 4) {
                  mesh.position.set(-460, -40, -240);//显影
                } else if (i === 5) {
                  mesh.position.set(-620, -200, -240);//二铜
                } else if (i === 6) {
                  mesh.position.set(-320, -200, 800);//蚀刻
                } else if (i === 7) {
                  mesh.position.set(-260, -200, 200);//检验
                } else if (i === 8) {
                  mesh.position.set(-260, -360, 200);//三修
                } else if (i === 9) {
                  mesh.position.set(-280, -360, 560);//阻焊
                } else if (i === 10) {
                  mesh.position.set(-320, -360, 1100);//文字印刷
                } else if (i === 11) {
                  mesh.position.set(-390, -360, -240);//油墨烘干
                } else if (i === 12) {
                  mesh.position.set(-240, -490, 0);//喷锡化金
                } else if (i === 13) {
                  mesh.position.set(-280, -490, 560);//微割
                } else if (i === 14) {
                  mesh.position.set(-320, -490, 1100);//测试
                } else if (i === 15) {
                  mesh.position.set(-500, -490, -240);//包装
                }*/
                sprite.position.set(0, 100, 0)
                mesh.add(sprite)
                that.scene.add(mesh)
                // debugger
                // that.objs.push(mesh)
                mesh.children[0].name = dataList[i].name
                that.objs.push(mesh.children[0])
              })
            }
          })
        })
      },
      //给模型添加点击事件
      // onMouseClick(event){
      //   var raycaster = new THREE.Raycaster();
      //   var mouse = new THREE.Vector2();
      //   //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
      //   mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      //   mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
      //   // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
      //   raycaster.setFromCamera( mouse, this.camera );
      //   // 获取raycaster直线和所有模型相交的数组集合
      //   // let target = this.scene.children.find(e=>e.name=='popup')
      //   // console.log(target)
      //   // debugger
      //   let intersects = raycaster.intersectObjects( this.objs, true);
      //   console.log(intersects);
      // },
      onMouseClick(event) {
          event.preventDefault();
          let station = this.$refs.station
          let getBoundingClientRect = station.getBoundingClientRect();
        // 屏幕坐标转标准设备坐标
          let x = ((event.clientX - getBoundingClientRect.left) / station.offsetWidth) * 2 - 1;// 标准设备横坐标
          let y = -((event.clientY - getBoundingClientRect.top) / station.offsetHeight) * 2 + 1;// 标准设备纵坐标
          let standardVector = new THREE.Vector3(x, y, 1);// 标准设备坐标
          // 标准设备坐标转世界坐标
          let worldVector = standardVector.unproject(this.camera);
          // 射线投射方向单位向量(worldVector坐标减相机位置坐标)
          let ray = worldVector.sub(this.camera.position).normalize();
          // 创建射线投射器对象
          let rayCaster = new THREE.Raycaster(this.camera.position, ray);
          // 返回射线选中的对象 第二个参数如果不填 默认是false
        let intersects = rayCaster.intersectObjects(this.objs, true);
        if (intersects==[]) return
        let name = intersects[0].object.name
        dataList.map(item=>{
          if (name==item.name){
            this.isShowPopup = true
            this.allpowerOption.series[0].data = item.kwh
            this.allpowerOption.series[1].data = item.yield
            this.allyieldOption.series[0].data = item.consume.one
            this.allyieldOption.series[1].data = item.consume.two
            this.popupObj.name = name
            this.popupObj.allKwh = item.allKwh.toFixed(2)
            this.popupObj.allYield = item.allYield.toFixed(2)
            this.popupObj.allConsume = item.allConsume.toFixed(2)
          }
        })
      },
      closePopup(){
        this.isShowPopup = false
      },
      // 初始化透视化相机
      initPerspectiveCamera(fov, position) {
        this.camera = new THREE.PerspectiveCamera(fov, this.width / this.height, 1, 10000);
        this.camera.position.set(position.x, position.y, position.z); //设置相机位置
        this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)
      },
      // 初始化渲染器
      initRenderer(color) {
        this.renderer = new THREE.WebGLRenderer({alpha: true});
        this.renderer.setSize(this.width, this.height);//设置渲染区域尺寸
        // this.renderer.setClearColor(color, 1); //设置背景颜色
        this.renderer.setClearAlpha(0); //设置背景透明色
        this.renderer.shadowMapEnabled = true;
        let canvas = document.querySelector('.canvas')
        // log('canvas', canvas)
        canvas.appendChild(this.renderer.domElement); //body元素中插入canvas对象
      },
      render() {
        this.renderer.render(this.scene, this.camera);//执行渲染操作
        // this.group.rotateY(0.001)
        // console.log(this.camera.position)
        requestAnimationFrame(this.render);//请求再次执行渲染函数render
      },
      // 浏览器窗口变动触发的方法
      onWindowResize() {
        // 重新设置相机宽高比例
        this.camera.aspect = window.innerWidth / window.innerHeight;
        // 更新相机投影矩阵
        this.camera.updateProjectionMatrix();
        // 重新设置渲染器渲染范围
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      },
      //绘制文字
      createCanvas(text) {
        /* 创建画布 */
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = 300 * 5;
        canvas.height = 170 * 5;
        context.scale(5, 5);
        this.drawRect(context);

        /* 字体颜色 */
        context.fillStyle = "rgba(255,255,255,1)";
        context.font = "100px bolder";
        /**文字 */
        context.fillText(text, 50, 80);
        return canvas;
      },
      drawRect(ctx) {
        // ctx.strokeRect(0, 0, 380, 170);
        ctx.fillStyle = "rgba(10,18,51,0)";
        ctx.fillRect(1, 1, 756, 336);
        // ctx.scale(2, 2)
      },

      //点击向下滚动
      arrowDownward(e) {
        document.querySelector('.swiper-box').scrollTop += 185
      },
      //点击切换 用电量/功率
      tabTrue() {
        this.isShowTab = true
      },
      tabFalse() {
        this.isShowTab = false
      }
    },
    mounted() {
      dataList.map(item => {
        this.linkList.push({
          allKwh: item.allKwh.toFixed(2),
          allPower: item.allPower.toFixed(2),
          allConsume: item.allConsume.toFixed(2)
        })
      })
      this.linkList.forEach((item, i) => {
        item.name = this.linkName[i].name
        item.isRise = this.linkName[i].isRise
      })
      this.width = 2272;
      this.height = 942;
      this.initScene();
      this.initAmbient(0xffffff);
      // this.initPoint(0xffffff, {x: 0, y: 800, z: 0,});
      // this.initSpotLight(0, 1600, 0);
      this.initDireaction(0xffffff, 0.7, {x: 8500, y: 800, z: 0,});
      // this.initRectLight(0, 800, 0)
      // let mtlPath = '/static/obj/' + '1.mtl'
      // let objPath = '/static/obj/' + 'zb.obj'
      // let objPath = '/static/obj/' + 'zb.obj'
      let mtlPath = process.env.BASE_URL + 'obj/1.mtl'
      let objPath = process.env.BASE_URL + 'obj/zb.obj'
      let pointPath = process.env.BASE_URL + 'obj/point.obj'
      this.start = new Date().getTime()
      this.initObjLoader(mtlPath, objPath, pointPath)
      this.initPerspectiveCamera(25, {x: 2500, y: 0, z: -2000})
      // this.initOrthographicCamera(3000, { x: 0, y: 3000, z: 2000,})
      this.initRenderer()
      this.render()
      this.initControls()
      // 添加window 的resize事件监听
      window.addEventListener('resize', this.onWindowResize)
      this.$nextTick(() => {
        let myPlayer = this.$video(document.getElementById('myVideo'), {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: false,
          //自动播放属性,muted:静音播放
          autoplay: true,
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: 501,
          //设置视频播放器的显示高度（以像素为单位）
          height: 210,
          loop: "true",
          muted: "false",
        });
      })
      window.addEventListener( 'click', this.onMouseClick, false );
    },
  }
</script>

<style scoped lang="scss">
  .content3d {
    .canvas {
      position: relative;

      .charttitle-line {
        width: 486px;
        height: 15px;
        margin-bottom: 21px;
      }

      .electric-box {
        position: absolute;
        top: 31px;
        left: 49px;
        width: 501px;

        .chart-box {
          margin-bottom: 12px;
          display: flex;
          flex-direction: column;

          p {
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 34px;
            color: #04F0FF;
            padding-left: 25px;
          }

          .electricOption {
            width: 493.4px;
            height: 201px;

            canvas {
              width: 100%;
              height: 100%;
            }
          }

          span {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            color: #FFFFFF;
          }

          .swiper-title {
            display: flex;
            align-items: center;

            .tab {
              color: #04F0FF;
            }

            .tab1 {
              margin-left: 60px;
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 25px;
              user-select: none;
            }

            .tab2 {
              margin-left: 30px;
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 25px;
              user-select: none;
            }
          }

          .swiper-box {
            width: 100%;
            height: 185px;
            overflow-y: scroll;
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;
            transition: all .8s;

            .swiper-link {
              height: 37.14px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;

              i {
                display: flex;
                width: 180px;
              }

              .value-box {
                align-items: center;
                justify-content: space-between;
              }

              span {
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 25px;
                color: #FFFFFF;
              }

              .nub {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 26px;
                height: 26px;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid #fff;
                margin-left: 34px;
              }

              .nub1 {
                background-color: #FF3D3D;
                border: none;
              }

              .nub2 {
                background-color: #FF9A3D;
                border: none;
              }

              .nub3 {
                background-color: #898989;
                border: none;
              }

              .name {
                margin-left: 10px;
              }

              .is-rise {
                width: 21px;
                height: 21px;
                margin-right: 20px;
              }
            }

            .swiper-link1 {
              background: linear-gradient(90deg, rgba(4, 165, 255, 0.64) 0%, rgba(0, 233, 248, 0) 100%);
            }
          }

          .swiper-box::-webkit-scrollbar {
            display: none;
          }

          .downward-box {
            margin: 12.38px auto 0;
            width: 33px;
            height: 14px;
          }

          .arrow-downward {
            width: 33px;
            height: 14px;
          }
        }
      }

      .popup-chart {
        position: absolute;
        top: 100px;
        left: 50%;
        width: 800px;
        height: 700px;
        transform: translate(-50%);
        background: linear-gradient(to bottom, rgba(50, 109, 178, .5) 0%, rgba(10, 26, 45, .5) 100%);
        box-shadow: 0 4px 10px 0 #000000;

        .popup-top {
          width: 100%;
          height: 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          background: linear-gradient(to left, rgba(4, 240, 255, .5) 0%, rgba(4, 240, 255, .01) 100%);

          span {
            color: #FFFFFF;
            font-weight: medium;
            font-size: 16px;
            line-height: normal;
            letter-spacing: 0;
            text-align: left;
          }
          .closePopup {
            cursor: pointer;
          }
        }

        .top-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 40px;
          width: 100%;
          padding-left: 20px;

          span {
            width: 180px;
            color: rgba(255, 255, 255, .8);
            font-weight: regular;
            font-size: 12px;
            line-height: normal;
            letter-spacing: 0px;
            text-align: left;
          }
        }

        .chart-box {
          height: 320px;
          width: 100%;

          p {
            color: #04F0FF;
            font-weight: medium;
            font-size: 14px;
            line-height: normal;
            letter-spacing: 0px;
            text-align: left;
            padding-left: 33px;
          }

          .allpowerOption {
            width: 800px;
            height: 300px;

            canvas {
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      .yield-box {
        position: absolute;
        top: 31px;
        right: 49px;
        width: 501px;

        .chart-box {
          display: flex;
          flex-direction: column;
          margin-bottom: 12px;

          p {
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 34px;
            color: #04F0FF;
            padding-left: 25px;
          }

          .charttitle-line {
            margin: 0;
          }

          span {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            color: #FFFFFF;
          }

          .electricOption1 {
            width: 493.4px;
            height: 201px;

            canvas {
              width: 100%;
              height: 100%;
            }
          }

          .swiper-box {
            width: 100%;
            height: 110px;
            overflow-y: scroll;
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;
            transition: all .8s;

            .swiper-link {
              height: 37.14px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;

              i {
                display: flex;
                width: 180px;
              }

              .value-box {
                align-items: center;
                justify-content: space-between;
              }

              span {
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 25px;
                color: #FFFFFF;
              }

              .nub {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 26px;
                height: 26px;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid #fff;
                margin-left: 34px;
              }

              .nub1 {
                background-color: #FF3D3D;
                border: none;
              }

              .nub2 {
                background-color: #FF9A3D;
                border: none;
              }

              .nub3 {
                background-color: #898989;
                border: none;
              }

              .name {
                margin-left: 10px;
              }

              .is-rise {
                width: 21px;
                height: 21px;
                margin-right: 20px;
              }
            }

            .swiper-link1 {
              background: linear-gradient(90deg, rgba(4, 165, 255, 0.64) 0%, rgba(0, 233, 248, 0) 100%);
            }
          }

          .swiper-box::-webkit-scrollbar {
            display: none;
          }

          .videoBg {
            width: 501px;
            height: 210px;

            video {
              width: 501px;
              height: 210px;
            }
          }
        }
      }
    }
  }

</style>