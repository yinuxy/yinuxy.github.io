---
date: 2020-03-22 19:43:16 
title: 使用Docker一键部署Cloudreve网盘
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: Docker

thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.30/thumbnail/docker.jpg

mathjax: true


---

> <center><font  size = "5"  face = "楷体">使用Docker一键部署Cloudreve网盘</font></center>

<!-- more -->
## Cloudreve-Docker简介 ##
项目地址：[https://github.com/littleplus/Cloudreve-Docker](https://github.com/littleplus/Cloudreve-Docker)
容器地址：[https://hub.docker.com/r/littleplus/cloudreve-3.0.0-rc-1](https://hub.docker.com/r/littleplus/cloudreve-3.0.0-rc-1)
本Docker容器基于redis:5-alpine基础镜像制作，在保证程序运行稳定的前提下，实现最小空间占用以及资源消耗
本Docker容器的Cloudreve版本为Cloudreve-3.0.0-RC-1，大概率镜像及Dockerfile将不会再更新

## 容器特点 ##
1. 镜像大小仅70M左右，资源消耗极低
2. 外挂程序运行目录，可以自行更新Cloudreve版本，修改配置文件
3. 在初次使用时，会在`/etc/cloudreve`目录生成cloudreve二进制文件以及配置文件
4. 在`/etc/cloudreve/cloudreve.db`不存在时，由cloudreve自行生成sqlite数据库，密码可以在`docker logs`里面看到

## 快速开始 ##
默认前提：已经安装好docker并使docker服务正常运行中
1. git clone本项目或下载项目压缩包
2. 运行scripts/下的start.sh脚本，保存管理员用户名及密码信息（仅在初次创建数据库时显示）
3. 默认会将cloudreve本体、配置文件、数据库存放到/etc/cloudreve，将宿主机/data/cloudreve绑定到容器/data
4. 在cloudreve内修改默认存储策略中的存储路径为
```
/data/uploads/{uid}/{path}
```

## 快速开始 ##
1. 忘记保存初始密码了怎么办
  删除`/etc/cloudreve/cloudreve.db`文件（会丢失原有文件记录），运行scripts/的start.sh，会重新生成密码
2. 如何升级Cloudreve
  备份/etc/cloudreve文件夹，将新版Cloudreve二进制程序替换/etc/cloudreve的cloudreve文件，运行
```
docker restart cloudreve
```
3. 如何修改Cloudreve基础配置
  修改`/etc/cloudreve/cloudreve.conf`，运行
```
docker restart cloudreve
```
重启容器生效
4. 如何修改Cloudreve主机监听端口
  修改`scripts/start.sh`，将左边的端口号替换为需要要监听的端口，运行scripts/start.sh生效
