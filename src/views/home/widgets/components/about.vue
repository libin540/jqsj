<template>
	<el-card shadow="hover" header="操作统计" class="item-background">
		<template #header>
			<!-- <el-icon style="display: inline; vertical-align: middle"> <ele-QuestionFilled /> </el-icon> -->
			<span style=""> 操作统计 </span>
		</template>
		<p>
			存放操作统计的信息
		</p>
		
	</el-card>
</template>

<script lang="ts">
export default {
	title: '操作统计',
	icon: 'ele-Setting',
	description: '存放操作统计的信息',
};
</script>
<script setup lang="ts" name="operationStatistics"></script>

<style scoped>
.item-background p {
	color: #999;
	margin-top: 10px;
	line-height: 1.8;
}
</style>
