<template>
  <div class="c-item">
    <div class="c-left" @click="toDetail">
      <img :src="mangaPic" alt />
    </div>
    <div class="c-right">
      <p class="item-title" @click="toDetail">{{mangaData.mangaName}}</p>
      <div class="item-star">
        <a-rate
          disabled
          style="font-size:12px;color:#ffc73f"
          allow-half
          :defaultValue="mangaData.mangaScore / 2"
        />
      </div>
      <div class="item-new">
        最新
        <span class="red-span">{{mangaData.chapterNew.chapterTitle}}</span>
      </div>
      <div class="item-des">{{mangaData.mangaDetail}}</div>
      <div class="item-tags">
        <a-tag v-for="tag of mangaData.tags" :key="tag.tagId">{{tag.tagName}}</a-tag>
      </div>
    </div>
  </div>
</template>

<script>
import { mangaCardMixin } from '../../mixin/manga';
export default {
  name: 'cartoon',
  mixins: [mangaCardMixin]
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/index';
.c-item {
  margin-top: 20px;
  width: 400px;
  display: flex;
  font-size: 13px;
  p {
    margin-bottom: 0;
  }
  .c-left {
    width: 42%;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
  .c-right {
    width: 48%;
    margin-left: 10px;
  }
}
.item-star {
  width: 100%;
}
.item-title {
  font-size: $large-font;
  font-weight: 600;
  cursor: pointer;
}
.item-new {
  margin-top: 30px;
  font-size: $small-font;
}
.red-span {
  color: $index-color;
}
.item-des {
  margin-top: 5px;
  padding-right: 10px;
  overflow: hidden;
  @include moreEllipsis();
}
.item-tags {
  @include flex(null, null, wrap);
  margin-top: 50px;
  max-height: 80px;
  display: -webkit-box; /*  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示  */
  -webkit-box-orient: vertical; /*  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式  */
  overflow: hidden;
}
.ant-tag {
  background-color: #ff5660;
  color: #fff;
  margin-right: 1vw;
  @include ellipsis();
}
</style>