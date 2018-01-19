<p align="center" style='font-size:16px;'><b>A Tool helps you get info of The Hefei Gaoxin Apartment</b></p>
<p align="center">Do not attack, Just for a room you need.</p>

#### 写在前面
<p style="font-size:12px;">考虑到部分朋友不知道如何使用git或者node这样的命令，我简化了使用方法，下载后直接运行`run.bat`就可以了。</p>

### What you need?
You don't need to install anything else.
But it's best (not required) for you to install Chrome, cause empty rooms found, your chrome will popup to tell you there is an empty room!^_^

### How to use?
<strike>Just double click `run.bat`</strike>


2018年1月19日 更新\
高新区三个公寓网站添加了Session认证, 所以在使用前需要获取网站的Cookie值\
比如说:你现在需要查询创新公寓的房间,按如下图示:
![ScreenShot](https://raw.github.com/AJLoveChina/HefeiGaoxinApartment/master/asserts/cookie.png?t=2018年1月19日)

我解释一下这个图(获取cookie)的操作步骤(请使用chrome或者360,搜狗等浏览器, 不要使用IE):\
<ul>
<li>1.登陆创新公寓网站(这里以创新公寓示例, 其它俩个公寓同理)</li>
<li>2.点击公租房申请</li>
<li>3.按 F12键 打开浏览器的控制台</li>
<li>4.选择楼层, 然后会看到右侧的控制台面板出来一条记录 apply.do?.xxxx....</li>
<li>5.点击这条记录, 会看到有cookie信息, 拷贝这个值</li>
<li>6.打开工具目录, 打开config.js, 在指定位置写入(如下图所示)</li>
<li>7.其它俩个公寓同理, 重复1-6步骤. 都完成后双击run.bat开始运行</li>
</ul>

![ScreenShot](https://raw.github.com/AJLoveChina/HefeiGaoxinApartment/master/asserts/config-cookie.png?t=2018年1月19日)


>备注:你也不是每个公寓的cookie都要获取, 如果你只打算申请皖水公寓, 只要获取皖水公寓的cookie即可, 其它公寓的cookie不填, 执行过程中报请求错误可以忽略

[![](http://i.imgur.com/5RHR6Ku.png)](http://hejie.nigeerhuo.com)
