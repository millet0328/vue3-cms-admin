<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <span>编辑公告</span>
      </template>
      <el-form :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="内容">

        </el-form-item>
        <el-form-item>
          <el-button type="primary">发布公告</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
let form = ref({
  title: '',
  description: '',
  content: '',
});
</script>

<style>

</style>
