<template>
    <div class="review">
        <div v-if="listShow" class="review-list">
        </div>
        <img src="http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/noData.png" v-else alt="">
    </div>
</template>

<script>
    export default {
        name: "review",
        data(){
            return{
                listShow: false,
                reviewData: [],
            };
        }
    };
</script>

<style scoped>
    .review{
        padding:20px 0;
        width: 100%;
        min-height: 550px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .review .review-list{

    }
</style>