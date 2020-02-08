Page({ 
 data: {
catname:"花袭人",
 catitems:[ 
{category:"毛色",
 content:" 玳瑁",},
{category:"性别",
 content:" 未知",},
{category:"状况",
 content:" 许久未见",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"出生时间",
 content:" 2006年",},
{category:"外貌",
 content:" 黄棕相间 全身狸花纹 绿眼睛",},
{category:"性格",
 content:" 吃东西时可以摸一下",},
{category:"第一次被目击时间",
 content:" 2006出生",},
{category:"关系",
 content:" 和第谷关系很好",},
{category:"编写日期",
 content:" 2020-02-07",},
], 
relationship:[{ rela:"第谷"},
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

