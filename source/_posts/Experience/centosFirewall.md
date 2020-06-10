---
title: CentOS防火墙配置
date: 2020-03-11 22:06:04
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories:
  - Linux
tags:
  - CentOS
  - 防火墙
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.40/thumbnail/Linux.jpg
mathjax: true
---

> <center><font  size = "5"  face = "楷体">CentOS防火墙配置</font></center>


<!-- more -->


## 查看防火墙服务状态 ##
```
systemctl status firewalld
```
## 查看防火墙的状态 ##
```
firewall-cmd --state
```
## 开启、重启、关闭firewalld.service服务 ##
1. 开启
```
service firewalld start
```
2. 重启
```
service firewalld restart
```
3. 关闭
```
service firewalld stop
```
## 查看防火墙规则 ##
```
firewall-cmd --list-all
```
## 查询、开放、关闭端口 ##
1. 查询端口是否开放
```
firewall-cmd --query-port=8080/tcp
```
2. 开放端口（以3306端口为例）
```
firewall-cmd --permanent --add-port=3306/tcp
```
3. 移除端口
```
firewall-cmd --permanent --remove-port=3306/tcp
```
## 参数说明 ##
firewall-cmd:是linux提供的操作firewall的一个工具
–permanent:表示设置为持久
–add-port:标识添加的端口
## 防火墙配置文件 ##
```
/etc/firewalld/zones/public.xml
```