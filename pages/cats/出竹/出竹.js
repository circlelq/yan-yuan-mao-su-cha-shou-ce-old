Page({ 
 data: {
catname:"出竹",
 catitems:[ 
{category:"昵称",
 content:" 晴雯",},
{category:"毛色",
 content:" 棕狸加白",},
{category:"性别",
 content:" 公",},
{category:"状况",
 content:" 健康",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 2017-04-24",},
{category:"外貌",
 content:" 不太好分辨的混有黄色的狸纹 白围巾白手套，一度被当做玳瑁母猫",},
{category:"性格",
 content:" 怕人 安全距离1m以外",},
{category:"第一次被目击时间",
 content:" 2018",},
{category:"关系",
 content:" 跟大哥处不来",},
{category:"编写日期",
 content:" 2020-02-06",},
], 
relationship:[{ rela:"大哥"},
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

