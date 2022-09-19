<template>
	<el-card class="box-card">
		<template #header>
			<span>编辑用户</span>
		</template>
		<el-form :model="form" label-width="80px">
			<el-form-item label="用户名">
				<el-input v-model="form.username"></el-input>
			</el-form-item>
			<el-form-item label="昵称">
				<el-input v-model="form.fullname"></el-input>
			</el-form-item>
			<el-form-item label="性别">
				<el-radio-group v-model="form.sex">
					<el-radio label="男"></el-radio>
					<el-radio label="女"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="手机">
				<el-input v-model="form.tel"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary">保存修改</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>
<script setup>
let form = ref({
	username: '',
	fullname: '',
	sex: '男',
	tel: '',
	email: '',
	avatar: '',
});
</script>

<style>

</style>
