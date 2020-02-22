<template>
    <div class="publish">
        <div class="steps">
            <img v-for="item of stepimg" :src="item.img" :key="item.id" alt="">
        </div>
        <component :is="comName" @next="next" @back="back"></component>
    </div>
</template>

<script>
    import publishForm from './pubish-form';
    import publishImg from './publish-img';
    import publishChapter from './publish-chapter';
    export default {
        name: "publish",
        components: {
            publishForm,
            publishImg,
            publishChapter
        },
        data(){
            return{
                comName: publishForm,
                // 步骤图片
                stepimg: [
                    {
                        img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step1_1.png',
                        id: 1
                    },
                    {
                        img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step2.png',
                        id: 2
                    },
                    {
                        img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step3.png',
                        id: 3
                    },
                    {
                        img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step4.png',
                        id: 4
                    }
                ],
                img:{
                    start:[
                        {
                            img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step1.png',
                            id: 1
                        },
                        {
                            img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step2.png',
                            id: 2
                        },
                        {
                            img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step3.png',
                            id: 3
                        },
                        {
                            img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step4.png',
                            id: 4
                        }
                    ],
                    action:[
                        {
                            img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step1_1.png',
                            id: 1
                        },
                        {
                            img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step2_1.png',
                            id: 2
                        },
                        {
                            img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step3_1.png',
                            id: 3
                        },
                        {
                            img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step4_1.png',
                            id: 4
                        }
                    ]
                }
            };
        },
        methods:{
            back(e){
              this.comName = e;
              if(this.comName === 'publishForm'){
                  this.stepimg[0].img = this.img.action[0].img;
                  this.stepimg[1].img = this.img.start[1].img;
              } else if(this.comName === 'publishImg'){
                  this.stepimg[2].img = this.img.start[2].img;
                  this.stepimg[1].img = this.img.action[1].img;
              }
            },
            next(e){
                this.comName = e;
                if(this.comName === 'publishImg'){
                    this.stepimg[0].img = this.img.start[0].img;
                    this.stepimg[1].img = this.img.action[1].img;
                } else if(this.comName === 'publishChapter'){
                    this.stepimg[1].img = this.img.start[1].img;
                    this.stepimg[2].img = this.img.action[2].img;
                }
            }
        },
        created() {
        },
        mounted(){
        }
    };
</script>

<style scoped>
    .publish{
        width: 1050px;
        margin: 25px 0;
    }
    .publish .steps{
        display: flex;
    }
    .steps img{
        vertical-align: top;
        display: inline-block;
    }
</style>