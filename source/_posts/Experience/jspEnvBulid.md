---
layout: source/_post/Course
title: Windows(10)环境下搭建JSP开发环境
date: 2019-09-4 08:30:00
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories:
 - 网站开发
tags:
  - JSP
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.13/thumbnail/jsp.jpg
mathjax: true


icons: [fas fa-star yellow, fas fa-fire accent]
---

JSP是Java Server Page的缩写，是由Sun Microsystems公司主导创建的一种动态网页技术标准。JSP部署于网络服务器上，可以响应客户端发送的请求，并根据请求内容动态地生成HTML、XML或其他格式文档的Web网页，然后返回给请求者。JSP技术以Java语言作为脚本语言，为用户的HTTP请求提供服务，并能与服务器上的其它Java程序共同处理复杂的业务需求。目前，JSP已经成为开发动态网站的主流技术。
<!-- more -->



# 安装配置JSP运行环境 #
## 一、  安装配置JDK ##
进入[JDK官网](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)选择Java SE Development Kit 8u172，根据自己的电脑选择32位或者64位进行下载。
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_1.png)
具体配置教程参考[《java环境变量 的配置与详解（全网最详细教程）》](https://blog.csdn.net/qq_41436122/article/details/82620080?utm_source=distribute.pc_relevant.none-task)


## 二、  安装配置Tomcat ##
1、进入[Tomcat官网](https://tomcat.apache.org/download-90.cgi)安装下载,点击“32-bit/64-bit Windows Service Installer (pgp, sha512)”。
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_29.png)
2、下载完毕后，就可以在需要编译和运行Java程序的计算机安装Tomcat服务器，具体步骤如下：
（1）   双击“apache-tomcat-9.0.24.exe”文件开始安装。在弹出的安装向导对话框中，单击“Next”按钮，将弹出如下图所示的“许可协议”对话框。![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_2.png)
一直next就行

（2）   这里采用默认的组件安装，如果不懂就按默认的设置。
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_3.png)


（3）   这里是Tomcat默认的端口号，不喜欢这个可以自己设置成别的，但是千万别与系统端口号重复！
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_4.png)
（4）接下来就一直next就行，路径默认就行。
## 三、 Tomcat环境变量Catalina_Home配置 ##
1、CATALINA_HOME是TOMCAT安装路径的别名，目的是为了方便使用TOMCAT


2、计算机>属性>环境变量, 新建环境变量。变量名为CATALINA_HOME ,变量值tomcat的解压目录，我电脑上的为：“D:\Function\Apache Software Foundation\Tomcat 9.0”，注意后面不用多加“\”或者“;”
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_5.png)


3、在环境变量Path中，新增加“%CATALINA_HOME%\bin\”
4、打开你放置刚才下载的Tomcat的bin目录，找到“startup.bat”文件双击，然后就会弹出一个DOS窗口显示Tomcat启动的进程状态。
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_6.png)


![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_7.png)

5、测试Tomcat是否配置成功：打开浏览器，输入在地址栏中输入：[localhost:8080](http://localhost:8080)运行结果如下图所示即为配置成功！（因为Tomcat已经在运行再次打开会报错）
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_8.png)
6、关闭tomcat:进入命令行cmd，输入shutdown.bat


## 四、Eclipse的安装配置 ##
1、进入[eclipse官网](https://www.eclipse.org/)下载eclipse-inst-win64.exe
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_9.png)

根据自己的系统版本选择镜像下载
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_10.png)
选择国内镜像下载

2、运行eclipse-inst-win64.exe
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_11.png)

选择第一个
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_12.png)
选择Java目录和eclipse安装目录，然后点击install

3、安装完成后打开eclipse
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_13.png)
如果新建项目中没有Web选项，这时候就需要我们自己去添加web插件

4、添加Web插件：依次点击【Help】->【Install New Software】，在【work with】下拉框中选择自己的eclipse版本
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_14.png)
在下面的下拉框中勾选 Web, XML, Java EE and OSGi Enterprise Development；

然后点击next，耐心等待下载
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_15.png)
在这一步的时候点击同意，然后点击finish

安装这几个插件，耐心等待........安装完成之后，会自动弹出对话框让你重启eclipse，重启下就行，此时，就可以新建web项目了
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_16.png)

## 五、新建jsp文件 ##

1、新建jsp文件：依次点击【File】->【New】->【Project】；在弹出的列表中点击Web，选择 【Dynamic Web Project】
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_17.png)

然后点击【Next】输入项目名，然后点击【Finish】
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_18.png)

然后打开创建的项目，选择【WebContent】右键新建【JSP File】
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_19.png)

新建的文件报错
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_20.png)

接下来添加Tomcat：点击【Server】，再点击蓝色字体，在弹出的列表框中点击【Apache】，选择你安装的Tomcat，这里我安装的是【Tomcat v9.0.24】，然后点击next
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_23.png)

右键点击项目—>【Build Path】—>【Configure Build Path】
点击【libraries】->【Add Library】->【Server Runtime】->【Next】->【Finish】->【Apply and Close】
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_21.png)

接下来更改编码：导航栏点击【Windows】->【Preference】->【JSP File】 Encoding选择“UTF-8”，然后点击应用并关闭
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_22.png)

在这里需要选择安装的Tomcat的文件路径，填好后点击Next
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_24.png)

点击创建的项目名即可添加到配置中，然后点击Finish
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_25.png)

接下来就可以创建一个简单的JSP实例来测试拉；
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_26.png)


```
<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
 
<%
	//计算1-100之间的和,并输出 到客户端浏览器中 
	int sum=0;
	for(int i=1;i<=100;i++)
		sum+=i;
	out.print("1-100的和为："+sum+"\n");
 %>
 
 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'GreetingJsp.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
 
  </head>
  
  <body>
    	<br>这是我的第一个JSP页面 <br>
    
    <table>
    	<tr>
    		 <td>7</td>
    		 <td>8</td>
    		 <td>9</td>
    	</tr>
    	<tr>
    		 <td>4</td>
    		 <td>5</td>
    		 <td>6</td>
    	</tr>
    	<tr>
    		 <td>1</td>
    		 <td>2</td>
    		 <td>3</td>
    	</tr>
    </table>
  </body>
</html>
```

右键【Run As】->【Run on Server】
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_27.png)
运行成功！一个简单的JSP页面就生成啦

复制蓝色背景内的链接，打开浏览器即可预览啦
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/jspone/output_28.png)
<br>
