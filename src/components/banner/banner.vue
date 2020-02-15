<template>
  <div>
    <!--轮播图---写法-->
    <div class="swiper-container2" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) of mangaList" :key="index">
          <!-- <img :src="item.url" />
          <img src="../../assets/01.jpg"/>-->
          <cartoonCard :mangaData="item"></cartoonCard>
        </div>
      </div>
      <!-- <div class="swiper-pagination"></div> -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>-->
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import cartoonCard from '@/components/cartoon-card/cartoon-card';
export default {
  data() {
    return {
      //图片路径
      listImg: [
        { url: '../../../static/01.jpg' },
        { url: '../../../static/02.jpg' },
        { url: '../../../static/03.jpg' }
      ]
    };
  },
  components: {
    cartoonCard
  },
  props: {
    mangaList: {
      type: Array,
      default: () => []
    }
  },
  created() {
    // this._initSwiper();
  },
  mounted() {
    this.$nextTick(() => {
      this.__initSwiper();
    });
    // setTimeout(() => {
    //   this._initSwiper();
    // }, 20);
  },
  methods: {
    __initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        // loop: true,
        //在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        setWrapperSize: true,
        // 设置slider容器能够同时显示的slides数量(carousel模式)。
        slidesPerView: 5,
        slidesOffsetBefore: 30,
        // 将slide的宽和高取整(四舍五入)
        roundLengths: true,
        slidesPerGroup: 5,
        // slide间距
        spaceBetween: 20
        // pagination: {
        //   el: '.swiper-pagination'
        // },
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // }
        // autoplay: {
        //   disableOnInteraction: false
        // },
      });
    }
  }
};
</script>
<style>
.swiper-container2 {
  width: 100%;
  height: 100%;
  position: relative;
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
