<template>
    <div class="my-swiper">
        <swiper :option="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item of imgs" :key="item.id">
                <recommend-img :img_src="item.src" :id="item.id"></recommend-img>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import  {swiper, swiperSlide} from 'vue-awesome-swiper';
    import RecommendImg from '../recommed-img/recommend-img';
    import 'swiper/dist/css/swiper.css';
    export default {
        name: "mySwiper",
        components: {
            swiper,
            swiperSlide,
            RecommendImg
        },
        props: {
          imgs: Array
        },
        data () {
            return {
                swiperOption: {
                    loop: true,
                    autoPlay: {
                        delay: 1500,
                        stopOnLastSlide: false,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        type: 'bullets'
                    },
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    paginationClickable: true,
                    spaceBetween: 30
                }
            };
        }
    };
</script>

<style scoped>
    .my-swiper {
        width: 100%;
        height: 100%;
    }
    .my-swiper >>>.swiper-container {
        width: 100%;
        height: 100%;
    }
</style>