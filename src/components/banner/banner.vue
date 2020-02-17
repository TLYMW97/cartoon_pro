<template>
  <div>
    <!--轮播图---写法-->
    <div class="swiper-container2" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) of mangaList" :key="index">
          <!-- <img :src="item.url" />
          <img src="../../assets/01.jpg"/>-->
          <cartoon-card-o @toDetail="toDetail" :mangaData="item"></cartoon-card-o>
        </div>
      </div>
      <!-- <div class="swiper-pagination pagination"></div> -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import CartoonCardO from '@/components/cartoon-card-o/cartoon-card-o';
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
    CartoonCardO
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
        slidesPerView: 6,
        // 将slide的宽和高取整(四舍五入)
        roundLengths: true,
        slidesPerGroup: 6,
        // slide间距
        spaceBetween: 20,
        // pagination: {
        //   el: '.pagination'
        // }
        //如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // }
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
        // autoplay: {
        //   disableOnInteraction: false
        // },
      });
    },
    toDetail(mangaId) {
      this.$emit('toDetail', mangaId);
    }
  }
};
</script>
<style>
.swiper-container2 {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
/*改变了颜色和加粗的样式*/
.swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%23FF3366'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l4.2%2C4.2L8.4%2C22l17.8%2C17.8L22%2C44L0%2C22z'%20fill%3D'%23FF3366'%2F%3E%3C%2Fsvg%3E");
}
</style>
