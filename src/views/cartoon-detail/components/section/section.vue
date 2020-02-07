<template>
  <div class="section" @click="readManga">
    <div class="section-des">
      <p class="title">{{section.chapterTitle}}</p>
      <p class="time">{{section.chapterUpdatetime|dataFormat}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carton-section',
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
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  justify-content: center;
  background: #f6f6f6;
  width: 20%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.section:hover {
  background: rgb(243, 205, 205);
}
.section img {
  height: 100%;
}
.section-des p {
  width: 100%;
  max-width: 150px;
  font-size: 0.95em;
  color: #252525;
  text-align: center;
  @include ellipsis();
}
.section-des .time {
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #999;
}
</style>