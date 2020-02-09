Page({ 
 data: {
catname:"豆干",
 catitems:[ 
{category:"毛色",
 content:" 橘",},
{category:"性别",
 content:" 公",},
{category:"状况",
 content:" 失踪",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 2012-09-08",},
{category:"外貌",
 content:" 纯正的橘",},
{category:"性格",
 content:" 怕人 安全距离1m以外",},
{category:"关系",
 content:" 胆小，只跟棉花糖亲近，吃一堆粮",},
{category:"编写日期",
 content:" 2020-02-09",},
], 
relationship:[{ rela:"棉花糖"},
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

