小程序使用教程，希望每一个人看了以后都能做出自己的猫咪图鉴。

# 准备工作

小程序视频教程： https://www.bilibili.com/video/BV1jk4y1B7sX

若需要北大猫协的科普内容，请在北大猫协公众号留言，之后把聊天记录截图发给circle yuanlq@pku.edu.cn。

## 注册小程序账号

主页： https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN

注册页： https://mp.weixin.qq.com/wxopen/waregister?action=step1

需要身份信息，每人可以注册 5 个小程序。

## 下载小程序开发工具

下载后安装： https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

## 安装 python3

之后需要运行 python 代码。

下载后安装： https://www.python.org/downloads/

Windows 用户注意要把 python 加入环境变量 https://baijiahao.baidu.com/s?id=1606573927720991570&wfr=spider&for=pc

## 安装 python 的一个包

终端（命令行）输入下面一行

`pip install openpyxl`

## 下载模版

clone 或下载： https://gitee.com/circlelq/yan-yuan-mao-su-cha-shou-ce

## 购买腾讯云或阿里云或云开发或使用 gitee

需要把猫咪的图片存储到云端，然后用小程序调用，因为小程序允许上传的文件大小很小。

小程序云服务： https://cloud.tencent.com/edu/learning/course-1481-8464

腾讯云： https://cloud.tencent.com/product/cos

阿里云： https://www.aliyun.com/product/oss?spm=5176.10695662.1112155.2.188e5ad3nmYcYt

# 运行小程序

## 用开发者工具打开

导入 miniprogram 记得输入自己的 AppID 。

## 修改信息

一些信息需要修改，才能符合不同的社团。例如北大猫协的简介，在 pages/about/about.wxml 文件里，会徽图片在 pages/images 里，pages/ 文案 给出了一个在图鉴后面添加其它文字的例子。

另外还有一个比较重要的事情就是改猫的图片，我们目前是在阿里云上传图片，然后让小程序调用图片，因为小程序允许上传的文件大小很小，建议大家直接使用小程序的云开发功能。需要修改 app.js 文件中的调用地址（把 "https://pku-lostangel.oss-cn-beijing.aliyuncs.com/" 改成你的地址），以及 pages/circle.py 文件中的地址。

科普内容请联系北大猫协公众号。

## 图片命名方法

- 头像：名字.png

- 图片：名字.jpg

- 更多图片：名字+数字.jpg

## 视频命名方法

- 名字+数字.mp4 

## 压缩

- 建议把图片和视频压缩小一点，否则会比较烧流量，最低可以把头像压缩到 10k，照片压缩到 90k。可以限制大图的长边像素为 900 像素，头像宽 200 像素。

- 视频压缩可以使用微信，即把视频发给某人，微信会自动压缩，然后再下载下来。

推荐图片压缩网址 https://docsmall.com 。

## 编辑表格

填写 page 文件夹里的 Excel 表格并保存。

## 运行 python

根据教学视频里的方法运行即可，或者上网查看如何运行 python 代码。

## 提交

在小程序开发者工具中点击提交。

# 问题解答

可以发邮件 yuanlq@pku.edu.cn

## 修改

小程序最上方的名称修改：修改 app.json 文件里的信息
增加地点信息：去掉 circle.py 代码第 56 行的 '#' 和后面的一个空格。（考虑到猫咪的安全，不建议增加地点信息）

## 增加广告

可以查看[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/ad/banner-ad.html)。

1. 累计用户要达到 1000，然后在微信公众平台登陆小程序，点击 流量主 开通广告，点击 banner 形式，获得广告 id。

2. 将以下代码加到文件 miniprogram/miniprogram/pages/index/index.wxml 的第 76 行，或者其它你喜欢的位置，注意修改 id 号。

```
 <view class = "adContainer">
 <view class = "in-ad">
   <ad unit-id="adunit-2edf15198753eb49"></ad>
 </view>
 </view>
```

3. 将以下代码加到文件 miniprogram/miniprogram/app.wxss 的最后

```css
.adContainer {
 width:100%;
 display: flex;
 justify-content: center;
}

.adContainer ad {
 width:100%;
}
```

## 遇到的问题

如果在开发者工具里打开猫咪名片显示找不到 wxml 文件，点击开发者工具上方的预览，在手机中即可查看，这是开发者工具的 bug，不影响手机上的体验。
python 要正确安装，并且要安装一个包。
