<template>
    <nav class="navList"  @mouseleave="setStyle(false)">
        <ul class="navList-ul">
            <li v-for="(item,index) in navList" :key="index" @mouseenter="setStyle(true,index)" @mouseleave="setStyle(true,index)">
                <router-link :to="item.path">
                    <Icon :name="item.icon+'0'" class="navIcon" v-if="$route.path!==item.path&&item.style===0" ></Icon>
                    <Icon :name="item.icon+'1'" class="navIcon activeNav" v-if="$route.path===item.path || item.style===1"></Icon>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import Icon from './Icon.vue'
    export default {
        name: "Nav",
        components: {
            Icon
        },
        data() {
            return {
                navList:[]
            }
        },
        methods: {
            setStyle(style,i) {
                if (style) {
                    this.navList.forEach((item,index) => {
                        if (index===i) {
                            item.style=1
                        }else {
                            item.style=0
                        }
                    })
                } else {
                    this.navList.forEach(item => {
                            item.style=0
                    })
                }
            }
        },
        created() {
            this.navList = [
                {
                    path:'/',
                    icon:'navHome_',
                    style:0
                },
                {
                    path:'/Tot',
                    icon:'tot_',
                    style:0
                },
                {
                    path:'/PowerGrid',
                    icon:'powerGrid_',
                    style:0
                },
                {
                    path:'/Industry',
                    icon:'internet_',
                    style:0
                },
                {
                    path:'/Elastic',
                    icon:'elasticity_',
                    style:0
                },
                {
                    path:'/Economics',
                    icon:'economic_',
                    style:0
                }
            ]
        }
    }
</script>

<style scoped lang="scss">
    .navList{
        position: fixed;
        top: 50%;
        right: 36px;
        transform: translateY(-50%);
        z-index: 999;
        .navList-ul{
            display: flex;
            flex-direction: column;
            /*align-content: space-between;*/
            align-items: center;
            justify-content: center;
            width: 125px;
            padding: 50px 50px;

            li{
                margin-top: 34px;
                transition: all 0.8s;

                &:first-child{
                    margin-top: 0;
                }
                .navIcon{
                    width: 75px;
                    height: 55px;
                    transition: 5s;
                }
                &:hover{
                    transform:scale(1.2) ;
                }
            }
        }
    }
</style>