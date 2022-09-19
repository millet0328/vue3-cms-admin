<template>
  <div>
    <el-menu class="side-bar" :default-openeds="['1']" router background-color="#545c64" text-color="#fff"
      active-text-color="#ffd04b">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <Notification />
          </el-icon>
          <span>文章管理</span>
        </template>
        <el-menu-item index="/article/release">
          <el-icon>
            <DocumentAdd />
          </el-icon>
          <span>发布文章</span>
        </el-menu-item>
        <el-menu-item index="/article/list">
          <el-icon>
            <Memo />
          </el-icon>
          <span>文章列表</span>
        </el-menu-item>
        <el-menu-item index="/tag/list">
          <el-icon>
            <PriceTag />
          </el-icon>
          <span>标签管理</span>
        </el-menu-item>
        <el-menu-item index="/comment/list">
          <el-icon>
            <ChatLineSquare />
          </el-icon>
          <span>评论管理</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/category/list">
        <el-icon>
          <Notebook />
        </el-icon>
        <span>分类管理</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <DataLine />
          </el-icon>
          <span>公告管理</span>
        </template>
        <el-menu-item index="/notice/release">
          <el-icon>
            <DataBoard />
          </el-icon>
          <span>发布公告</span>
        </el-menu-item>
        <el-menu-item index="/notice/list">
          <el-icon>
            <DataAnalysis />
          </el-icon>
          <span>公告列表</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/user/list">
        <el-icon>
          <User />
        </el-icon>
        <span>用户列表</span>
      </el-menu-item>
      <el-sub-menu index="3">
        <template #title>
          <el-icon>
            <Connection />
          </el-icon>
          <span>推广管理</span>
        </template>
        <el-menu-item index="/slide/list">
          <el-icon>
            <Picture />
          </el-icon>
          <span>轮播图管理</span>
        </el-menu-item>
        <el-menu-item index="/link/list">
          <el-icon>
            <Link />
          </el-icon>
          <span>友情链接</span>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon>
            <Setting />
          </el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/admin/list">
          <el-icon>
            <Medal />
          </el-icon>
          <span>管理员管理</span>
        </el-menu-item>
        <el-menu-item index="/auth/role">
          <el-icon>
            <Open />
          </el-icon>
          <span>权限角色</span>
        </el-menu-item>
        <el-menu-item index="#">
          <el-icon>
            <SetUp />
          </el-icon>
          <span>菜单管理</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/admin/info">
        <el-icon>
          <Postcard />
        </el-icon>
        <span>账户设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="less">
.side-bar {
  color: white;
  border-right: 0;
}
</style>
