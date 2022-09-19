<template>
	<el-container>
		<el-header>
			<NavBar></NavBar>
		</el-header>
		<el-container>
			<el-aside width="auto">
				<SideBar></SideBar>
			</el-aside>
			<el-main>
				<RouterView />
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';

</script>

<style scoped>
.el-header {
	padding: 0;
}

.el-aside {
	overflow: hidden;
	background-color: #545c64;
	min-height: calc(100vh - 60px);
}
</style>
