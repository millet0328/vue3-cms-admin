<template>
	<el-card class="box-card">
		<template #header>
			<span>管理员列表</span>
		</template>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="id" label="#">
			</el-table-column>
			<el-table-column prop="username" label="用户名">
			</el-table-column>
			<el-table-column prop="fullname" label="姓名">
			</el-table-column>
			<el-table-column prop="sex" label="性别">
			</el-table-column>
			<el-table-column prop="tel" label="手机" width="180">
			</el-table-column>
			<el-table-column prop="email" label="邮箱" width="200">
			</el-table-column>
			<el-table-column label="头像" width="180">
				<template #default="scope">
					<el-avatar :size="50" :src="scope.row.avatar"></el-avatar>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="200">
				<template #default="scope">
					<el-button icon="edit" type="primary" plain>编辑</el-button>
					<el-button type="danger" icon="delete" plain>删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script setup>
let tableData = ref([{
	"id": 1,
	"username": "admin",
	"fullname": "papi酱",
	"sex": "女",
	"tel": '15863008280',
	"email": "nn880328@126.com",
	"avatar": "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
}]);
</script>

<style>

</style>
