Page({ 
 data: {
catname:"花灵灵",
 catitems:[ 
{category:"昵称",
 content:" 花皮皮",},
{category:"毛色",
 content:" 三花",},
{category:"性别",
 content:" 未知",},
{category:"状况",
 content:" 失踪",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 未知",},
{category:"出生时间",
 content:" 2016-05-02",},
{category:"外貌",
 content:" 羞花闭月，不甚标准的“吼彩霞”",},
{category:"性格",
 content:" 亲人可抱",},
{category:"第一次被目击时间",
 content:" 2016-05-02",},
{category:"编写日期",
 content:" 2020-02-07",},
], 
relationship:[], 
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

