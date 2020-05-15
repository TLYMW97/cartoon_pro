<template>
    <div style="width: 100%;background: white;padding: 20px;">
        <a-table :columns="columns" :dataSource="data" :pagination="pagination">
            <template slot="userStatus" slot-scope="text">
                <a v-if="text===1">已启用</a>
                <a v-else>已禁用</a>
            </template>
            <template slot="operation" slot-scope="text,record">
                <a @click="() => enable(record)">启用</a>
                <a @click="() => prohibit(record)" style="color: red;margin-left: 5px;">禁用</a>
            </template>
        </a-table>
        <div style="margin-top: 30px;float: right;" id="components-pagination-demo-mini">
            <a-locale-provider :locale="zhCN">
                <a-pagination size="small" :total="dataTotal" showSizeChanger showQuickJumper @change="onPaginationChange" @showSizeChange="showSizeChange"/>
            </a-locale-provider>
        </div>
        <div style="clear: both"></div>
    </div>
</template>

<script>
    import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
    const columns = [
        {
            title: '用户账号',
            dataIndex: 'userName',
            width: '15%',
            align:'center'
        },
        {
            title: '用户名',
            dataIndex: 'userNickname',
            width: '15%',
            align:'center'
        },
        {
            title:'手机号',
            dataIndex:'userPhone',
            width:'20%',
            align:'center'

        },
        {
            title: '个人信息',
            dataIndex: 'userVxId',
            width: '30%',
            align:'center'
        },
        {
            title:'用户状态',
            dataIndex:'userStatus',
            width:'10%',
            align:'center',
            scopedSlots:{
                customRender: 'userStatus'
            }
        },
        {
            title: '操作',
            dataIndex: 'operation',
            width: '10%',
            align:'center',
            scopedSlots: { customRender: 'operation' }
        }
    ];
    const data = [];
    export default {
        name: "user",
        data() {
            return{
                data,
                zhCN,
                columns,
                dataTotal: 0,
                pagination: false,
            };
        },
        created() {
            this.getUserData();
        },
        methods:{
            // 分页转跳
            onPaginationChange(page,pageSize){
                this.getUnAudit(page,pageSize);
            },
            // 每页数据条数变化
            showSizeChange(current,size){
                this.getUnAudit(current,size);
            },
            // 获取未审核数据
            getUserData: async function(page=1,size=10) {
                let res = await this.$api.getUserList({page:1,size:10});
                if(res.data.data.list){
                    this.data = res.data.data.list;
                    this.dataTotal = res.data.data.total;
                }
            },
            enable(data){
                this.$api.activateUser({userId: data.userId}).then(res=>{
                    console.log(res);
                    this.getUserData();
                })
            },
            prohibit(data){
                console.log(data);
                this.$api.stopUser({userId: data.userId}).then(res=>{
                    console.log(res);
                    this.getUserData();
                });
            }
        }
    };
</script>

<style scoped>

</style>