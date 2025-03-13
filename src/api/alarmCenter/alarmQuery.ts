import request from '/@/utils/requestZk';

/**
 * （不建议写成 request.post(xxx)，因为这样 post 时，无法 params 与 data 同时传参）
 *
 * 登录api接口集合
 * @method signIn 用户登录
 * @method signOut 用户退出登录
 */
// 报警列表
export function promptList(parameter?:Object) {
    console.log(parameter)
    return request({
      url: '/prompt/pageList',
      method: 'post',
      data: parameter
    })
}
//详情
export function promptGetById(parameter?:Object) {
    console.log(parameter)
    return request({
      url: `/prompt/getById?id=${parameter}`,
      method: 'post',
    })
}
//  更新报警信息

export function promptUpdate(parameter?:Object) {
    console.log(parameter)
    return request({
      url: '/prompt/update',
      method: 'post',
      data: parameter
    })
}

//字典
export function queryDictItemsByCodeStr(parameter?:Object) {
  console.log(parameter)
  return request({
    url: `/sys/dict/queryDictItemsByCodeStr?dictCodeStr=${parameter}`,
    method: 'post',
  })
}
