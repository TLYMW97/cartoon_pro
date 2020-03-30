<template>
  <div>
    <a-popover
      title="我看过的"
      trigger="hover"
      placement="bottom"
      v-if="icon === 'icon-historyrecord'"
    >
      <template slot="content">
        <div class="dropdown-pane">
          <!-- <div class="history-title">我看过的</div> -->
          <div class="no-login" v-if="!userInfo.token">
            <p>你还未登录!</p>
          </div>
          <div
            class="hisory-manga"
            v-for="manga of historyReads"
            :key="manga.hisId"
            @click="toDetail(manga)"
            v-else
          >
            <div class="manga-img">
              <img :src="manga.episode[0].episodeHref" alt />
            </div>
            <div class="manga-des">
              <p class="manga-name">{{ manga.mangaName }}</p>
              <p class="last-read">阅读至: {{ manga.chapterTitle }}</p>
              <p class="renew">更新至: {{ manga.chapterNew.chapterTitle }}</p>
            </div>
          </div>
        </div>
      </template>
      <li class="operate-item">
        <router-link :to="path" @mouseover="showPane" @mouseleave="hidePane">
          <div class="icon">
            <icon-svg :iconHref="icon" />
          </div>
          <p>{{ name }}</p>
        </router-link>
      </li>
    </a-popover>
    <li class="operate-item" v-else>
      <router-link :to="path" @mouseover="showPane" @mouseleave="hidePane">
        <div class="icon">
          <icon-svg :iconHref="icon" />
        </div>
        <p>{{ name }}</p>
      </router-link>
    </li>
  </div>
</template>

<script>
import IconSvg from '../icon-svg/icon-svg';
import { mapActions } from 'vuex';
export default {
  name: 'li-icon',
  components: {
    IconSvg
  },
  computed: {
    historyReads() {
      if (this.userInfo.token) {
        return this.userInfo.user.historyReads;
      }
      return null;
    }
  },
  data() {
    return {
      paneShow: false
    };
  },
  methods: {
    showPane() {
      this.paneShow = true;
    },
    hidePane() {
      this.paneShow = false;
    },
    toDetail: async function(manga) {
      const { mangaId } = manga;
      let res = await this.$api.getById(mangaId);
      // console.log('res :', res);
      let {
        data: { data }
      } = res;
      this.setCurManga(data);
      // this.$emit('toDetail', manga.mangaId);
      this.$router.push({ path: '/detail', query: { mangaId } });
    },
    ...mapActions(['setCurManga'])
  },
  props: {
    id: {
      type: Number
    },
    userInfo: {
      type: Object,
      default: () => {}
    },
    path: {
      type: String
    },
    name: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/index';
.operate-item {
  position: relative;
  display: inline-block;
  // z-index: 9999;
  margin-left: 30px !important;
  a {
    color: #999;
  }
  .dropdown-pane {
    border: 1px solid #eaeaea;
    position: absolute;
    top: 55px;
    left: -94px;
    width: 220px;
    background: #fff;
    z-index: 9999 !important;
    padding: 10px 15px;
    .history-title {
      font-size: $medium-x-font;
      font-weight: 600;
    }
  }
  .dropdown-pane::before {
    content: ' ';
    display: block;
    width: 32px;
    height: 12px;
    margin: 0 auto;
    background-image: url('../../assets/images/arrow-up.png');
    z-index: 1;
    position: relative;
    top: -22px;
    left: -10px;
  }
}
.hisory-manga {
  display: flex;
  border-bottom: 1px dashed #eaeaea;
  text-align: left;
  padding-bottom: 5px;
  margin-top: 10px;
  .manga-img {
    width: 80px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .manga-des {
    margin-left: 10px;
    .manga-name {
      @include ellipsis();
      font-weight: 600;
      font-size: $medium-font;
    }
    .last-read,
    .renew {
      @include ellipsis();
      font-size: 13px;
      margin-top: 15px;
    }
  }
}
p {
  margin-bottom: 0;
}
.operate-item a {
  margin: 0 auto;
}
.operate-item p {
  font-size: $small-font;
}
.icon {
  width: $large-font;
  height: $large-x-font;
  margin: 0 auto;
}
</style>
