<template>
    <div class="detailList">
        <div class="title">
            <p>未戴安全帽告警</p>
            <div style="width: 400px;">
                <el-date-picker
                    style="width: 400px;"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </div>
            
        </div>
        <div class="statistics">
            <div class="statisticsNumber">
                <p><img src="@/assets/statisticalAnalysis/zjs.svg"/></p>
                <span>报警总数（个）</span>
                <p>1,544</p>
            </div>
            <div class="statisticsNumber">
                <p><img src="@/assets/statisticalAnalysis/zjs.svg"/></p>
                <span>今日新增报警（个）</span>
                <p>27</p>
            </div>
            <div class="statisticsNumber">
                <p><img src="@/assets/statisticalAnalysis/zjs.svg"/></p>
                <span>报警类型</span>
                <p>9</p>
            </div>
        </div>
        <div class="onePoliceOneFileTab">
            <ul>
                <li v-for="item in tableLsit" :key="item.key" :class="tableActive == item.key ? 'tableActive': ''" @click="handleTableActive(item.key)">{{ item.label }}</li>
            </ul>
            <div class="styleBtn">
                <p :class="styleTab == 1 ? 'styleActive' : ''" @click="handleStyleSwitching(1)"><img v-if="styleTab == 1" src="@/assets/page/xzlb.svg"/><img v-else src="@/assets/page/lb.svg"/></p>
                <p :class="styleTab == 2 ? 'styleActive' : ''" @click="handleStyleSwitching(2)"><img v-if="styleTab == 2" src="@/assets/page/xzkp.svg"/><img v-else src="@/assets/page/kp.svg"/></p>
          </div>
        </div>
        <div class="cardListBox" v-if="styleTab == 2">
            <div class="cardList">
                <div class="card" v-for="item in cardList" :key="item.id">
                    <div class="cardContent">
                        <p class="assessment">智能研判：正告</p>
                        <img style="width: 50%;height: 100%;" src="@/assets/page/page.png"/>
                        <div class="cardInformation">
                            <ul>
                                <li><span>报警ID：</span><p>{{item.title}}</p></li>
                                <li><span>报警内容：</span><p>{{item.title}}</p></li>
                                <li><span>时间：</span><p>{{item.title}}</p></li>
                                <li><span>事件类型：</span><p>{{item.title}}</p></li>
                                <li><span>报警设备：</span><p>{{item.title}}</p></li>
                                <li><span>所属组织：</span><p>{{item.title}}</p></li>
                                <li><span>报警级别：</span><p>{{item.title}}</p></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="buttons">
                        <el-button >详情</el-button>
                        <el-button type="primary" >手动标记</el-button>
                    </div>
                    
                    

                </div>
            </div>


        </div>

    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const tableLsit = ref([
    {
        label:'原始告警信息',
        key:0,
    },{
        label:'智能研判后告警',
        key:1,
    },{
        label:'被过滤的告警',
        key:2,
    },
])
const cardList = ref ([{
    title:'未戴安全帽',
    number:'2030',
    rate:'3.5',
    id:1,
},{
    title:'未戴安全帽',
    number:'2030',
    rate:'3.5',
    id:1,
},{
    title:'未戴安全帽',
    number:'',
    rate:'3.5',
    id:1,
},{
    title:'未戴安全帽',
    number:'',
    rate:'3.5',
    id:1,
},{
    title:'未戴安全帽',
    number:'2030',
    rate:'3.5',
    id:1,
},{
    title:'未戴安全帽',
    number:'2030',
    rate:'3.5',
    id:1,
},{
    title:'未戴安全帽',
    number:'2030',
    rate:'3.5',
    id:1,
},{
    title:'未戴安全帽',
    number:'2030',
    rate:'3.5',
    id:1,
},{
    title:'未戴安全帽',
    number:'2030',
    rate:'3.5',
    id:1,
},])
const tableActive = ref(0)
const styleTab = ref('2')
//tab切换
const handleTableActive = (key) => {
    tableActive.value = key
}
//列表卡片切换
const handleStyleSwitching = (tab) => {
  styleTab.value = tab
  console.log(tab)
  if(tab == 2){
    paginationObj.current = 1
    paginationObj.pageSize = 8
    console.log(tab,123333333,paginationObj.pageSize)
  }else{
    paginationObj.current = 1
    paginationObj.pageSize = 10
  }
//   handleAlarList()
  

}

</script>
<style lang="less" scoped>
ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
}
ul li , ol li {
    padding: 0;
    margin: 0;
}
p{
    margin-bottom: 0;
}

.detailList{
    width: 100%;
    padding: 0 20px 20px ;
    .title{
        display: flex;
        justify-content: space-between;
        p{
            font-weight: bold;
            font-size: 20px;
            color: #000000;
        }
    }
    .statistics{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
       
        .statisticsNumber{
            width: 32%;
            height: 133px;
            background: #FFFFFF;
            box-shadow: 0px 0px 3px 1px rgba(206,206,206,0.66);
            border-radius: 9px 9px 9px 9px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 0 1%;
            span{
                margin: 0 20px;
                display: inline-block;
                font-weight: 400;
                font-size: 20px;
                color: #838383;
            }
            p{
                font-weight: bold;
                font-size: 46px;
                color: #000000;
                display: flex;
                align-items: center;
            }
        }
    }
    .onePoliceOneFileTab{
        margin: 22px 0 12px;
        display: flex;
        justify-content: space-between;
        ul{
            width: 508px;
            display: flex;
            align-items: center;
            height: 29px;
            background: #FFFFFF;
            border-radius: 4px 4px 4px 4px;
            border: 1px solid #E0E0E0;
            li{
                padding: 0 40px;
                font-weight: 400;
                font-size: 14px;
                color: #838383;
                height: 29px;
                line-height: 29px;
                cursor: pointer;
            }
            .tableActive{
                background: #408FFF;
                border-radius: 4px 4px 4px 4px;
                color: #FFFFFF;
            }
        }
        .styleBtn{
            display: flex;
            justify-content: end;
            background: #FFFFFF;
            border-radius: 4px 4px 4px 4px;
            border: 1px solid #E0E0E0;
            height: 29px;
           
            p{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 52px;
                height: 29px;
    
            }
            .styleActive{
                height: 29px;
                background: #408FFF;
                border-radius: 4px 4px 4px 4px;
    
    
            }
    
        }

    }
    .cardListBox{
        .cardList{
            display: flex;
            flex-wrap: wrap;
            .card{
                width: 32.5%;
                background: #FFFFFF;
                border-radius: 6px;
                padding: 16px;
                margin-top: 10px;
                position: relative;
                .cardContent{
                    display: flex;
                    .assessment{
                        position: absolute;
                        top:0;
                        left:0;
                        background: linear-gradient( 360deg, #42CE88 0%, #009149 100%);
                        border-radius:0px 15px 15px  0px;
                        color:#fff;
                        padding: 5px 8px;

                    }
                    .cardInformation{
                        width: 50%;
                        margin-left: 15px;
                        ul{
                            li{
                                display: flex;
                                margin-top: 4px;
                                .auditStatus{
                                    border-radius: 15px;    
                                }
                                span{
                                    display: inline-block;
                                }
                                p{
                                    flex-wrap: wrap;
                                    margin-left: 5px;
                                }
                                span,p{
                                    font-weight: 400;
                                    font-size: 14px;
                                    color: #000000;
                                }
                            }
                        }
                    }


                }
                .buttons{
                    margin-top: 10px;
                    display: flex;
                    justify-content: center;
                }
               

            }
            :not(:nth-child(1),:nth-child(4),:nth-child(7)){
                margin-left: 1%;
            }

        }

    }

}
</style>
  