<template>
  <el-card class="box-card">
    <template #header>
      <div class="header">
        <span>友情链接</span>
        <el-button plain type="primary" icon="circle-plus">
          添加链接
        </el-button>
      </div>
    </template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="#" width="40">
      </el-table-column>
      <el-table-column prop="title" label="链接标题">
      </el-table-column>
      <el-table-column prop="website" label="网站地址">
        <template #default="scope">
          <el-link href="#" target="_blank">{{ scope.row.website }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="添加日期">
      </el-table-column>
      <el-table-column label="操作">
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
    "id": 3,
    "title": "window之家",
    "website": "http://www.baidu.com",
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