<script setup>
import { ElConfigProvider } from 'element-plus';
import { RouterView } from 'vue-router'
</script>

<template>
  <el-config-provider>
    <RouterView />
  </el-config-provider>
</template>

<style scoped>

</style>
