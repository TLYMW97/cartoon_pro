<template>
  <div class="cartoon-card-o" @click="toDetail">
    <div class="cartoon-img">
      <img :src="mangaPic" alt />
      <p class="author">{{mangaData.mangaAuthor}}</p>
    </div>
    <p>{{mangaData.mangaName}}</p>
  </div>
</template>

<script>
import { mangaCardMixin } from '../../mixin/manga';
export default {
  name: 'cartoon-card-o',
  mixins: [mangaCardMixin]
};
</script>

<style lang="scss" scoped>
.cartoon-card-o {
  z-index: 99;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 180px;
  .cartoon-img {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    .author {
      position: absolute;
      left: 5px;
      background: rgba(0, 0, 0, 0.2);
      font-size: 12px;
      opacity: 1;
      padding: 0 2px;
      border-radius: 10px;
      bottom: 5px;
    }
  }
  p {
    margin-top: 5px;
    color: #fff;
    opacity: 0.8;
    margin-bottom: 0;
  }
}
.cartoon-card-o:hover {
  transform: translate(0, -6px);
  transition: all 0.3s ease-in-out;
}
</style>
