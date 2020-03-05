/*
 * @Author: 周祥毅
 * @Date: 2020-03-04 17:57:53
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-05 18:33:36
 * @Description: 
 */

var dataServer = 'http://123.160.246.203:30003/GIS/'
var gisserver = 'http://123.160.246.203:6081/arcgis/rest/services/'
window.myphonenumbers = parent.myphonenumber
var siteurl = getRootPath()
var mapconfig = {
    //天地图密钥
    "TDTtoken": 'f9ccb94730c9b51cb2986a98d897b297',
    //地图服务器地址
    "Mapserver": "",
    'siteurl': siteurl,
    'gisserver': 'http://123.160.246.203:6081/arcgis/rest/services/',
    'baseServer': 'http://123.160.246.203:30003',
    //高德地图密钥
    "AmapKey": '74fa0b0f559ed138632e08c52f1a9ed9',
    "AmapServeKey": '81af61859f5b6da6697c6bab81173795',
    mapinfo:{
        // extend:{
        //     "xmin": 111.93219395999999,
        //     "ymin": 35.20473561,
        //     "xmax": 113.61759552,
        //     "ymax": 36.06431094,
        //     // "spatialReference": {
        //     //     "wkid": 4326
        //     // }
        // }
        extend:''
        
    },
    //地图服务地址
    layerUrl: {
        'baseMapBlue': `${gisserver}晋城市矢量数据2/MapServer`,
        'imglayer': `${gisserver}晋城市影像1月14日/MapServer`,
        //'baseMapBlue': `http://10.34.100.162:6080/arcgis/rest/services/AHHB/%E5%85%A8%E5%9B%BD%E5%A4%A7%E6%95%B0%E6%8D%AE%E7%AC%A6%E5%8F%B7%E5%8C%96_20191120/MapServer`,
        'OnlineMap': `http://59.108.92.197:8055/arcgis/rest/services/PUBLIC/Worldbase/MapServer`,//大地图在线测试地址

    },
    dataUrl: {
        //逆地址解析地址
        "InverseGeoUrl": "https://restapi.amap.com/v3/geocode/regeo",
        //正地址解析地址:
        "Geourl": "https://restapi.amap.com/v3/geocode/geo",
        //天气情况地址
        "GetWeatureUrl": "https://restapi.amap.com/v3/weather/weatherInfo",
        //搜索地址
        "SearchUrl": "https://restapi.amap.com/v3/place/text",
        "GovUrl": "https://restapi.amap.com/v3/config/district",
        "around":"https://restapi.amap.com/v3/place/around" //周边搜索
    },
    layers: {
        'border': {
            url: `${gisserver}PC_WaterSource/MapServer/3`,
            Fields: {

            }
        },
        'riverline': {//水系线状
            url: `http://58.241.164.154:28085/arcgis/rest/services/JC/%E6%B0%B4%E7%B3%BB%E4%B8%93%E9%A2%98/MapServer/0`,
            Fields: {
                'NAME': '河流名称'
            }
        }


    },
    panels: {
        'Water_source': {
            title: '水源地专题',
            contenturl: './panels/sourceindex.html',
            area: ['320px', '500px'],
            top: 65,
            right: 340

        },
        'Water_quality': {
            title: '水质监测专题',
            contenturl: './panels/Water_qualityindex.html',
            area: ['320px', '500px'],
            top: 65,
            right: 340

        },
        'Pollution_enterprise': {
            title: '污染源企业专题',
            contenturl: './panels/pollution.html',
            area: ['320px', '500px'],
            top: 65,
            right: 340

        },
        'Tracing': {
            title: '水质监测站搜索',
            contenturl: 'Src/panels/Traceability/index.html',
            area: ['390px', '130px'],
            top: 65,
            right: 400

        },
        'Sewage_outlet': {
            title: '排污口专题',
            contenturl: './panels/Sewage_outlet.html',
            area: ['320px', '500px'],
            top: 65,
            right: 340

        },
        'mapsetting': {
            title: '地图服务配置设置',
            contenturl: 'Src/panels/mapsetting/index.html',
            area: ['390px', '130px'],
            top: 65,
            right: 400

        },
        'analysis': {
            title: '综合分析',
            contenturl: './panels/analysisInf.html',
            area: ['320px', '520px'],
            top: 65,
            right: 340

        }

    },
  

}
function getRootPath() {
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    var curWwwPath = window.document.location.href;
    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8083
    var localhostPaht = curWwwPath.substring(0, pos);
    //获取带"/"的项目名，如：/uimcardprj
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    return (localhostPaht + projectName);
}
export { mapconfig }