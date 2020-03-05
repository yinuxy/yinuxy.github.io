---
layout: post
date: 2019-07-18 08:30:00

title: SQL学习日记（一）
author: 
  name: YINUXY'S BLOG
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: 数据库

tag:
  - 数据库
  - SQL
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/thumbnail/SQL.jpg
mathjax: true


---


![](http://www.raincent.com/uploadfile/2015/1206/20151206103021361.jpg)

<!-- more -->

## 数据库的好处 ##
	1.持久化数据到本地
	2.可以实现结构化查询，方便管理
	


## 数据库相关概念 ##
1、DB：数据库，保存一组有组织的数据的容器
2、DBMS：数据库管理系统，又称为数据库软件（产品），用于管理DB中的数据
3、SQL:结构化查询语言，用于和DBMS通信的语言

## 数据库存储数据的特点 ##
1、将数据放到表中，表再放到库中
2、一个数据库中可以有多个表，每个表都有一个的名字，用来标识自己。表名具有唯一性。
3、表具有一些特性，这些特性定义了数据在表中如何存储，类似java中 “类”的设计。
4、表由列组成，我们也称为字段。所有表都是由一个或多个列组成的，每一列类似java 中的”属性”
5、表中的数据是按行存储的，每一行类似于java中的“对象”。



## MySQL服务的启动和停止 ##
方式一：计算机——右击管理——服务
方式二：通过管理员身份运行
```
net start 服务名（启动服务）
net stop 服务名（停止服务）
```

## MySQL服务的登录和退出 ##   
方式一：通过mysql自带的客户端
只限于root用户

方式二：通过windows自带的客户端
登录：
```
mysql 【-h主机名 -P端口号 】-u用户名 -p密码
```

退出：
exit或ctrl+C


	
	
	
## MySQL的常见命令 ## 

1.查看当前所有的数据库
```
show databases;
```
2.打开指定的库
```
use 库名
```
3.查看当前库的所有表

```
show tables;
```
4.查看其它库的所有表
```
show tables from 库名;
```
5.创建表
```
create table 表名(

	列名 列类型,
	列名 列类型，
	。。。
);
```
6.查看表结构
```
desc 表名;
```

7.查看服务器的版本
方式一：登录到mysql服务端

```
select version();
```
方式二：没有登录到mysql服务端
```
mysql --version
或
mysql --V
```


## MySQL的语法规范 ##
1.不区分大小写,但建议关键字大写，表名、列名小写
2.每条命令最好用分号结尾
3.每条命令根据需要，可以进行缩进 或换行
4.注释
   单行注释：#注释文字
   单行注释：-- 注释文字
   多行注释：/* 注释文字  */
	
	
	


## SQL的语言分类 ##
DQL（Data Query Language）：数据查询语言
	select 
DML(Data Manipulate Language):数据操作语言
	insert 、update、delete
DDL（Data Define Languge）：数据定义语言
	create、drop、alter
TCL（Transaction Control Language）：事务控制语言
	commit、rollback
	



## SQL的常见命令 ##
```
show databases； 查看所有的数据库
use 库名； 打开指定 的库
show tables ; 显示库中的所有表
show tables from 库名;显示指定库中的所有表
create table 表名(
	字段名 字段类型,	
	字段名 字段类型
); 创建表

desc 表名; 查看指定表的结构
select * from 表名;显示表中的所有数据
```
## SQL实例 ##
```
-- select department_name from departments

-- select * from departments where department_name = 'Con'

-- select * from departments where department_name = 'Con' or location_id = 1700

-- select distinct location_id from departments;

-- select department_id from departments where location_id in (1700)	

-- select department_id from departments where department_name like '%Con%'

-- select count(depart) from departments;

-- insert into departments(department_id, department_name, manager_id, location_id) values(290, 'Xrh', 117, 1100)

-- update departments set manager_id = 512 where department_name = 'Gov'

-- DELETE from departments where department_id = 290;

-- CREATE table person(
-- 	username varchar(10),
-- 	usergender varchar(6),
-- 	userage int(4),
-- 	primary key(username)
-- );

-- drop table person;
```