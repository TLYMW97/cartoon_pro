<template>
  <div class="search-result">
    <search-bar />
    <div class="result-f">
      <cartoon-info
        :mangaData="searchResult[0]"
        :collected="collected"
        @collect="collect"
        @readStart="readStart"
      ></cartoon-info>
    </div>
    <div class="result">
      <cartoon-card
        v-for="cartoon of searchList"
        :key="cartoon.mangaId"
        :mangaData="cartoon"
      />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/search-bar/search-bar';
import cartoonCard from '@/components/cartoon-card/cartoon-card';
import cartoonInfo from '@/components/cartoon-info/cartoon-info';
import { mapGetters, mapActions } from 'vuex';
import { mangaMixin } from '@/mixin/manga';
export default {
  name: 'search-result',
  components: {
    SearchBar,
    cartoonCard,
    cartoonInfo,
  },
  mixins: [mangaMixin],
  created() {
    this.searchInit();
  },
  computed: {
    searchList() {
      const lenght = this.searchResult.lenght;
      return this.searchResult.slice(1, lenght);
    },
  },
  methods: {
    searchInit() {
      const mangaFirst = this.searchResult[0];
      this.setCurManga(mangaFirst);
      this.checkCollcted(mangaFirst.mangaId);
      this.getDetail(mangaFirst.mangaId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/index';
.result-f {
  width: 100%;
  padding: 50px 0;
  background-color: #f8f8f9;
}
.result {
  @include w1200(20px);
  @include flex(null, null, wrap);
  .card {
    margin-right: 30px;
  }
}
</style>
