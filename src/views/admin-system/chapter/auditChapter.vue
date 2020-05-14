<template>
    <div style="width: 100%;background: white;padding: 20px;">
        <p style="text-align: center">章节名称: {{chapterData.chapterTitle}}</p>
        <ul style="display: flex; flex-wrap:wrap;justify-content:space-between;">
            <li v-for="item of chapterImg" :key="item.episodeId">
                <img style="width: 300px;" :src="item.episodeHref" alt="">
            </li>
        </ul>
        <div style="display: flex;justify-content:center;">
            <a-button type="primary" @click="pass">通过</a-button>
            <a-button type="danger" @click="unPass">不通过</a-button>。
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "auditChapter",
        data(){
            return{
                chapterData: null,
                chapterImg: null,
            }
        },
        created(){
            this.getChapterData();
        },
        methods:{
            getChapterData(){
                console.log(this.getAuditChapterData);
                this.chapterData = this.getAuditChapterData;
                this.$api.findEpisodeByAdmin({chapterId: this.chapterData.chapterId}).then(res=>{
                    if(res.data.code === 200){
                        this.chapterImg = res.data.data
                        console.log(this.chapterImg);
                    }
                })
            },
            pass(){
                this.$api.audit({auditType:1,mangaId:this.cartoonData.mangaId,mangaAudit:1,})
                this.$router.back(-1);
            },
            unPass(){
                this.$api.audit({auditType:1,mangaId:this.cartoonData.mangaId,mangaAudit:2,})
                this.$router.back(-1);
            }
        },
        computed: {
            ...mapGetters(['getAuditChapterData'])
        }
    }
</script>

<style scoped>

</style>