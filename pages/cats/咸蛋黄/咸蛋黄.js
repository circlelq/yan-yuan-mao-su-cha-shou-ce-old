Page({ 
 data: {
catname:"咸蛋黄",
 catitems:[ 
{category:"毛色",
 content:" 橘",},
{category:"性别",
 content:" 母",},
{category:"状况",
 content:" 健康",},
{category:"绝育情况",
 content:" 未知/可能不适宜绝育",},
{category:"外貌",
 content:" 短毛纯橘 瞳孔内黄外绿",},
{category:"性格",
 content:" 亲人不可抱 可摸",},
{category:"编写日期",
 content:" 2020-02-09",},
], 
relationship:[], 
nums:[
]},
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh()
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      path: '/pages/index/index?pageId='+this.data.catname,//这里在首页的地址后面添加我们需要传值的标识位pageId以及值123(pageId 这个名字你们可以自己随便乱取 如同一个变量名)
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

})

