<template>
  <div class="cartoon-detail">
    <div class="glass-bg" ref="glassBg">
      <serach-bar></serach-bar>
      <!-- <div class="cartoon-info">
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
      </div>-->
      <cartoon-info
        :mangaData="this.currentManga"
        :collected="collected"
        @collect="collect"
        @readStart="readStart"
      ></cartoon-info>
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
        <div class="more-button" @click="getMore = true" v-if="!getMore">
          展开全部
        </div>
        <div class="more-sctions" v-else>
          <Section
            @readManga="readManga"
            :key="section.chapterId"
            v-for="section of moreSection"
            :section="section"
          ></Section>
        </div>
        <div class="cartoon-comment">
          <div class="comment-title">
            <p>
              全部评价
              <span style="margin-left: 20px;"
                >(共有{{ commList.length }}条评论)</span
              >
            </p>
          </div>
          <div class="comment-block">
            <a-textarea v-model.trim="comm.commBody" :rows="4"></a-textarea>
            <div class="content-operate">
              <span>请您文明上网，理性发言，注意文明用语</span>
              <a-button type="primary" @click="commManga">发表评论</a-button>
            </div>
          </div>
          <div class="comments">
            <comment
              @commLike="commLike"
              @replyComm="replyComm"
              :comm="comm"
              :key="comm.commId"
              v-for="comm of commList"
            />
          </div>
        </div>
      </div>
      <div class="main-right">
        <div class="author">
          <div class="avator">
            <img
              src="http://css122us.cdndm5.com/v201910292122/blue/images/header-partner.png"
              alt
            />
          </div>
          <div class="author-name">{{ currentManga.mangaAuthor }}</div>
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
import cartoonInfo from '@/components/cartoon-info/cartoon-info';
import { mapGetters, mapActions } from 'vuex';
import { mangaMixin } from '../../mixin/manga';
export default {
  name: 'cartoon-detail',
  data() {
    return {
      comm: {
        mangaId: '',
        commBody: ''
      },
      getMore: false,
      commList: []
    };
  },
  mixins: [mangaMixin],
  computed: {
    mangaEpisode() {
      return this.currentManga.episode[0].episodeHref;
    }
  },
  created() {
    this.detailInit();
  },
  methods: {
    detailInit() {
      const { mangaId } = this.$route.query;
      this.changeBg();
      this.getComm();
      this.checkCollcted(mangaId);
      this.getDetail(mangaId);
    },
    changeBg() {
      document.styleSheets[0].addRule(
        '.glass-bg::before',
        'background:url(' + this.mangaEpisode + ')'
      );
    },
    getComm: async function() {
      const { mangaId } = this.currentManga;
      const res = await this.$api.findMangaComm(mangaId);
      const {
        data: { code, data }
      } = res;
      if (code === 200 && data) {
        this.commList = data;
        for (let comm of this.commList) {
          if (!comm.replyList) {
            continue;
          } else {
            comm.replyList.forEach(replycomm => {
              const {
                replyBody: commBody,
                replyId: commId,
                replyTime: commTime,
                ruserId,
                user
              } = replycomm;
              let newComm = {
                commBody,
                commId,
                commTime,
                ruserId,
                user,
                fromComm: comm
              };
              this.commList.push(newComm);
            });
          }
        }
        this.commList.sort((pre, next) => {
          return Date.parse(next.commTime) - Date.parse(pre.commTime);
        });
      }
    },
    commManga: async function() {
      if (!this.userInfo.token) {
        this.$message.error('请先登录后再评论');
        return;
      }
      const { mangaId } = this.currentManga;
      this.comm.mangaId = mangaId;
      if (this.comm.commBody === '') {
        this.$message.error('评论内容不得为空！');
        return;
      }
      const res = await this.$api.commManga(this.comm);
      const {
        data: { code }
      } = res;
      if (code === 200) {
        this.$message.success('评价成功!');
        this.comm.commBody = '';
      }
      this.getComm();
    },
    commLike: async function({ commId, status }) {
      let likeStatus = status ? 1 : 0;
      const res = await this.$api.commLike({ commId, likeStatus });
      this.getComm();
    },
    replyComm: async function(reply) {
      const res = await this.$api.replyComm(reply);
      const {
        data: { code }
      } = res;
      if (code === 200) {
        this.getComm();
      }
    }
  },
  components: {
    SerachBar,
    Section,
    Comment,
    cartoonInfo
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
  background-size: cover;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 480px;
  transform: scale(1.2);
  filter: blur(11px) contrast(0.6);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -99;
}
.cartoon-info {
  box-sizing: border-box;
  @include w1200(80px);
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
  @include flex(space-between);
}
.gray-span {
  color: $gray-span;
  margin-right: 3px;
}
.c-des .introduce {
  margin-top: 20px;
}
.c-des .operate {
  margin-top: 40px;
}
.operate .ant-btn {
  margin-right: 20px;
}
.cartoon-main {
  @include w1200(30px);
  display: flex;
  padding-left: 35px;
}
.main-left {
  flex: 1;
  margin-right: 20px;
  .sections {
    flex: 1;
    @include flex(null, null, wrap);
  }
  .more-button {
    cursor: pointer;
    width: 100%;
    background-color: #f6f6f6;
    padding: 10px;
    text-align: center;
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
  font-size: $large-font;
}
.cartoon-comment {
  border: 1px solid #eaeaea;
  margin-top: 20px;
  padding: 10px 15px;
  .comment-title {
    padding: 20px 10px;
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
