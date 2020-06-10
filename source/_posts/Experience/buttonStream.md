---
layout: _post
title: 【HTML+CSS】CSS3实现炫酷的流光按钮效果
date: 2020-05-05 08:30:00
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories:
 - 网站开发
tags:
  - HTML
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.40/thumbnail/hexo.png
mathjax: false


---

> <center><font  size = "5"  face = "楷体">【HTML+CSS】CSS3实现炫酷的流光按钮效果</font></center>
<!-- more -->



## 效果预览 ##
<style type="text/css">
  a.button{
    text-decoration: none;
    position: absolute;
    font-size: 24px;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    width: 400px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    border-radius: 50px;
    z-index: 1;
  }
  a.button::before{
    content: "";
    position: absolute;
    left: -5px;
    right: -5px;
    top: -5px;
    bottom: -5px;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 50px;
    filter: blur(20px);
    z-index: -1;
  }
  a.button:hover::before{
    animation: sun 8s infinite;
  }
  a.button:hover{
  animation: sun 8s infinite;
  }
  @keyframes sun{
    100%{
      background-position: -400% 0;
    }
  }
</style>
<a class="button" href="https://blog.yinuxy.com">button</a>

<br/>
<br/>

## 代码 ##
## CSS ##
```
a{
  text-decoration: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  width: 400px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  border-radius: 50px;
  z-index: 1;
}
a::before{
  content: "";
  position: absolute;
  left: -5px;
  right: -5px;
  top: -5px;
  bottom: -5px;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 50px;
  filter: blur(20px);
  z-index: -1;
}
a:hover::before{
  animation: sun 8s infinite;
}
a:hover{
animation: sun 8s infinite;
}
@keyframes sun{
  100%{
    background-position: -400% 0;
  }
}
```

## HTML ##
```
<a href="https:blog.yinuxy.com">button</a>
```