<template>
  <div class="pay-page">
    <div class="title">账户充值</div>
    <div class="pay">
      <div class="balance">
        <p>可用余额: <span>85454元</span></p>
      </div>
      <div class="pay-number">
        <p class="pay-number-title">充值金额:</p>
        <div
          class="radio-box"
          @click="selectedNum = number"
          :class="selectedNum === number ? 'box-selected' : ''"
          v-for="(number, index) of numbers"
          :key="index"
        >
          {{ number }}万币
        </div>
        <a-input v-model="selectedNum" /><span>万币</span>
      </div>
      <div class="pay-type">
        <p>
          充值方式:
        </p>
        <div class="radio-box type-selected">
          <icon-svg iconHref="icon-umidd17" />支付宝
        </div>
      </div>
      <div class="pay-btn">
        <a-button type="primary" @click="pay">确认充值</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'payPage',
  data() {
    return {
      numbers: [50, 100, 200, 300, 1000],
      selectedNum: 50
    };
  },
  created() {},
  methods: {
    pay: async function() {
      const manga = {
        ordersId: this.genID(5),
        ordersSubject: '万币',
        ordersAmount: this.selectedNum,
        ordersBody: '万币'
      };
      let res = await this.$api.recharge(manga);
      const {
        data: { code, data }
      } = res; //返回参数
      // document.querySelector('body').innerHTML = data;
      // const div = document.createElement('div');
      // div.innerHTML = res;
      // document.body.appendChild(div);
      // document.forms[0].submit();
      let newwindow = window.open('#', '_blank');
      newwindow.document.write(data);
    },
    genID(length) {
      let id = '';
      for (let i = 1; i < length; i++) {
        id += Math.floor(Math.random() * 10);
      }
      id += new Date().getTime();
      return id;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/index';
.pay-page {
  display: inline-block;
  width: 100%;
  height: 100vh;
  background-color: #f2f3f5;
  p {
    margin-bottom: 0;
  }
  .pay-btn {
    margin-top: 30px;
  }
  .ant-btn {
    background-color: #f4815b;
    border: #f4815b;
  }
  .ant-input {
    width: 5%;
    margin-left: 10px;
    margin-right: 10px;
  }
  .title {
    width: 80%;
    margin: 30px auto;
  }
  .pay {
    width: 80%;
    height: 50vh;
    padding: 20px 50px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    .pay-number {
      margin-top: 20px;
      display: flex;
      align-items: center;
    }
    .pay-type {
      margin-top: 20px;
      display: flex;
      align-items: center;
    }
    .radio-box {
      padding: 5px 10px;
      margin-left: 10px;
      display: flex;
      cursor: pointer;
      align-items: center;
      border-radius: 5px;
      border: 1px solid #eaeaea;
      svg {
        width: 20px;
        height: 20px;
      }
    }
    .box-selected {
      border-color: $index-color;
      color: $index-color;
    }
    .type-selected {
      border-color: #1296db;
      color: #1296db;
    }
  }
}
</style>
