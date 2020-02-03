<template>
  <div class="cartoon-view">
    <div class="view-header">
      <div class="icon">意见反馈</div>
      <div class="title">
        <router-link to="/">首页</router-link>
        <span class="linkIcon">></span>
        <router-link
          :to="{path: '/detail', query: {mangaId: this.currentManga.mangaId}}"
        >{{this.currentManga.mangaName}}</router-link>
        <span class="linkIcon">></span>
        <span>{{this.$route.query.chapterName}}</span>
      </div>
      <div class="operate">
        <a-button class="collect" type="link">收藏</a-button>
      </div>
    </div>
    <div class="view-content">
      <img v-for="episode of episodes" :key="episode.episodeId" :src="episode.episodeHref" alt />
    </div>
    <div class="view-bottom">
      <div class="next-button" @click="readNext">
        马上阅读下一章
        <a-icon type="right-circle" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'cartoonView',
  computed: {
    ...mapGetters(['currentManga', 'currentSection'])
  },
  watch: {
    $route() {
      this.viewInit();
      window.scrollTo(0, 0);
    }
  },
  data() {
    return {
      episodes: []
    };
  },
  created() {
    this.viewInit();
  },
  methods: {
    viewInit: async function() {
      const { chapterId, chapterName } = this.$route.query;
      const res = await this.$api.getEpisode(chapterId);
      const {
        data: { data }
      } = res;
      this.episodes = data;
    },
    readNext() {
      this.getNextSection();
      console.log('this.currentSection', this.currentSection);
      const { chapterId: currentId } = this.$route.query;
      let { chapterTitle: chapterName, chapterId } = this.currentSection;
      if (currentId === chapterId) {
        return;
      }
      this.$router.push({
        path: '/cartoonview',
        query: { chapterId, chapterName }
      });
    },
    ...mapActions(['getNextSection'])
  }
};
</script>

<style lang="scss">
.cartoon-view {
  background-color: rgba(0, 0, 0, 0.8);
  color: rgba(255, 255, 255, 0.8);
  a {
    color: rgba(255, 255, 255, 0.8);
  }
}
.linkIcon {
  margin: 0 2px;
}
.view-header {
  width: 100%;
  padding: 0 20px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
}
.view-content {
  width: 1200px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.view-bottom {
  text-align: center;
  padding: 20px 20px 60px;
  font-size: 28px;
  .next-button {
    cursor: pointer;
  }
}
</style>