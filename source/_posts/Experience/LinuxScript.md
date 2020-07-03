---
title: 自用的一些Linux一键脚本（持续更新中···）
date: 2020-03-07 23:55:16
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories:
  - Linux
tags:
  - Linux Shell
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.40/thumbnail/Linux.jpg
mathjax: true
---

> <center><font  size = "5"  face = "楷体">Linux一键脚本</font></center>

<!-- more -->
## VPS 性能测试一键脚本 ##

### SuperBench.sh ###

#### 使用方法 ####
```
wget -qO- --no-check-certificate https://raw.githubusercontent.com/oooldking/script/master/superbench.sh | bash
```
或
```
curl -Lso- -no-check-certificate https://raw.githubusercontent.com/oooldking/script/master/superbench.sh | bash
```
#### 演示图 ####
<fancybox>
    <img src='https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.40/img/LinuxScript/output_1.jpg'>
</fancybox>

#### 下载地址 ####
[https://github.com/oooldking/script/blob/master/superbench.sh](https://github.com/oooldking/script/blob/master/superbench.sh)

### bench.sh ###
#### 使用方法 ####
```
wget -qO- bench.sh | bash
```
或
```
curl -Lso- bench.sh | bash
```
#### 演示图 ####
<fancybox>
    <img src='https://cdn.jsdelivr.net/gh/InfiniteYinux/yinuxypic@1.04/image/Article/2020/06/10/bench.png'>
</fancybox>

#### 下载地址 ####
[https://github.com/teddysun/across/blob/master/bench.sh](https://github.com/teddysun/across/blob/master/bench.sh)

### ZBench.sh ###
ZBench 基本上是把上面两个脚本的功能合并了一下，再自己加了些许新的功能，可以说是集大成者，可以一次性测试上面两个脚本的测试项。
#### 使用方法 ####
中文版：
```
wget -N --no-check-certificate https://raw.githubusercontent.com/FunctionClub/ZBench/master/ZBench-CN.sh && bash ZBench-CN.sh
```
英文版：
```
wget -N --no-check-certificate https://raw.githubusercontent.com/FunctionClub/ZBench/master/ZBench.sh && bash ZBench.sh
```
#### 演示图 ####
<fancybox>
    <img src='https://cdn.jsdelivr.net/gh/InfiniteYinux/yinuxypic@1.04/image/Article/2020/06/10/ZBebnch.png'>
</fancybox>

#### 下载地址 ####
[https://github.com/FunctionClub/ZBench/blob/master/ZBench.sh](https://github.com/FunctionClub/ZBench/blob/master/ZBench.sh)

### VPS 回程路由一键测试 ###
#### 使用方法 ####
```
wget -qO- git.io/besttrace | bash
```
#### 演示图 ####
<fancybox>
    <img src='https://cdn.jsdelivr.net/gh/InfiniteYinux/yinuxypic@1.04/image/Article/2020/06/10/besttrace.png'>
</fancybox>

#### 下载地址 ####
[https://github.com/teddysun/across/blob/master/bench.sh](https://github.com/teddysun/across/blob/master/bench.sh)


## VPS 一键安装脚本 ##
### 一键安装KMS服务脚本 ###
#### 适用环境 ####
> 系统支持：CentOS 6+，Debian 7+，Ubuntu 12+
> 虚拟技术：任意
> 内存要求：≥128M
#### 关于本脚本 ####
1. 本脚本适用于三大 Linux 发行版，其他版本则不支持。
2. KMS 服务安装完成后会加入开机自启动。
3. 默认记录日志，其日志位于 `/var/log/vlmcsd.log`。
#### 使用方法 ####
使用root用户登录，运行以下命令：
```
wget --no-check-certificate https://github.com/teddysun/across/raw/master/kms.sh && chmod +x kms.sh && ./kms.sh
```
安装完成后，输入以下命令查看端口号 1688 的监听情况
```
netstat -nxtlp | grep 1688
```
返回值类似于如下这样就表示 OK 了：
```
tcp        0      0 0.0.0.0:1688                0.0.0.0:*                   LISTEN      3200/vlmcsd         
tcp        0      0 :::1688                     :::*                        LISTEN      3200/vlmcsd 
```
脚本安装完成后，会将 KMS 服务加入开机自启动。

#### 使用命令 ####
```
/etc/init.d/kms start           # 启动
/etc/init.d/kms stop            # 停止
/etc/init.d/kms restart         # 重启
/etc/init.d/kms status          # 状态
```
#### 卸载 ####
使用 root 用户登录，运行以下命令：
```
./kms.sh uninstall
```
#### 使用 KMS 服务 ####
KMS 服务，用于在线激活 VOL 版本的 Windows 和 Office。
激活的前提是你的系统是批量授权版本，即 VL 版，一般企业版都是 VL 版。而 VL 版本的镜像一般内置 GVLK key，用于 KMS 激活。
下面列表里面含有的产品的 VL 版本或者能使用 key 进入 KMS 通道的产品，都支持使用 KMS 激活。
使用管理员权限运行 cmd 查看系统版本，命令如下：
```
wmic os get caption
```
使用管理员权限运行 cmd 安装从上面列表得到的 key，命令如下：
```
slmgr /ipk xxxxx-xxxxx-xxxxx-xxxxx-xxxxx
```
使用管理员权限运行 cmd 将 KMS 服务器地址设置为你自己的 IP 或 域名，后面最好再加上端口号（:1688），命令如下：
```
slmgr /skms Your IP or Domain:1688
```
注意：本脚本所做的工作就是此步骤。当你的 KMS 服务出于启动状态，那么此处就可以设置为你自己的 KMS 服务器地址。
使用管理员权限运行 cmd 手动激活系统，命令如下：
```
slmgr /ato
```
关于 `Office` 的激活，要求必须是 VOL 版本，否则无法激活。
找到你的 `Office` 安装目录，32 位默认一般为 `C:\Program Files (x86)\Microsoft Office\Office16`
64 位默认一般为` C:\Program Files\Microsoft Office\Office16`
`Office16` 是 `Office 2016`，`Office15` 就是 `Office 2013`，`Office14` 就是`Office 2010`。
打开以上所说的目录，应该有个 `OSPP.VBS` 文件。
使用管理员权限运行 `cmd` 进入 `Office` 目录，命令如下：
```
cd "C:\Program Files (x86)\Microsoft Office\Office16"
```
使用管理员权限运行 cmd 注册 KMS 服务器地址：
```
cscript ospp.vbs /sethst:Your IP or Domain
```
使用管理员权限运行 cmd 手动激活 Office，命令如下：
```
cscript ospp.vbs /act
```
注意： KMS 方式激活，其有效期只有 180 天。
每隔一段时间系统会自动向 KMS 服务器请求续期，请确保你自己的 KMS 服务正常运行。
参考链接:[https://03k.org/kms.html](https://03k.org/kms.html)
