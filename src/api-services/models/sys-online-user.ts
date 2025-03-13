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

 /**
 * 系统在线用户表
 *
 * @export
 * @interface SysOnlineUser
 */
export interface SysOnlineUser {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysOnlineUser
     */
    id?: number;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof SysOnlineUser
     */
    tenantId?: number | null;

    /**
     * 连接Id
     *
     * @type {string}
     * @memberof SysOnlineUser
     */
    connectionId?: string | null;

    /**
     * 用户Id
     *
     * @type {number}
     * @memberof SysOnlineUser
     */
    userId?: number;

    /**
     * 账号
     *
     * @type {string}
     * @memberof SysOnlineUser
     */
    userName: string;

    /**
     * 真实姓名
     *
     * @type {string}
     * @memberof SysOnlineUser
     */
    realName?: string | null;

    /**
     * 连接时间
     *
     * @type {Date}
     * @memberof SysOnlineUser
     */
    time?: Date | null;

    /**
     * 连接IP
     *
     * @type {string}
     * @memberof SysOnlineUser
     */
    ip?: string | null;

    /**
     * 浏览器
     *
     * @type {string}
     * @memberof SysOnlineUser
     */
    browser?: string | null;

    /**
     * 操作系统
     *
     * @type {string}
     * @memberof SysOnlineUser
     */
    os?: string | null;
}
