<template>
	<el-card class="box-card">
		<template #header>
			<div class="header">
				<span>标签列表</span>
				<el-button plain type="primary" icon="circle-plus">
					添加标签
				</el-button>
			</div>
		</template>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="id" label="#">
			</el-table-column>
			<el-table-column prop="name" label="标签名称">
			</el-table-column>
			<el-table-column label="操作" width="210">
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
	{ "id": 1, "name": "二次元", },
]);
</script>

<style lang="less" scoped>
.box-card {
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
