Page({
data: { 
 fostered_catlist: [
{ name:"丑橘"},
{ name:"芬达"},
{ name:"果冻"},
{ name:"玛奇朵"},
{ name:"幺鸡"},
{ name:"桂圆"},
{ name:"土谦"},
{ name:"山岚"},
{ name:"车桑子"},
{ name:"畅蠢"},
{ name:"卤蛋"},
{ name:"小蜜蜂"},
{ name:"卡祖笛"},
{ name:"sin"},
{ name:"cos"},
{ name:"金银朱"},
{ name:"木糖"},
{ name:"乌糖"},
{ name:"嘤宝"},
{ name:"小一"},
{ name:"咖喱"},
{ name:"鹅黄"},
{ name:"小米"},
{ name:"甜橙"},
{ name:"花木兰"},
{ name:"七七"},
],
 unknown_catlist: [
{ name:"花灵灵"},
{ name:"豆干"},
{ name:"棉花糖"},
{ name:"天狗"},
{ name:"李美人"},
{ name:"牛黄"},
{ name:"桂香"},
{ name:"花袭人"},
{ name:"白面"},
{ name:"鸢尾"},
{ name:"小芝麻"},
{ name:"白泽"},
{ name:"雪竹"},
{ name:"姜撞奶"},
{ name:"芝麻糊"},
],
 dead_catlist: [
{ name:"左斑"},
{ name:"栗子"},
{ name:"锦缎"},
{ name:"半糖"},
{ name:"滑板爸"},
{ name:"小菊"},
{ name:"安吉"},
],
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    navbar: ['在校', '毕业', '休学', '喵星'],
    currentTab: 0,
  },
   navbarTap: function (e) {
     this.setData({
       currentTab: e.currentTarget.dataset.idx
     })
   },

   iconType: [
     'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
   ],

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
   },
   copyTBL: function (e) {
     var self = this;
     wx.setClipboardData({
       data: '北大猫协',//需要复制的内容
       success: function (res) {
         // self.setData({copyTip:true}),

       }
     })
   },

})

