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

import { JobCreateTypeEnum } from './job-create-type-enum';
 /**
 * 
 *
 * @export
 * @interface AddJobDetailInput
 */
export interface AddJobDetailInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof AddJobDetailInput
     */
    id?: number;

    /**
     * 组名称
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    groupName?: string | null;

    /**
     * 作业类型FullName
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    jobType?: string | null;

    /**
     * 程序集Name
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    assemblyName?: string | null;

    /**
     * 描述信息
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    description?: string | null;

    /**
     * 是否并行执行
     *
     * @type {boolean}
     * @memberof AddJobDetailInput
     */
    concurrent?: boolean;

    /**
     * 是否扫描特性触发器
     *
     * @type {boolean}
     * @memberof AddJobDetailInput
     */
    includeAnnotation?: boolean;

    /**
     * 额外数据
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    properties?: string | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof AddJobDetailInput
     */
    updatedTime?: Date | null;

    /**
     * @type {JobCreateTypeEnum}
     * @memberof AddJobDetailInput
     */
    createType?: JobCreateTypeEnum;

    /**
     * 脚本代码
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    scriptCode?: string | null;

    /**
     * 作业Id
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    jobId: string;
}
