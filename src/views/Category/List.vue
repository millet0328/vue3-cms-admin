<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <span>分类列表</span>
      </template>
      <!-- 树形组件 -->
      <el-tree :data="data"></el-tree>

    </el-card>

  </div>

</template>
<script setup>
let data = ref([
  {
    label: '一级 1',
    children: [
      { label: '二级 1-1', children: [{ label: '三级 1-1-1' }] }
    ]
  },
  {
    label: '一级 2',
    children: [
      { label: '二级 2-1', children: [{ label: '三级 2-1-1' }] },
      { label: '二级 2-2', children: [{ label: '三级 2-2-1' }] },
    ]
  },
  {
    label: '一级 3',
    children: [
      { label: '二级 3-1', children: [{ label: '三级 3-1-1' }] },
      { label: '二级 3-2', children: [{ label: '三级 3-2-1' }] },
    ]
  },
]);
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
