Page({
data: { 
 catlist: [
{ name:"出竹"},{ name:"麻糖"},{ name:"麻薯"},{ name:"山竹"},{ name:"黑米粥"},{ name:"云雾"},{ name:"战车"},{ name:"小礼"},{ name:"毛巾"},{ name:"大盘鸡"},{ name:"砂糖橘"},{ name:"姜丝鸭"},{ name:"大哥"},{ name:"第谷"},{ name:"小尾巴"},{ name:"牛牛"},{ name:"奶酪"},{ name:"黄埔"},{ name:"小狐狸"},{ name:"唢呐"},{ name:"帖木儿"},{ name:"咸蛋黄"},{ name:"小橘子"},{ name:"黄大孙女"},{ name:"杜若"},{ name:"英杰"},{ name:"一帆"},{ name:"二哈"},{ name:"蒙牛"},{ name:"墨方"},{ name:"墨可"},{ name:"墨斜"},{ name:"鱼豆腐"},{ name:"冒菜妈"},{ name:"大威"},{ name:"焦糖"},{ name:"青天"},{ name:"花洒"},{ name:"麒麟"},{ name:"山花"},{ name:"薏米"},{ name:"夜色"},{ name:"小钒"},{ name:"八筒"},{ name:"藕黑"},{ name:"藕白"},{ name:"茶叶蛋"},
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
    if(e.detail.value) 
    wx.navigateTo({
      url: '/pages/cats/' + e.detail.value + '/' + e.detail.value,
    })
  }
  }
)

