<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        name: "transition-number"
    };
</script>

<style scoped lang="scss">
    .v-enter,.v-leave-to {
        opacity: 0;
    }
    .v-enter-active,.v-leave-active {
        transition: all 1s ease-in-out;
    }
</style>