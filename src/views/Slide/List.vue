<template>
  <el-card class="box-card">
    <template #header>
      <div class="header">
        <span>轮播图管理</span>
        <el-button plain type="primary" icon="circle-plus">
          添加轮播
        </el-button>
      </div>
    </template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="#" width="40">
      </el-table-column>
      <el-table-column prop="title" label="链接标题">
      </el-table-column>
      <el-table-column prop="pic" label="轮播图片" width="200">
        <template #default="scope">
          <el-image style="width: 150px;" :src="scope.row.pic" fit="cover"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="url" label="跳转地址" width="300">
        <template #default="scope">
          <el-link :href="scope.row.url" target="_blank">{{ scope.row.url }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="target" label="跳转方式">
      </el-table-column>
      <el-table-column prop="order" label="排序数字">
        <template #default="scope">
          <el-tag type="success">{{ scope.row.order }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="添加日期" width="100">
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
    "title": "window之家",
    "pic": "http://localhost:3001/images/avatar/default.jpg",
    "url": "http://www.baidu.com/",
    "target": "_blank",
    "order": "1",
    "create_date": "2022-03-17T15:40:14.000Z",
    "update_date": null,
    "create_time": "2022-03-17 23:40:14",
  },
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