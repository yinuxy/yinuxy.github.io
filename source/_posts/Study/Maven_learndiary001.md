---
layout: post
date: 2020/02/14 19:43:16 
title: Maven学习心得（情人节快乐！）
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: Docker

thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/thumbnail/maven.jpg

mathjax: true

---

> <center><font  size = "5" color = "#1BC3FB"  face = "楷体">Maven学习心得（祝天下码农终成眷属！）</font></center>

<!-- more -->
# Maven介绍及环境搭建 #

## Maven是什么 ##
1. Maven是基于项目对象模型(POM)，可以通过一小段描述信息来管理项目的构建，报告和文档的项目管理工具软件。
2. Maven 除了以程序构建能力为特色之外，还提供高级项目管理工具。由于 Maven 的缺省构建规则有较高的可重用性，所以常常用两三行 Maven 构建脚本就可以构建简单的项目。由于 Maven 的面向项目的方法，许多 Apache Jakarta 项目发文时使用 Maven，而且公司项目采用 Maven 的比例在持续增长。
3. Maven这个单词来自于意第绪语（犹太语），意为知识的积累，最初在Jakata Turbine项目中用来简化构建过程。当时有一些项目（有各自Ant build文件），仅有细微的差别，而JAR文件都由CVS来维护。于是希望有一种标准化的方式构建项目，一个清晰的方式定义项目的组成，一个容易的方式发布项目的信息，以及一种简单的方式在多个项目中共享JARs。

## Maven环境搭建 ##
参考[maven 安装以及环境变量配置](https://blog.csdn.net/qq_28289405/article/details/88305269)

# Maven案例创建 #

## Maven目录结构 ##
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/Learndiary/Maven001/output_1.png)
1. 首先创建文件夹命名为`src`
2. 在`src`目录下分别创建子目录`main`和`test`
3. 在`main`和`test`目录下各创建一个子目录`java`

## 创建HelloMaven ##
1. 在`main`目录的`java`目录下创建如下目录并创建`HellowWorld.java`Java类文件
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/Learndiary/Maven001/output_2.png)
```
public class HelloWorld {
    public String sayHello(){
        return "Hello World!";
    }
}
```
2. 在`test`目录的`java`目录下创建如下目录并创建`testHello.java`Java类文件
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/Learndiary/Maven001/output_3.png)
```
import org.junit.*;
import org.junit.Assert.*;
public class HellOWorldTest {
    @Test
    public void testHello() {
        Assert.assertEquals("Hello World!",new HelloWorld().sayHello());
    }
}
```
3. 在`src`根目录下创建`pom.xml`编写代码如下：
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/Learndiary/Maven001/output_4.png)
```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0http://maven.apache.org/xsd/maven-4.0.0.xsd">  
  
    <!-- 模型版本。maven2.0必须是这样写，现在是maven2唯一支持的版本 -->  
    <modelVersion>4.0.0</modelVersion>  
  
    <!-- 公司或者组织的唯一标志，并且配置时生成的路径也是由此生成， 如com.winner.trade，maven会将该项目打成的jar包放本地路径：/com/winner/trade -->  
    <groupId>com.study</groupId>  
  
    <!-- 本项目的唯一ID，一个groupId下面可能多个项目，就是靠artifactId来区分的 -->  
    <artifactId>study-model</artifactId>  
  
    <!-- 本项目目前所处的版本号 -->  
    <version>1.0.0-SNAPSHOT</version>  
  
    <!-- 打包的机制，如pom,jar, maven-plugin, ejb, war, ear, rar, par，默认为jar -->  
    <packaging>jar</packaging>  

    <!-- 定义本项目的依赖关系 -->  
    <dependencies>  
  
        <!-- 每个dependency都对应这一个jar包 -->  
        <dependency>  
            <!--一般情况下，maven是通过groupId、artifactId、version这三个元素值（俗称坐标）来检索该构件， 然后引入你的工程。如果别人想引用你现在开发的这个项目（前提是已开发完毕并发布到了远程仓库），-->   
            <!--就需要在他的pom文件中新建一个dependency节点，将本项目的groupId、artifactId、version写入， maven就会把你上传的jar包下载到他的本地 -->  
            <groupId>junit</groupId>  
            <artifactId>junit</artifactId>  
            <version>4.10</version>
        </dependency>  
    </dependencies>  

</project>  
```
4. 打开命令提示行，进入到HelloWorld项目的根目录中输入`mvn compile`回车运行对该项目进行编译（如果是第一次运行Maven会在运行之前下载很多第三方的插件和Maven所依赖的jar）.
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/Learndiary/Maven001/output_5.png)
出现`BUILD SUCCESS`即表示项目运行成功~
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/Learndiary/Maven001/output_6.png)
5. 运行测试例，输入`mvn test`:
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/Learndiary/Maven001/output_7.png)
测试例成功运行，并且无任何报错~
6. 接下来看一下项目的根目录下会有哪些变化：
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/Learndiary/Maven001/output_8.png)
它默认生成了一个`target`文件夹，打开它，在`classes`目录下存放着生成的字节码文件;`surefire-reports`下存放着生成的测试报告；
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/Learndiary/Maven001/output_9.png)
7. 下面再去命令行键入`mvn package`：
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/Learndiary/Maven001/output_10.png)
完美运行！
可以看到在`target`目录下生成了一个`study-model-1.0.0-SNAPSHOT.jar`的jar包
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/img/Learndiary/Maven001/output_11.png)




