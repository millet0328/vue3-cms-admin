<template>
	<el-card class="box-card">
		<template #header>
			<span>用户列表</span>
		</template>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="id" label="#">
			</el-table-column>
			<el-table-column prop="username" label="用户名">
			</el-table-column>
			<el-table-column prop="nickname" label="昵称">
			</el-table-column>
			<el-table-column prop="sex" label="性别">
			</el-table-column>
			<el-table-column prop="tel" label="手机" width="180">
			</el-table-column>
			<el-table-column label="操作" width="200">
				<template #default="scope">
					<el-button icon="edit" type="primary" plain>编辑</el-button>
					<el-button icon="delete" type="danger" plain>删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script setup>
let tableData = ref([
	{
		"id": 1,
		"username": "admin",
		"nickname": "papi酱",
		"sex": "女",
		"tel": '15863008280',
	}
]);
</script>

<style>

</style>
