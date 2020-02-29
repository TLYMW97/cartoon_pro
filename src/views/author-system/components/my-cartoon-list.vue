<template>
    <div class="my-cartoon">
        <div class="header">
            <h3>
                <strong>我的漫画</strong>
                （共有<span>7</span>部）
            </h3>
        </div>
        <div class="cartoon-list">
            <a-button class="publish-btn" type="primary" v-if="showButton" @click="toPublish">创建漫画</a-button>
            <!--{{myCartoonData}}-->
            <div class="list" v-else v-for="item of listNum" :key="item">
                <ul>
                    <li v-for="data of listData.slice(item, item+6)" :key="data.id" @click="getCartoon(data)">
                        <img :src="data.img" alt="">
                        <p>{{data.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-cartoon",
        props:{
            myCartoonData:{
                type:Object,
                default:null,
            }
        },
        data(){
            return{
                showButton: true,
                listData: [
                    {
                        img:'http://telresource.cdndm5.com/userfile/3/conver//2020/2/25/315113011/2/11721b276d744bc29d595473cfcbe50e_0_0_452_603.jpg',
                        id:1,
                        name: '1213',
                    },
                    {
                        img:'http://telresource.cdndm5.com/userfile/3/conver//2020/2/25/315113011/2/11721b276d744bc29d595473cfcbe50e_0_0_452_603.jpg',
                        id:2,
                        name: '1223',
                    },
                    {
                        img:'http://telresource.cdndm5.com/userfile/3/conver//2020/2/25/315113011/2/11721b276d744bc29d595473cfcbe50e_0_0_452_603.jpg',
                        id:3,
                        name: '1233',
                    },
                    {
                        img:'http://telresource.cdndm5.com/userfile/3/conver//2020/2/25/315113011/2/11721b276d744bc29d595473cfcbe50e_0_0_452_603.jpg',
                        id:4,
                        name: '1243',
                    },
                    {
                        img:'http://telresource.cdndm5.com/userfile/3/conver//2020/2/25/315113011/2/11721b276d744bc29d595473cfcbe50e_0_0_452_603.jpg',
                        id:5,
                        name: '1253',
                    },
                    {
                        img:'http://telresource.cdndm5.com/userfile/3/conver//2020/2/25/315113011/2/11721b276d744bc29d595473cfcbe50e_0_0_452_603.jpg',
                        id:6,
                        name: '1263',
                    },
                    {
                        img:'http://telresource.cdndm5.com/userfile/3/conver//2020/2/25/315113011/2/11721b276d744bc29d595473cfcbe50e_0_0_452_603.jpg',
                        id:7,
                        name: '1273',
                    },
                ],
                listNum: [],
            };
        },
        methods:{
            getCartoon(data){
                console.log(data);
                this.$router.push("/homeedit");
            },
            toPublish(){
                this.$router.push("/publish");
            },
            getListData(){
                let count = 0;
                if(this.listData.length>0)this.showButton = false;
                this.listNum.push(0)
                this.listData.map((value, index) => {
                    if(count === 6){
                        this.listNum.push(index);
                        count=1;
                    } else {
                        count++;
                    }
                })
                if(count!==0){
                    console.log(count);
                }
                console.log(this.listNum);
            }
        },
        created() {
        },
        mounted() {
            this.getListData();
        }
    };
</script>

<style scoped>
    .my-cartoon{
        border: #d6d6d6 solid 1px;
        width: 100%;
        min-height: 440px;
        margin-top: 30px;
    }
    .my-cartoon .header{
        width: 100%;
        height: 30px;
        padding-bottom: 40px;
        background: url("http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/topbg.png") repeat-x top left;
    }
    .header h3{
        width: 200px;
        padding: 10px 30px 0;
        background: #fff;
        height: 38px;
        border-right: 1px solid #dadada;
        border-top: 1px solid #292929;
    }
    .my-cartoon .cartoon-list{
        width: 100%;
        min-height: 442px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .cartoon-list>>>.ant-btn{
        width: 132px;
        height: 50px;
    }
    .cartoon-list .list{
        margin-top: 40px;
        width: 100%;
        padding: 0 0 10px 0;
        background: url("http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/bookbg.png") no-repeat left 168px;
    }
    .list ul{
        display: block;
        padding-left: 35px;
    }
    .list ul li{
        width: 136px;
        position: relative;
        margin-right: 14px;
        background-image: url("http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/bak_left.png");
        background-repeat: no-repeat;
        bottom: 5px;
        padding-left: 4px;
        float: left;
        cursor:pointer;
    }
    .list ul li img{
        width: 136px;
        height: 178px;
    }
    .list ul li p{
        margin-top: 20px;
        display: block;
        text-align: center;
    }
</style>