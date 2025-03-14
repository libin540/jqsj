<template>
    <div class="modal">
        <div class="modalContent">
            <div class="close">
                <p><img @click="handleClose" src="@/assets/page/return.png"/></p>
            </div>
            <div class="steps">
               <ul>
                    <li v-for="item in stepsDataList" :key="item.key" :class="item.dateTime ? 'stepActive' : ''"><p>{{item.content}}</p><span>{{item.dateTime}}</span></li>
               </ul>
            </div>
            <div class="detailNav">
                <ul>
                    <li  v-for="item in navList" :key="item.id" @click="handleNavClick(item.id)" :class="item.id == navActive ? 'navActive' : ''">{{ item.name }}</li>
                </ul>
            </div>
            <div class="contentBox">
                <div class="leftVideo">
                    <img :src="alarmAuditRecord && alarmAuditRecord.url"/>
                    <div class="previous" @click="handlePrevious"> <img src="@/assets/page/left.svg"/> </div>
                    <div class="next" @click="handleNext"> <img src="@/assets/page/right.svg" /></div>
                    <div class="titleTip">{{alarmAuditRecord && alarmAuditRecord.deviceName}}</div>
                </div>
                <div class="rightDetail">
                    <div class="tabList">
                        <ul>
                            <li v-for="item in tabList" :key="item.id" :class="tabeActive == item.id ? 'activeLi' : ''" @click="handleTab(item.id)">{{ item.name }}</li>
                        </ul>
                        <p><img src="@/assets/page/sz.png"/></p>
                    </div>
                    <div class="informationScroll">
                        <div class="detailsInformation" v-if="tabeActive == 1">
                            <div class="informationTitle">
                                <span></span>
                                <p>原始报警信息</p>
                            </div>
                            <div class="information">
                                <ul>
                                    <li><span>报警ID：</span><p>{{alarmAuditRecord && alarmAuditRecord.deviceId}}</p></li>
                                    <li><span>报警内容：</span><p>{{alarmAuditRecord && alarmAuditRecord.promptContext}}</p></li>
                                    <li><span>时间：</span><p>{{alarmAuditRecord && alarmAuditRecord.promptTime}}</p></li>
                                    <li><span>事件类型：</span><p>{{alarmAuditRecord && alarmAuditRecord.eventType_text}}</p></li>
                                    <li><span>置信度：</span><p>{{alarmAuditRecord && alarmAuditRecord.reliability}}</p></li>
                                    <li><span>报警设备：</span><p>{{alarmAuditRecord && alarmAuditRecord.deviceName}}</p></li>
                                    <li><span>报警级别：</span><p>{{alarmAuditRecord && alarmAuditRecord.promptLevel}}</p></li>
                                    <li><span>智能研判：</span><p>{{alarmAuditRecord && alarmAuditRecord.intelligenceResult}}</p><p>{{ alarmAuditRecord && alarmAuditRecord.intelligenceTime }}</p></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div class="detailsInformation" v-if="tabeActive == 2" v-for="(item,index) in informationList" :key="item.auditId" >
                            <div class="informationTitle">
                                <span></span>
                                <p>审核记录{{index+1}}</p>
                            </div>
                            <div class="information">
                                <ul>
                                    <li><span>审核人员:</span><p>{{ item.name }}</p></li>
                                    <li><span>审核时间:</span><p>{{ item.audioTime }}</p></li>
                                    <li><span>审核状态:</span><p 
                                        :style="{
                                            textAlign:'center',
                                            padding:'2px 10px',
                                            flex:'0.2',
                                            borderRadius:'16px',
                                            justifyContent:'center',
                                            background:item.audioStatus == '4'? '#FFD5D5':
                                            item.audioStatus == '2'? '#E4E4E4':
                                            item.audioStatus == '1'? '#FFEBD5':
                                            item.audioStatus == '3'? '#F1E4FF':'',
                                            border:item.audioStatus == '4'? '1px solid #FF6D6D':
                                            item.audioStatus == '2'? '1px solid #B2B2B2':
                                            item.audioStatus == '1'? '1px solid #FFBB6D':
                                            item.audioStatus == '3'? '1px solid #834EEC':'none', 
                                            color:item.audioStatus == '4'? '#FA2D2D':
                                            item.audioStatus == '2'? '#8E8E8E':
                                            item.audioStatus == '1'? '#FA932D':
                                            item.audioStatus == '3'? '#8B72D2':'#000', 
                                            }" class="audioStatus">{{ item.audioStatus_text }}</p></li>
                                    <li><span>推送状态:</span><p style="color:#00BB44;" >{{ item.pushStatus_text }}</p></li>
                                    <li><span>报警接收人:</span><p>{{ item.recipient }}</p></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div class="detailsInformation" v-if="tabeActive == 3 && alarmProcessRecordList != null">
                            <!-- <div class="informationTitle">
                                <span></span>
                                <p>处理记录{{index+1}}</p>
                            </div> -->
                            <div class="information">
                                <ul>
                                    <li><span>处理时间:</span><p>{{ alarmProcessRecordList && alarmProcessRecordList.dealTime }}</p></li>
                                    <li><span>处理状态:</span><p>{{ alarmProcessRecordList && alarmProcessRecordList.dealStatus }}</p></li>
                                    <li><span>处理接收人:</span><p>{{ alarmProcessRecordList && alarmProcessRecordList.dealPersonName }}</p></li>

                                    
                                </ul>
                            </div>
                        </div>
                        <div class="noData" v-if="tabeActive == 2 && informationList.length == 0">
                            <img src="@/assets/page/zwsj.svg"/> 
                            <p>暂无数据</p>
                        </div>
                        <div class="noData" v-if="tabeActive == 3 && alarmProcessRecordList == null">
                            <img src="@/assets/page/zwsj.svg"/> 
                            <p>暂无数据</p>
                        </div>

                    </div>
                    
                    <div class="operatingButton">
                        <el-button @click="handleConfirm(4)">确认</el-button>
                        <el-button @click="handleConfirm(2)">误报</el-button>
                        <el-button @click="handleConfirm(3)">疑似</el-button>
                        <el-button @click="handleConfirm(1)">推送</el-button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="customizeModal"  >
            <a-modal  v-model:open="confirmOpen" :title="buttonType == 4 ? '确认': buttonType == 2 ? '误报': buttonType == 3 ? '疑似': buttonType == 1 ? '推送确认' : ''" width="437px" style="top:calc(50% - 80px)" :footer='null'  @close="showModal = false" >
                <div class="confirmModal">
                    <div class="confirminInformation" v-if="buttonType == 1">
                        <p>默认推送人</p>
                        <a-tree-select
                            v-model:value="pushPerson"
                            style="width: 75%"
                            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                            placeholder="请选择"
                            allow-clear
                            tree-default-expand-all
                            :tree-data="selectData.receiverList"
                            tree-node-filter-prop="name"
                        >
                        </a-tree-select>
                    </div>
                    <div class="confirminInformation" v-if="buttonType == 2 || buttonType == 3 || buttonType == 4">
                        <p>备注</p>
                        <a-textarea v-model:value="operationRemarks" style="width: 90%" placeholder="请输入备注" allow-clear />
                    </div>
                    <div class="confirmBtn">
                        <a-button type="primary" class="confirm" style="margin-right: 10px;" @click="handleRecord">确认</a-button>
                        <a-button style="margin-left: 10px;" @click="handleCancelRecord">取消</a-button>
                    </div>
                </div>
                
            </a-modal>
        </div> -->
    </div>
   
</template>
<script setup>
import { ref, defineProps,onMounted } from 'vue';
 import { useRouter,useRoute } from 'vue-router'
 import { promptGetById } from '@/api/alarmCenter/alarmQuery'
 import { computed } from 'vue';
 import { ElMessage } from 'element-plus'
 import moment from 'moment';
  import {promptList, } from '@/api/alarmCenter/alarmQuery'

// const props = defineProps({
//     alarmDetailsFlage: Boolean, // 从父组件接收的开关状态
//     recordId:String,
//     selectData:Object,
//     alarmIdList:Array,
//     listIndex:Number,
//     paginationObj:Object,
//     formState:Object,
//     data:Array,
//     tabActive:String,
// });
const router = useRouter();
const route = useRoute();

const open = ref(true);
const confirmOpen = ref(false);
const pushPerson = ref(null);
const operationRemarks = ref(null);
const buttonType = ref('');
const tabeActive = ref('1');
const detailIndex = ref(null)
const detailIndexAll = ref (null)
const alarmId = ref(null)
const emit = defineEmits(['closeAlarmDetails'])
const stepsDataList = ref([{
    key:1,
    lable:'产生告警',
    time:'2025-02-15  14:20:10',
},{
    key:2,
    lable:'智能研判：正告',
    time:'2025-02-15  14:20:10',
},{
    key:3,
    lable:'人工审核：正告',
    time:'2025-02-15  14:20:10',
},{
    key:4,
    lable:'推送告警',
    time:'2025-02-15  14:20:10',
},{
    key:5,
    lable:'处理告警：',
    time:'确认收到',
},])
const navList =ref([{
    name:'详情',
    id:1,
},
// {
//     name:'实时',
//     id:2,
// },{
//     name:'录像',
//     id:3,
// }
]);
const tabList =ref([{
    name:'告警信息',
    id:1,
},{
    name:'人工审核信息',
    id:2,
},{
    name:'处理信息',
    id:3,
}
]);
const alarmAuditRecord = ref({})
const informationList = ref([]);//审核记录
const alarmProcessRecordList = ref(null);//处理信息
const pagination = ref({})
const formSeach = ref({})
const dataList = ref([])
const totalAll = ref(null)
const navActive = ref('1')
onMounted(async () => {
    // alarmId.value = props.recordId
    // detailIndex.value = props.listIndex
    // // const index = props.alarmIdList.findIndex(item => item == alarmId.value);
    // // detailIndex.value = index
    // pagination.value = props.paginationObj
    // formSeach.value = props.formState
    // dataList.value = props.data
    // totalAll.value = props.formState.current * 10 + 1 + props.listIndex
  
    const queryParams = route.query;
    const jsonString = queryParams.data;
    const obj = JSON.parse(decodeURIComponent(jsonString));
    // const paramValue = queryParams.get('paramName');
    pagination.value = obj.paginationObj
    detailIndex.value = obj.index
    detailIndexAll.value = obj.indexAll
    
    console.log(queryParams,obj,)
    await handleDetail(obj.record.id)
    await handleAlarList()
})
const handleDetail = async(id) => {
    // let parameter = {
    //     // "alarmId": props.recordId,
    //     "alarmId": 'A1001'
    // }
    try {
    const response = await promptGetById(id);
    const data = response.data.data.data
    console.log(response,)
    // console.log(data.value)
    stepsDataList.value = data.flowInfoList//步骤条
    alarmAuditRecord.value = data.prompt//报警信息
    informationList.value = data.promptAudioList//审核记录
    alarmProcessRecordList.value = data.promptDeal//处理记录
    console.log(alarmAuditRecord.value)



  } catch (error) {
    console.error('获取信息失败', error);
  }
}
const  handleAlarList = async() => {
  let parameter = {
    "pageNumber": pagination.value.current,
    "pageSize": pagination.value.pageSize,
  }
  try {
    const response = await promptList(parameter);
    const data = response.data.data
    dataList.value = data.records
    pagination.value.total =  data.total
    console.log(dataList.value)
  } catch (error) {
    console.error('获取信息失败', error);
  }
}

const processingTimestamp = ((time) => {
  // console.log(time)
  // const formattedDate = moment(time).format('YYYY-MM-DD HH:mm:ss');;
  //todo 临时兼容后端时间戳问题 后期改回东八区时间
  const formattedDate = moment.utc(time).format('YYYY-MM-DD HH:mm:ss');
  // console.log(date)
  // 这里可以根据需要过滤或转换 items
  return formattedDate; // 直接返回原始数据，或者你可以在这里添加过滤逻辑
});
const handleClose = () => {
    router.push({ path: '/alarmCenter/alarmQuery',});
}
const handleNavClick = (id) =>{
    navActive.value = id
    
}
const handleTab = (id) => {
    tabeActive.value = id
}
const handleCancel = () => {
    // this.$emit('closeAlarmDetails');
    emit('closeAlarmDetails')
}

//报警信息处置
const informationDisposal = async() => {
  let parameter = {
    // "alarmId": props.recordId,
    "alarmId": alarmAuditRecord.value.alarmId,
    // alarmAuditRecord.value.alarmId
    "auditStatus":buttonType.value,
    "auditRemark":operationRemarks.value,
    "id":alarmAuditRecord.value.id,
  }
  console.log(parameter)
  try {
    const response = await audit(parameter);
    console.log(response,)
    if(response.success == true){
        message.success(response.message)
        confirmOpen.value = false
        operationRemarks.value = null
        handleDetail()
    }else{
        message.error(response.message)
    }

  } catch (error) {
    console.error('获取信息失败', error);
  }
}
//推送
const pushNotifications = async() => {
  let parameter = {
    // "alarmId": props.recordId,
    "alarmId": alarmAuditRecord.value.alarmId,
    "id":alarmAuditRecord.value.id,
    "receiverIds":[pushPerson.value],
  }
  console.log(parameter)
  try {
    const response = await alarmPush(parameter);
    console.log(response,)
    if(response.success == true){
        message.success(response.message)
        confirmOpen.value = false
        pushPerson.value = null
        handleDetail()
    }else{
        message.error(response.message)
    }

  } catch (error) {
    console.error('获取信息失败', error);
  }
}
//上一条
const handlePrevious = async() => {
    
    if(detailIndexAll.value == 1 ){
        ElMessage({
            message: '已经是第一条了！',
            type: 'warning', // 'success', 'warning', 'info', 'error'
            duration: 3000 // 持续时间，单位为毫秒
        })
        
    }else{
        // if(detailIndex.value == 1){
        //     // if(pagination.value.current!=1){
        //         pagination.value.current = pagination.value.current - 1
        //         detailIndex.value = 10
        //         await handleAlarList()
        //         detailIndexAll.value = detailIndexAll.value - 1
        //         detailIndex.value = detailIndex.value - 1
        //         console.log(detailIndex.value,detailIndexAll.value,7)
        //         const match = dataList.value[detailIndex.value];
        //         await handleDetail(match.id)
               
        //         console.log(detailIndex.value,detailIndexAll.value,3)
        //     // }
           
        // }else{
        //     console.log(detailIndex.value,detailIndexAll.value,6)
        //     const match = dataList.value[detailIndex.value == 10 ? detailIndex.value-1 : detailIndex.value];
        //     console.log(match.id,detailIndex.value,detailIndexAll.value,5)
        //     detailIndex.value = detailIndex.value - 1
        //     detailIndexAll.value = detailIndexAll.value - 1
        //     await handleDetail(match.id)
           
        //     console.log(match.id,detailIndex.value,detailIndexAll.value,4)
        // }
        if(detailIndexAll.value % 10 === 0){
            pagination.value.current = pagination.value.current - 1
            await handleAlarList()
            console.log(dataList.value,detailIndexAll.value)
            // const match = dataList.value[detailIndex.value];
            detailIndexAll.value = detailIndexAll.value - 1
            const item = dataList.value.find(item => item.rowNum == detailIndexAll.value);
            console.log(item)
            await handleDetail(item.id)
            
        }else{
            console.log(dataList.value,detailIndexAll.value)
            detailIndexAll.value = detailIndexAll.value - 1
            const item = dataList.value.find(item => item.rowNum == detailIndexAll.value);
            console.log(item)
            await handleDetail(item.id)
           
        }

    }

}
//下一条
const handleNext = async() => {
    if(detailIndexAll.value == pagination.value.total){
        ElMessage({
            message: '已经是最后一条了！',
            type: 'warning', // 'success', 'warning', 'info', 'error'
            duration: 3000 // 持续时间，单位为毫秒
        })
        console.log(detailIndexAll.value,pagination.value.total)
    }else{
        // if(detailIndex.value == 10){
        //     pagination.value.current = pagination.value.current + 1
        //     detailIndex.value = 0
        //     await handleAlarList()
        //     const match = dataList.value[detailIndex.value];
        //     await handleDetail(match.id)
        //     detailIndexAll.value = detailIndexAll.value + 1
        //     detailIndex.value = detailIndex.value + 1
        //     console.log(detailIndex.value,detailIndexAll.value,1)
        // }else{
        //     const match = dataList.value[detailIndex.value];
        //     await handleDetail(match.id)
        //     detailIndexAll.value = detailIndexAll.value + 1
        //     detailIndex.value = detailIndex.value + 1
        //     console.log(match.id,detailIndex.value,detailIndexAll.value,2)
        // }
        if(detailIndexAll.value % 10 === 0){
            pagination.value.current = pagination.value.current + 1
            await handleAlarList()
            // const match = dataList.value[detailIndex.value];
            detailIndexAll.value = detailIndexAll.value + 1
            const item = dataList.value.find(item => item.rowNum == detailIndexAll.value);
            console.log(item)
            await handleDetail(item.id)
            
        }else{
            console.log(dataList.value,detailIndexAll)
            detailIndexAll.value = detailIndexAll.value + 1
            const item = dataList.value.find(item => item.rowNum == detailIndexAll.value);
            console.log(item)
            await handleDetail(item.id)
           
        }

    }
}

//确认记录
const handleConfirm = (type,item) => {
    buttonType.value = type
    confirmOpen.value = true
}
//取消
const handleCancelRecord = () => {
    confirmOpen.value = false
}
//确认获取默认推送人 
const handleRecord = () => {
    console.log(buttonType.value)
    if(buttonType.value == 2 || buttonType.value == 3 || buttonType.value == 4){
        informationDisposal()
    }
    if(buttonType.value == 1){
        pushNotifications()
    }
}



</script>
<style lang="less">
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
.modal{
   
    padding: 16px;
    .modalContent{
        background: #FFFFFF;
        box-shadow: 0px 0px 3px 1px rgba(206,206,206,0.66);
        border-radius: 6px;
        padding: 26px;
        position: relative;
        .close{
            position: absolute;
            top:13px;
            right: 15px;
            p{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 15px;
                height: 15px;
            }
            
        }
        .steps{
            margin-top: 10px;
            ul{
                display: flex;
                li{
                    height: 38px;
                    line-height: 38px;
                    width: 20%;
                    background: url(@/assets/page/back.png);
                    background-size: 100% 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    p{
                        font-weight: 400;
                        font-size: 14px;
                        color: #2C2C2C;
                        margin-right: 20px;
                    }
                    span{
                        font-weight: 400;
                        font-size: 14px;
                        color: #838383;
                    }
                }
                .stepActive{
                    background: url(@/assets/page/blueback.png);
                    background-size: 100% 100%;
                    p{
                        color:#fff;
                    }
                    span{
                        color:#fff;
                    }
                }
            }
        }
        .detailNav{
            margin-top: 24px;
            ul{
                display: flex;
                li{
                    width: 145px;
                    height: 46px;
                    text-align: center;
                    line-height: 46px;
                    background: linear-gradient( 180deg, #FFFFFF 0%, #E3EBFF 100%);
                    border-radius: 12px 12px 0px 0px;
                    border: 1px solid #C3C7CC;
                    font-weight: 400;
                    font-size: 16px;
                    color: #1D202B;
                }
                .navActive{
                    background: #408FFF;
                    color: #FFFFFF;
                }
            }

        }
        .contentBox {
            display: flex;
            .leftVideo{
                position: relative;
                width: 70%;
                height: 700px;
                img{
                    width: 100%;
                    height: 100%;
                }
                // background: red;
                .previous{
                    position: absolute;
                    left:20px;
                    top:calc(50% - 56px);



                }
                .next{
                    position: absolute;
                    right:20px;
                    top:calc(50% - 56px);

                }
                .titleTip{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background: rgba(0,0,0,0.61);
                    padding: 23px 25px;
                    font-weight: 400;
                    font-size: 26px;
                    color: #FFFFFF;
                }

            }
        
            .rightDetail{
                width: 30%;
                padding-left: 25px;
                height: 600px;
                .tabList{
                    background: #FFFFFF;
                    border-radius: 4px 4px 4px 4px;
               
                    height: 29px;
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ul{
                    width: 90%;
                    display: flex;
                    align-items: center;
                    border: 1px solid #E0E0E0;
                    li{
                        cursor: pointer;
                        line-height: 29px;
                        width: 33.33%;
                        text-align: center;
                        color:#979CAD;
                    }
                    .activeLi{
                        background: #408FFF;
                        border-radius: 4px 4px 4px 4px;
                        color:#fff;
                    }
                }
                }
                .informationScroll {
                    scrollbar-width: none;
                }
    
                .informationScroll{
                    height: 590px;
                    overflow-y: auto;
                    .detailsInformation{
                    .informationTitle{
                        display: flex;
                        align-items: center;
                        padding-bottom: 9px;
                        border-bottom: 1px solid #DCDFE6;
                        span{
                            display: inline-block;
                            width: 3px;
                            height: 18px;
                            background: #408FFF;
                        }
                        p{
                            font-weight: bold;
                            font-size: 18px;
                            color: #1D202B;
                            margin-left: 15px;
                        }
                    }
                    .information{
                        ul{
                            li{
                                display: flex;
                                margin-top: 14px;
                                .auditStatus{
                                    border-radius: 15px;    
                                }
                                span{
                                    display: inline-block;
                                }
                                p{
                                    flex-wrap: wrap;
                                    flex: 1;
                                    margin-left: 5px;
                                }
                                span,p{
                                    font-weight: 400;
                                    font-size: 16px;
                                    color: #000000;
                                }
                            }
                        }
                    }

                    }
                    .noData{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 40px 0 ;
                        img{
                            width: 150px;
                            height: 150px;
                        }
                        p{
                        margin-top: 20px;
                        }

                    }
                    .detailsInformation:not(:first-child){
                        margin-top: 26px;
                    }
                }
                .operatingButton{
                    display: flex;
                    align-items: end;
                    justify-content: space-around;
                    margin-top: 28px;
                    button{
                        border: 1px solid #112BAC;
                        color:#1C34AF;
                        width: 90px;

                    }
                    .confirm{
                        background: linear-gradient( 180deg, #122FB7 0%, #0B1668 100%);
                        box-shadow: 0px 3px 6px 1px #AFBCFF;
                        color:#FFFFFF;

                    }
                }
            

            }
        } 
    }
    .confirmModal{
        .confirminInformation{
            display: flex;
            align-items: center;
            p{
                margin-right: 10px;
            }
        }
        .confirmBtn{
            display: flex;
            justify-content: center;
            margin-top: 28px;
            button{
                border: 1px solid #112BAC;
                color:#1C34AF;
                width: 90px;

            }
            .confirm{
                background: linear-gradient( 180deg, #122FB7 0%, #0B1668 100%);
                box-shadow: 0px 3px 6px 1px #AFBCFF;
                color:#FFFFFF;

            }

        }

    }
}



</style>