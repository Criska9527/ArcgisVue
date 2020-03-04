/*
 * @Author: 周祥毅
 * @Date: 2020-03-04 13:42:57
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-04 18:58:41
 * @Description: 配置文件
 */
// dev模式与build模式判断，区分使用url
var locationUrl = "buildUrl";
if (process.env.NODE_ENV === "development") {
    locationUrl = "devUrl";
}
const options = {
    url: 'http://59.108.92.197:9007/api/arcgis_js_v327_sdk/arcgis_js_api/library/3.27/3.27/init.js',// 这里的API地址可以是官网提供的CDN，也可在此配置离线部署的地址
    dojoConfig: {
        async: true,
        packages: [
            {

                location: '/widgets',
                name: 'widgets'
            }
        ]
    }


}
console.log(options.dojoConfig.packages[0].location)
export default {
    options
}
