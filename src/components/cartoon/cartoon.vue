<template>
  <div class="c-item">
    <div class="c-left">
      <img :src="cartoon.episode[0].episodeHref" alt />
    </div>
    <div class="c-right">
      <p class="item-title">{{cartoon.mangaName}}</p>
      <div class="item-star">
        <a-rate
          style="font-size:12px;color:#ffc73f"
          allow-half
          :defaultValue="cartoon.mangaScore / 2"
        />
      </div>
      <div class="item-new">
        最新
        <span class="red-span">第462回 刀锋单间论</span>
      </div>
      <div class="item-des">{{cartoon.mangaDetail}}</div>
      <div class="item-tags">
        <a-tag v-for="tag of cartoon.tags" :key="tag.tagId">{{tag.tagName}}</a-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartoon',
  props: {
    cartoon: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      stars: 4
    };
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/index';
.c-item {
  margin-top: 20px;
  width: 400px;
  display: flex;
  .c-left {
    width: 50%;
    img {
      width: 100%;
    }
  }
  .c-right {
    width: 50%;
    margin-left: 10px;
  }
}
.item-star {
  width: 100%;
}
.item-title {
  font-size: $middle-font;
  font-weight: 600;
}
.item-new {
  margin-top: 30px;
}
.red-span {
  color: $index-color;
}
.item-des {
  margin-top: 5px;
  padding-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-tags {
  display: flex;
  flex-wrap: wrap;
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
  text-overflow: ellipsis; /* ellipsis:显示省略符号来代表被修剪的文本  string:使用给定的字符串来代表被修剪的文本*/
  white-space: nowrap; /* nowrap:规定段落中的文本不进行换行   */
  overflow: hidden; /*超出部分隐藏*/
}
</style>