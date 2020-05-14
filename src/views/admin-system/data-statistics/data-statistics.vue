<template>
    <div style="width: 100%;background: white;padding: 20px;">
        <div class="data-statistics">
            <div class="card">
                <p class="title">访问量</p>
                <div class="center">
                    <p class="data">12800</p>
                </div>
                <p class="bottom">访问量</p>
            </div>
            <div class="card">
                <p class="title">总流水金额</p>
                <div class="center">

                </div>
                <p class="bottom">访问量</p>
            </div>
            <div class="card">
                <p class="title">网站会员数</p>
                <div class="center">

                </div>
                <p class="bottom">访问量</p>
            </div>
            <div class="card">
                <p class="title">付费漫画支付笔数</p>
                <div class="center">

                </div>
                <p class="bottom">访问量</p>
            </div>
        </div>
        <div class="detailed-data">
            <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane key="1" tab="访问量">
                    Content of Tab Pane 1
                </a-tab-pane>
                <a-tab-pane key="2" tab="流水金额" force-render>
                    Content of Tab Pane 2
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script>
    // import echarts from 'echarts';
    export default {
        name: "data-statistics",
        methods:{
            callback(key){
                console.log(key);
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