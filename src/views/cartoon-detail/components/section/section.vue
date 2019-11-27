<template>
    <div class="section">
        <img src="http://mhfm3218us.cdndm5.com/chaptercover/41/40683/578500/20180613090154_25.jpg" alt="">
        <div class="section-des">
            <p class="title">第一回 周家升龙(上) (10P)</p>
            <p class="time">2018-02-06</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "section"
    };
</script>

<style scoped>
    .section {
        display: flex;

        margin-top: 10px;
        background: #f6f6f6;
        width: 100%;
        height: 110px;
    }
    .section img {
        height: 100%;
    }
    .section .section-des {
        margin-left: 3%;
    }
    .section-des p {
        margin-top: 15px;
        font-size: 16px;
        color:#252525;
    }
    .section-des .time {
        font-size: 13px;
        color:#999
    }
</style>