<template>
	<div class="sys-role-container">
		<el-dialog v-model="state.isShowDialog" draggable :close-on-click-modal="false">
			<template #header>
				<div style="color: #fff">
					<el-icon size="16" style="margin-right: 3px; display: inline; vertical-align: middle"> <ele-Edit /> </el-icon>
					<span>{{ props.title }}</span>
				</div>
			</template>
			<el-form :model="state.ruleForm" ref="ruleFormRef" label-width="auto">
				<el-row :gutter="35">
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="角色名称" prop="roleName" :rules="[{ required: true, message: '角色名称不能为空', trigger: 'blur' }]">
							<el-input v-model="state.ruleForm.roleName" placeholder="角色名称" clearable />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="角色编码" prop="roleCode" :rules="[{ required: true, message: '角色编码不能为空', trigger: 'blur' }]">
							<el-input v-model="state.ruleForm.roleCode" placeholder="角色编码" clearable :disabled="state.ruleForm.roleCode == 'sys_admin' && state.ruleForm.id != undefined" />
						</el-form-item>
					</el-col>
					<!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="排序">
							<el-input-number v-model="state.ruleForm.orderNo" placeholder="排序" class="w100" />
						</el-form-item>
					</el-col> -->
					<!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="状态">
							<el-radio-group v-model="state.ruleForm.status">
								<el-radio :value="1">启用</el-radio>
								<el-radio :value="2">禁用</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col> -->
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="备注">
							<el-input v-model="state.ruleForm.description" placeholder="请输入备注内容" clearable type="textarea" />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="菜单权限" v-loading="state.loading">
							<el-tree
								ref="treeRef"
								:data="state.menuData"
								node-key="id"
								show-checkbox
								:props="{ children: 'children', label: 'title', class: treeNodeClass }"
								icon="ele-Menu"
								highlight-current
								default-expand-all
								style="height: 600px;overflow-y: auto;"
							/>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="cancel">取 消</el-button>
					<el-button type="primary" @click="submit">确 定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang="ts" setup name="sysEditRole">
import { onMounted, reactive, ref } from 'vue';
import type { ElTree } from 'element-plus';

import { getAPI } from '/@/utils/axios-utils';
import { SysMenuApi, SysRoleApi } from '/@/api-services/api';
import { SysMenu, UpdateRoleInput } from '/@/api-services/models';
import menus from '/@/router/menus.json'
import roleMenus from '/@/router/roleMenu.json'

const props = defineProps({
	title: String,
});
const emits = defineEmits(['handleQuery']);
const ruleFormRef = ref();
const treeRef = ref<InstanceType<typeof ElTree>>();
const state = reactive({
	loading: false,
	isShowDialog: false,
	ruleForm: {} as UpdateRoleInput,
	menuData: [] as Array<SysMenu>, // 菜单数据
});

onMounted(async () => {
	state.loading = true;
	//这里需要获取多个模块的权限
	//var res = await getAPI(SysMenuApi).apiSysMenuListGet();
	state.menuData = menus//res.data.result ?? [];
	state.loading = false;
});

// 打开弹窗
const openDialog = async (row: any) => {
	ruleFormRef.value?.resetFields();
	treeRef.value?.setCheckedKeys([]); // 清空选中值
	state.ruleForm = JSON.parse(JSON.stringify(row));
	if (row.id != undefined) {
		//这里也需要获取已经选中的权限
		//需要从每个模块获取
		//var res = await getAPI(SysRoleApi).apiSysRoleOwnMenuListGet(row.id);
		debugger
		// setTimeout(() => {
		// 	treeRef.value?.setCheckedKeys(res.data.result ?? []);
		// }, 100);
		setTimeout(() => {
			treeRef.value?.setCheckedKeys(roleMenus);
		}, 100);
	}
	state.isShowDialog = true;
};

// 关闭弹窗
const closeDialog = () => {
	emits('handleQuery');
	state.isShowDialog = false;
};

// 取消
const cancel = () => {
	state.isShowDialog = false;
};

// 提交
const submit = () => {
	ruleFormRef.value.validate(async (valid: boolean) => {
		if (!valid) return;
		state.ruleForm.menuIdList = treeRef.value?.getCheckedKeys() as Array<number>; //.concat(treeRef.value?.getHalfCheckedKeys());
		if (state.ruleForm.id != undefined && state.ruleForm.id > 0) {
			await getAPI(SysRoleApi).apiSysRoleUpdatePost(state.ruleForm);
		} else {
			await getAPI(SysRoleApi).apiSysRoleAddPost(state.ruleForm);
		}
		closeDialog();
	});
};

// 叶子节点同行显示样式
const treeNodeClass = (node: SysMenu) => {
	let addClass = true; // 添加叶子节点同行显示样式
	for (var key in node.children) {
		// 如果存在子节点非叶子节点，不添加样式
		if (node.children[key].children?.length ?? 0 > 0) {
			addClass = false;
			break;
		}
	}
	return addClass ? 'penultimate-node' : '';
};

// 导出对象
defineExpose({ openDialog });
</script>

<style lang="scss" scoped>
.menu-data-tree {
	width: 100%;
	border: 1px solid var(--el-border-color);
	border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
	padding: 5px;
}

:deep(.penultimate-node) {
	.el-tree-node__children {
		padding-left: 40px;
		white-space: pre-wrap;
		line-height: 100%;

		.el-tree-node {
			display: inline-block;
		}

		.el-tree-node__content {
			padding-left: 5px !important;
			padding-right: 5px;

			// .el-tree-node__expand-icon {
			// 	display: none;
			// }
		}
	}
}
</style>
