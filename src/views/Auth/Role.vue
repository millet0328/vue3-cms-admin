<template>
	<div>
		<el-row>
			<el-col :span="12">
				<el-card class="box-card">
					<template #header>
						<div class="header">
							<span>管理员角色</span>
							<el-button plain type="primary" icon="circle-plus">添加角色</el-button>
						</div>
					</template>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="id" label="#">
						</el-table-column>
						<el-table-column prop="name" label="分类">
							<template #default="scope">
								<el-tag>{{scope.row.name}}</el-tag>
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
			</el-col>
		</el-row>
	</div>
</template>

<script setup>
let tableData = ref([
	{ "id": 1, "name": "超级管理员" },
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
