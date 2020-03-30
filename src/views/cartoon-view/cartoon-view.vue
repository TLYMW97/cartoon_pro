<template>
  <div class="cartoon-view">
    <div class="view-header">
      <div class="return">
        <router-link
          :to="{
            path: '/detail',
            query: { mangaId: this.currentManga.mangaId }
          }"
        >
          <a-icon type="close-circle" style="margin-right: 10px" />退出阅读
        </router-link>
      </div>
      <div class="title">
        <router-link to="/">首页</router-link>
        <span class="linkIcon">></span>
        <router-link
          :to="{
            path: '/detail',
            query: { mangaId: this.currentManga.mangaId }
          }"
          >{{ this.currentManga.mangaName }}</router-link
        >
        <span class="linkIcon">></span>
        <span>{{ this.$route.query.chapterName }}</span>
      </div>
      <div class="operate">
        <a-button
          class="feedback"
          @click="allSaw"
          type="link"
          style="color: #fff"
          >意见反馈</a-button
        >
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
            :to="{
              path: '/detail',
              query: { mangaId: this.currentManga.mangaId }
            }"
            >{{ this.currentManga.mangaName }}</router-link
          >
          <p
            v-for="section of sections"
            @click="handleSection(section)"
            :key="section.chapterId"
          >
            {{ section.chapterTitle }}
          </p>
        </div>
      </div>
      <div class="content">
        <div class="manga-list">
          <img
            v-for="episode of episodes"
            :key="episode.episodeId"
            :src="episode.episodeHref"
            alt
          />
        </div>
        <div class="pay-box" v-if="payShow">
          <div class="pay-des">
            <div class="pay-des-title">此漫画为付费漫画</div>
            <div class="user-balance">当前余额: {{ accountNum }}万币</div>
          </div>
          <div class="pay-operate">
            <div class="pay-number">
              <p>购买此章节</p>
              <p>
                应付: <span class="number">{{ currentManga.mangaPrice }}</span>
              </p>
            </div>
            <div class="pay-btn">
              <a-button type="primary" @click="pay">确认支付</a-button>
            </div>
          </div>
        </div>
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
      timerTwo: null,
      payShow: false,
      qrySelf: {},
      accountNum: 0
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
    getQrySelf() {
      let res = this.$api.qrySelf().then(async res => {
        const {
          data: { data }
        } = res;
        this.qrySelf = data;
        const { accountId } = data.user;
        let accountRes = await this.$api.qryAccount(accountId);
        const {
          data: {
            data: { accountNum }
          }
        } = accountRes;
        this.accountNum = accountNum;
      });
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
        data: { data, code, msg }
      } = res;
      if (code === 50031) {
        // this.$message.error('该内容为付费内容，请先购买');
        // this.$router.back();
        this.getQrySelf();
        this.payShow = true;
      } else {
        this.episodes = data.slice(1);
        this.payShow = false;
      }
    },
    allSaw() {
      var elem = document.querySelector('.view-content');
      this.requestFullScreen(elem);
    },
    pay: async function() {
      const manga = {
        accountdSubject: this.currentManga.mangaName,
        accountdNum: this.currentManga.mangaPrice,
        accountId: this.qrySelf.user.accountId,
        mangaId: this.currentManga.mangaId
      };
      let res = await this.$api.expenditure(manga);
      const {
        data: { code }
      } = res;
      if (code === 200) {
        this.viewInit();
      }
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
  min-height: 100vh;
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
    .pay-box {
      width: 600px;
      margin: 60px auto;
      background-color: #fff;
      padding: 10px;
      color: rgba(0, 0, 0, 0.8);
      .pay-des {
        border: 1px solid #eaeaea;
        padding: 10px;
        .pay-des-title {
          font-size: 22px;
          margin-bottom: 20px;
          // font-weight: 600;
        }
        .user-balance {
          border-top: 1px solid #eaeaea;
          padding-top: 10px;
        }
      }
      .pay-operate {
        display: flex;
        margin-top: 20px;
        border: 1px solid #eaeaea;
        padding: 10px;
        .pay-number,
        .pay-btn {
          width: 50%;
        }
        .pay-btn {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .number {
          color: #fe2829;
          font-size: 22px;
        }
      }
    }
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
