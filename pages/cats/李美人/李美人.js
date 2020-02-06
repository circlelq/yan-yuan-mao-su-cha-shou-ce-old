Page({ 
 data: {
catname:"李美人",
 catitems:[ 
{category:"毛色",
 content:" 长毛橘白",},
{category:"性别",
 content:" 公",},
{category:"状况",
 content:" 失踪",},
{category:"绝育情况",
 content:" 未绝育",},
{category:"外貌",
 content:" 长毛浅色橘白 橘多 蝴蝶嘴 白围巾白手套 黄眼睛",},
{category:"性格",
 content:" 怕人 安全距离1m以内",},
{category:"第一次被目击时间",
 content:" 2016",},
{category:"关系",
 content:" 只跟小蜜蜂、卤蛋关系不错",},
{category:"编写日期",
 content:" 2020-02-06",},
], 
relationship:[{ rela:"卤蛋"},
{ rela:"小蜜蜂"},
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

