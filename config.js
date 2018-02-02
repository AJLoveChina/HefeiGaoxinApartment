/**
 * Created by Administrator on 2017/8/22.
 */
module.exports = {
  interval: 5, // 每五分钟查询一次
  userAndPass : {
    chuangxin : {
      url : "http://36.7.87.209:8088/online/gzflogin.jtml?action=login",
      name : "",
      pass : ""
    },
    minzhu : {
      url : "http://36.7.87.172:8088/online/gzflogin.jtml?action=login",
      name : "",
      pass : ""
    },
    wanshui : {
      url : "http://117.71.57.99:9080/online/gzflogin.jtml?action=login",
      name : "",
      pass : ""
    }
  },
  cookie: {},
  queryConfig: {
    // excludeRooms表示 这些房间我不要，放房间号 例如 ： ["1201", "1205"]  这样写表示这栋楼的1201房间和1205房间即使为空房也不要告诉我，也不要停止程序
    // isQuery表示 是否查询该栋楼，如果为false表示不查询这栋楼（因为高新区公寓是男女分开楼住的，你是男生，查询女生楼空房间是没用的，租不了。女生同理。）
    1: {  // 明珠东楼男生
        isQuery: false,
        excludeRooms: [1603, 1609, 1611, 1619]
    },
    11: { //明珠西楼 女生
      isQuery: false,
      excludeRooms: []
    },
    2: {  //创新A座
      isQuery: true,
      excludeRooms: []
    },
    3: { //创新B座
      isQuery: true,
      excludeRooms: []
    },
    4: {  //创新C座
      isQuery: true,
      excludeRooms: []
    },
    5: {  //皖水公寓1#
      isQuery: false,
      excludeRooms: [926]
    },
    6: {  //皖水公寓2#
      isQuery: false,
      excludeRooms: []
    },
    7: { //皖水公寓 综合楼东 女生
      isQuery: false,
      excludeRooms: []
    },
    8: { //皖水公寓 综合楼西
      isQuery: false,
      excludeRooms: [805]
    }
  }
}