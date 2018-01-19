/**
 * Created by hejie2.0
 * Coding love on 2017/8/22.
 */
let opn = require('opn')
var moment = require('moment')

let request = require('request')
let isPolling = true
let config = require('./config')
let interval = config.interval // 5 minutes
let list = [
  {
    id: 1,
    desc: '明珠东楼男生',
    url: 'http://36.7.87.172:8088/online/apply.do?action=formList',
    cookie : config.cookie.minzhu,
    from : 4, // 5楼开始
    to : 16, // 24楼结束
    data: {
      'code': '01',
      'buildingCode': '0011502190427062JFn'  // 明珠东楼男生
    }
  },
  {
    id: 11,
    desc: '明珠东楼女生',
    url: 'http://36.7.87.172:8088/online/apply.do?action=formList',
    cookie : config.cookie.minzhu,
    from : 4, // 5楼开始
    to : 16, // 24楼结束
    data: {
      'code': '01',
      'buildingCode': '0011502190427062JFn'  // 明珠东楼男生
    }
  },
  {
    id: 2,
    desc: '创新A座',
    url: 'http://36.7.87.209:8088/online/apply.do?action=formList',
    cookie : config.cookie.chuangxin,
    from : 5, // 5楼开始
    to : 24, // 24楼结束
    data: {
      'code': '01',
      'buildingCode': '0011502154277240phA',  //创新A座,
    }
  },
  {
    id: 3,
    desc: '创新B座',
    url: 'http://36.7.87.209:8088/online/apply.do?action=formList',
    cookie : config.cookie.chuangxin,
    from : 5, // 5楼开始
    to : 24, // 24楼结束
    data: {
      'code': '01',
      'buildingCode': '0011502154321961NnF'  //创新B座
    }
  },
  {
    id: 4,
    desc: '创新C座',
    url: 'http://36.7.87.209:8088/online/apply.do?action=formList',
    cookie : config.cookie.chuangxin,
    from : 5, // 5楼开始
    to : 24, // 24楼结束
    data: {
      'code': '01',
      'buildingCode': '0011502154352377wUW'  //创新C座
    }
  }, {
    id: 5,
    desc: '皖水公寓1#',
    url: 'http://117.71.57.99:9080/online/apply.do?action=formList',
    cookie : config.cookie.wanshui,
    from : 2, // 5楼开始
    to : 26, // 24楼结束
    data: {
      'code': '01',
      'buildingCode': '0011449816806945psc'  //皖水公寓1#
    }
  }, {
    id: 6,
    desc: '皖水公寓2#',
    url: 'http://117.71.57.99:9080/online/apply.do?action=formList',
    cookie : config.cookie.wanshui,
    from : 2, // 5楼开始
    to : 26, // 24楼结束
    data: {
      'code': '01',
      'buildingCode': '0011449816830250MuI'  //皖水公寓2#
    }
  }, {
    id: 7,
    desc: '皖水公寓 综合楼东',
    url: 'http://117.71.57.99:9080/online/apply.do?action=formList',
    cookie : config.cookie.wanshui,
    from : 4, // 5楼开始
    to : 28, // 24楼结束
    data: {
      'code': '01',
      'buildingCode': '0011449816876736sfx'  //皖水公寓 综合楼东
    }
  }, {
    id: 8,
    desc: '皖水公寓 综合楼西',
    url: 'http://117.71.57.99:9080/online/apply.do?action=formList',
    cookie : config.cookie.wanshui,
    from : 4, // 5楼开始
    to : 28, // 24楼结束
    data: {
      'code': '01',
      'buildingCode': '0011449816949458BXk'  //皖水公寓 综合楼西
    }
  }
  ];

function alert (map) {
  var url = map.url.replace(/roomResource\S+$/, '')
  try {
    opn(url)
  } catch (ex) {}
  opn('Tulips.jpg').then(() => {
    //process.exit(1);
  })
}

(function () {
  console.log('\n每' + interval + '分钟查询三座公寓所有楼层，查询到空房间后会停止查询并把空房间打印在控制台上')
  console.log('如果你安装了chrome,会弹出Chrome浏览器提示你！你要做的只是喝喝咖啡静静等候~\n')

  loop()
  setInterval(loop, 1000 * 60 * interval)


  function loop () {
    if (!isPolling) return
    console.log('==============' + moment().format('LTS') + '====================')
    list.forEach(function (map) {
      try {
        if (config.queryConfig[map.id].isQuery) {
          for (let i = map.from; i <= map.to; i++) {
            map.data.buildingFloor = i;
            run(JSON.parse(JSON.stringify(map)));
          }
        }
      } catch (ex) {}
    })
  }

  function run (map) {
    let findList = []

    var options = {
      url : map.url,
      headers : {
        'Cookie' : map.cookie
      },
      form : map.data
    }

    request.post(
      options,
      function (error, response, body) {

        if (!error && response.statusCode == 200) {
          try {
            let json = JSON.parse(body)

            oo(json.list, map)

            if (findList.length > 0) {
              isPolling = false
              console.log(map.desc)
              console.log(findList.join(','))
              console.log('已经查询到房间，自动查询终止！！')
              alert(map)
            } else {
              console.log(`${map.desc} \t ${map.data.buildingFloor}楼 \t 查询结果:没有房间`);
            }

            json = null
          } catch (ex) {
            console.warn(`请求错误 ${map.desc} ${map.data.buildingFloor}楼, 错误原因 : ${ex.message}`)
          }
        } else {
          console.warn('请求错误')
          console.warn("可能原因, session超时");
        }
      }
    )
  }

  function oo (vo, map) {
    for (var key in vo) {
      for (var j = 0; j < vo[key].length; j++) {
        let status = (vo[key][j]['status'] + '')
        let roomName = vo[key][j]['roomName'] + ''
        // if the room is empty
        if (status == '02' || status == '2') {
          let excludeRooms = config.queryConfig[map.id].excludeRooms.map(function (item) {
            return item + ''
          })

          if (excludeRooms.indexOf(roomName) == -1) {
            findList.push(vo[key][j]['roomName'])
          }
          excludeRooms = null
        }
        status = null
        roomName = null
      }
    }
  }

})()
