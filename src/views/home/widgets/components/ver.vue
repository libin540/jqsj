<template>
	<el-card shadow="hover" header="运维信息">
		<template #header>
			<el-icon style="display: inline; vertical-align: middle"> <ele-InfoFilled /> </el-icon>
			<span style=""> 运维信息 </span>
		</template>
		<div style="height: 210px; text-align: center">
			<img :src="verSvg" style="height: 140px" />
			<h2 style="margin-top: 15px">机器视觉</h2>
			<p style="margin-top: 5px">运维信息{{ ver }}</p>
		</div>
		<div style="margin-top: 20px">
			<el-button type="primary" plain round @click="golog">更多</el-button>
		</div>
	</el-card>
</template>

<script lang="ts">
export default {
	title: '版本信息',
	icon: 'ele-Monitor',
	description: '版本信息原子组件演示',
};
</script>

<script setup lang="ts" name="ver">
import { ref, onMounted } from 'vue';
import verSvg from '/@/assets/img/ver.svg';

const ver = ref<string>('loading...');

onMounted(() => {
	ver.value = 'v2.0.0';
});

const getVer = () => {
	ver.value = 'v2.0.0';
};

const golog = () => {
	alert('123');
};
</script>
