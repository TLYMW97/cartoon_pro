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
        margin-left: 20px;
    }
    .operate-item a {
        margin: 0 auto;
    }
    .operate-item p {
        font-size: $small-font;
        text-align: center;
    }
    .icon {
        width: 18px;
        height: 18px;
        margin: 0 auto;
        background-repeat: no-repeat;
    }
</style>