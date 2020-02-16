<template>
  <div class="cartoon-view">
    <div class="view-header">
      <div class="return">
        <router-link :to="{path: '/detail', query: {mangaId: this.currentManga.mangaId}}">
          <a-icon type="close-circle" style="margin-right: 10px" />退出阅读
        </router-link>
      </div>
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
        <a-button class="feedback" @click="allSaw" type="link" style="color: #fff">意见反馈</a-button>
        <a-button class="collect" type="link">收藏</a-button>
      </div>
    </div>
    <div class="view-content">
      <div class="view-box">
        <div class="box-title" @click="getSections">
          <a-icon type="bars" />章节
        </div>
        <div class="section-list" v-show="sectinsShow">
          <router-link
            class="manga-name"
            :to="{path: '/detail', query: {mangaId: this.currentManga.mangaId}}"
          >{{this.currentManga.mangaName}}</router-link>
          <p
            v-for="section of sections"
            @click="handleSection(section)"
            :key="section.chapterId"
          >{{section.chapterTitle}}</p>
        </div>
      </div>
      <div class="content">
        <img v-for="episode of episodes" :key="episode.episodeId" :src="episode.episodeHref" alt />
      </div>
    </div>
    <div class="toTop" v-show="toTop">
      <div class="top-button" @click="toElTop">
        <a-icon class="button-ico" type="to-top" />
      </div>
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
    ...mapGetters(['currentManga', 'currentSection', 'sections'])
  },
  watch: {
    $route() {
      this.viewInit();
    }
  },
  mounted() {
    window.addEventListener('scroll', this.watchScroll);
  },
  data() {
    return {
      episodes: [],
      sectinsShow: false,
      toTop: false,
      timer: null,
      timerTwo: null
    };
  },
  created() {
    this.viewInit();
  },
  methods: {
    watchScroll() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 1300) {
          this.toTop = true;
        } else {
          this.toTop = false;
        }
      }, 600);
    },
    toElTop() {
      this.timerTwo = setInterval(() => {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          scrollTop + ispeed;
        this.toTop = true;
        if (scrollTop === 0) {
          clearInterval(this.timerTwo);
        }
      }, 20);
    },
    viewInit: async function() {
      window.scrollTo(0, 0);
      const { chapterId, chapterName } = this.$route.query;
      const res = await this.$api.getEpisode(chapterId);
      const {
        data: { data }
      } = res;
      this.episodes = data;
    },
    allSaw() {
      var elem = document.querySelector('.view-content');
      this.requestFullScreen(elem);
    },
    getSections() {
      this.sectinsShow = !this.sectinsShow;
    },
    requestFullScreen(elem) {
      var requestMethod =
        elem.requestFullScreen ||
        elem.webkitRequestFullScreen ||
        elem.mozRequestFullScreen ||
        elem.msRequestFullScreen;

      if (requestMethod) {
        requestMethod.call(elem);
      }
      // } else if (typeof window.ActiveXObject !== 'undefined') {
      //   var wscript = new ActiveXObject('WScript.Shell');

      //   if (wscript !== null) {
      //     wscript.SendKeys('{F11}');
      //   }
      // }
    },
    readNext() {
      this.getNextSection();
      const { chapterId: currentId } = this.$route.query;
      let { chapterTitle: chapterName, chapterId } = this.currentSection;
      if (currentId === chapterId) {
        return;
      }
      this.changeSection({ chapterName, chapterId });
    },
    handleSection(section) {
      const { chapterId, chapterTitle: chapterName } = section;
      const { chapterId: currentId } = this.currentSection;
      if (chapterId === currentId) {
        this.$message.success('当前章节');
        return;
      }
      this.setCurSection(section);
      this.sectinsShow = false;
      this.changeSection({ chapterName, chapterId });
    },
    changeSection({ chapterName, chapterId }) {
      this.$router.push({
        path: '/cartoonview',
        query: { chapterId, chapterName }
      });
    },
    ...mapActions(['getNextSection', 'setCurSection'])
  }
};
</script>

<style lang="scss">
@import '~@/assets/sass/index';
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
  @include flex(space-between);
  background-color: rgba(0, 0, 0, 0.4);
  height: 60px;
  line-height: 60px;
}
.view-content {
  width: $w_1200;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0 auto;
  img {
    width: 100%;
  }
  .view-box {
    position: fixed;
    display: flex;
    top: 30%;
    left: 50%;
    color: rgba(0, 0, 0, 0.85);
    margin-left: -630px;
    .box-title {
      padding: 10px;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      border-radius: 10px 0 0 10px;
      width: 30px;
      max-height: 83px;
      cursor: pointer;
    }
    .section-list {
      padding: 20px;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      max-height: 290px;
      max-width: 200px;
      overflow-y: auto;
      p {
        @include ellipsis();
        cursor: pointer;
      }
      .manga-name {
        display: inline-block;
        font-weight: 600;
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #eaeaea;
      }
    }
  }
  .content {
    width: 800px;
    margin: 0 auto;
  }
}
.toTop {
  position: fixed;
  bottom: 100px;
  right: 50%;
  margin-right: -640px;
  z-index: 99;
  .top-button {
    border-radius: 5px;
    background: #fff;
    width: 40px;
    padding: 5px;

    .button-ico {
      color: #000;
      font-size: 30px;
    }
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