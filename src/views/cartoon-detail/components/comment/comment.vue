<template>
  <div class="comment">
    <div class="comment-l">
      <a-avatar size="large" icon="user"></a-avatar>
    </div>
    <div class="comment-r">
      <div class="userName">李逸瀚</div>
      <div class="content">这漫画真棒啊！</div>
      <div class="time-operate">2020-03-01</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.comment {
  display: flex;
  border-top: 1px solid #eaeaea;
  margin-top: 10px;
  padding: 10px;
  .comment-l {
    width: 10%;
    text-align: center;
  }
  .comment-r {
    width: 90%;
    .userName {
      margin-bottom: 20px;
      font-weight: 600;
    }
    .content {
      margin-bottom: 20px;
    }
    .time-operate {
    }
  }
}
</style>