<template>
	<div class="sys-user-container">
		<el-row :gutter="5" style="width: 100%; flex: 1">
			<!-- <el-col :span="4" :xs="24">
				<OrgTree ref="orgTreeRef" @node-click="nodeClick" />
			</el-col> -->

			<el-col :span="24" :xs="24" style="display: flex; flex-direction: column">
				<el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
					<el-form :model="state.queryParams" ref="queryForm" :inline="true">
						<el-form-item label="账号">
							<el-input v-model="state.queryParams.username" placeholder="账号" clearable />
						</el-form-item>
						<!-- <el-form-item label="姓名">
							<el-input v-model="state.queryParams.realname" placeholder="姓名" clearable  />
						</el-form-item> -->
						<el-form-item label="手机号码">
							<el-input v-model="state.queryParams.phone" placeholder="手机号码" clearable />
						</el-form-item>
						<el-form-item>
							<el-button-group>
								<el-button type="primary" icon="ele-Search" @click="handleQuery" v-auth="'sysUser:page'"> 查询 </el-button>
								<el-button icon="ele-Refresh" @click="resetQuery"> 重置 </el-button>
							</el-button-group>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" icon="ele-Plus" @click="openAddUser" v-auth="'sysUser:add'"> 新增 </el-button>
						</el-form-item>
					</el-form>
				</el-card>

				<el-card class="full-table" shadow="hover" style="margin-top: 5px">
					<el-table :data="state.userData" style="width: 100%" v-loading="state.loading" border>
						<el-table-column type="index" label="序号" width="55" align="center" fixed />
						<!-- <el-table-column label="头像" width="80" align="center" show-overflow-tooltip>
							<template #default="scope">
								<el-avatar :src="scope.row.avatar" size="small">{{ scope.row.nickName?.slice(0, 1) ?? scope.row.realName?.slice(0, 1) }} </el-avatar>
							</template>
						</el-table-column> -->
						<el-table-column prop="username" label="账号"  align="center" show-overflow-tooltip />
						<!-- <el-table-column prop="nickName" label="昵称" width="120" align="center" show-overflow-tooltip /> -->
						<el-table-column prop="realname" label="姓名"  align="center" show-overflow-tooltip />
						<el-table-column prop="phone" label="手机号码" align="center" show-overflow-tooltip />
						<el-table-column prop="email" label="邮箱" width="120" align="center" show-overflow-tooltip />
						<!-- <el-table-column label="出生日期" width="100" align="center" show-overflow-tooltip>
							<template #default="scope">
								{{ formatDate(new Date(scope.row.birthday), 'YYYY-mm-dd') }}
							</template>
						</el-table-column>-->
						<el-table-column label="性别" width="70" align="center" show-overflow-tooltip>
							<template #default="scope">
								<el-tag type="success" v-if="scope.row.sex === 1"> 男 </el-tag>
								<el-tag type="danger" v-else-if="scope.row.sex === 2"> 女 </el-tag>
								<el-tag type="info" v-else> 其他 </el-tag>
							</template>
						</el-table-column>
						<!-- <el-table-column label="账号类型" width="110" align="center" show-overflow-tooltip>
							<template #default="scope">
								<el-tag v-if="scope.row.accountType === 888"> 系统管理员 </el-tag>
								<el-tag v-else-if="scope.row.accountType === 777"> 普通账号 </el-tag>
								<el-tag v-else-if="scope.row.accountType === 666"> 会员 </el-tag>
								<el-tag v-else> 其他 </el-tag>
							</template>
						</el-table-column> -->
						<!-- <el-table-column prop="roleName" label="角色集合" min-width="150" align="center" show-overflow-tooltip />
						<el-table-column prop="orgName" label="所属机构" min-width="120" align="center" show-overflow-tooltip /> -->
						<!-- <el-table-column prop="posName" label="职位名称" min-width="120" align="center" show-overflow-tooltip /> -->
						<!-- <el-table-column label="状态" width="70" align="center" show-overflow-tooltip>
							<template #default="scope">
								<el-switch v-model="scope.row.status" :active-value="1" :inactive-value="2" size="small" @change="changeStatus(scope.row)" v-auth="'sysUser:setStatus'" />
							</template>
						</el-table-column> -->
						<!-- <el-table-column prop="orderNo" label="排序" width="70" align="center" show-overflow-tooltip /> -->
						<el-table-column label="修改记录" width="100" align="center" show-overflow-tooltip>
							<template #default="scope">
								<ModifyRecord :data="scope.row" />
							</template>
						</el-table-column>
						<el-table-column label="操作" width="150" align="center" fixed="right" show-overflow-tooltip>
							<template #default="scope">
								<el-button icon="ele-Edit" size="small" text type="primary" @click="openEditUser(scope.row)" v-auth="'sysUser:update'"> 编辑 </el-button>
								<el-dropdown>
									<el-button icon="ele-MoreFilled" size="small" text type="primary" style="padding-left: 12px" />
									<template #dropdown>
										<el-dropdown-menu>
											<el-dropdown-item icon="ele-RefreshLeft" @click="resetUserPwd(scope.row)" :disabled="!auth('sysUser:resetPwd')"> 重置密码 </el-dropdown-item>
											<!-- <el-dropdown-item icon="ele-Unlock" @click="unlockLogin(scope.row)" divided :disabled="!auth('sysUser:unlockLogin')"> 解除锁定 </el-dropdown-item> -->
											<el-dropdown-item icon="ele-Delete" @click="delUser(scope.row)" divided :disabled="!auth('sysUser:delete')"> 删除账号 </el-dropdown-item>
										</el-dropdown-menu>
									</template>
								</el-dropdown>
							</template>
						</el-table-column>
					</el-table>
					<el-pagination
						v-model:currentPage="state.tableParams.pageNum"
						v-model:page-size="state.tableParams.pageSize"
						:total="state.tableParams.total"
						:page-sizes="[10, 20, 50, 100]"
						small
						background
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						layout="total, sizes, prev, pager, next, jumper"
					/>
				</el-card>
			</el-col>
		</el-row>

		<EditUser ref="editUserRef" :title="state.editUserTitle" :orgData="state.orgTreeData" @handleQuery="handleQuery" />
	</div>
</template>

<script lang="ts" setup name="sysUser">
import { onMounted, reactive, ref } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';
// import { formatDate } from '/@/utils/formatTime';
import { auth } from '/@/utils/authFunction';
import OrgTree from '/@/views/system/org/component/orgTree.vue';
import EditUser from '/@/views/system/user/component/editUser.vue';
import ModifyRecord from '/@/components/table/modifyRecord.vue';

import { getAPI } from '/@/utils/axios-utils';
import { SysUserApi, SysOrgApi } from '/@/api-services/api';
import { SysUser, SysOrg, QueryParams } from '/@/api-services/models';

const orgTreeRef = ref<InstanceType<typeof OrgTree>>();
const editUserRef = ref<InstanceType<typeof EditUser>>();
const state = reactive({
	loading: false,
	userData: [] as Array<SysUser>,
	orgTreeData: [] as Array<SysOrg>,
	queryParams: {
		orgId: -1,
		username: undefined,
		realname: undefined,
		phone: undefined,
	},
	tableParams: {
		pageNum: 1,
		pageSize: 20,
		total: 0 as any,
		filters: []	as Array<QueryParams>,
  		orders: [
    		{
      			asc: true,
      			column: "id"
    		}
  		],
	},
	editUserTitle: '',
});

onMounted(async () => {
	//loadOrgData();
	handleQuery();
});

// 查询机构数据
const loadOrgData = async () => {
	state.loading = true;
	var res = await getAPI(SysOrgApi).apiSysOrgListGet(0);
	state.orgTreeData = res.data.result ?? [];
	state.loading = false;
};

// 查询操作
const handleQuery = async () => {
	state.loading = true;
	//清空数组
	state.tableParams.filters=[];
	if (state.queryParams.username) {
		state.tableParams.filters.push(
			{
      			column: "username",
      			operator: "LIKE",
      			values: [state.queryParams.username]
    		}
		)
	}
	if (state.queryParams.phone) {
		state.tableParams.filters.push(
			{
      			column: "phone",
      			operator: "LIKE",
      			values: [state.queryParams.phone]
    		}
		)
	}
	var res = await getAPI(SysUserApi).apiSysUserPagePost(state.tableParams);
	
	state.userData = res.data.data?.records ?? [];
	state.tableParams.total = res.data.data?.total;
	state.loading = false;
};

// 重置操作
const resetQuery = () => {
	state.queryParams.orgId = -1;
	state.queryParams.username = undefined;
	state.queryParams.realname = undefined;
	state.queryParams.phone = undefined;
	handleQuery();
};

// 打开新增页面
const openAddUser = () => {
	state.editUserTitle = '添加账号';
	editUserRef.value?.openDialog({ id: undefined, birthday: '2000-01-01', sex: 1, orderNo: 100, cardType: 0, cultureLevel: 5 });
};

// 打开编辑页面
const openEditUser = (row: any) => {
	state.editUserTitle = '编辑账号';
	editUserRef.value?.openDialog(row);
};

// 删除
const delUser = (row: any) => {
	ElMessageBox.confirm(`确定删除账号：【${row.username}】?`, '提示', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	})
		.then(async () => {
			await getAPI(SysUserApi).apiSysUserDelete(row.id);
			handleQuery();
			ElMessage.success('删除成功');
		})
		.catch(() => {});
};

// 改变页面容量
const handleSizeChange = (val: number) => {
	state.tableParams.pageSize = val;
	handleQuery();
};

// 改变页码序号
const handleCurrentChange = (val: number) => {
	state.tableParams.pageNum = val;
	handleQuery();
};

// 修改状态
const changeStatus = (row: any) => {
	getAPI(SysUserApi)
		.apiSysUserSetStatusPost({ id: row.id, status: row.status })
		.then(() => {
			ElMessage.success('账号状态设置成功');
		})
		.catch(() => {
			row.status = row.status == 1 ? 2 : 1;
		});
};

// 重置密码
const resetUserPwd = async (row: any) => {
	ElMessageBox.confirm(`确定重置密码：【${row.account}】?`, '提示', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	})
		.then(async () => {
			await getAPI(SysUserApi)
				.apiSysUserResetPwdPost({ id: row.id })
				.then((res) => {
					ElMessage.success(`密码重置成功为：${res.data.result}`);
				});
		})
		.catch(() => {});
};

// 解除登录锁定
const unlockLogin = async (row: any) => {
	ElMessageBox.confirm(`确定解除登录锁定：【${row.account}】?`, '提示', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	})
		.then(async () => {
			await getAPI(SysUserApi)
				.apiSysUserUnlockLoginPost({ id: row.id })
				.then(() => {
					ElMessage.success('解除登录锁定成功');
				});
		})
		.catch(() => {});
};

// 树组件点击
const nodeClick = async (node: any) => {
	state.queryParams.orgId = node.id;
	state.queryParams.username = undefined;
	state.queryParams.realname = undefined;
	state.queryParams.phone = undefined;
	handleQuery();
};
</script>
