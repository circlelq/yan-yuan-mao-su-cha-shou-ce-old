Page({ 
 data: {
catname:"牛黄",
 catitems:[ 
{category:"毛色",
 content:" 长毛橘",},
{category:"性别",
 content:" 公",},
{category:"状况",
 content:" 失踪",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"外貌",
 content:" 扁扁脸胖橘 嘴部重点色 绿眼睛 右耳耳缺 春夏季疯狂掉毛",},
{category:"性格",
 content:" 薛定谔亲人",},
{category:"第一次被目击时间",
 content:" 2011",},
{category:"关系",
 content:" 跟花香香、大威关系好",},
{category:"编写日期",
 content:" 2020-02-06",},
], 
relationship:[{ rela:"大威"},
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

