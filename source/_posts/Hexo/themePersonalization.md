---
title: Hexo主题美化 | 给你的博客加上GITHUB日历云和分类雷达图
date: 2020-03-10 17:13:57
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.40/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories:
  - Hexo
tag:
  - Hexo主题美化
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.40/thumbnail/hexo.png
mathjax: true
---

> <center><font  size = "5"  face = "楷体">Hexo主题美化 | 给你的博客加上GITHUB日历云和分类雷达图</font></center>

<!-- more -->

## Previous ##
1. 环境：Hexo4.2
2. 主题：[Volantis](https://volantis.js.org/)
3. 本次主题美化基于[blinkfox](https://blinkfox.github.io/)的[hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)
4. 演示

<btns center rounded   grid5>
<a href='https://blog.yinuxy.com/archives/'><i class='fas fa-globe-asia'></i>GITHUB日历云</a>
<a href='https://blog.yinuxy.com/tags/'><i class='fas fa-globe-asia'></i>标签云和文章分类雷达图</a>
</btns>


## GITHUB日历云 ##
1. 点击此<btn>[按钮](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/Hexo/themeConfig/echarts.min.js)</btn>下载`echarts.min.js`文件放置于`../volantis/source/js`文件夹中
2. 点击此<btn>[按钮](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/Hexo/themeConfig/post-calendar.ejs)</btn>下载`post-calendar.ejs`文件放置于`../volantis/layout/_widget`文件夹中
3. 打开刚刚下载的`post-calendar.ejs`文件，将第七行
<fancybox>
    <img src='https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/img/themePersonalization/output_3.png'>
</fancybox>

替换为

```
<script type="text/javascript" src="/js/echarts.min.js"></script>
```
4. 在`../volantis/source/less/archive.less`里面最后一个括号之前添加如下代码：
```
  /*日历云*/
  #post-calendar {
    width: 100%;
    height: 200px;
  }

```
或者下载此<btn>[CSS](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/Hexo/themeConfig/matery.css)</btn>文件后放置于`../volantis/source/css`文件夹中，然后在`../volantis/layout/_partial/head.ejs`中引入css文件，在`<!-- link -->`标记下方添加一行
```
<link rel="stylesheet" type="text/css" href="/css/matery.css">
```
::: danger
使用`volantis`主题的直接在`archive.less`里面添加代码，不要引入`matery.css`文件，`matery.css`与`volantis`主题配置文件`archive.less`部分标签名相同，引入后会更改主题外观。
:::
5. 在你想让它显示的位置添加如下代码就行啦，例如我是将它放在`../volantis/layout/archive.ejs`中
<fancybox>
    <img src='https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/img/themePersonalization/output_4.png'>
</fancybox>
```
<%- partial('_widget/post-calendar') %>
```
6. 演示图：
<fancybox>
    <img src='https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/img/themePersonalization/output_1.png'>
</fancybox>

## 标签云 ##

1. 点击此<btn>[按钮](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/Hexo/themeConfig/echarts.min.js)</btn>下载`echarts.min.js`文件放置于`../volantis/source/js`文件夹中
2. 点击此<btn>[按钮](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/Hexo/themeConfig/tag-cloud.ejs)</btn>下载`tag-cloud.ejs`文件放置于`../volantis/layout/_widget`文件夹中
3. 打开刚刚下载的`tag-cloud.ejs`文件，将
```
<script type="text/javascript" src="<%- theme.jsDelivr.url %><%- theme.libs.js.echarts %>"></script>
```
替换为

```
<script type="text/javascript" src="/js/echarts.min.js"></script>
```
4. 使用`volantis`主题的可以点击<btn>[下载](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/Hexo/themeConfig/myfile/tag.ejs)</btn>按钮替换即可
5. 非`volantis`主题的需要下载此<btn>[CSS](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/Hexo/themeConfig/matery.css)</btn>文件后放置于`../volantis/source/css`文件夹中，然后在`../volantis/layout/_partial/head.ejs`中引入css文件，在`<!-- link -->`标记下方添加一行
```
<link rel="stylesheet" type="text/css" href="/css/matery.css">
```
若引入后博客外观发生改变，则将如下代码复制粘贴于`../volantis/source/less/archive.less`文件最后一个括号之前。
```
  /*
  tag-cloud
  */
  .chip .tag-length {
    margin-left: 5px;
    margin-right: -2px;
    font-size: 0.5rem;
  }
  .chip-default .tag-length {
    color: #e91e63;
    margin-top: 1px;
  }
  .chip-active .tag-length {
    color: #fff;
  }
  .chip-container .tag-chips {
    margin: 1rem auto 0.5rem;
    max-width: 850px;
    text-align: center;
  }
  /*tags边框*/
  .chip-container .chip {
    margin: 10px 10px;
    padding: 19px 14px;
    display: inline-flex;
    line-height: 0;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .12);
    z-index: 0;
  }
  .chip-container .chip:hover {
    color: #fff;
    background: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%) !important;
  }

```
6. 在你想让它显示的位置添加如下代码，例如我是将它放在`../volantis/layout/tag.ejs`中
```
<%- partial('_widget/tag-cloud') %>
```
添加排版后可能会出现跟主题不搭的情况，可以根据我的<btn>[tag](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/Hexo/themeConfig/myfile/tag.ejs)</btn>文件适当修改。
7. 演示图
<fancybox>
    <img src='https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/img/themePersonalization/output_2.png'>
</fancybox>

## 文章分类雷达图 ##
1. 点击此<btn>[按钮](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/Hexo/themeConfig/echarts.min.js)</btn>下载`echarts.min.js`文件放置于`../volantis/source/js`文件夹中
2. 点击此<btn>[按钮](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/Hexo/themeConfig/category-radar.ejs)</btn>下载`category-radar.ejs`文件放置于`../volantis/layout/_widget`文件夹中
3. 打开刚刚下载的`category-radar.ejs`文件，将
<fancybox>
    <img src='https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/img/themePersonalization/output_3.png'>
</fancybox>

替换为

```
<script type="text/javascript" src="/js/echarts.min.js"></script>
```
4. 在你想让它显示的位置添加如下代码，例如我是将它放在`../volantis/layout/tag.ejs`中
```
<%- partial('_widget/category-radar') %>
```
5. 演示图
<fancybox>
    <img src='https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.44/img/themePersonalization/output_2.png'>
</fancybox>

## 其它个性化配置 ##
更多个性化配置可参考[TRHX](https://www.itrhx.com/)的博文[Hexo 博客主题个性化](https://www.itrhx.com/2018/08/27/A04-Hexo-blog-topic-personalization/)

