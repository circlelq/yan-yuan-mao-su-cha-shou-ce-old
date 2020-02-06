Page({ 
 data: {
catname:"幺鸡",
 catitems:[ 
{category:"昵称",
 content:" 蛋粉",},
{category:"毛色",
 content:" 橘白",},
{category:"性别",
 content:" 公",},
{category:"状况",
 content:" 送养",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 上古",},
{category:"外貌",
 content:" 白多 蝴蝶嘴 神似畅蠢",},
{category:"性格",
 content:" 亲人不可抱 可摸",},
{category:"第一次被目击时间",
 content:" 上古//2017秋",},
{category:"关系",
 content:" 幺鸡与蛋粉是同一只猫",},
{category:"编写日期",
 content:" 2020-02-06",},
], 
relationship:[{ rela:"幺鸡"},
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

