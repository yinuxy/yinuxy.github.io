---
layout: post
date: 2019-07-14 08:30:00
title: windows环境下搭建spark开发环境(IDEA)
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: 大数据
tag:
  - 大数据
  - spark
	
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.13/thumbnail/spark.jpg
mathjax: true


---

“大数据”（Big Data）指一般的软件工具难以捕捉、管理和分析的大容量数据。“大数据”之“大”，并不仅仅在于“容量之大”，更大的意义在于：通过对海量数据的交换、整合和分析，发现新的知识，创造新的价值，带来“大知识”、“大科技”、“大利润”和“大发展”。“大数据”能帮助企业找到一个个难题的答案，给企业带来前所未有的商业价值与机会。大数据同时也给企业的IT系统提出了巨大的挑战。通过不同行业的“大数据”应用状况，我们能够看到企业如何使用大数据和云计算技术，解决他们的难题，灵活、快速、高效地响应瞬息万变的市场需求。

<!-- more -->

# 前言 #

----------
本文重点介绍在如何Windows 10下开发spark应用程序的依赖环境的搭建。

# 本章概要 #

----------
1. 版本说明
2. 环境配置
	- jdk配置
	- scala安装配置
	- spark安装配置
	- hadoop安装配置
	- Intellij IDEA下载与配置

# 版本说明 #
----------
1. jdk:1.8
2. scala:2.12.0
3. spark:2.4.3
4. hadoop:2.7.7

# 环境配置 #
----------
## jdk配置 ##

1. 下载：登录[Oracle官网](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)，接受协议，注册登录，选择对应版本。因为我的本机是64位Windows，所以需要下载64位（Windows x64）JDK安装包。 
<center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/jdkdownload.png)</fancybox></center>
2. Windows下安装JDK非常方便，双击安装程序后，直接单击下一步即可，默认安装到`
C:\Program Files\Java`目录下。其间会安装JRE，默认一下步即可。
3. 设置环境变量 :右键单击桌面上的“此电脑”图标，在弹出的右键快捷菜单中选择最后一个“属性”选项；在弹出的系统窗口中，单击左侧“高级系统设置”选项，弹出“系统属性”对话框，如下图。 <center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/jdkpath.png)</fancybox></center>然后单击中间的“高级”选项卡，再单击下方的“环境变量(N)…”按钮。在弹出的环境变量对话框中，首先单击下方的“新建（W）…”按钮，然后在弹出的新建环境变量中输入对应的值。 <center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/jdkpath1.png)</fancybox></center>在环境变量中找到“Path”添加jdk和jre下bin的地址，如下图：<center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/jdkpath2.png)</fancybox></center>新建`CLASS_PATH`，如下图：<center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/jdkpath3.png)</fancybox></center>检验配置是否成功，在cmd中运行java -version出现以下结果则说明jdk安装配置成功。<center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/jdkpath4.png)</fancybox></center>

## scala安装配置 ##
1. 下载：通过[Spark官网下载](http://spark.apache.org/downloads.html)页面 可知“Note: Starting version 2.0, Spark is built with Scala 2.11 by default.”，下载Spark2.4.3对应的 `Scala 2.12.x`。登录[Scala官网](http://www.scala-lang.org/)，单击download按钮，然后再“Other Releases”标题下找到“Last 2.12.x maintenance release - Scala 2.12.0”链接。进入[downloan](http://www.scala-lang.org/download/2.12.0.html)页面，下拉找到如下图内容，下载msi格式的安装包即可。<center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/scaladownload.png)</fancybox></center>
2. 安装: 默认安装到`C:\Program Files (x86)\scala`目录下<center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/sparkinstall.png)</fancybox></center>
3. 环境变量：与设置Java环境变量类型， `SCALA_HOME=C:\Program Files (x86)\scala` `Path`环境变量在最后追加;设置成功后在`win+R`输入`cmd`后打开命令行输入`scala -version`可以看到安装的版本`%SCALA_HOME%\bin `；<center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/scalainstalled.png)</fancybox></center>

## 安装Maven ##
1. Maven的安装与配置可以参考：《[Hadoop基础教程-第4章 HDFS的Java API（4.1 Maven入门）](https://blog.csdn.net/chengyuqiang/article/details/72082149)》`Intellij IDEA`上自带Maven，本文不再详细介绍
## Intellij IDEA下载与配置 ##
1. 下载与安装：登录[官网](https://www.jetbrains.com/idea/download/)，按照自己的需求下载（`ultimate`，旗舰版）或者（`Community`，社区版）。`Ultimate`版本是商业软件，需要付费，`Community` 版为免费版，足够平时日常开发需要。比如这里直接下载`Community`<center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/Intellij%20IDEA.png)</fancybox></center>
2. 启动，安装完成后，单击`IntelliJ IDEA`图标即可启动`IntelliJ IDEA`. 由于是第一次安装，所以不需要导入配置。默认选项即可。<center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/ideaconfig.png)</fancybox></center>
3. 选择“Evaluate for free”进入免费版<center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea3.png)</fancybox></center>可以根据自身的习惯选择风格，并点击左下角“`Skip Remaining and Set Default”`<center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/Idea4.png)</fancybox></center>
4. 安装`scala`插件：点击左下角：`Configure->Plugins` 搜索并安装scala<center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea5.png)</fancybox></center><center><fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea6.png)</fancybox></center>安装完成后重启IDEA，然后开始配置全局scala SDK<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea7.png)</fancybox></center>
5. 配置JDK： 首先打开`Project Structure`，如下图然后我们添加上文安装的JDK，配置完成后点击OK，如下图：<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea8.png)</fancybox></center>
6. 配置JDK 配置全局scala SDK：选中“`Global Libraries`”，点击“+”号，在弹出的菜单中选中“Scala SDK”，如下图：<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea9.png)</fancybox></center>在弹出的“`Select JAR's for the new Scala SDK`”中选择与本机scala版本一致的Version，在这里由于我的scala版本是2.12.0 所以我选择的是2.12.0版本<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea10.png)</fancybox></center>点击右下角OK完成配置
## 创建Maven项目 ##
1. 单击“`Create New Project`”<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea11.png)</fancybox></center>选择maven<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea12.png)</fancybox></center>点击`Next`，填写`GroupID`和`ArtifactID`<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea13.png)</fancybox></center>点击Next，如下图：<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea14.png)</fancybox></center>点击Finish，如下图：(在此步骤可以更改Content root 和 Module file location 的路径)<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea15.png)</fancybox></center>创建完后右下角如果出现提示：<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea16.png)</fancybox></center>请点击`Enable Auto-Import`
2. 创建完后将scala框架添加到项目(若不设置有可能无法创建 scala class)：在IDEA启动后进入的界面中，可以看到界面左侧的项目界面，已经有一个名称为simpleSpark的工程。请在该工程名称上右键单击，在弹出的菜单中，选择`Add Framework Surport `，在左侧有一排可勾选项，找到scala，勾选即可</fancybox></center>（我的这里没有找到，但是也能运行，为了确保无误，借用[haijiege](https://blog.csdn.net/haijiege/article/details/80775792)的图）<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea17.png)
3. 将项目文件设置为source root ，选中scala–>右键`快捷菜单`–>`Mark Directory as` –>`Sources root `<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea18.png)</fancybox></center>	

## 编辑代码 ##
1. pom.xml
Spark2.4.3 Maven库请参见 [https://mvnrepository.com/artifact/org.apache.spark/spark-core_2.12/2.4.3](https://mvnrepository.com/artifact/org.apache.spark/spark-core_2.12/2.4.3)


```

    <modelVersion>4.0.0</modelVersion>
    <groupId>Test.pack</groupId>
    <artifactId>SparkTest</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>
    <inceptionYear>2008</inceptionYear>
    <properties>
        <spark.version>2.4.3</spark.version>
        <scala.version>2.12.0</scala.version>
    </properties>

    <repositories>
        <repository>
            <id>nexus-aliyun</id>
            <name>Nexus aliyun</name>
            <url>http://maven.aliyun.com/nexus/content/groups/public</url>
        </repository>
    </repositories>

    <pluginRepositories>
        <pluginRepository>
            <id>scala-tools.org</id>
            <name>Scala-Tools Maven2 Repository</name>
            <url>http://scala-tools.org/repo-releases</url>
        </pluginRepository>
    </pluginRepositories>

    <dependencies>
        <!-- https://mvnrepository.com/artifact/org.apache.spark/spark-core -->
        <dependency>
            <groupId>org.apache.spark</groupId>
            <artifactId>spark-core_2.12</artifactId>
            <version>2.4.3</version>
        </dependency>

        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.4</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.specs</groupId>
            <artifactId>specs</artifactId>
            <version>1.2.5</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <artifactId>maven-assembly-plugin</artifactId>
                <version>2.2-beta-5</version>
                <configuration>
                    <classifier>dist</classifier>
                    <appendAssemblyId>true</appendAssemblyId>
                    <descriptorRefs>
                        <descriptor>jar-with-dependencies</descriptor>
                    </descriptorRefs>
                </configuration>
                <executions>
                    <execution>
                        <id>make-assembly</id>
                        <phase>package</phase>
                        <goals>
                            <goal>single</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>

```

1. 保存pom.xml文件后，如果Intellij IDEA右下角出现如下提示，请单击“`Enable Auto-Import`” <fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea16.png)</fancybox></center>

2. WordCount.scala :新建`Scala Class`类`WordCount.scala`，Scala源文件后缀名是.scala。通过右键刚刚设置为`sources root`的scala文件夹，就有了`new`->`scala class`的选项。新建一个`scala class`，并且命名`WordCount`，选择object类型。打开建好的`WordCount.scala`文件，清空！然后黏贴以下代码：




# 程序运行 #
----------
## 文件 ##

### 数据文件 ###
[sampleDataSet](http://fff)

### 程序文件 ###
[WordCount](http://fff)
## 运行 ##
在源文件代码中右键单击–>Run “`WordCount`”<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea19.png)</fancybox></center>


运行结果如下（输出的信息较多请上下翻一下就能找到）<fancybox>![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/spark-init/idea20.png)</fancybox></center>
