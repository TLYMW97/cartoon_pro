<template>
  <div class="section" @click="readManga">
    <div class="section-img">
      <img :src="sectionPic" alt />
    </div>
    <div class="section-des">
      <p class="title">{{section.chapterTitle}}</p>
      <p class="time">{{section.chapterUpdatetime|dataFormat}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carton-section',
  computed: {
    sectionPic() {
      return this.section.episode
        ? this.section.episode.episodeHref
        : require('../../../../assets/images/nopic.png');
    }
  },
  props: {
    section: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    readManga() {
      const { chapterId, chapterTitle: chapterName } = this.section;
      this.$emit('readManga', { chapterId, chapterName });
    }
  },
  filters: {
    dataFormat(val) {
      return val.substr(0, val.indexOf('T'));
    }
  }
};
</script>

<style scoped lang="scss">
@import '~@/assets/sass/index';
p {
  margin: 0;
}
.section {
  @include flex();
  padding: 15px;
  cursor: pointer;
  background: #f6f6f6;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .section-img {
    width: 25%;
    height: 120px;
    overflow: hidden;
    img {
      width: 100%;
      // height: 100%;
    }
  }
  .section-des {
    @include flex(space-between, null, null, column);
    margin-left: 20px;
    font-size: 16px;
    color: #252525;
    @include ellipsis();
    .time {
      font-size: 13px;
      color: #999;
    }
  }
}
.section:hover {
  background: rgb(243, 205, 205);
  .title {
    color: red;
  }
}
</style>