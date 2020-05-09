<template>
    <div>
        <a-layout id="components-layout-demo-side" style="min-height: 100vh">
            <a-layout-sider
                    collapsible
                    v-model="collapsed"
            >
                <div class="logo">
                    <a-icon type="desktop" style="color: white;" width='1em'/>
                    <span v-if="collapsed === false">漫画管理系统</span>
                    <!--<img v-else src="../../assets/images/logo1.png" alt="">-->
                </div>
                <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
                    <a-menu-item key="1">
                        <router-link to="/adminindex/dataStatistics">
                            <a-icon type="pie-chart" />
                            <span>数据统计</span>
                        </router-link>
                    </a-menu-item>
                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="desktop"></a-icon><span>审核列表</span></span>
                        <a-menu-item key="2">
                            <router-link to="/adminindex/manga">
                                <a-icon type="desktop" />
                                <span>漫画审核</span>
                            </router-link>
                        </a-menu-item>
                        <a-menu-item key="3">
                            <router-link to="/adminindex/chapter">
                                <a-icon type="desktop" />
                                <span>章节审核</span>
                            </router-link>
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="4">
                        <router-link to="/adminindex/user">
                            <a-icon type="user" />
                            <span>用户管理</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="5">
                        <router-link to="/adminindex/comments">
                            <a-icon type="team" />
                            <span>评论管理</span>
                        </router-link>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout class="bg">
                <a-layout-header style="background: rgba(0,21,41, 0.5); padding: 0" />
                <a-layout-content style="margin: 0 16px;">
                    <a-breadcrumb style="margin: 16px 0;font-weight: 800;">
                        <!--<a-breadcrumb-item>User</a-breadcrumb-item>-->
                        <!--<a-breadcrumb-item>Bill</a-breadcrumb-item>-->
                    </a-breadcrumb>
                    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                        <router-view></router-view>
                    </div>
                </a-layout-content>
                <a-layout-footer style="text-align: center;background: rgba(0,0,0, 0);">
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                collapsed: false,
            }
        },
    };
</script>

<style scoped>
    .bg{
        background: url("../../assets/images/admin_login_bak.jpg");
    }
    #components-layout-demo-side .logo {
        height: 28px;
        margin: 16px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo span{
        margin-left: 10px;
        color: white;
    }
</style>