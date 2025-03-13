<template>
    <main>
       <div class="statisticalAnalysis">
        <div class="statistics">
          <ul>
            <li>
              <p><img src="../../assets/statisticalAnalysis/zjs.svg"/></p>
              <div class="statisticsCont">
                <span>总接受报警数（个）</span>
                <p>28,425</p>
                <div class="RisingOrFalling">
                  <p>自上周以来<img src="../../assets/statisticalAnalysis/shengzhang.svg"/><span style="color:#F05050">20.5%</span></p>
                </div>
              </div>
            </li>
            <li>
              <p><img src="../../assets/statisticalAnalysis/zts.svg"/></p>
              <div class="statisticsCont">
                <span>总推送报警数（个）</span>
                <p>28,425</p>
                <div class="RisingOrFalling">
                  <p>自上周以来<img src="../../assets/statisticalAnalysis/shengzhang.svg"/><span style="color:#F05050">20.5%</span></p>
                </div>
              </div>
            </li>
            <li>
              <p><img src="../../assets/statisticalAnalysis/bybj.svg"/></p>
              <div class="statisticsCont">
                <span>本月报警数据</span>
                <p>28,425</p>
                <div class="RisingOrFalling">
                  <p>自上周以来<img src="../../assets/statisticalAnalysis/shengzhang.svg"/><span style="color:#F05050">20.5%</span></p>
                </div>
              </div>
            </li>
            <li>
              <p><img src="../../assets/statisticalAnalysis/byts.svg"/></p>
              <div class="statisticsCont">
                <span>本月推送报警</span>
                <p>28,425</p>
                <div class="RisingOrFalling">
                  <p>自上周以来<img src="../../assets/statisticalAnalysis/xiajiang.svg"/><span style="color:#1FCB89">20.5%</span></p>
                </div>
              </div>
            </li>
          </ul>
  
        </div>
        <div class="statisticsContent">
          <div class="statisticsChart">
            <div class="receiveAlarms">
              <div class="receiveAlarmsTitle">
                  <span></span>
                  <p>接收报警统计数据</p>
              </div>
              <div class="receiveAlarmsContent">
                <ReceiveAlarms></ReceiveAlarms>
              </div>
            </div>
            <div class="alarmHazard">
              <div class="alarmHazardTitle">
                  <span></span>
                  <p>报警隐患统计</p>
              </div>
              <div class="alarmHazardCont">
                <div class="echartsSeach">
                  <div class="seach">
                      <p>单位</p>
                      <a-select
                          placeholder="请选择"
                          style="width: 240px"
                          v-model:value="unit"
                      >
                          <a-select-option value="demo">Demo</a-select-option>
                      </a-select>
  
  
                  </div>
                  <a-range-picker v-model:value="pickerTime" />
                </div>
                <div class="table">
                  <a-table  :columns="columns" :data-source="data"  rowClassName="row-class" >
              
                  <template #bodyCell="{ column, record ,index }">
                  <!-- 审核状态 -->
                    <template v-if="column.key === 'auditStatus'">
                      <p>{{ filteredItems(alarmAuditStatusList,record.auditStatus) }}</p>
                    </template>
                    <!-- 序号 -->
                    <template v-else-if="column.key === 'index'">
                        <p >{{((paginationObj.current - 1) * paginationObj.pageSize) + (++index) }}</p>
                    </template>
                    <!-- 报警设备 -->
                    <template v-else-if="column.key === 'alarmDeviceId'">
                        <p>{{ record.alarmDevice }}</p>
                    </template>
                    <!-- 报警类型 -->
                    <template v-else-if="column.key === 'alarmType'">
                        <p>{{ filteredItems(alarmTypeList,record.alarmType) }}</p>
                    </template>
                      <!-- 推送状态 -->
                      <template v-else-if="column.key === 'pushStatus'">
                        <p :style="{color:record.pushStatus == '2' ? '#00BB44' :''}"> {{ filteredItems(pushStatusList,record.pushStatus) }}</p>
                    </template>
                    <!-- 报警接收人 -->
                    <template v-else-if="column.key === 'receiverId'">
                        <p>{{ record.receiverName }}</p>
                    </template>
                    <!-- 报警处理人 -->
                    <template v-else-if="column.key === 'auditUserId'">
                        <p>{{ record.auditUserName }}</p>
                    </template>
                    <!-- 报警时间 -->
                    <template v-else-if="column.key === 'alarmTime'">
                        <p>{{  record.alarmTime ? processingTimestamp(record.alarmTime) : ''}}</p>
                    </template>
                    <!-- 处理时间 -->
                    <template v-else-if="column.key === 'auditTime'">
                        <p>{{ record.auditTime ? processingTimestamp(record.auditTime) : ''}}</p>
                    </template>
  
                    <!-- new Date(isoDate) -->
                    <template  v-else-if="column.key === 'action'" >
                      <span>
                        <a style="color:#122EB5;" @click="handleDetail(record,index)">详情</a>
                        <a-divider type="vertical" />
                        <a-popconfirm
                            title="是否确认?"
                            ok-text="确定"
                            cancel-text="取消"
                            @confirm="handleConfirm(4,record)"
                            @cancel="cancel"
                          >
                            <a style="color:#122EB5;">确认</a>
                          </a-popconfirm>
                        
                        <a-divider type="vertical" />
                        <a-popconfirm
                            title="是否存疑?"
                            ok-text="确定"
                            cancel-text="取消"
                            @confirm="handleConfirm(3,record)"
                            @cancel="cancel"
                          >
                          <a style="color:#122EB5;">存疑</a>
                        </a-popconfirm>
                        <a-divider type="vertical" />
                        <a-popconfirm
                              title="是否误报?"
                              ok-text="确定"
                              cancel-text="取消"
                              @confirm="handleConfirm(2,record)"
                              @cancel="cancel"
                            >
                          <a style="color:#122EB5;">误报</a>
                        </a-popconfirm>
                      
                      
                      </span>
                    </template>
                  </template>
                  </a-table>
                </div>
              </div>
            </div>
            
            <div class="receiveAlarms" style="margin-top: 16px;">
              <div class="receiveAlarmsTitle">
                  <span></span>
                  <p>报警接收 ｜  <span style="font-weight: 400;">推送概览</span></p>
              </div>
              <div class="PushReception">
                <PushReception></PushReception>
  
              </div>
            </div>
          </div>
          <div class="realTime">
            <div class="realTimeTitle">
                <span></span>
                <p>实时告警</p>
            </div>
            <div class="realTimeList">
              <div class="realTimeAlarm" v-for="item in realTimeList" :key="item.id">
                <div class="realTimeVideo">
                  <span>{{item.alarmType}}</span>
                  <p>{{item.alarmTime}} {{item.venueName}}</p>
                </div>
                <div class="realTimeOperate">
                  <p><img src="../../assets/statisticalAnalysis/dh.svg"/></p>
                  <p><img src="../../assets/statisticalAnalysis/wh.svg"/></p>
                  <p><img src="../../assets/statisticalAnalysis/X.svg"/></p>
                  <p><img src="../../assets/statisticalAnalysis/fj.svg"/></p>
                  <!-- <p><img src="@/assets/statisticalAnalysis/sc.svg" v-show="item.collect == true" @click="handleCollect(item)"/> 
                     <img src="@/assets/statisticalAnalysis/qxsc.svg" v-show="item.collect == false" @click="handleCollect(item)"/>
                  </p> -->
  
                </div>
  
              </div>
            </div>
            
            
          </div>
  
        </div>
        
       </div>
      <!-- <p>{{ data }}</p> -->
    </main>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  import ReceiveAlarms from './components/statisticalAnalysis/ReceiveAlarms.vue'
  import PushReception from './components/statisticalAnalysis/PushReception.vue'
  const columns = [
    {
      title: "排名",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "客户名称",
      dataIndex: "alarmDeviceId",
      key: "alarmDeviceId",
    },
    {
      title: "较上周",
      dataIndex: "alarmType",
      key: "alarmType",
    },
    {
      title: "报警量",
      dataIndex: "alarmTime",
      key: "alarmTime",
    },
    {
      title: "推送量",
      key: "auditStatus",
      dataIndex: "auditStatus",
    },
    {
      title: "操作",
      key: "action",
    },
  ];
  const realTimeList = ref([{
    id:1,
    venueName:'北京市xx场站',
    alarmTime:'2025-02-05 23:00',
    collect:true,
    alarmType:'打架类报警',
  },{
    id:2,
    venueName:'哈尔滨市xx场站',
    alarmTime:'2025-02-05 23:00',
    collect:true,
    alarmType:'打架类报警',
  },{
    id:3,
    venueName:'沈阳市xx场站',
    alarmTime:'2025-02-05 23:00',
    collect:false,
    alarmType:'打架类报警',
  },{
    id:4,
    venueName:'成都市xx场站',
    alarmTime:'2025-02-05 23:00',
    collect:true,
    alarmType:'火灾类报警',
  },{
    id:4,
    venueName:'成都市xx场站',
    alarmTime:'2025-02-05 23:00',
    collect:true,
    alarmType:'火灾类报警',
  }])
  const handleCollect = (item) => {
    item.collect = !item.collect
    console.log(item.collect)
  
  }
  
  // import TheWelcome from '../components/TheWelcome.vue';
  // import {queryUserAndObjOrgCallCount,aa} from '../api/api'
  // console.log(queryUserAndObjOrgCallCount,aa)
  // const data = ref({});
  
  // onMounted(async () => {
  //   try {
  //     const info = await queryUserAndObjOrgCallCount();
  //     console.log(info)
  //     data.value = info.result;
  //     console.log(data.value)
  //   } catch (error) {
  //     console.error('获取用户信息失败', error);
  //   }
  // })
  
  </script>
  <style lang="less" >
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
   .statisticalAnalysis {
        scrollbar-width: none;
    }
  .statisticalAnalysis{
    width: 100%;
    height: calc(100vh - 46px);
    overflow-y: auto;
    .statistics{
      ul{
        display: flex;
        justify-content: space-between;
        width: 100%;
        li{
          width: 24.3%;
          height: 138px;
          background: #FFFFFF;
          box-shadow: 0px 3px 20px 1px rgba(175,188,255,0.66);
          border-radius: 10px;
          display: flex;
          >p{
            width: 130px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #F7F8FF;
            border-radius: 10px 0px 0px 10px;
          }
          .statisticsCont{
            margin-left: 30px;
            padding: 20px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            span{
              font-weight: 400;
              font-size: 16px;
              color: #000000;
            }
            >p{
              font-size: 28px;
              color: #000000;
              line-height: 8px;
            }
            .RisingOrFalling{
              
              >p{
                font-weight: 400;
                font-size: 14px;
                color: #000000;
                display: flex;
                align-items: center;
                img{
                  width: 19px;
                  height: 19px;
                  margin: 0 4px 0 10px;
                }
              }
            }
  
            
          }
        }
  
      }
    }
    .statisticsContent{
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      .statisticsChart{
        width: 74.8%;
        height: 500px;
        .receiveAlarms{
          padding: 16px;
          width: 100%;
          height: 389px;
          background: #FFFFFF;
          box-shadow: 0px 3px 20px 1px rgba(175,188,255,0.66);
          border-radius: 10px;
          .receiveAlarmsTitle{
            display: flex;
            align-items: center;
            padding-bottom: 9px;
            border-bottom: 1px solid #DCDFE6;
            >span{
                display: inline-block;
                width: 3px;
                height: 18px;
                background: #122EB5;
            }
            p{
                font-weight: bold;
                font-size: 18px;
                color: #1D202B;
                margin-left: 15px;
            }
          }
          .receiveAlarmsContent{
          }
          
        }
        .alarmHazard{
          margin-top: 16px;
          padding: 16px;
          width: 100%;
          height: 389px;
          background: #FFFFFF;
          box-shadow: 0px 3px 20px 1px rgba(175,188,255,0.66);
          border-radius: 10px;
          .alarmHazardTitle{
            display: flex;
            align-items: center;
            padding-bottom: 9px;
            border-bottom: 1px solid #DCDFE6;
            span{
                display: inline-block;
                width: 3px;
                height: 18px;
                background: #122EB5;
            }
            p{
                font-weight: bold;
                font-size: 18px;
                color: #1D202B;
                margin-left: 15px;
            }
          }
          .alarmHazardCont{
            .echartsSeach{
              margin-top: 12px;
              display: flex;
              justify-content: end;
              align-items: center;
              .seach{
                  display: flex;
                  align-items: center;
                  margin-right: 16px;
                  p{
                      font-weight: 400;
                      font-size: 16px;
                      color: #1D202B;
                      margin-right: 8px;
                  }
                 
              }
            
              .legend{
                  display: flex;
                  p{
                  font-weight: 400;
                  font-size: 16px;
                  color: #484D5E;
                  span{
                      margin: 0 10px 0 16px;
                      display: inline-block;
                      width: 18px;
                      height: 9px;
                      background: #122EB5;
                      border-radius: 0px 0px 0px 0px;
                  }
              }
              }
              
            }
            .table{
              margin-top: 10px;
                .row-class:nth-child(odd) {
                  background-color: #FFFFFF; /* 奇数行背景色 */
                }
                .row-class:nth-child(even) {
                  background-color: #EDF2FF; /* 偶数行背景色 */
                }
                .ant-table-wrapper .ant-table-thead >tr>th, .ant-table-wrapper .ant-table-thead >tr>td{
                  background: #EDF2FF;
                  color:#484D5E;
                }
                .ant-table-wrapper .ant-table-tbody >tr.ant-table-row:hover>td, .ant-table-wrapper .ant-table-tbody >tr >td.ant-table-cell-row-hover{
                  background: #D1DEFF;
                }
                .ant-table-wrapper .ant-table-thead>tr>th, .ant-table-wrapper .ant-table-tbody>tr>td, .ant-table-wrapper tfoot>tr>th, .ant-table-wrapper tfoot>tr>td{
                  padding: 10px 16px;
                }
              }
           
          }
  
        }
  
      }
      .realTime{
        width: 24.3%;
        // height: 500px;
        padding: 14px 18px;
        background: #FFFFFF;
        box-shadow: 0px 3px 20px 1px rgba(175,188,255,0.66);
        border-radius: 10px;
  
        .realTimeTitle{
            display: flex;
            align-items: center;
            padding-bottom: 9px;
            border-bottom: 1px solid #DCDFE6;
            span{
                display: inline-block;
                width: 3px;
                height: 18px;
                background: #122EB5;
            }
            p{
                font-weight: bold;
                font-size: 18px;
                color: #1D202B;
                margin-left: 15px;
            }
        }
        .realTimeList{
          .realTimeAlarm{
            width: 100%;
            background: #FFFFFF;
            box-shadow: 0px 3px 20px 1px rgba(175,188,255,0.66);
            .realTimeVideo{
              position: relative;
              width: 100%;
              height: 203px;
              background: #484D5E;
              >span{
                display: inline-block;
                background: linear-gradient( 180deg, #FF9696 0%, #BC0000 100%);
                border-radius: 15px 0px 0px 15px;
                font-weight: 400;
                font-size: 14px;
                color: #FFFFFF;
                position: absolute;
                right: 0;
                top: 0;
                padding: 6px 11px;
              }
              >p{
                height: 34px;
                line-height: 34px;
                padding-left: 10px;
                width: 100%;
                position: absolute;
                bottom: 0;
                left:0;
                background: rgba(0,0,0,0.52);
                font-weight: 400;
                font-size: 16px;
                color: #FFFFFF;
              }
  
            }
            .realTimeOperate{
              width: 100%;
              height: 58px;
              display: flex;
              align-items: center;
              justify-content: space-around;
              padding: 0 40px;
  
            }
  
          }
  
        }
  
      }
  
  
    }
  }
  </style>
  