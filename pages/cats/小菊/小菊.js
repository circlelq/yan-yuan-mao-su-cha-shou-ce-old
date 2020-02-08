Page({ 
 data: {
catname:"小菊",
 catitems:[ 
{category:"毛色",
 content:" 橘白",},
{category:"性别",
 content:" 未知",},
{category:"状况",
 content:" 离世",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"外貌",
 content:" 橘多 踏雪 夏天会瘦",},
{category:"性格",
 content:" 薛定谔亲人",},
{category:"第一次被目击时间",
 content:" 2017",},
{category:"关系",
 content:" 跟畅蠢关系最好",},
{category:"编写日期",
 content:" 2020-02-07",},
], 
relationship:[{ rela:"畅蠢"},
], 
nums:[
{ num: 1 },
{ num: 2 },
{ num: 3 },
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

