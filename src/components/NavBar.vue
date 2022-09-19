<template>
	<div class="nav-bar">
		<div class="left">
			<img class="logo" height="45" src="../assets/img/common/logo.png" alt="logo" />
			<el-icon :size="20">
				<Fold />
			</el-icon>
		</div>
		<el-menu mode="horizontal" router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
			:ellipsis="false">
			<el-menu-item index="/">站点设置</el-menu-item>
			<el-menu-item index="/">预览网站</el-menu-item>
			<el-sub-menu index="/">
				<template #title>
					<el-space>
						<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="30">
						</el-avatar>
						<span class="username">赵薇</span>
					</el-space>
				</template>
				<el-menu-item index="/admin/info">账户设置</el-menu-item>
				<el-menu-item>消息通知</el-menu-item>
				<el-menu-item>退出登录</el-menu-item>
			</el-sub-menu>
		</el-menu>
	</div>
</template>

<script>

</script>

<style lang="less">
.nav-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #545c64;
	color: white;

	.left {
		display: flex;
		align-items: center;
	}

	.el-menu {
		border-bottom: 0;
	}
}
</style>
