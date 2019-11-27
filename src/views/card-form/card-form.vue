<template>
    <div class="card-demo">
        <div class="card-form">
            <Card
                    :card-number="cardForm.Number"
                    :month="cardForm.Month"
                    :year="cardForm.Year"
                    :card-name="cardForm.Name"
                    @numFoucs="numFoucs"
                    @leaveFoucs="leaveFoucs"
                    @holderFoucs="holderFoucs"
                    @expiresFoucs="expiresFoucs"
            >
                <div class="bar-frame" ref="frame"></div>
            </Card>
            <a-form>
                <a-form-item label="Card Number">
                    <a-input size="large" @blur="leaveFoucs" @focus="numFoucs" @change="textChange" v-model="cardForm.Number"></a-input>
                </a-form-item>
                <a-form-item label="Card Name">
                    <a-input size="large" @blur="leaveFoucs" @focus="holderFoucs" v-model="cardForm.Name"></a-input>
                </a-form-item>
                <a-form-item label="Date">
                    <a-select size="large" @focus="expiresFoucs" placeholder="Year" style="width: 120px;display: inline-block" @change="YearChange">
                        <a-select-option :key="item" :value="item" v-for="item of Years">{{item}}</a-select-option>
                    </a-select>
                    <a-select size="large" placeholder="Month" style="width: 120px;display: inline-block; margin-left: 10px" @change="MonthChange">
                        <a-select-option :key="item" :value="item" v-for="item of Months">{{item}}</a-select-option>
                    </a-select>
                </a-form-item>
                <div class="operate">
                    <a-button size="large" type="primary" @click="alertResult">Submit</a-button>
                </div>
            </a-form>

        </div>
    </div>
</template>

<script>
    import Card from './components/card/card';
    // import TransitionNum from './components/transition-number/transition-number';
    export default {
        name: "card-form",
        components: {
          Card,
        },
        created () {
            this.init();
        },
        methods: {
            init () {
              for (let i = 1; i <= 29; i++) {
                  if (i < 10) {
                      this.Years.push('0' + i);
                  } else {
                      this.Years.push(i.toString());
                  }
              }
              for (let i =1; i <= 12; i++) {
                  if (i < 10) {
                      this.Months.push('0'+ i);
                  } else {
                      this.Months.push(i.toString());
                  }
              }
          },
            YearChange (val) {
                this.cardForm.Year = val.toString();
            },
            MonthChange (val) {
                this.cardForm.Month = val.toString();
            },
            textChange () {
              let NumArr = Array.prototype.slice.call(this.cardForm.Number);
              if (NumArr.length < 16) {
                  return;
              }
              NumArr = NumArr.slice(0, 16);
              this.cardForm.Number = NumArr.join('');
            },
            numFoucs () {
                this.$refs.frame.classList.add('position-num');
            },
            alertResult () {
              alert('万里cdd');
            },
            leaveFoucs () {
                this.$refs.frame.classList.remove('position-num');
                this.$refs.frame.classList.remove('position-holder');
                this.$refs.frame.classList.remove('position-expires');
                this.$refs.frame.classList.add('position-default');
            },
            holderFoucs () {
                this.$refs.frame.classList.remove('position-num');
                this.$refs.frame.classList.remove('position-holder');
                this.$refs.frame.classList.remove('position-expires');
                this.$refs.frame.classList.add('position-holder');
            },
            expiresFoucs () {
                this.$refs.frame.classList.add('position-expires');
            }
        },
        data () {
            return {
                cardForm: {
                 Number: '',
                 Name: '',
                 Year: '',
                 Month: ''
                },
                test: 4,
                Years: [
                ],
                Months: []
            };
        },
    };
</script>

<style scoped>
    .card-demo {
        width: 100%;
        min-width: 800px;
        min-height: 1000px;
        display: inline-block;
        background: #d5e9fe;
        position: relative;
    }
    .card-form {
        min-width: 800px;
        width: 60%;
        margin: 0 auto;
    }
    .bar-frame {
        position: absolute;
        z-index: -99;
        border-radius: 5px;
    }
    @keyframes innerHolder {
        0% {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border: none;
        }
        100% {
            top: 185px;
            left: 27px;
            width: 285px;
            height: 60px;
            border: 1px solid rgba(255, 255, 255, 0.75);
        }
    }
    @keyframes innerNum {
        0% {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        100% {
            width: 85%;
            height: 40px;
            top: 108px;
            left: 30px;
            border: 2px solid #fff;
        }
    }
    @keyframes outtoAll {
        0% {
            opacity: 1;
        }
        50% {
            opacity: .5;
        }
        100% {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border: none;
        }
    }
    @keyframes innerExpires {
        0% {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border: none;
        }
        100% {
            top: 185px;
            right: 15px;
            width: 100px;
            height: 60px;
            border: 1px solid rgba(255, 255, 255, 0.75);
        }
    }
    .position-default{
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border: none;
          animation: outtoAll 1s ease-in-out;
      }
    .position-holder {
        top: 185px;
        left: 27px;
        width: 285px;
        height: 60px;
        border: 1px solid rgba(255, 255, 255, 0.75);
        animation: innerHolder .5s ease 1;
    }
    .position-num {
        width: 85%;
        height: 40px;
        top: 108px;
        left: 30px;
        border: 2px solid #fff;
        animation: innerNum .5s ease 1;
    }
    .position-expires {
        top: 185px;
        left: 320px;
        width: 100px;
        height: 60px;
        border: 1px solid rgba(255, 255, 255, 0.75);
        animation: innerExpires .5s ease 1;
    }
    .card-demo .ant-form {
        box-sizing: border-box;
        position: relative;
        width: 60%;
        background: #fff;
        padding: 130px 10% 10%;
        border-radius: 8px;
        box-shadow: 0 0 40px rgba(0,0,0, .25);
        margin: 20px auto;
    }
    .ant-form >>> .ant-form-item {
        margin-bottom: 20px;
    }
    .ant-form >>> .ant-form-item-label {
        height: 30px;
    }
    .ant-form-item-label label {
        font-size: 12px;
    }
    .operate {
        text-align: center;
    }
</style>