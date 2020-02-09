Page({ 
 data: {
catname:"桂香",
 catitems:[ 
{category:"毛色",
 content:" 长毛橘",},
{category:"性别",
 content:" 公",},
{category:"状况",
 content:" 失踪",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 2018-10-26",},
{category:"外貌",
 content:" 长毛纯橘 表情略丧 脸小",},
{category:"性格",
 content:" 怕人 安全距离1m以外",},
{category:"第一次被目击时间",
 content:" 2018",},
{category:"编写日期",
 content:" 2020-02-09",},
], 
relationship:[], 
nums:[
{ num: 1 },
{ num: 2 },
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

