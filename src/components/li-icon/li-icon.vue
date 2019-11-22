<template>
    <li class="operate-item">
        <a href="#">
            <div class="icon" :style="{backgroundImage: `url(${icon})`}"></div>
            <p>{{name}}</p>
        </a>
    </li>
</template>

<script>
    export default {
        name: "li-icon",
        props: {
            name: {
                type: String,
                default: null
            },
            icon: {
                type: String,
                default: null
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../../assets/sass/index";
    .operate-item {
        position: relative;
        font-size: $small-font;
        margin-left: 1vw;
    }
    .operate-item a {
        margin: 0 auto;
    }
    .operate-item p {
        width: 60px;
        text-align: center;
        margin-top: 2px;
    }
    .icon {
        width: 18px;
        height: 18px;
        margin: 0 auto;
        background-repeat: no-repeat;
    }
</style>