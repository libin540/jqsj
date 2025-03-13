/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。整合最新技术，模块插件式开发，前后端分离，开箱即用。<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { StatusEnum } from './status-enum';
 /**
 * 系统职位表
 *
 * @export
 * @interface SysPos
 */
export interface SysPos {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysPos
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof SysPos
     */
    createTime?: Date;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof SysPos
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof SysPos
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof SysPos
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof SysPos
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof SysPos
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof SysPos
     */
    isDelete?: boolean;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof SysPos
     */
    tenantId?: number | null;

    /**
     * 名称
     *
     * @type {string}
     * @memberof SysPos
     */
    name: string;

    /**
     * 编码
     *
     * @type {string}
     * @memberof SysPos
     */
    code?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof SysPos
     */
    orderNo?: number;

    /**
     * 备注
     *
     * @type {string}
     * @memberof SysPos
     */
    remark?: string | null;

    /**
     * @type {StatusEnum}
     * @memberof SysPos
     */
    status?: StatusEnum;
}
