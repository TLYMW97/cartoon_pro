<template>
    <div>user</div>
</template>

<script>
    export default {
        name: "user",
        data() {
            return{
                data: null,
            }
        },
        created() {
            this.getUserData();
        },
        methods:{
            getUserData(){
                this.$api.getUserList({page:1,size:10}).then(res=>{
                    console.log(res);
                })
            },
        }
    }
</script>

<style scoped>

</style>