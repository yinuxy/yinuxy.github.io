---
title: Centos7下搭建Jupyter Notebook服务
date: 2020-06-10 12:06:04
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.40/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories:
  - Python
tags:
  - Python小技巧
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.40/thumbnail/Python.jpg
mathjax: true
---

> <center><font  size = "5"  face = "楷体">Centos7下搭建Jupyter Notebook服务</font></center>


<!-- more -->
## 安装python环境 ##
### 安装基础依赖环境 ###
```
yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel
```

### 下载 ###
浏览器打开 [https://www.python.org/ftp/python/](https://www.python.org/ftp/python/) 查看寻找Python版本，由于Tensorflow还不支持Python3.6版本，因此安装Python3.5.4
```
wget https://www.python.org/ftp/python/3.5.4/Python-3.5.4.tgz
```
### 创建Python3的目录 ###
```
mkdir /usr/local/python3 
```
### 解压下载文件并进入解压后目录 ###
```
tar -zxvf Python-3.5.4.tgz
cd Python-3.5.4
```
### 执行自定义安装 ###
```
./configure --prefix=/usr/local/python3
make && make install
```
### 创建软链接 ###
```
ln -s /usr/local/python3/bin/python3 /usr/bin/python3
ln -s /usr/local/python3/bin/pip3 /usr/bin/pip3
```
### 测试命令 ###
```
python3 -V
pip3 -V
```
## 安装jupyter ##
### 更新pip ###
```
pip3 install --upgrade pip
```
### 安装jupyter ###
```
pip3 install jupyter
```
### 生成配置文件 ###
```
jupyter notebook --generate-config
```
### 使用systemd ###
生成秘钥有两种方式，这里统一介绍下：

1. 直接在命令行执行
```
jupyter notebook password  # 自己造一个密码输入一确认一次
```
```
vim ~/.jupyter/jupyter_notebook_config.json
```
2. 先进入python环境，执行
```
from notebook.auth import passwd 
passwd() 
# 此时会让你两次输入密码（该密码作为客户端登录jupyter用），然后就会生成秘钥 （秘# 钥作为配置文件用） 
```
记下密钥，sha1:03c74e2b144e:7…
### 编辑配置文件 ###
```
vim ~/.jupyter/jupyter_notebook_config.py
```
修改以下几项
```
c.NotebookApp.ip='*'                                  # 就是设置所有ip皆可访问  
c.NotebookApp.password = u'sha1:03...'       # 刚才复制的那个密文'  
c.NotebookApp.open_browser = False       # 禁止自动打开浏览器  
c.NotebookApp.port =1234                         #随便指定一个端口  
```
设置端口后要记得开放端口才能使用，具体过程可参考[CentOS防火墙配置](https://blog.yinuxy.com/post/Experience/centosFirewall/)
### 启动 ###
```
jupyter notebook --allow-root --ip=0.0.0.0
```
## 将Jupyter远程服务设置为守护进程 ##
### 使用systemd ###
1. 编写`jupyter`启动脚本,在`/usr/sbin`目录下新建`jupyter.sh`文件
```
sudo vim /usr/sbin/jupyter.sh
```
在`jupyter.sh`中写入
```
#!/bin/sh
jupyter notebook --allow-root --ip=0.0.0.0
```
此时创建的脚本文件还没有执行权限，所以执行下面这条命令
```
sudo chmod +x /usr/sbin/jupyter.sh
```
2. 编写守护进程配置文件:守护进程的配置文件存放在`/usr/lib/systemd/system/`目录下，在该目录下新建`jupyter.service`文件
```
sudo vim /etc/systemd/system/jupyter.service  // centos
sudo vim /etc/systemd/system/jupyter.service .       // ubuntu
```
打开`jupyter.service`文件并写入
```
[Unit]
Description = remote jupyter
After = network.target

[Service]
Type=simple
ExecStart=/usr/sbin/jupyter.sh

[Install]
WantedBy=multi-user.target
```
3. 启动进程:v启动进程主要用到`systemctl`相关命令
```
# 重新加载配置文件
systemctl daemon-reload
# 启动进程
systemctl start jupyter.service
```
相关命令：
```
systemctl start ctlist    # 启动
systemctl stop ctlist     # 停止
systemctl restart ctlist  # 重启
systemctl status ctlist   # 查看状态
```
###  使用 nohup ###
1. 创建启动文件
```
vim /usr/sbin/jupyter.sh
```
2. 写入启动命令
```
nohup jupyter notebook --allow-root --ip=0.0.0.0 > deep.log &
```
3. 运行启动文件
```
./jupyter.sh
```

## 绑定域名 ##
> 提示：有宝塔面板的直接使用宝塔就行，没有的就可以使用caddy，2选1即可。
### 宝塔面板 ###
先进入宝塔面板，然后点击左侧网站，添加站点，再点击添加好了的域名名称，这时候就进入了站点配置，点击反向代理，目标`URL`填入`http://127.0.0.1:8000`，不要设置缓存，再启用反向代理即可。

如果要启用`SSL`，就需要在设置反向代理之前，直接在站点配置点击`SSL`，申请免费`let`证书，然后再启用反代即可。

### Caddy绑定 ###
安装`Caddy`：
```
wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubiBackup/doubi/master/caddy_install.sh && chmod +x caddy_install.sh && bash caddy_install.sh
#备用地址
wget -N --no-check-certificate https://www.moerats.com/usr/shell/Caddy/caddy_install.sh && chmod +x caddy_install.sh && bash caddy_install.sh
```
配置`Caddy`：
```
#以下全部内容是一个整体，请修改域名后一起复制到SSH运行！

#http访问，该配置不会自动签发SSL
echo "jupyter.yinuxy.com {
 gzip
 tls admin@yinuxy.com
 proxy / 127.0.0.1:1234
}" > /usr/local/caddy/Caddyfile

#https访问，该配置会自动签发SSL，请提前解析域名到VPS服务器
echo "jupyter.yinuxy.com {
 gzip
 tls admin@yinuxy.com
 proxy / 127.0.0.1:1234
}" > /usr/local/caddy/Caddyfile
```
启动`Caddy`：
```
/etc/init.d/caddy start
```
就可以打开域名进行访问了。

