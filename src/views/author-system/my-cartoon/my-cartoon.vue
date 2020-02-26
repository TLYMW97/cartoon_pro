<template>
    <div class="my-cartoon">
        <myCartoonList></myCartoonList>
    </div>
</template>

<script>
    import myCartoonList from '../components/my-cartoon-list';
    export default {
        name: "my-cartoon",
        components:{
            myCartoonList,
        }
    }
</script>

<style scoped>
    .my-cartoon{
        margin-bottom: 25px;
    }
</style>