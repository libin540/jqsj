<template>
    <div class="alarmQuery">
      <div class="seach">
        <!-- <a-form
          :model="formState"
          ref="formRef"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          layout="horizontal"
          :disabled="componentDisabled"
          style="max-width: 100%"
          labelAlign="right"
          @finish="onFinish"
        >
          <a-row :gutter="24">
            <a-col :span="6">
              <a-form-item label="报警类型" name="alarmType">
                <a-select
                  placeholder="请选择"
                  style="width: 80%"
                  v-model:value="formState.alarmType"
                >
                  <a-select-option v-for="option in alarmTypeList" :key="option.code" :value="option.code">{{option.name}}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
             
            </a-col>
            <a-col :span="6">
              <a-form-item label="审核状态" name="auditStatus">
                <a-select
                  placeholder="请选择"
                  style="width: 80%"
                  v-model:value="formState.auditStatus"
                >
                <a-select-option v-for="option in alarmAuditStatusList" :key="option.code" :value="option.code">{{option.name}}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="报警推送状态" name="pushStatus">
                <a-select
                  placeholder="请选择"
                  style="width: 80%"
                  v-model:value="formState.pushStatus"
                >
                <a-select-option v-for="option in pushStatusList" :key="option.code" :value="option.code">{{option.name}}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="24">
            <a-col :span="6">
              <a-form-item label="报警时间" name="alarmTime">
                <a-date-picker
                  placeholder="请选择"
                  style="width: 80%"
                  v-model:value="formState.alarmTime"
                />
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="报警审核人" name="auditUserId">
                <a-select
                  placeholder="请选择"
                  style="width: 80%"
                  v-model:value="formState.auditUserId"
                >
                <a-select-option v-for="option in auditUserList" :key="option.code" :value="option.code">{{option.name}}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="报警处理人" name="receiverId">
                <a-tree-select
                  v-model:value="formState.receiverId"
                  style="width: 80%"
                  :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                   placeholder="请选择"
                  allow-clear
                  tree-default-expand-all
                  :tree-data="receiverList"
                  tree-node-filter-prop="name"
                >
                </a-tree-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="审核时间" name="auditTime">
                <a-date-picker
                  placeholder="请选择"
                  style="width: 80%"
                  v-model:value="formState.auditTime"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <div class="seachBtn">
            <a-button class="primary" type="primary"  html-type="submit"
                >检索</a-button
              >
              <a-button style="margin-left: 10px;" @click="handleReset">重置</a-button
              >
          </div>
        </a-form> -->
        <el-form :inline="true" :model="formState" class="demo-form-inline" label-width="100px">
            <el-form-item label="报警类型">
                <el-select v-model="formState.alarmType" placeholder="请选择">
                    <el-option
                    v-for="item in alarmTypeList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="报警设备">
                <el-select v-model="formState.alarmDeviceId" placeholder="请选择">
                    <el-option
                    v-for="item in alarmTypeList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="审核状态">
                <el-select v-model="formState.auditStatus" placeholder="请选择">
                    <el-option
                    v-for="item in alarmTypeList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="报警推送状态">
                <el-select v-model="formState.pushStatus" placeholder="请选择">
                    <el-option
                    v-for="item in alarmTypeList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="报警时间">
                <el-date-picker
                    v-model="formState.alarmTime"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="报警审核人">
                <el-select v-model="formState.auditUserId" placeholder="请选择">
                    <el-option
                    v-for="item in alarmTypeList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="报警处理人">
                <el-select v-model="formState.receiverId" placeholder="请选择">
                    <el-option
                    v-for="item in alarmTypeList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="审核时间">
                <el-date-picker
                    v-model="formState.auditTime"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="primary" @click="onSubmit">检索</el-button>
                <el-button @click="handleReset">重置</el-button>
            </el-form-item>
        </el-form>
      </div>
     
      <div class="tableBox">
        <div class="functionButtons">
          <div class="tab">
            <div v-for="item in tabList" :key="item.id" :class="tabActive == item.id ? 'tabActive' : 'tabButton'" @click="handleTabClick(item.id)">{{item.label}}</div>
          </div>
          <div class="styleBtn">
            <p :class="styleTab == 1 ? 'styleActive' : ''" @click="handleStyleSwitching(1)"><img v-if="styleTab == 1" src="../../assets/page/xzlb.svg"/><img v-else src="../../assets/page/lb.svg"/></p>
            <p :class="styleTab == 2 ? 'styleActive' : ''" @click="handleStyleSwitching(2)"><img v-if="styleTab == 2" src="../../assets/page/xzkp.svg"/><img v-else src="../../assets/page/kp.svg"/></p>
  
          </div>
        </div>
        <div v-if="styleTab == 1" class="table">
            <el-table
                :data="data"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                <el-table-column
                prop="index"
                label="序号"
                width="60">
                <template #default="{ $index }">
                    {{((paginationObj.current - 1) * paginationObj.pageSize) + (++$index) }}
                </template>
                
                </el-table-column>
                <el-table-column
                prop="deviceName"
                label="报警设备">
                </el-table-column>
                <el-table-column
                prop="promptType"
                label="报警类型">
                </el-table-column>
                <el-table-column
                prop="promptTime"
                label="报警时间">
                </el-table-column>
                <!-- <el-table-column
                prop="alarmDevice"
                label="研判状态">
                </el-table-column> -->
                <el-table-column
                prop="checkStatus"
                label="审核状态">
                </el-table-column>
                <el-table-column
                prop="recipient"
                label="报警接收人">
                </el-table-column>
                <el-table-column
                prop="pushStatus"
                label="推送状态">
                </el-table-column>
                <el-table-column
                prop="dealPerson"
                label="报警处理人">
                </el-table-column>
                <el-table-column
                prop="dealTime"
                label="处理时间">
                
                </el-table-column>
                <el-table-column
                label="操作"
                fixed="right"
                width="180">
                <template #default="scope">
                    <span>
                        <a style="color:#408FFF;cursor: pointer;" @click="handleDetail(scope,index)">详情</a>
                        <el-divider direction="vertical" />
                        <el-popconfirm
                            title="是否确认?"
                            @confirm="handleConfirm(4,scope)"
                            @cancel="cancel"
                            >
                            <template #reference>
                                <a style="color:#408FFF;cursor: pointer;">确认</a>
                            </template>
                            
                        </el-popconfirm>
                        
                        <el-divider direction="vertical" />
                        <el-popconfirm
                            title="是否存疑?"
                            @confirm="handleConfirm(3,scope)"
                            @cancel="cancel"
                            >
                            <template #reference>
                                <a style="color:#408FFF;cursor: pointer;">存疑</a>
                            </template>
                            
                        </el-popconfirm>
                        <el-divider direction="vertical" />
                        <el-popconfirm
                                title="是否误报?"
                                @confirm="handleConfirm(2,scope)"
                                @cancel="cancel"
                            >
                            <template #reference>
                                <a style="color:#408FFF;cursor: pointer;">误报</a>
                            </template>
                            
                        </el-popconfirm>
                        
                        
                        </span>
                </template>
                </el-table-column>
            </el-table>
        </div>
        
        
        <div v-if="styleTab == 2"  class="cardListBox" >
          <div class="cardList" v-if="data.length !=0">
            <div class="card" v-for="(record,index) in data" :key="record.id">
              <p><span>报警设备：</span>{{ record.alarmDevice}}</p>
              <p><span>报警类型：</span>{{ record.alarmType}}</p>
              <p><span>报警处理人：</span>{{ record.auditUserName }}</p>
              <p><span>报警接收人：</span>{{ record.receiverName }}</p>
              <p><span>报警时间：</span>{{ record.alarmTime ? processingTimestamp(record.alarmTime) : ''}}</p>
              <p><span>处理时间：</span>{{ record.processTime ? processingTimestamp(record.processTime) : ''}}</p>
              <div class="cardButtons">
                  <a-button @click="handleDetail(record,index)">详情</a-button>
                  <a-popconfirm
                    title="是否确认?"
                    ok-text="确定"
                    cancel-text="取消"
                    @confirm="handleConfirm(4,record)"
                    @cancel="cancel"
                  >
                    <a-button>确认</a-button>
                  </a-popconfirm>
                  <a-popconfirm
                    title="是否存疑?"
                    ok-text="确定"
                    cancel-text="取消"
                    @confirm="handleConfirm(3,record)"
                    @cancel="cancel"
                  >
                    <a-button>存疑</a-button>
                  </a-popconfirm>
                  <a-popconfirm
                    title="是否误报?"
                    ok-text="确定"
                    cancel-text="取消"
                    @confirm="handleConfirm(2,record)"
                    @cancel="cancel"
                  >
                    <a-button>误报</a-button>
                  </a-popconfirm>
              </div>
              <p 
                :style="{
                    textAlign:'center',
                    padding:'5px 20px',
                    justifyContent:'center',
                    background:record.auditStatus == '4'? '#FFD5D5':
                    record.auditStatus == '2'? '#E4E4E4':
                    record.auditStatus == '1'? '#FFEBD5':
                    record.auditStatus == '3'? '#F1E4FF':'',
                    border:record.auditStatus == '4'? '1px solid #FF6D6D':
                    record.auditStatus == '2'? '1px solid #B2B2B2':
                    record.auditStatus == '1'? '1px solid #FFBB6D':
                    record.auditStatus == '3'? '1px solid #834EEC':'none', 
                    color:record.auditStatus == '4'? '#FA2D2D':
                    record.auditStatus == '2'? '#8E8E8E':
                    record.auditStatus == '1'? '#FA932D':
                    record.auditStatus == '3'? '#8B72D2':'#000', 
                    }" class="positionP">{{ record.auditStatusName }}</p>
            </div>
          </div>
          <div class="noData" v-if="data.length ==0">
            <img src="../../assets/page/zwsj.svg"/> 
            <p>暂无数据</p>
          </div>
  
        </div>
        <div class="pagination" v-if="data.length !=0">
            <el-pagination background v-model:current="paginationObj.current"  @change="handleCardPagination" :total="paginationObj.total"  :show-total="total => `共 ${total} 条`" />
            
        </div>
      </div>
      <!-- <AlarmDetails v-if="alarmDetailsFlage" 
                        :selectData="selectData" 
                        :alarmIdList="alarmIdList" 
                        :data="data"
                        :listIndex="listIndex" 
                        :recordId="recordId"  
                        :paginationObj="paginationObj" 
                        :formState="formState" 
                        :alarmDetailsFlage="alarmDetailsFlage" 
                        @closeAlarmDetails="closeAlarmDetails"
                        :tabActive="tabActive" >
      </AlarmDetails> -->
    </div>
  </template>
  <script setup>
  import { ref, reactive, onMounted } from "vue";
//   import AlarmDetails from './components/alarmQuery/AlarmDetails.vue'
  import {promptList, promptUpdate} from '../../api/alarmCenter/alarmQuery'
  import { useRouter, } from 'vue-router'
  import moment from 'moment';
  import { ElMessage } from 'element-plus'

  
  const router = useRouter();
  const recordId = ref('')
  const listIndex = ref(-1)
  const tabActive = ref('1')
  const styleTab = ref('1')
  const buttonType = ref('')
  const recordObject = ref({})
  const alarmDetailsFlage = ref(false)
  const paginationObj = reactive({
      // 表格分页的配置
      current: 1,
      pageSize: 10,
      // showSizeChanger: true, // 用于控制展示每页多少条的下拉
      showQuickJumper: true,
      total: 0,
      pageSizeOptions: ['10', '20', '50'],
      showTotal: (total) => `共 ${total} 条`,
    })
  const formState = ref({
    alarmType: null, //报警类型
    alarmDeviceId: null, //报警设备
    auditStatus: null, //审核状态
    alarmTime: null, //报警时间
    auditUserId: null, //报警审核人
    receiverId: null, //报警处理人
    auditTime: null, //审核时间
    pushStatus:null,//报警推送状态
  });
  const tabList = ref([{
    id:1,
    label:'原始告警信息',
  },{
    id:2,
    label:'智能研判后告警',
  },{
    id:3,
    label:'被过滤的告警',
  },
  // {
  //   id:3,
  //   label:'研判后存疑',
  // },
  ])
  const data = ref([])
  const alarmIdList = ref([])
  const selectData = ref({})
  const alarmTypeList = ref([])//报警类型
  const alarmAuditStatusList = ref([])//审核状态
  const alarmDeviceList = ref([])//报警设备
  const pushStatusList = ref([])//推送状态
  const auditUserList = ref([])//报警审核人
  const receiverList = ref([])//报警处理人
  
  
  
  // import TheWelcome from '../components/TheWelcome.vue';
  
  // console.log(queryUserAndObjOrgCallCount,aa)
  // const data = ref({});
  
  onMounted(async () => {
    try {
      const info = await conditions();
      console.log(info)
      selectData.value = info.data
      alarmTypeList.value = info.data.alarmTypeList
      alarmAuditStatusList.value = info.data.alarmAuditStatusList
      alarmDeviceList.value = info.data.alarmDeviceList
      pushStatusList.value = info.data.pushStatusList
      auditUserList.value = info.data.auditUserList
      receiverList.value = info.data.receiverList
      // data.value = info.result;
      // console.log(data.value)
    } catch (error) {
      console.error('获取信息失败', error);
    }
    await handleAlarList()
  })

    const  handleAlarList = async() => {
    let parameter = {
        "pageNumber": paginationObj.current,
        "pageSize": paginationObj.pageSize,
        // "alarmDeviceId":formState.value.alarmDeviceId, // 报警设备id
        // "alarmTypeCode": formState.value.alarmType, //报警类型id
        // "alarmTime":formState.value.alarmTime ? moment(formState.value.alarmTime.$d).format('YYYY-MM-DD') : '', //报警时间
        // "auditStatus":formState.value.auditStatus, //审核状态
        // "pushStatus":formState.value.pushStatus ,  // 推送状态
        // "auditUserId":formState.value.auditUserId, // 报警审核人
        // "receiverId":formState.value.receiverId,  //推送接收人
        // "auditTime":formState.value.auditTime ? moment(formState.value.auditTime.$d).format('YYYY-MM-DD') : '',//审核时间
        // // "pushTime": "", //接收时间
        "filterType":tabActive.value,// 原始告警信息传空 智能研判后告警传true 被过滤的告警传false
    }
  try {
    const response = await promptList(parameter);
    let dataRecords = response.data.data
    console.log(response,)
    data.value = dataRecords.records
    paginationObj.total =  dataRecords.total
    // console.log(data.value)
  } catch (error) {
    console.error('获取信息失败', error);
  }
} 
  
  
  //处理字典
  // const filteredItems = ((list, code) => {
  //   // console.log(alarmDeviceList.value,list,code)
  //   const foundItems = list.filter(item => item.code == code);
  //   // console.log(foundItems)
  //   // 这里可以根据需要过滤或转换 items
  //   return foundItems.length!=0 ? foundItems[0].name : ''; // 直接返回原始数据，或者你可以在这里添加过滤逻辑
  // });
  const processingTimestamp = ((time) => {
    // console.log(time)
    // const formattedDate = moment(time).format('YYYY-MM-DD HH:mm:ss');;
    //todo 临时兼容后端时间戳问题 后期改回东八区时间
    const formattedDate = moment.utc(time).format('YYYY-MM-DD HH:mm:ss');
    // console.log(date)
    // 这里可以根据需要过滤或转换 items
    return formattedDate; // 直接返回原始数据，或者你可以在这里添加过滤逻辑
  });
  //切换卡片式还是列表式
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
    handleAlarList()
    
  
  }
  const handleTabClick = (id) => {
    tabActive.value = id
    paginationObj.current = 1
    handleAlarList()
    }
  //检索
  const onFinish = (values) => {
    formState.value = values
    paginationObj.current = 1
    handleAlarList()
  };
  //重置
  const handleReset = () => {
    formState.value.alarmType = null //报警类型
    formState.value.alarmDeviceId = null //报警设备
    formState.value.auditStatus = null //审核状态
    formState.value.alarmTime = null //报警时间
    formState.value.auditUserId = null //报警审核人
    formState.value.receiverId = null //报警处理人
    formState.value.auditTime = null //审核时间
    formState.value.pushStatus =null//报警推送状态
    paginationObj.current = 1
    handleAlarList()
    
  }
  const handlePromptUpdate = async() => {
    let parameter = {
        "id": recordObject.value.id,
        "pushStatus":buttonType.value,
    }
    console.log(parameter)
    try {
        const response = await promptUpdate(parameter);
        console.log(response,)
        if(response.data.code == 200){
            ElMessage({
                message: response.data.msg,
                type: 'success', // 'success', 'warning', 'info', 'error'
                duration: 3000 // 持续时间，单位为毫秒
            })
            handleAlarList()
        }else{
            // this.$message.error(response.msg)
            ElMessage({
                message: response.data.msg,
                type: 'error', // 'success', 'warning', 'info', 'error'
                duration: 3000 // 持续时间，单位为毫秒
            })
        }

    } catch (error) {
        console.error('获取信息失败', error);
    }
  }
  const handleConfirm = (type,record) => {
    console.log(type,record)
    buttonType.value = type
    recordObject.value = record.row
  
    handlePromptUpdate()
  
  }
  const handleCardPagination = (pagination) => {
     console.log(pagination)
     paginationObj.current = pagination
     handleAlarList()
    };
  //分页
  const handleTableChange = (pagination) => {
     console.log(pagination)
     paginationObj.current = pagination.current
     paginationObj.pageSize = pagination.pageSize
     paginationObj.total = pagination.total
     handleAlarList()
    };
    const handleDetail = (record,index) => {
        console.log( ((paginationObj.current - 1) * paginationObj.pageSize), record.$index)
      let obj = {
         record :record.row,
         paginationObj:paginationObj,
         formState:formState.value,
         indexAll :((paginationObj.current - 1) * paginationObj.pageSize) + (++record.$index),
         index:record.$index

      }
    //   alarmDetailsFlage.value = true
    //   listIndex.value = index
      console.log(record,index)
      const jsonString = JSON.stringify(obj);
      router.push({ path: '/alarmCenter/alarmQuery/AlarmDetails', query: { data:jsonString,} });
    }
    // const closeAlarmDetails = (newVal) => {
    // //   alarmDetailsFlage.value = false
    //   console.log('wpguanbile')
    //   handleAlarList()
    // }
  
  </script>
  <style lang="less" >
    // .primary{
    //     background: #408FFF;
    //     color:#fff;
    //     border: none;
    // }  
    
    .el-table--small .el-table__cell{
        padding: 10px 0 ;
    }
    .alarmQuery {
        width: 100%;
        .seach {
        background: #ffffff;
        padding: 18px 20px;
        border-radius: 10px;
        .seachBtn {
            display: flex;
            justify-content: end;
            padding-right: 3.5%;
        
        }
        }
    
        .tableBox {
            background: #ffffff;
            padding: 24px 20px;
            border-radius: 10px;
            margin-top: 16px;
        .functionButtons{
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            .tab{
            display: flex;
            height: 29px;
            // justify-content: space-between;
            background: #FFFFFF;
            border-radius: 4px 4px 4px 4px;
            border: 1px solid #E0E0E0;
            // width: 324px;
            .tabButton{
                cursor: pointer;
                text-align: center;
                height: 29px;
                line-height: 29px;
                padding: 0 10px;
                font-weight: 400;
                font-size: 14px;
                color: #979CAD;
                // border: 1px solid #ccc;
            }
            .tabActive{
                text-align: center;
                cursor: pointer;
                height: 29px;
                line-height: 29px;
                padding: 0 10px 10px;
                background: #408FFF;
                border-radius: 4px 4px 4px 4px;
                font-weight: bold;
                font-size: 14px;
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
        .table{
           
        }
        .cardListBox{
            .cardList{
            display: flex;
            flex-wrap: wrap;
            .card{
                width: 24.2%;
                margin-left: 10px;
                background: #FFFFFF;
                box-shadow: 0px 3px 20px 1px rgba(175,188,255,0.45);
                border-radius: 6px 6px 6px 6px;
                padding: 0 12px 12px;
                margin-top: 10px;
                position: relative;
                p{
                margin-top: 6px;
                span{
                    color:#979CAD;
                }
                }
                .positionP{
                position: absolute;
                right: 0;
                top:6px;
                border-radius: 15px 0px 0px 15px;
                }
                .cardButtons{
                    display: flex;
                    justify-content: space-around;
                    margin-top: 12px;
                    button{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid #112BAC;
                        color:#1C34AF;
                        width: 63px;
                        height: 26px;
    
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
            p{
                margin-top: 20px;
            }
    
            }
    
        }
        .pagination{
            display: flex;
            justify-content: end;
            margin-top: 20px;
        }
        
        
        }
    }
    // /* @media (min-width: 1024px) {
    //   .alarmQuery {
    //     min-height: 100vh;
    //     display: flex;
    //     align-items: center;
    //   }
    // } */
  </style>
  