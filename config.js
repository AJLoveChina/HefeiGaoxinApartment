/**
 * Created by Administrator on 2017/8/22.
 */
module.exports = {
  interval: 5, // 每五分钟查询一次
  cookie: {
    /**
     *每个网站需要使用不同的Cookie
     */
    /**
     * 创新公寓请求cookie
     */
    chuangxin: '在这里填入你的Cookie',
    /**
     * 明珠公寓
     */
    minzhu: '在这里填入你的Cookie',
    /**
     * 皖水公寓
     */
    wanshui: '在这里填入你的Cookie'
  },
  queryConfig: {
    // excludeRooms表示 这些房间我不要，放房间号 例如 ： ["1201", "1205"]  这样写表示这栋楼的1201房间和1205房间即使为空房也不要告诉我，也不要停止程序
    // isQuery表示 是否查询该栋楼，如果为false表示不查询这栋楼（因为高新区公寓是男女分开楼住的，你是男生，查询女生楼空房间是没用的，租不了。女生同理。）
    1: {  // 明珠东楼男生
        isQuery: true,
        excludeRooms: [1603, 1609, 1611, 1619]
    },
    11: { //明珠西楼 女生
      isQuery: true,
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
      isQuery: true,
      excludeRooms: [926]
    },
    6: {  //皖水公寓2#
      isQuery: true,
      excludeRooms: []
    },
    7: { //皖水公寓 综合楼东 女生
      isQuery: true,
      excludeRooms: []
    },
    8: { //皖水公寓 综合楼西
      isQuery: true,
      excludeRooms: [805]
    }
  }
}