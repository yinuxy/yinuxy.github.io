---
layout: post
date: 2020/02/13 19:43:16 
title: Docker常用命令
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: Docker

thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.30/thumbnail/docker.jpg

mathjax: true


---

> <center><font  size = "5" color = "#1BC3FB"  face = "楷体">Docker常用命令</font></center>

<!-- more -->
## 帮助命令 ##
1. 查看Docker 版本信息
```
docker version
```
2. 查看Docker 系统信息，包括镜像和容器数
```
docker info
```
3. 查看Docker 常用命令
```
docker --help
```
## 镜像命令 ##
1. 列出镜像
```
docker images [OPTIONS]
```
参数说明： 
<div style="text-align:center">
  <table border="1" cellpadding="3" cellspacing="0" style="width: 60%;margin:auto">
    <tr>
        <th>REPOSITORY</th>
        <th>表示镜像的仓库源</th>
    </tr>
    <tr>
        <td>TAG</td>
        <td>镜像的标签</td>
    </tr>
    <tr>
        <td>IMAGE ID</td>
        <td>镜像ID</td>
    </tr>
    <tr>
        <td>SIZE</td>
        <td>镜像大小</td>
    </tr>
 
  </table>
</div>

[OPTIONS]说明：
<div style="text-align:center">
  <table border="1" cellpadding="3" cellspacing="0" style="width: 60%;margin:auto">
    <tr>
        <th>-a</th>
        <th>列出本地所有的镜像（含中间映像层）</th>
    </tr>
    <tr>
        <td>-q</td>
        <td>只显示镜像ID</td>
    </tr>
    <tr>
        <td>--digests</td>
        <td>显示镜像的摘要信息</td>
    </tr>
    <tr>
        <td>--no-trunc</td>
        <td>显示完整的镜像信息</td>
    </tr>
 
  </table>
</div>

2. 查询镜像
```
docker search [OPTION] imagename
```
[OPTION]说明：
<div style="text-align:center">
  <table border="1" cellpadding="3" cellspacing="0" style="width: 60%;margin:auto">
    <tr>
        <th>  --no-trunc </th>
        <th>        显示完整的镜像描述       </th>
    </tr>
    <tr>
        <td>      -s     </td>
        <td>   列出收藏数不少于指定数的镜像  </td>
    </tr>
    <tr>
        <td> --automated </td>
        <td> 只列出automated bulid类型的镜像 </td>
    </tr>
  </table>
</div>  

3. 下载镜像

```
docker  pull imagename [:TAG]
```

4. 删除镜像

```
docker rmi imageID
```

删除单个

```
docker rmi -f imageID
```

删除多个

```
docker rmi -f imagename1:TAG1 imagename2:TAG2
```
删除全部
```
docker rmi -f$(docker images -qa)
```
## 容器命令 ##
有镜像才能创建容器！
1. 新建并启动容器
```
docker run [OPTION] IMAGE [COMMAND] ARG...
```
[OPTION]说明：
<div style="text-align:center">
  <table border="1" cellpadding="3" cellspacing="0" style="width: 80%;margin:auto">
    <tr>
        <th> --name="" </th>
        <th>              为容器制定一个新名称              </th>
    </tr>
    <tr>
        <td>     -d    </td>
        <td>  后台运行容器，并返回容器ID，即启动守护式容器  </td>
    </tr>
    <tr>
        <td>     -i    </td>
        <td>      以交互模式运行容器，通常与-t同时使用      </td>
    </tr>
    <tr>
        <td>     -t    </td>
        <td> 为容器重新分配一个伪输入终端。通常与-i同时使用 </td>
    </tr>
    <tr>
        <td>     -P    </td>
        <td>                  随机端口映射                  </td>
    </tr>
    <tr>
        <td>     -p    </td>
        <td>                  指定端口映射                  </td>
    </tr>
  </table>
</div> 

> -p有以下四种格式：
> ip:hostPort:containerPort
> ip::containerPort
> hostPort:containerPort
> containerPort

2. 列出当前正在运行的容器
```
docker ps [OPTION]
```
[OPTION]说明：
<div style="text-align:center">
  <table border="1" cellpadding="3" cellspacing="0" style="width: 60%;margin:auto">
    <tr>
        <th>-a</th>
        <th>列出当前正在运行的容器+历史上运行过的</th>
    </tr>
    <tr>
        <td>-l</td>
        <td>显示最近创建的容器</td>
    </tr>
    <tr>
        <td>-n</td>
        <td>显示n个最近创建的容器</td>
    </tr>
    <tr>
        <td>-q</td>
        <td>静默模式，只显示容器编号</td>
    </tr>
    <tr>
        <td>--no-trunc</td>
        <td>不截断退出</td>
    </tr>
 
  </table>
</div>

3. 退出容器：
```
exit             #容器停止退出
Ctrl+P+Q         #容器不停止退出
```

4. 启动容器
```
docker start continerID/continerName
```

5. 重启容器
```
docker restart continerID/continerName
```

6. 停止容器
```
docker stop continerID/continerName
```

7. 强制停止容器
```
docker kill continerID/continerName
```

8. 删除已停止的容器
```
docker rm continerID
docker rm -f$(docker ps -a -q)               #一次性删除多个容器
docker ps -a -q | xargs docker rm            #一次性删除多个容器
```

## 容器命令-重要 ##
1. 启动守护式容器：
```
docker run -d containerName
```
> 使用镜像`centos:latsext`以后台模式启动一个容器`docker run -d centos`
> 问题：使用`docker ps -a`进行查看，<font color = "blue"  face = "黑体">会发现容器已经退出</font>
> 很重要的说明一点：<font color = "red"  face = "黑体">Docker容器后台运行，就必须有一个前台进程</font>
> 容器运行的命令如果不是那些<font color = "red"  face = "黑体">一直挂起的命令</font>（比如运行top、tail），就会自动退出
> 这个是Docker的机制问题，比如说以你的web容器，我们以nginx为例，正常情况下，我们配置启动服务只需启动相应的service即可。例如`service nginx start`，但是这样做，nginx为后台进程模式运行，就导致docker前台没有运行的应用，这样的容器后台启动后，会立即自杀以为他觉得她没事可做了。
> 所以，最佳的解决方案是：将你要运行的程序以前台进程的形式运行。

2. 查看容器日志
```
docker logs -d -t --tail containerID
-t          加入时间戳
-f          跟随最新的日志打印
--tail      数字显示最后多少条
```

3. 查看容器内运行的进程
```
docker top containerID
```

4. 查看容器内部细节
```
docker inspect containerID
```

5. 进入正在运行的容器并以命令行交互
```
docker exec it containerID bashShell
docker attach containerID    #重新进入
```
>  区别
>  attach       直接进入容器命令的终端，不启动新的进程
>  exec         在容器中打开新的终端，并可以启动新的进程

6. 从容器内拷贝文件到主机上
```
docker cp containerID:容器内路径 目的主机地址
```





