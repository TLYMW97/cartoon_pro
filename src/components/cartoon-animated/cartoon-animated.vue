<template>
  <div class="animated">
    <div class="animated-tip">
      <router-link to title="山海逆战">
        <img :src="mangaPic" alt />
      </router-link>
      <div class="animated-detail">
        <div class="title">
          <router-link to :title="mangaData.mangaName">{{mangaData.mangaName}}</router-link>
          <p>评分:{{mangaData.mangaScore | starFormat}}</p>
          <a-rate class="rate" allow-half :value="stars | starFormat" disabled></a-rate>
        </div>
      </div>
      <div class="author">
        <p>作者:</p>
        <span>{{mangaData.mangaAuthor}}</span>
      </div>
      <div class="chapter">
        <p>最新:</p>
        <router-link to>{{mangaData.chapterNew.chapterTitle}}</router-link>
      </div>
      <div class="desc">
        <p>{{mangaData.mangaDetail}}</p>
      </div>
      <div class="read">
        <div class="btn" @click="toDetail">开始阅读</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mangaCardMixin } from '../../mixin/manga';
export default {
  name: 'cartoon-animated',
  mixins: [mangaCardMixin]
};
</script>

<style scoped lang="scss">
@import '~@/assets/sass/index';
.animated {
  display: block;
  overflow: hidden;
  position: absolute;
  top: -40px;
  left: -30px;
  opacity: 0;
  z-index: 2;
  max-height: 299px;
  transform: scale(0.73);
  transition: all 0.3s;
}
.animated:hover {
  opacity: 1;
  top: -20px;
  left: -30px;
  max-height: 340px;
  transform: scale(1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.animated .animated-tip {
  width: 226px;
  height: 340px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.animated-tip img {
  width: 100%;
  height: 50%;
  display: block;
  object-fit: cover;
}
.animated-tip .animated-detail {
  padding: 10px 10px 0px 10px;
}
.animated-detail .title {
  display: flex;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  @include ellipsis();
}
.title a {
  display: inline-block;
  font-size: $medium-font;
  width: 120px;
  color: #252525;
  @include ellipsis();
}
.title p {
  font-size: $medium-font;
  display: block;
  margin-right: 4px;
}
.animated-detail .rate {
  line-height: $medium-font;
  font-size: $small-font;
}
.rate >>> .ant-rate-star {
  margin-right: 5px;
}
.animated-tip .author {
  color: #666;
  @include ellipsis();
  display: flex;
  padding: 0 10px;
}
.author p {
  font-size: $medium-font;
  margin-right: 5px;
}
.author span {
  float: left;
  display: block;
  padding-left: 3px;
  font-size: $medium-font;
}
.animated-tip .chapter {
  height: 24px;
  line-height: $medium-font;
  display: flex;
  padding: 0 10px;
}
.chapter p {
  width: 40px;
  font-size: $medium-font;
  color: #252525;
}
.chapter a {
  margin-left: 3px;
  color: $index-color;
  display: inline-block;
  width: 170px;
  @include ellipsis();
  vertical-align: top;
}
.animated-tip .desc {
  height: $medium-font;
  padding: 0 10px;
  font-size: $small-font;
  color: #666;
  line-height: $medium-font;
  margin-top: 3px;
  @include ellipsis();
}
.animated-tip .read {
  font-size: $small-font;
  cursor: pointer;
  padding: 0 10px 10px 10px;
}
.read .btn {
  display: block;
  width: 100%;
  height: 34px;
  margin-top: 10px;
  line-height: 34px;
  background-color: $index-color;
  color: #fff;
  text-align: center;
  font-size: $medium-font;
  border-radius: 4px;
  cursor: pointer;
}
.btn a {
  color: #fff;
}
</style>