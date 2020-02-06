//index.js 
 Page({ 
 data: { 
 catlist: [
   { name: "花灵灵" },
   { name: "杰希" },
   { name: "英杰" },
   { name: "一帆" },
   { name: "土谦" },
   { name: "小黄鸭" },
   { name: "薏米" },
   { name: "夜色" },
   { name: "畅蠢" },
   { name: "小菊" },
   { name: "豆干" },
   { name: "棉花糖" },
   { name: "幺鸡" },
   { name: "麻糖" },
   { name: "麻薯" },
   { name: "左斑" },
   { name: "小礼" },
   { name: "二哈" },
   { name: "毛巾" },
   { name: "小钒" },
   { name: "八筒" },
   { name: "鱼豆腐" },
   { name: "冒菜妈" },
   { name: "大盘鸡" },
   { name: "藕黑" },
   { name: "滑板爸" },
   { name: "天狗" },
   { name: "砂糖橘" },
   { name: "李美人" },
   { name: "姜丝鸭" },
   { name: "大威" },
   { name: "牛黄" },
   { name: "山竹" },
   { name: "出竹" },
   { name: "卤蛋" },
   { name: "小蜜蜂" },
   { name: "大哥" },
   { name: "桂香" },
   { name: "花袭人" },
   { name: "第谷" },
   { name: "焦糖" },
   { name: "小尾巴" },
   { name: "白面" },
   { name: "牛牛" },
   { name: "奶酪" },
   { name: "卡祖笛" },
   { name: "藕白" },
   { name: "蒙牛" },
   { name: "小雨点" },
   { name: "鸢尾" },
   { name: "青天" },
   { name: "黄埔" },
   { name: "小狐狸" },
   { name: "唢呐" },
   { name: "花洒" },
   { name: "帖木儿" },
   { name: "咸蛋黄" },
   { name: "小橘子" },
   { name: "小芝麻" },
   { name: "锦缎" },
   { name: "黄大孙女" },
   { name: "栗子" },
   { name: "麒麟" },
   { name: "白泽" },
   { name: "雪竹" },
   { name: "姜撞奶" },
   { name: "山岚" },
   { name: "果冻" },
   { name: "鹅黄" },
   { name: "茶叶蛋" },
   { name: "黑米粥" },
   { name: "芝麻糊" },
   { name: "墨方" },
   { name: "墨可" },
   { name: "墨斜" },
   { name: "安吉" },
   { name: "半糖" },
   { name: "云雾" },
    ],
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0
  },

  onPullDownRefresh:function(){
    wx.stopPullDownRefresh()
  },

  //转发跳转页面设置
  onLoad: function (options) {
    if (options.pageId) {
      //这个pageId的值存在则证明首页的开启来源于用户点击来首页,同时可以通过获取到的pageId的值跳转导航到对应的详情页
      wx.navigateTo({
        url: '/pages/cats/' + options.pageId + '/' + options.pageId,
      })
    }
  },

  //转发此页面的设置
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/index/index',  // 路径，传递参数到指定页面。
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },

  // 搜索栏输入名字后页面跳转
  bindconfirmT: function (e) {
    console.log("e.detail.value");
    if(e.detail.value) {
    //这个pageId的值存在则证明首页的开启来源于用户点击来首页,同时可以通过获取到的pageId的值跳转导航到对应的详情页
    wx.navigateTo({
      url: '/pages/cats/' + e.detail.value + '/' + e.detail.value,
    })
  }
  }


})

