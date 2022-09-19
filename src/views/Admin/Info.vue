<template>
	<el-card class="box-card">
		<template #header>
			<span>账户资料</span>
		</template>
		<el-form :model="form" label-width="80px">
			<el-form-item label="用户名">
				<el-input v-model="form.username" disabled></el-input>
			</el-form-item>
			<el-form-item label="姓名">
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
			<el-form-item label="邮箱">
				<el-input v-model="form.email"></el-input>
			</el-form-item>
			<el-form-item label="头像">
				<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<el-icon v-else class="avatar-uploader-icon">
						<Plus />
					</el-icon>
				</el-upload>
			</el-form-item>
			<el-form-item>
				<el-button type="primary">修改资料</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script setup>
let form = ref({
	id: '',
	username: '',
	fullname: '',
	sex: '男',
	tel: '',
	email: '',
	avatar: '',
});
let imageUrl = ref('');
</script>

<style>
.avatar-uploader .el-upload {
	border: 1px dashed #d9d9d9;
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
}

.avatar-uploader .el-upload:hover {
	border-color: #409EFF;
}

.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	line-height: 178px;
	text-align: center;
}

.avatar {
	width: 178px;
	height: 178px;
	display: block;
}
</style>
