<template>
  <div class="cartoon-detail">
    <div class="glass-bg" ref="glassBg">
      <serach-bar></serach-bar>
      <div class="cartoon-info">
        <div class="c-img">
          <img :src="mangaEpisode" alt />
        </div>
        <div class="c-des">
          <h3>{{currentManga.mangaName}}</h3>
          <p class="composer">作者：{{currentManga.mangaAuthor}}</p>
          <div class="status">
            <p>
              <span class="gray-span">状态:</span>
              {{currentManga.mangaStatus === 0 ? '连载中' : '已完结'}}
            </p>
            <p>
              <span class="gray-span">题材:</span>
              <span
                style="margin-right:5px"
                v-for="tag of currentManga.tags"
                :key="tag.tagId"
              >{{tag.tagName}}</span>
            </p>
            <p>
              <span class="gray-span">分数:</span>
              {{currentManga.mangaScore/2}}
            </p>
          </div>
          <div class="introduce">
            <p>{{currentManga.mangaDetail}}</p>
          </div>
          <div class="operate">
            <a-button
              size="large"
              type="danger"
              @click="collect(currentManga.mangaId)"
            >{{collected ? '已收藏' : '收藏'}}</a-button>
            <a-button size="large" type="primary" @click="readStart">开始阅读</a-button>
          </div>
        </div>
      </div>
    </div>
    <div class="cartoon-main">
      <div class="main-left">
        <div class="sections">
          <Section
            @readManga="readManga"
            :key="section.chapterId"
            v-for="section of sections"
            :section="section"
          ></Section>
        </div>
        <div class="cartoon-comment">
          <div class="comment-title">
            <p>全部评价 (共有3条评论)</p>
          </div>
          <div class="comment-block">
            <a-textarea v-model="content" :rows="4"></a-textarea>
            <div class="content-operate">
              <span>请您文明上网，理性发言，注意文明用语</span>
              <a-button type="primary">发表评论</a-button>
            </div>
          </div>
          <div class="comments">
            <comment></comment>
          </div>
        </div>
      </div>
      <div class="main-right">
        <div class="author">
          <div class="avator">
            <img src="http://css122us.cdndm5.com/v201910292122/blue/images/header-partner.png" alt />
          </div>
          <div class="author-name">{{currentManga.mangaAuthor}}</div>
          <div class="works">
            作品数:
            <span class="red">1</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SerachBar from '../../components/search-bar/search-bar';
import Section from './components/section/section';
import Comment from './components/comment/comment';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'cartoon-detail',
  data() {
    return {
      sections: [],
      collected: false,
      content: ''
    };
  },
  computed: {
    ...mapGetters(['currentManga', 'userInfo']),
    mangaEpisode() {
      return this.currentManga.episode[0].episodeHref;
    }
  },
  created() {
    this.changeBg();
    this.getDetail();
    this.checkCollcted();
  },
  mounted() {},
  methods: {
    changeBg() {
      document.styleSheets[0].addRule(
        '.glass-bg::before',
        'background:url(' + this.mangaEpisode + ')'
      );
    },
    checkCollcted: async function() {
      if (!this.userInfo.token) {
        return;
      }
      const { mangaId } = this.$route.query;
      const res = await this.$api.checkCollect(mangaId);
      const {
        data: { data }
      } = res;
      this.collected = data;
    },
    getDetail: async function() {
      const { mangaId } = this.$route.query;
      const res = await this.$api.getChapter(mangaId);
      const {
        data: { code, data }
      } = res;
      if (code === 200) {
        this.sections = data;
        this.setSections(data);
      }
    },
    readStart() {
      const { chapterId, chapterTitle: chapterName } = this.sections[0];
      this.readManga({ chapterId, chapterName });
    },
    readManga({ chapterId, chapterName }) {
      this.$router.push({
        path: '/cartoonview',
        query: { chapterId, chapterName }
      });
      this.setCurSection({ chapterId, chapterName });
    },
    collect: async function(mangaId) {
      if (this.userInfo.token && !this.collected) {
        const res = await this.$api.collectManga(mangaId);
        const {
          data: { code, data }
        } = res;
        if (code === 200) {
          this.$message.success('收藏成功!');
          this.collected = true;
          console.log('this.collected', this.collected);
        }
      } else if (this.userInfo.token && this.collected) {
        const res = await this.$api.cancelCollect(mangaId);
        const {
          data: { data }
        } = res;
        this.collected = false;
        console.log('this.collected', this.collected);
      } else {
        this.$message.error('你未登录，请登录后再操作!');
      }
    },
    ...mapActions(['setSections', 'setCurSection'])
  },
  components: {
    SerachBar,
    Section,
    Comment
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/index';
p {
  margin: 0;
}
.glass-bg::before {
  content: '';
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 480px;
  filter: blur(11px) contrast(0.6);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -99;
}
.cartoon-info {
  box-sizing: border-box;
  width: $w_1200;
  margin: 100px auto 0 auto;
  padding-top: 30px;
  display: flex;
  border-radius: 10px;
  background-color: #fff;
}
.cartoon-info .c-img {
  position: relative;
  top: -70px;
  left: 0;
  width: 20%;
  height: 314px;
  border-radius: 5px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.45);
  margin-left: 40px;
  overflow: hidden;
}
.c-img img {
  width: 100%;
  height: 100%;
}
.cartoon-info .c-des {
  width: 60%;
  margin-left: 3%;
}
.c-des h3 {
  font-size: $large-font;
  font-weight: 500;
}
.c-des .composer {
  margin-top: 5px;
}
.c-des .status {
  width: 60%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.gray-span {
  color: $gray-span;
  margin-right: 3px;
}
.c-des .introduce {
  margin-top: 20px;
}
.c-des .operate {
  margin-top: 10px;
}
.operate .ant-btn {
  margin-right: 20px;
}
.cartoon-main {
  width: $w_1200;
  margin: 0 auto;
  display: flex;
  padding-left: 35px;
}
.main-left {
  flex: 1;
  margin-right: 20px;
  .sections {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
}
.main-right {
  width: 240px;
  text-align: center;
}
.main-right .author {
  border: 1px solid #eaeaea;
  margin: 0 auto;
  padding-bottom: 40px;
}
.author .avator {
  margin-top: 40px;
}
.sections a {
  display: inline-block;
  width: 120px;
  font-size: 16px;
  border-right: 1px solid #000;
}
.sections a:nth-last-child(1) {
  text-align: center;
}
.author-name {
  font-size: $middle-font;
}
.cartoon-comment {
  .comment-title {
    padding: 10px;
  }
  .comment-block {
    .content-operate {
      margin-top: 20px;
      text-align: right;
      span {
        margin-right: 20px;
      }
    }
    textarea {
      resize: none;
    }
  }
}
</style>