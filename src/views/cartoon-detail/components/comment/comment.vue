<template>
  <div>
    <div class="comment">
      <div class="comment-l">
        <a-avatar size="large" icon="user"></a-avatar>
      </div>
      <div class="comment-r">
        <div class="userName">{{comm.user.userNickname}}</div>
        <div class="from-comm" v-if="comm.exComm">
          <div class="userName">{{comm.exComm.user.userNickname}}</div>
          <div class="content">{{comm.exComm.commBody}}</div>
          <div class="time-operate">
            <div class="time">{{commDate(comm.exComm.commTime)}}</div>
          </div>
        </div>
        <div class="content">{{comm.commBody}}</div>
        <div class="time-operate">
          <div class="time">{{ formatDate(comm.commTime)}}</div>
          <div class="operate">
            <span class="like" @click="commLike(comm)" :class="comm.status ? 'activited' : ''">
              <a-icon type="like" />
              点赞({{comm.commLike}})
            </span>
            <span class="message" @click="showArea">
              <a-icon type="message" />评论
            </span>
          </div>
        </div>
        <div class="text-area" v-if="areaShow">
          <a-textarea v-model.trim="resComm" :rows="3"></a-textarea>
          <div class="operate">
            <a-button type="primary" @click="replyComm(comm)">回复评论</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '../../../../utils/dateFormat';
export default {
  name: 'comment',
  computed: {
    // commDate() {
    //   const symbl = '/';
    //   return new Date(this.comm.commTime)
    //     .toLocaleString()
    //     .replace(new RegExp(symbl, 'g'), '-');
    // }
  },
  data() {
    return {
      resComm: '',
      areaShow: false
    };
  },
  props: {
    comm: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    commLike(comm) {
      let { commId, status } = comm;
      this.$emit('commLike', { commId, status });
    },
    commDate(date) {
      const symbl = '/';
      return new Date(date)
        .toLocaleString()
        .replace(new RegExp(symbl, 'g'), '-');
    },
    showArea() {
      this.areaShow = !this.areaShow;
    },
    formatDate,
    replyComm(comm) {
      const { commId: commExid, userId } = comm;
      const reply = {
        commExid,
        // ruserId: userId,
        commBody: this.resComm
      };
      this.$emit('replyComm', reply);
      this.areaShow = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import '~@/assets/sass/index';
.comment {
  display: flex;
  border-top: 1px solid #eaeaea;
  margin-top: 10px;
  padding: 15px 5px;
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
    .from-comm {
      padding: 20px;
      background-color: #f8f8f8;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    .content {
      margin-bottom: 20px;
    }
    .time-operate {
      @include flex(space-between);
      .time {
        color: #999;
      }
      .like,
      .message {
        margin-right: 15px;
        cursor: pointer;
      }
    }
  }
}
.text-area {
  padding: 10px 0;
  textarea {
    resize: none;
  }
  .operate {
    text-align: right;
    margin-top: 10px;
  }
}
.activited {
  color: red;
}
</style>