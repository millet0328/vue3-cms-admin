<template>
    <div class="bg">
        <el-card class="form-card">
            <template #header>
                <div class="card-header">
                    <span>登录</span>
                </div>
            </template>
            <el-form :model="form" label-width="50px">
                <el-form-item label="账号">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" show-password />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">登录</el-button>
                </el-form-item>
            </el-form>
            <div class="link-box">
                <el-link href="/#/register/" type="info">注册账户</el-link>
                <el-link type="info">忘记密码？</el-link>
            </div>
        </el-card>
    </div>
</template>

<script setup>
let form = reactive({
    name: '',
    password: '',
});

</script>

<style lang="less" scoped>
.bg {
    position: relative;
    min-height: 100vh;
    background: url(@/assets/img/login/bg.jpg) top center;
    background-size: cover;

    .form-card {
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
        width: 360px;

        .link-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>
