<template>
	<el-card class="box-card">
		<template #header>
			<span>公告列表</span>
		</template>
		<el-table :data="tableData">
			<el-table-column prop="id" label="#" width="40">
			</el-table-column>
			<el-table-column prop="title" label="标题" width="360">
			</el-table-column>
			<el-table-column prop="create_time" label="发布日期">
			</el-table-column>
			<el-table-column prop="update_time" label="更新日期">
			</el-table-column>
			<el-table-column label="操作">
				<template #default="scope">
					<el-space>
						<el-link :href="`#/notice/edit/${scope.row.id}`" type="primary">
							<el-button icon="edit" type="primary" plain>编辑</el-button>
						</el-link>
						<el-button icon="top" type="success" plain>置顶</el-button>
						<el-button icon="delete" type="danger" plain>删除</el-button>
					</el-space>
				</template>
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script setup>
let tableData = ref([
	{
		"id": 2,
		"title": "登鹳雀楼",
		"content": "白日依山尽，黄河入海流。\r\n欲穷千里目，更上一层楼。",
		"create_date": "2022-03-06T08:38:59.000Z",
		"update_date": "2022-03-06T08:39:31.000Z",
		"is_sticky": 1,
		"create_time": "2022-03-06 16:38:59",
		"update_time": "2022-03-06 16:39:31"
	},
]);
</script>

<style>

</style>
