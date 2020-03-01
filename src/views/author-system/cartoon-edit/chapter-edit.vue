<template>
    <div class="chapter-edit">
        <div class="chapter-header">
            <h3>章节编辑</h3>
        </div>
        <div class="chapter-list">
            <chapterList v-if="listShow"></chapterList>
            <img src="http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/noData.png" v-else alt="">
        </div>
    </div>
</template>

<script>
    import chapterList from '../components/chapter-list';
    export default {
        name: "chapter-edit",
        data(){
            return{
              listShow: false,
            };
        },
        components:{
            chapterList,
        }
    }
</script>

<style scoped>
    .chapter-edit{
        margin: 25px 0;
        min-height: 550px;
        border: #d6d6d6 solid 1px;
    }
    .chapter-edit .chapter-header{
        width: 100%;
        height: 30px;
        padding-bottom: 40px;
        background: url("http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/topbg.png") repeat-x top left;
    }
    .chapter-header h3{
        width: 200px;
        padding: 10px 30px 0;
        background: #fff;
        height: 38px;
        border-right: 1px solid #dadada;
        border-top: 1px solid #292929;
    }
    .chapter-edit .chapter-list{
        min-height: 550px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>