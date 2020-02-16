import { mapGetters, mapActions } from 'vuex';
export const mangaMixin = {
  data() {
    return {
      collected: false,
      sections: []
    };
  },
  computed: {
    ...mapGetters(['currentManga', 'userInfo', 'searchResult'])
  },
  methods: {
    getDetail: async function(mangaId) {
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
    checkCollcted: async function(mangaId) {
      if (!this.userInfo.token) {
        return;
      }
      const res = await this.$api.checkCollect(mangaId);
      const {
        data: { data }
      } = res;
      this.collected = data;
    },
    collect: async function(mangaId) {
      if (this.userInfo.token && !this.collected) {
        const res = await this.$api.collectManga(mangaId);
        const {
          data: { code }
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
    ...mapActions(['setSections', 'setCurSection', 'setCurManga'])
  }
};

export const mangaCardMixin = {
  computed: {
    mangaPic() {
      return this.mangaData.episode[0].episodeHref;
    },
    stars() {
      return this.mangaData.mangaScore;
    }
  },
  props: {
    mangaData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    toDetail() {
      this.setCurManga(this.mangaData);
      this.$emit('toDetail', this.mangaData.mangaId);
    },
    ...mapActions(['setCurManga'])
  }
};
