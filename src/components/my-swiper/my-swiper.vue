<template>
  <div class="my-swiper">
    <swiper v-if="mangas.length > 0" :option="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item of mangas" :key="item.mangaId">
        <recommend-img :img_src="item.episode[0].episodeHref"></recommend-img>
        <slot></slot>
      </swiper-slide>
      <div class="swiper-pagination1" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import RecommendImg from '../recommed-img/recommend-img';
import 'swiper/dist/css/swiper.css';
export default {
  name: 'mySwiper1',
  components: {
    swiper,
    swiperSlide,
    RecommendImg
  },
  props: {
    imgs: Array,
    mangas: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoPlay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination1'
        },
        // pagination: '.swiper-pagination1',
        paginationType: 'fraction',
        grabCursor: true,
        parallax: true,
        effect: 'cube'
        // slidesPerView: 3, //一行显示3个
        // slidesPerColumn: 2 //显示2行
        // slidesPerView: 'auto',
        // centeredSlides: true,
        // spaceBetween: 30
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
.my-swiper >>> .swiper-container {
  width: 100%;
  height: 100%;
}
</style>
