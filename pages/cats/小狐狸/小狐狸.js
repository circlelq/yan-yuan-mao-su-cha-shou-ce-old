Page({ 
 data: {
catname:"小狐狸",
 catitems:[ 
{category:"毛色",
 content:" 长毛橘",},
{category:"性别",
 content:" 公",},
{category:"状况",
 content:" 健康",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"外貌",
 content:" 长毛纯橘 绿眼睛 眼线有一段横线再往下 嘴部颜色比大狐狸略浅",},
{category:"性格",
 content:" 怕人 安全距离1m以外",},
{category:"关系",
 content:" 总是和大狐狸粘在一起",},
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

