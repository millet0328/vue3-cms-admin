<template>
	<div>
		<el-card class="box-card">
			<template #header>
				<span>发布文章</span>
			</template>
			<el-form :model="form" label-width="80px">
				<el-form-item label="标题">
					<el-input v-model="form.title"></el-input>
				</el-form-item>
				<el-form-item label="描述">
					<el-input type="textarea" v-model="form.description"></el-input>
				</el-form-item>
				<el-form-item label="分类">
					<el-col :span="6">
						<el-select v-model="form.cate_1st" placeholder="请选择文章一级分类">
						</el-select>
					</el-col>
					<el-col :span="6">
						<el-select v-model="form.cate_2nd" placeholder="请选择文章二级分类">

						</el-select>
					</el-col>
				</el-form-item>
				<el-form-item label="主图">
					<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
						:show-file-list="false">
						<img v-if="imageUrl" :src="imageUrl" class="avatar">
						<el-icon v-else class="avatar-uploader-icon">
							<Plus />
						</el-icon>
					</el-upload>
				</el-form-item>
				<el-form-item label="内容">
				</el-form-item>
				<el-form-item>
					<el-button type="primary">发布文章</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script setup>
let form = reactive({
	title: '',
	cate_1st: '',
	cate_2nd: '',
	description: '',
	content: '',
	main_photo: '',
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
