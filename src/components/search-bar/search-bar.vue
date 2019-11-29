<template>
    <div class="search-bar">
        <div class="bar-input">
            <a-input-search
                    placeholder="搜索漫画"
                    @search="onSearch"
                    enterButton
                    size="large"
                    v-model="searchContent"
            >
            </a-input-search>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search-bar",
        data () {
          return {
            searchContent: ''
          };
        },
        methods: {
            onSearch () {
                this.$emit('search', this.searchContent);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../../assets/sass/index.sass";
    .search-bar {
        width: 100%;
        min-width: $w_1200;
        height: 100px;
        margin: 0 auto;
        text-align: center;
        background: url("http://css99tel.cdndm5.com/v201910292122/blue/images/search-bg.jpg") no-repeat;
    }
    .bar-input{
        display: inline-block;
        width: 40%;
        margin: 30px auto;
    }
</style>