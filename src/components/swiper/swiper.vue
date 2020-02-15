<template>
  <div class="my-swiper">
    <swiper v-if="mangaList.length > 0" :option="swiperOption" ref="mySwiper">
      <swiper-slide
        v-for="item of mangaList"
        :key="item.mangaId"
        style="width:300px; width: auto"
      >
        <cartoonCard :mangaData="item"></cartoonCard>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import cartoonCard from '@/components/cartoon-card/cartoon-card';
import 'swiper/dist/css/swiper.css';
export default {
  name: 'mySwiper2',
  components: {
    swiper,
    swiperSlide,
    cartoonCard
  },
  props: {
    mangaList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // autoplay: {
        //   disableOnInteraction: false
        // },
        slidesPerView: 6,
        spaceBetween: 20
        // slidesPerGroup: 4
        // autoPlay: {
        //   delay: 1500,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false
        // },
        // pagination: '.swiper-pagination',
        // paginationType: 'fraction',
        // grabCursor: true,
        // parallax: true,
        // effect: 'cube'
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

<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 10rem;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: 100%;
  height: 100%;
}
.swiper-pagination-bullet {
  width: 0.833rem;
  height: 0.833rem;
  display: inline-block;
  background: #7c5e53;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>
