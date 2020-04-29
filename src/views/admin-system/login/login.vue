<template>
    <div class="box">
        <img class="bg" src="../../../assets/images/admin_login_bak.jpg" alt="">
        <div class="login-form">
            <a-form :form="loginForm" layout="vertical">
                <a-form-item label="用户名">
                    <a-input placeholder="输入用户名/邮箱" v-decorator="['adminName', config.username]"></a-input>
                </a-form-item>
                <a-form-item label="密码">
                    <a-input-password v-decorator="['adminPwd', config.password]" placeholder="输入密码"></a-input-password>
                </a-form-item>
                <a-form-item style="margin-bottom: 0;">
                    <a-button type="primary" style="width:60%;margin-top:20px;margin-left: 20%;" @click="login">登录</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "login",
        data() {
            return{
                loginForm: this.$form.createForm(this),
                config: {
                    username: {
                        rules: [
                            { required: true, message: '请输入用户名' },
                            { validator: this.checkName }
                        ]
                    },
                    password: {
                        rules: [{ required: true, message: '请输入密码' }]
                    }
                },
            }
        },
        methods:{
            login(){
                const {
                    loginForm: { validateFields }
                } = this;
                validateFields(async (err, val) => {
                    this.adminLogin(val).then(res => {
                        if (res) {
                            console.log(res);
                            this.$router.push({ path: '/adminindex/dataStatistics'});
                        }
                    });
                });
            },
            ...mapActions(['adminLogin'])
        }
    };
</script>

<style scoped>
    .box{
    }
    .box .bg{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -99;
    }
    .box .login-form {
        float: right;
        margin-top: 15%;
        margin-right: 10%;
        width: 25%;
        background: rgba(255,255,255,0.5);
        padding: 30px;
        border-radius: 20px;
        border: #4f4f4f solid 1px;
    }
</style>