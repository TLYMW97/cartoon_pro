<template>
    <div class="edit-list">
        <div class="title">
            <h3>123</h3>
        </div>
        <div class="list-tab">
            <div class="menu-title">
                <img src="http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/icon_collection.png" alt="">
                <p>作品管理</p>
            </div>
            <ul>
                <li v-for="list of listData" :key="list.text">
                    <router-link :to="list.router">{{list.text}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit-list",
        data(){
            return{
              listData:[
                  {
                      text:'作品概要',
                      router: '/cartoonedit',
                  },
                  {
                      text:'修改漫画',
                      router: '/publishform',
                  },
                  {
                      text:'发布章节',
                      router: '/publishchapter',
                  },
                  {
                      text:'章节管理',
                      router: '/chapteredit',
                  },
                  {
                      text:'封面管理',
                      router: '/publishimg',
                  },
                  {
                      text:'评论管理',
                      router: '/commentedit',
                  },
              ]
            };
        }
    };
</script>

<style scoped>
    .edit-list{
        border-right: #d6d6d6 solid 1px;
        border-radius: 15px 0 0 15px;
        width: 157px;
        background: #f7f7f7;
    }
    .edit-list .title{
        height: 60px;
        border-bottom: #d6d6d6 solid 1px;
        background: #7451ca;
        border-radius: 15px 0 0 0;
    }
    .title h3{
        border-radius: 15px 0 0 0;
        line-height: 60px;
        text-align: center;
        font-size: 18px;
        color: white;
        margin-bottom: 0;
    }
    .edit-list .list-tab{
    }
    .list-tab .menu-title{
        display: flex;
        justify-content: center;
        margin: 15px 0;
    }
    .menu-title p{
        margin-left: 10px;
        font-weight: bold;
        margin-bottom: 0;
        font-size: 16px;
    }
    .list-tab ul li{
        margin-bottom: 20px;
    }
    .list-tab ul li a{
        display: block;
        text-align: center;
        color: #7c7c7c;
        text-decoration: none;
    }
    .list-tab ul li a:hover{
        color: #ff6000;
    }
</style>