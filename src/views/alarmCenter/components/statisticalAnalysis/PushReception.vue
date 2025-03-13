<template>
    <div class="lineEchartsBox">
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
            <div class="legend">
                <p><span style="background: linear-gradient( 180deg, #122EB5 0%, rgba(18,46,181,0) 100%);"></span>推送</p>
                <p><span style="background: linear-gradient( 180deg, #66C984 0%, rgba(24,181,18,0) 100%);"></span>接收</p>
            </div>
            

        </div>
        <div class="lineEcharts">
            <div ref="chartRef" style="width: 100%; height: 300px;"></div>
        </div>


    </div>
    
</template>
<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import * as echarts from 'echarts';
const chartRef = ref(null);
const pickerTime = ref();
const unit = ref(null);

let myChart = null;
 
onMounted(() => {
  if (chartRef.value) {
    myChart = echarts.init(chartRef.value);
    const option = {
        grid: {
            top: '20px',
            left: '0px',
            right: '0px',
            bottom: '32px',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: { show: false }, // 隐藏 X 轴的刻度
            axisLine: {
                lineStyle: {
                color: 'rgba(112, 112, 112, .15)' // 设置横线的颜色为橙色

                }
            },
            axisLabel: {
                color: '#484D5E' // 设置横轴文字颜色为红色
            }
        },
        yAxis: {
            type: 'value',
            
        },
        series: [
            {
                name: '系列1',
                type: 'bar',
                barWidth: 22, 
                data: [120, 200, 150, 80, 70,50,90],
                itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(18,46,181,1)' },
                    { offset: 1, color: 'rgba(18,46,181,0)' }
                ])
                }
            },
            {
                name: '系列2',
                type: 'bar',
                barWidth: 22, 
                data: [150, 120, 200, 180, 90,30,150],
                itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(24,181,18,1)' },
                    { offset: 1, color: 'rgba(124,181,18,0)' }
                ])
                }
            }
        ]
    };
    myChart.setOption(option);
  }
   // 添加窗口大小改变的监听器
   window.addEventListener('resize', () => {
    if (myChart) {
      myChart.resize(); // 调整图表大小以适应容器大小变化
    }
  });
});
onUnmounted(() => {
  if (myChart) {
    myChart.dispose(); // 清除图表实例，避免内存泄漏
    window.removeEventListener('resize', () => {}); // 移除事件监听器
  }
});
</script>
<style lang="less" scoped>
    .lineEchartsBox{
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
        
    }

</style>