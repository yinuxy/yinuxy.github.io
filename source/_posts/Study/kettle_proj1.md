---
layout: post
date: 2019/10/17 19:13:47 
title: kettle 利用 HTTP Client 获取猫眼电影API近期上映相关信息，并解析json
author: 
  name: YINUXY'S BLOG
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: 大数据预处理
tag:
  - kettle
  - HTTP Client
  - json
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/thumbnail/spoon.jpg
mathjax: true

icons: [fas fa-star yellow, fas fa-fire accent]
---

> <center><font  size = "4" color = "#1BC3FB"  face = "楷体">kettle 利用 HTTP Client 获取猫眼电影API近期上映相关信息，并解析json</font></center>

<!-- more -->


## 前言 ##
Kettle 除了常规的数据处理之外，还可以模拟发送HTTP client/post  ，REST client。

## 实验背景 ##
这周二老师布置了一项实验：
> 建立一个转换，实现一个猫眼API热映电影的json，生成为xls文件。
猫眼的热门电影接口为： [http://m.maoyan.com/#movie](http://m.maoyan.com/#movie)，从里面找到API接口：[http://m.maoyan.com/ajax/movieOnInfoList](http://m.maoyan.com/ajax/movieOnInfoList)。需要获取里面的：电影名、评分、主演、信息。

## 处理流程 ##
我使用的是kettle的HTTP GET 请求访问了[猫眼电影提供的接口](http://m.maoyan.com/ajax/movieOnInfoList)

HTTP Client 组件在kettle中的位置是：![](https://cdn.jsdelivr.net/gh/InfiniteYinux/article@master/img/kettle_proj1/output_1.png)


kettle 的处理流程为：![](https://cdn.jsdelivr.net/gh/InfiniteYinux/article@master/img/kettle_proj1/output_2.png)


## 参数设置 ##
HTTP Client 为设置请求，HTTP client 通过url调用接口，有两种方式。第一种是直接给定 url，第二种通过步骤从前一步当中传 url 过来。
调用之后返回的数据一般会以json的形式存在一个字段当中。我们可以通过设定“结果字段名”对获取后的 json 进行命名，方便下面操作。
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/article@master/img/kettle_proj1/output_3.png)
在调用HTTP client 时如果被拒绝访问时可以添加请求头。
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/article@master/img/kettle_proj1/output_4.png)

## kettle 解析json ##

kettle 解析json主要通过 输入内的组件 json input 。
使用该组件时，<font color = "red"  face = "黑体">必须保证解析的json的格式完全符合自己编写的解析规则。</font>
读取本地文件解析无需勾选 源定义在一个字段里 。
勾选之后可以从上个步骤当中获取包含json的字段 ，对其解析。该字段一般会是 http client  的 结果输出字段名 。
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/article@master/img/kettle_proj1/output_5.png)
HTTP client 解析时json 结构未知,需要我们自己书写解析规则。
以下面的json 为例 ，我们需要获取 results 中的nm 、star、sc、showInfo、rt等信息对应的json解析规则如下
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/article@master/img/kettle_proj1/output_6.png)
```
{
"coming":[]
,"movieIds":[503342,1230121,1249366,342146,1277939,345419,1250700,1227005,1219701,1215348,1256872,1225993,1251174,296020,1178432,359377,1211270,345397,1190383,1260354,1245196,1243361,1277982,1240752,334625,78519,668097,1197625,1291398,1180993,1242130]
,"stid":"576591972453269000"
,"stids":[{"movieId":503342,"stid":"576591972453269000_a503342_c0"}
	,{"movieId":1230121,"stid":"576591972453269000_a1230121_c1"}
	,{"movieId":1249366,"stid":"576591972453269000_a1249366_c2"}
	,{"movieId":342146,"stid":"576591972453269000_a342146_c3"}
	,{"movieId":1277939,"stid":"576591972453269000_a1277939_c4"}
	,{"movieId":345419,"stid":"576591972453269000_a345419_c5"}
	,{"movieId":1250700,"stid":"576591972453269000_a1250700_c6"}
	,{"movieId":1227005,"stid":"576591972453269000_a1227005_c7"}
	,{"movieId":1219701,"stid":"576591972453269000_a1219701_c8"}
	,{"movieId":1215348,"stid":"576591972453269000_a1215348_c9"}
	,{"movieId":1256872,"stid":"576591972453269000_a1256872_c10"}
	,{"movieId":1225993,"stid":"576591972453269000_a1225993_c11"}]
,"total":31
,"movieList":[
	{"id":503342,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/c437c3e340eff266f5cc7dcc79bead6b2406517.jpg","version":"v3d imax","nm":"双子杀手","preShow":false,"sc":0,"globalReleased":false,"wish":102860,"star":"威尔·史密斯,玛丽·伊丽莎白·温斯特德,克里夫·欧文","rt":"2019-10-18","showInfo":"今天51家影院放映58场","showst":4,"wishst":0}
	,{"id":1230121,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg","version":"v2d imax","nm":"中国机长","preShow":false,"sc":9.4,"globalReleased":true,"wish":561040,"star":"张涵予,欧豪,杜江","rt":"2019-09-30","showInfo":"今天126家影院放映1637场","showst":3,"wishst":0}
	,{"id":1249366,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/moviemachine/ff399baffe786445b96e4e3d24fe1eeb675719.jpg","version":"","nm":"航海王：狂热行动","preShow":false,"sc":0,"globalReleased":false,"wish":337092,"star":"田中真弓,冈村明美,中井和哉","rt":"2019-10-18","showInfo":"今天4家影院放映4场","showst":4,"wishst":0}
	,{"id":342146,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/6392cd350d00860921042cdac7f2ed797389667.jpg","version":"","nm":"犯罪现场","preShow":false,"sc":8.9,"globalReleased":true,"wish":110692,"star":"古天乐,张继聪,宣萱","rt":"2019-10-12","showInfo":"今天125家影院放映1369场","showst":3,"wishst":0}
	,{"id":1277939,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/moviemachine/b2c5c74d33e45745fd3462e44b3698e18336620.jpg","version":"v2d imax","nm":"我和我的祖国","preShow":false,"sc":9.7,"globalReleased":true,"wish":578308,"star":"黄渤,张译,韩昊霖","rt":"2019-09-30","showInfo":"今天126家影院放映1201场","showst":3,"wishst":0}
	,{"id":345419,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/moviemachine/c68e3fff79463952b33cbc1e1b45442b1772992.jpg","version":"v3d imax","nm":"沉睡魔咒2","preShow":false,"sc":0,"globalReleased":false,"wish":227645,"star":"安吉丽娜·朱莉,艾丽·范宁,切瓦特·埃加福特","rt":"2019-10-18","showInfo":"今天34家影院放映34场","showst":4,"wishst":0}
	,{"id":1250700,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/4c01895cfd53e82f7c3048c407974a6b4739229.jpg","version":"v2d imax","nm":"攀登者","preShow":false,"sc":9.4,"globalReleased":true,"wish":558579,"star":"吴京,章子怡,张译","rt":"2019-09-30","showInfo":"今天124家影院放映700场","showst":3,"wishst":0}
	,{"id":1227005,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/980cddbf2fe1296ae3657c968e536ea56541174.png","version":"","nm":"侠路相逢","preShow":false,"sc":0,"globalReleased":false,"wish":24896,"star":"姜武,邵兵,姚娆","rt":"2019-10-18","showInfo":"2019-10-18 本周五上映","showst":4,"wishst":0}
	,{"id":1219701,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/c8c17eb7c9c82d189771e3bfdd4d95061444262.jpg","version":"","nm":"急速逃脱","preShow":false,"sc":7.7,"globalReleased":true,"wish":24799,"star":"沃坦·维尔克·默林,汉娜·赫茨施普龙,克里斯蒂安娜·保罗","rt":"2019-10-12","showInfo":"今天41家影院放映106场","showst":3,"wishst":0}
	,{"id":1215348,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/6bce8da6f1daa7f69bed91cd00b049a42186478.jpg","version":"","nm":"天作谜案","preShow":true,"sc":0,"globalReleased":false,"wish":18799,"star":"西达尔特·马尔霍特拉,索娜什·辛哈,阿克夏耶·坎纳","rt":"2019-10-25","showInfo":"2019-10-25 下周五上映","showst":4,"wishst":0}
	,{"id":1256872,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/db82e48befc1c7e2e98425165b2500d76222872.jpg","version":"v3d","nm":"为国而歌","preShow":false,"sc":0,"globalReleased":false,"wish":8700,"star":"王雷,古力娜扎,海一天","rt":"2019-10-18","showInfo":"2019-10-18 本周五上映","showst":4,"wishst":0}
	,{"id":1225993,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/cbfd89ee598b5837c7d6b7bb6f6d9e0a1744668.jpg","version":"v3d","nm":"雪人奇缘","preShow":false,"sc":9.3,"globalReleased":true,"wish":59473,"star":"汪可盈,张子枫,丹增·诺盖·特雷纳","rt":"2019-10-01","showInfo":"今天38家影院放映57场","showst":3,"wishst":0}]
}
```
注意：
在`字段->路径`中如果要传递的值在第二层，那么$后面有2个点号，不加的话可能会传递不了值


