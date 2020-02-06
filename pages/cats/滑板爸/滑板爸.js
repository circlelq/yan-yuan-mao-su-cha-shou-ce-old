Page({ 
 data: {
catname:"滑板爸",
 catitems:[ 
{category:"昵称",
 content:" （奶牛）",},
{category:"毛色",
 content:" 奶牛",},
{category:"性别",
 content:" 公",},
{category:"状况",
 content:" 离世",},
{category:"绝育情况",
 content:" 未绝育",},
{category:"性格",
 content:" 未知 数据缺失",},
{category:"编写日期",
 content:" 2020-02-06",},
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

