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
            <p><span></span>本月</p>

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
        tooltip: {},
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
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line',
                symbolSize: 10,
                itemStyle: {
                    color: '#122EB5', // 设置线条颜色为蓝色
                    width: 2 // 设置线条宽度
                },
                areaStyle: { // 添加区域填充样式来模拟背景色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(18,46,181,0.26)' // 开始颜色与线条颜色相同
                    }, {
                        offset: 1,
                        color: 'rgba(18,46,181,0) ' // 结束颜色为透明，创建渐变效果
                    }])
                },
                
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

</style>