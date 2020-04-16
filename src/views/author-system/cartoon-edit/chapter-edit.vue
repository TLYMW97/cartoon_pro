<template>
    <div class="chapter-edit">
        <div class="chapter-header">
            <h3>章节列表</h3>
        </div>
        <div class="chapter-list-hide" v-if="listShow">
            <!--<dataList style="width: 100%"></dataList>-->
            <a-table style="width: 100%" :columns="chapterListColums" :dataSource="chapterListData">
                <template slot="operation" slot-scope="text, record, index">
                    <a class="action-style" @click="editData(record, index)">编辑</a>
                    <a class="action-style" @click="deleteData(record, index)">删除</a>
                </template>
            </a-table>
        </div>
        <div class="chapter-list-show" v-else>
            <img src="http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/noData.png" alt="">
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex';
    import {timeFormat} from '../../../utils/UTDtime';
    // import dataList from '../components/data-list';
    export default {
        name: "chapter-edit",
        components:{
        },
        data(){
            return{
                listShow: false,
                chapterListData: [],
                chapterStatus:[
                    '待审核',
                    '审核通过',
                    '审核未通过',
                ],
                chapterListColums:[
                    {
                        title:'章节名称',
                        dataIndex: 'chapterTitle',
                        width:'25%',
                        align: 'center',
                    },
                    {
                        title: '审核状态',
                        dataIndex: 'chapterStatusText',
                        width:'25%',
                        align: 'center',
                    },
                    {
                        title:'更新时间',
                        dataIndex: 'chapterUpdatetime',
                        width:'25%',
                        align: 'center',
                    },
                    {
                        title:'操作',
                        width: '25%',
                        dataIndex: 'operation',
                        scopedSlots: { customRender: 'operation' },
                        align: 'center',
                    }
                ]
            };
        },
        created() {
            this.getChapterList();
        },
        methods:{
            getChapterList(){
                this.$api.findChapterByAuthor({mangaId:this.getMangaByClick.mangaId}).then(res=>{
                    console.log(res);
                    if(res.data.code === 200){
                        console.log(this.chapterListData);
                        this.chapterListData = res.data.data.map(value=>{
                            value.key = value.chapterId;
                            value.chapterUpdatetime = timeFormat(value.chapterUpdatetime);
                            value.chapterStatusText = this.chapterStatus[value.chapterStatus];
                            return value;
                        });
                        this.listShow = true;
                    }
                })
            },
            editData(record,index){
                this.setTableByEdit(record);
                this.$router.push({path:'/publishchapter'});
            },
            deleteData(record,index){
                console.log(record);
                console.log(index);
                this.$api.deleteChapter({chapterId:record.chapterId}).then(res=>{
                    console.log(res);
                    this.$router.go(0);
                })
            },
            ...mapActions(['setTableByEdit'])
        },
        computed:{
            ...mapGetters(['getMangaByClick'])
        }
    }
</script>

<style scoped>
    .chapter-edit{
        margin: 25px 0;
        min-height: 550px;
        border: #d6d6d6 solid 1px;
    }
    .chapter-edit .chapter-header{
        width: 100%;
        height: 30px;
        padding-bottom: 40px;
        background: url("http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/topbg.png") repeat-x top left;
    }
    .chapter-header h3{
        width: 200px;
        padding: 10px 30px 0;
        background: #fff;
        height: 38px;
        border-right: 1px solid #dadada;
        border-top: 1px solid #292929;
    }
    .chapter-edit .chapter-list-show{
        min-height: 550px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .chapter-edit .chapter-list-hide{
         min-height: 550px;
         display: flex;
         margin:20px;
         justify-content: center;
     }
    .action-style{
        margin-right: 10px;
        color: rgba(0,0,0,0.65);
    }
</style>