
 /**
 * 
 *
 * @export
 * @interface QueryParams
 */
export interface QueryParams {

       /**
     * 列名
     *
     * @type {string}
     * @memberof QueryParams
     */
       column?: string | null;
       /**
     * 选项
     *
     * @type {string}
     * @memberof QueryParams
     */
       operator?: string | null;

        /**
     * 值
     *
     * @type {string}
     * @memberof QueryParams
     */
        values: Array<string>|null ;
}
