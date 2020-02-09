Page({ 
 data: {
catname:"薏米",
 catitems:[ 
{category:"毛色",
 content:" 长毛白",},
{category:"性别",
 content:" 母",},
{category:"状况",
 content:" 健康",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 2019-03-13",},
{category:"外貌",
 content:" 异瞳小白猫 蓝黄异瞳 右耳耳缺 ",},
{category:"性格",
 content:" 怕人 安全距离1m以内",},
{category:"第一次被目击时间",
 content:" 2019寒假",},
{category:"关系",
 content:" 跟夜色关系好",},
{category:"编写日期",
 content:" 2020-02-09",},
], 
relationship:[{ rela:"夜色"},
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

