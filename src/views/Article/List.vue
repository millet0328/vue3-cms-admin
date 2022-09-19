<template>
  <el-card class="box-card">
    <template #header>
      <span>文章列表</span>
    </template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="#" width="40">
      </el-table-column>
      <el-table-column prop="cate_1st_name" label="一级分类">
      </el-table-column>
      <el-table-column prop="cate_2nd_name" label="二级分类">
      </el-table-column>
      <el-table-column label="主图" width="100">
        <template #default="scope">
          <el-image style="width: 80px;" :src="scope.row.main_photo" fit="cover"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="250">
      </el-table-column>
      <el-table-column label="标签" width="240">
        <template #default="scope">
          <el-tag v-for="item in scope.row.tags" :key="item.id" type="success">{{ item.name
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="发布日期" width="90">
      </el-table-column>
      <el-table-column prop="update_time" label="更新日期" width="90">
      </el-table-column>
      <el-table-column label="操作" width="280">
        <template #default="scope">
          <el-space>
            <el-link :href="`#/article/edit/${scope.row.id}`" type="primary">
              <el-button icon="edit" type="primary" plain>编辑</el-button>
            </el-link>
            <el-button icon="collection-tag" type="success" plain>标记</el-button>
            <el-button icon="delete" type="danger" plain>删除</el-button>
          </el-space>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
let tableData = ref([{
  "id": 1,
  "cate_1st": 2,
  "cate_2nd": 11,
  "title": "百度向今日头条索赔9000万，称其不正当竞争窃取搜索结果",
  "description": "今日头条(北京字节跳动科技有限公司)因大量窃取百度“TOP1” 搜索产品结果，被百度以不正当竞争为由起诉到北京市海淀区人民法院，要求字节跳动立即停止侵权，赔偿相关经济损失及合理支出共计人民币9000万元，并连续30天在其App及网站首页道歉。",
  "main_photo": "http://localhost:3001/images/common/355a67c0-67f0-11e9-b7fb-3d2cafb359a4.jpeg",
  "create_time": "2019-04-26 14:55:21",
  "update_time": "2020-04-13 21:46:10",
  "cate_1st_name": "娱乐",
  "cate_2nd_name": "IT新闻",
  "tags": [
    { "id": 1, "name": "Web前端" },
    { "id": 2, "name": "后台编程" },
  ]
}]);
</script>

<style>

</style>
