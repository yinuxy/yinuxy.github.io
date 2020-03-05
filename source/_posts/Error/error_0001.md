---
layout: post
date: 2020/02/10 11:37:16 
title: 解决No module named 'mpl_toolkits.basemap'问题
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: Matplotlib
tag:
  - basemap
  - pyproj

thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.13/thumbnail/script_%E7%9C%8B%E5%9B%BE%E7%8E%8B.jpg

mathjax: true



---

> <center><font  size = "5" color = "#1BC3FB"  face = "楷体">解决No module named 'mpl_toolkits.basemap'问题</font></center>

<!-- more -->
## 问题描述 ##
Python3.x版本导入`from mpl_toolkits.basemap import Basemap`包时出现问题：
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.28/img/Error/Feb/output_1.png)
## 解决方法 ##
1. 安装pyproj：
```pip install pyproj -i https://pypi.tuna.tsinghua.edu.cn/simple```
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.28/img/Error/Feb/output_2.png)
2. 进入[https://www.lfd.uci.edu/~gohlke/pythonlibs/#basemap](https://www.lfd.uci.edu/~gohlke/pythonlibs/#basemap)   ctrl + F   搜索 basemap，下载![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.28/img/Error/Feb/output_3.png)
下载时请与自身系统所用python版本对应；如python版本为3.6.X、amd64可选用图中红框版本
3. 下载完后使用Shell命令进入文件根目录运行```pip install packagename```即可安装成功！
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.29/img/Error/Feb/output_4.png)