<template>
    <div style="width: 100%;background: white;padding: 20px;">
        <div class="data-statistics">
            <div class="card">
                <p class="title">访问量</p>
                <div class="center">
                    <p class="data">12800</p>
                </div>
                <p class="bottom">今日访问量：8773</p>
            </div>
            <div class="card">
                <p class="title">网站收入</p>
                <div class="center">
                    <p class="data">893</p>
                </div>
                <p class="bottom">今日收入：60</p>
            </div>
            <div class="card">
                <p class="title">网站会员数</p>
                <div class="center">
                    <p class="data">8891</p>
                </div>
                <p class="bottom">今日新增：63</p>
            </div>
            <div class="card">
                <p class="title">付费漫画支付笔数</p>
                <div class="center">
                    <p class="data">133</p>
                </div>
                <p class="bottom">今日支付笔数：2</p>
            </div>
        </div>
        <div class="detailed-data">
            <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane key="1" tab="访问量">
                    <div id="detailedChart1" style="width: 1480px;height: 350px;"></div>
                </a-tab-pane>
                <a-tab-pane key="2" tab="流水金额" force-render>
                    <div id="detailedChart2" style="width: 1480px;height: 350px;"></div>
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts';
    export default {
        name: "data-statistics",
        created(){
            // this.drawLine();
        },
        mounted(){
            this.drawLine();
        },
        methods:{
            callback(key){
                console.log(key);
            },
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart1 = echarts.init(document.getElementById('detailedChart1'));
                let myChart2 = echarts.init(document.getElementById('detailedChart2'));
                // 绘制图表
                myChart1.setOption({
                    color:'#5793f3',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        right: '20%'
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    legend: {
                        data: ['访问量']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                        }
                    ],
                    yAxis: {
                        type: 'value',
                        name: '访问量',
                        min: 0,
                        max: 250,
                        position: 'left',
                        axisLine: {
                            lineStyle: {
                                color: '#5793f3'
                            }
                        },
                        axisLabel: {
                            formatter: '{value} （人数）'
                        }
                    },
                    series: [{
                        name: '访问量',
                        type: 'bar',
                        data: [2.0, 5.0, 7.0, 23.0, 25.0, 76.0, 135.0, 162.0, 32.0, 20.0, 6.0, 3.0]
                    }]
                });
                myChart2.setOption({
                    color:'#5793f3',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        right: '20%'
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    legend: {
                        data: ['流水金额']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                        }
                    ],
                    yAxis: [
                        // {
                        //     type: 'value',
                        //     name: '温度',
                        //     min: 0,
                        //     max: 25,
                        //     position: 'left',
                        //     axisLine: {
                        //         lineStyle: {
                        //             color: '#d14a61'
                        //         }
                        //     },
                        //     axisLabel: {
                        //         formatter: '{value} °C'
                        //     }
                        // },
                        {
                            type: 'value',
                            name: '流水金额',
                            min: 0,
                            max: 2000,
                            position: 'left',
                            axisLine: {
                                lineStyle: {
                                    color: '#5793f3'
                                }
                            },
                            axisLabel: {
                                formatter: '{value} 元'
                            }
                        },
                    ],
                    series: [
                        // {
                        //     name: '平均温度',
                        //     type: 'line',
                        //     yAxisIndex: 2,
                        //     data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                        // },
                        {
                            name: '流水金额',
                            type: 'line',
                            data: [50, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 64, 33]
                        }
                    ]
                })
            }
        }
    };
</script>

<style scoped>
    .data-statistics{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .data-statistics .card{
        flex: 1;
        margin: 20px;
        padding: 20px;
        height: 180px;
        background: rgba(24,155,255,0.1);
    }
    .card .title{
        color: rgba(0,0,0,.45);
        margin-bottom: 0;
    }
    .card .center{
        height: 80px;
    }
    .center .data{
        font-size: 26px;
        margin-bottom: 0;
    }
    .card .bottom{
        display: block;
        width: 100%;
        padding-top: 5px;
        margin-top: 20px;
        border-top: 0.5px rgba(0,0,0,0.45) solid;
        font-size: 12px;
        color: rgba(0,0,0,.45);
    }
    .detailed-data{
        margin:20px;
        padding: 0 20px;
        height: 400px;
        background: rgba(24,155,255,0.1);
    }
</style>