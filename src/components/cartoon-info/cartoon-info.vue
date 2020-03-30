<template>
  <div class="cartoon-info">
    <div class="c-img">
      <img :src="mangaEpisode" alt />
    </div>
    <div class="c-des">
      <h3>
        {{ mangaData.mangaName }}
        <a-tag color="red" v-if="mangaData.mangaPrice > 0">付费</a-tag>
      </h3>
      <p class="composer">作者：{{ mangaData.mangaAuthor }}</p>
      <div class="status">
        <p>
          <span class="gray-span">状态:</span>
          {{ mangaData.mangaStatus === 0 ? '连载中' : '已完结' }}
        </p>
        <p>
          <span class="gray-span">题材:</span>
          <span
            style="margin-right:5px"
            v-for="tag of mangaData.tags"
            :key="tag.tagId"
            >{{ tag.tagName }}</span
          >
        </p>
        <p>
          <span class="gray-span">分数:</span>
          {{ mangaData.mangaScore | starFormat }}
        </p>
      </div>
      <div class="introduce">
        <p>{{ mangaData.mangaDetail }}</p>
      </div>
      <div class="operate">
        <a-button
          size="large"
          type="danger"
          @click="collect(mangaData.mangaId)"
          >{{ collected ? '已收藏' : '收藏' }}</a-button
        >
        <a-button size="large" type="primary" @click="readStart"
          >开始阅读</a-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartoon-info',
  data() {
    return {};
  },
  computed: {
    mangaEpisode() {
      return this.mangaData.episode[0].episodeHref;
    }
  },
  props: {
    mangaData: {
      type: Object,
      default: () => {}
    },
    collected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    collect(mangaId) {
      this.$emit('collect', mangaId);
    },
    readStart() {
      this.$emit('readStart');
    }
  }
};
</script>

<style scoped lang="scss">
@import '~@/assets/sass/index';
p {
  margin-bottom: 0;
}
.cartoon-info {
  box-sizing: border-box;
  @include w1200(40px);
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
  min-height: 65px;
}
.c-des .operate {
  margin-top: 35px;
}
.operate .ant-btn {
  margin-right: 20px;
}
</style>
