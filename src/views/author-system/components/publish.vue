<template>
    <div class="publish">
        <div class="steps">
            <img v-for="item of stepimg" :src="item.img" :key="item.id" alt="">
        </div>
        <div class="publish-form">
            <div class="header">
                <h3>发布漫画</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "publish",
        data(){
            return{
                stepimg: [
                    {
                        img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step1_1.png',
                        id: 1
                    },
                    {
                        img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step2.png',
                        id: 2
                    },
                    {
                        img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step3.png',
                        id: 3
                    },
                    {
                        img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step4.png',
                        id: 4
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .publish{
        margin: 25px 0;
    }
    .publish .steps{
        display: flex;
    }
    .steps img{
        vertical-align: top;
        display: inline-block;
    }
    .publish .publish-form{
        margin-top: 25px;
        border: #d6d6d6 solid 1px;
    }
    .publish-form .header{
        width: 100%;
        height: 30px;
        padding-bottom: 40px;
        background: url("http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/topbg.png") repeat-x top left;
    }
    .header h3{
        width: 200px;
        padding: 10px 30px 0;
        background: #fff;
        height: 38px;
        border-right: 1px solid #dadada;
        border-top: 1px solid #292929;
    }
</style>