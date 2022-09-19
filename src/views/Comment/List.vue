<template>
  <el-card class="box-card">
    <template #header>
      <span>评论列表</span>
    </template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="#" width="40">
      </el-table-column>
      <el-table-column prop="article_title" label="文章标题">
        <template #default="scope">
          <el-link href="#" target="_blank">{{ scope.row.article_title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="user_nickname" label="用户" width="100">
        <template #default="scope">
          <el-link href="#" target="_blank">{{ scope.row.user_nickname }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="content" label="留言内容">
      </el-table-column>
      <el-table-column prop="create_time" label="留言日期" width="180">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button icon="edit" type="primary" plain>回复</el-button>
          <el-button icon="delete" type="danger" plain>隐藏</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script setup>
let tableData = ref([
  {
    "id": 3,
    "user_id": 1,
    "article_id": 2,
    "content": "破哦哦哦哦哦哦哦哦哦",
    "reply": null,
    "is_show": 1,
    "is_reply": 0,
    "is_read": 0,
    "reply_date": null,
    "create_date": "2022-03-17T15:40:14.000Z",
    "update_date": null,
    "create_time": "2022-03-17 23:40:14",
    "user_nickname": "papi酱",
    "article_title": "亚马逊2019第一季度财报：净利润同比增长118% AWS业务增速迅猛"
  },
]);
</script>

<style scoped>

</style>