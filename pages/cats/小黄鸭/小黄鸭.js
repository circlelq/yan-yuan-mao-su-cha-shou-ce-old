Page({ 
 data: {
catname:"小黄鸭",
 catitems:[ 
{category:"毛色",
 content:" 橘白",},
{category:"性别",
 content:" 公",},
{category:"状况",
 content:" 健康",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 2018-11-08",},
{category:"出生时间",
 content:" 2018-03(~)",},
{category:"外貌",
 content:" 非常可爱的橘白",},
{category:"性格",
 content:" 薛定谔亲人",},
{category:"第一次被目击时间",
 content:" 2018秋",},
{category:"关系",
 content:" 与杰希一家关系好，经常跟云雾打架（还打不赢）",},
{category:"编写日期",
 content:" 2020-02-06",},
], 
relationship:[{ rela:"杰希"},
{ rela:"云雾"},
], 
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

