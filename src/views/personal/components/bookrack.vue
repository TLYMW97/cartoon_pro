<template>
  <div class="book-rack">
    <div class="book-rack-title">
      <h2>我的书架</h2>
      <span
        class="option"
        @click="optionSel = option.id"
        :class="optionSel === option.id ? 'activeted' : ''"
        v-for="option of options"
        :key="option.id"
        >{{ option.name }} <a-divider type="vertical"
      /></span>
    </div>
    <div class="manga-list">
      <div class="history-read" v-show="optionSel === 1">
        <manga-card
          v-for="manga of readHis"
          :key="manga.hisId"
          :manga="manga"
        ></manga-card>
      </div>
      <div class="collect" v-show="optionSel === 0">
        <manga-card-a
          :mangaData="manga"
          v-for="manga of collect"
          :key="manga.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MangaCard from '../../../components/cartoon-card-r/cartoon-card-r';
import MangaCardA from '../../../components/cartoon-card/cartoon-card';
export default {
  data() {
    return {
      options: [
        { id: 0, name: '我的收藏' },
        { id: 1, name: '阅读记录' }
      ],
      optionSel: 0
    };
  },
  created() {
    // console.log('this.readHis :', this.readHis);
  },
  props: {
    readHis: {
      type: Array,
      default: () => []
    },
    collect: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MangaCard,
    MangaCardA
  }
};
</script>

<style lang="scss">
@import '~@/assets/sass/index';
.book-rack {
  // width: 100%;
  .book-rack-title {
    h2 {
      font-size: 22px;
      display: inline-block;
      margin-right: 20px;
    }
    .option {
      cursor: pointer;
      margin-right: 20px;
    }
    .activeted {
      color: $index-color;
    }
  }
  .manga-list {
    margin-top: 20px;
    .history-read,
    .collect {
      // width: 100%;
      // @include grid(180px);
      @include flex(null, null, wrap);
    }
  }
}
</style>
