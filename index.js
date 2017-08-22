/**
 * Created by hejie2.0
 * Coding love on 2017/8/22.
 */
let webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var moment = require("moment");

let request = require('request');
let isPolling = true;
let interval = 5; // 5 minutes


function alert() {
    let driver = new webdriver.Builder()
        .forBrowser("chrome")
        .build();

    driver.get("http://www.baidu.com");
}

(function () {
    // 明珠公寓
    var list = [
        {
            desc : "明珠东楼男生",
            url: "http://36.7.87.172:8088/online/roomResource.xp?action=formList1",
            data: {
                "code": "01",
                "buildingCode": "0011502190427062JFn"  // 明珠东楼男生
            }
        }
        , {
            desc : "创新A座",
            url: "http://36.7.87.209:8088/online/roomResource.xp?action=formList1",
            data: {
                "code": "01",
                "buildingCode": "0011502154277240phA"  //创新A座
            }
        }, {
            desc : "创新B座",
            url: "http://36.7.87.209:8088/online/roomResource.xp?action=formList1",
            data: {
                "code": "01",
                "buildingCode": "0011502154321961NnF"  //创新B座
            }
        }, {
            desc : "创新C座",
            url: "http://36.7.87.209:8088/online/roomResource.xp?action=formList1",
            data: {
                "code": "01",
                "buildingCode": "0011502154352377wUW"  //创新C座
            }
        }, {
            desc : "皖水公寓1#",
            url: "http://117.71.57.99:9080/online/roomResource.xp?action=formList1",
            data: {
                "code": "01",
                "buildingCode": "0011449816806945psc"  //皖水公寓1#
            }
        }, {
            desc : "皖水公寓2#",
            url: "http://117.71.57.99:9080/online/roomResource.xp?action=formList1",
            data: {
                "code": "01",
                "buildingCode": "0011449816830250MuI"  //皖水公寓2#
            }
        }, {
            desc : "皖水公寓 综合楼东",
            url: "http://117.71.57.99:9080/online/roomResource.xp?action=formList1",
            data: {
                "code": "01",
                "buildingCode": "0011449816876736sfx"  //皖水公寓 综合楼东
            }
        }, {
            desc : "皖水公寓 综合楼西",
            url: "http://117.71.57.99:9080/online/roomResource.xp?action=formList1",
            data: {
                "code": "01",
                "buildingCode": "0011449816949458BXk"  //皖水公寓 综合楼西
            }
        }];


    console.log("\n每" + interval + "分钟查询三座公寓所有楼层，查询到空房间后会停止查询并把空房间打印在控制台上");
    console.log("如果你安装了chrome,会弹出Chrome浏览器提示你！你要做的只是喝喝咖啡静静等候~\n");

    loop();
    setInterval(loop, 1000 * 60 * interval);

    // run(list[0]);

    function loop() {
        if (!isPolling) return;
        console.log("==============" + moment().format('LTS') + "====================");
        list.forEach(function (config) {
            run(config);
        })
    }

    function run(map) {
        let findList = [];

        request.post(
            map.url,
            {form: map.data},
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    let json = JSON.parse(body);
                    oo(json.list);

                    if (findList.length > 0) {
                        isPolling = false;
                        console.log(map.desc);
                        console.log(findList.join(","));
                        console.log("已经查询到房间，自动查询终止！！");
                        console.log("输入 node index 可以继续运行！！")
                        process.exit();
                        alert();
                    } else {
                        console.log("No room for \t" + map.desc);
                    }
                } else {
                    console.warn("请求错误\t" + JSON.stringify());
                }
            }
        );

        function oo(vo) {
            for (var key in vo) {
                for (var j = 0; j < vo[key].length; j++) {
                    var status = (vo[key][j]['status'] + "");
                    if (status == "02" || status == "2") {
                        findList.push(vo[key][j]['roomName']);
                    }
                }
            }
        }
    }

})();
