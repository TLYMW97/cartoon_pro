<template>
    <div class="card" @click.capture="emitFoucs('leaveFoucs')">
        <slot></slot>
        <div class="identify">
            <div class="ident-left">
                <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="">
            </div>
            <div class="ident-right">
                <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="">
            </div>
        </div>
        <div class="card-numbers" @click="emitFoucs('numFoucs')">
            <div class="num" :key="index" v-for="(item, index) in defaultNum">
                <transition name="slide-fade-up">
                    <div class="know-nums" v-if="index > 3 && index < 12 && cardNumber.length > index && item.trim() !== ''">*</div>
                    <div class="know-nums" :key="index" v-else-if="cardNumber.length > index"> {{cardNumber[index]}}</div>
                    <div class="know-nums" v-else :key="index + 1">{{item}}</div>
                </transition>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-holder" @click="emitFoucs('holderFoucs')">
                <div class="title">
                    Card Holder
                </div>
                <transition name="slide-fade-up">
                    <div class="content" v-if="cardName.length" key="1">
                        <transition-group name="slide-fade-up">
                            <template v-for="(item, index) in cardName.replace(/\s\s+/g, ' ')">
                                <span  v-if="index === index" :key="index+1">{{item}}</span>
                            </template>
                        </transition-group>
                    </div>
                    <div class="content" v-else>
                        FULL NAME
                    </div>
                </transition>
            </div>
            <div class="card-expires" @click="emitFoucs('expiresFoucs')">
                <div class="title">Expires</div>
                <div class="content exp">
                    <transition name="slide-fade-up">
                        <div :key="this.year" v-if="this.year">{{this.year}}</div>
                        <div v-else>YY</div>
                    </transition>
                    <div>/</div>
                    <transition  name="slide-fade-up">
                        <div :key="this.month" v-if="this.month">{{this.month}}</div>
                        <div v-else>MM</div>
                    </transition >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card",
        watch: {
        },
        props: {
            cardNumber: String,
            cardName: String,
            year: String,
            month: String
        },
        methods: {
            emitFoucs (val) {
                switch (val) {
                    case 'numFoucs':
                        this.$emit('numFoucs');
                        break;
                    case 'leaveFoucs':
                        this.$emit('leaveFoucs');
                        break;
                    case 'holderFoucs':
                        this.$emit('holderFoucs');
                        break;
                    case 'expiresFoucs':
                        this.$emit('expiresFoucs');
                        break;
                    default: {
                        return false;
                    }
                }
            }
        },
        data () {
            return {
              defaultNum: [
                  '#',
                  '#',
                  '#',
                  '#',
                  '#',
                  '#',
                  '#',
                  '#',
                  '#',
                  '#',
                  '#',
                  '#',
                  '#',
                  '#',
                  '#',
                  '#',
              ],
            };
        }
    };
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600,700|Source+Sans+Pro:400,600,700&display=swap");
    .card {
        position: relative;
        top: 100px;
        z-index: 4;
        margin: 0 auto;
        font-family: "Source Sans Pro", sans-serif;
        width: 430px;
        height: 270px;
        border-radius: 15px;
        overflow: hidden;
        background: url("../../../../assets/images/14.jpeg") no-repeat;
    }
    .card img {
        width: 100%;
    }
    .card-numbers {
        width: 100%;
        margin: 40px auto;
        justify-content: center;
        display: flex;
    }
    .know-nums {
        font-size: 27px;
        width: 16px;
        color:#fff;
        text-align: center;
    }
    .num:nth-child(4) {
        margin-right: 30px;
    }
    .num:nth-child(8) {
        margin-right: 30px;
    }
    .num:nth-child(12) {
        margin-right: 30px;
    }
    .slide-fade-up-enter-active {
        transition: all 0.25s ease-in-out;
        transition-delay: 0.1s;
        position: relative;
    }
    .slide-fade-up-leave-active {
        transition: all 0.25s ease-in-out;
        position: absolute;
    }
    .slide-fade-up-enter {
        opacity: 0;
        transform: translateY(15px);
        pointer-events: none;
    }
    .slide-fade-up-leave-to {
        opacity: 0;
        transform: translateY(-15px);
        pointer-events: none;
    }
    .identify {
        width: 80%;
        margin: 20px auto;
        justify-content: space-between;
        display: flex;
    }
    .identify .ident-left, .ident-right {
        width: 60px;
    }
    .card-bottom {
        margin: 0 auto;
        width: 80%;
        display: flex;
        justify-content: space-between;
    }
    .title {
        font-size:14px;
        color: #fff;
        opacity: .7;
    }
    .content {
        font-size: 20px;
        color:#fff;
    }
    .exp {
        display: flex;
    }
    img {
        width: 100%;
    }
</style>