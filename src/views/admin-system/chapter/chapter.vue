<template>
    <div style="width: 100%;">
        <a-table :columns="columns" :dataSource="data" :pagination="pagination">
            <template slot="mangaStatus">
                <a>未审核</a>
            </template>
            <template
                    v-for="col in ['mangaName', 'mangaAuthor', 'mangaCreatetime','mangaDetail']"
                    :slot="col"
                    slot-scope="text, record"
            >
                <div :key="col">
                    <a-input
                            v-if="record.editable"
                            style="margin: -5px 0"
                            :value="text"
                            @change="e => handleChange(e.target.value, record.key, col)"
                    />
                    <template v-else>{{ text }}</template>
                </div>
            </template>
            <template slot="operation" slot-scope="text, record">
                <div class="editable-row-operations">
                    <a @click="() => edit(record)">审核</a>
                </div>
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
            title: '漫画名',
            dataIndex: 'mangaName',
            width: '15%',
            align:'center'
        },
        {
            title: '漫画作者',
            dataIndex: 'mangaAuthor',
            width: '15%',
            align:'center'
        },
        {
            title:'创建时间',
            dataIndex:'mangaCreatetime',
            width:'20%',
            align:'center'

        },
        {
            title: '漫画简介',
            dataIndex: 'mangaDetail',
            width: '30%',
            align:'center'
        },
        {
            title:'审核状态',
            dataIndex:'mangaStatus',
            width:'10%',
            align:'center',
            scopedSlots:{
                customRender: 'mangaStatus'
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
        name: "chapter",
        data() {
            this.cacheData = data.map(item => ({ ...item }));
            return {
                data,
                zhCN,
                columns,
                dataTotal: 0,
                pagination: false,
            };
        },
        methods: {
            // 分页转跳
            onPaginationChange(page,pageSize){
                this.getUnAudit(page,pageSize);
            },
            // 每页数据条数变化
            showSizeChange(current,size){
                this.getUnAudit(current,size);
            },
            // 获取未审核数据
            getUnAudit: async function(page=1,size=10) {
                let res = await this.$api.unAudit({unAuditType:1,page:page,size:size});
                if(res.data.data.list){
                    console.log(res.data.data.list);
                    this.data = res.data.data.list;
                    this.dataTotal = res.data.data.total;
                }
            },
            edit(data) {
                console.log(data);

                // this.$api.audit({auditType:0,mangaId:data.mangaId,mangaAudit:1,})
            },
        },
        created() {
            this.getUnAudit();
        }
    }
</script>

<style scoped>
    .editable-row-operations a {
        margin-right: 8px;
    }
</style>