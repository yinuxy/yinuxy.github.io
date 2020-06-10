---
layout: post
date: 2019-10-9 20:30:00
title: POJ 1067-取石子游戏
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: ACM解题报告
tags:
  - Wythoff's game
  - ACM


thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.13/thumbnail/algorithm.jpg
mathjax: true


---

> <center><font  size = "5" color = "RED"  face = "楷体">威佐夫博弈（Wythoff Game）/巴什博弈（Bash Game）</font></center>

<!-- more -->

## Description ##

<center><strong>Time Limit: 1000MS		Memory Limit: 10000K</strong></center>
<center><strong>Total Submissions: 1		Accepted: 1</strong></center>
有两堆石子，数量任意，可以不同。游戏开始由两个人轮流取石子。游戏规定，每次有两种不同的取法，一是可以在任意的一堆中取走任意多的石子；二是可以在两堆中同时取走相同数量的石子。最后把石子全部取完者为胜者。现在给出初始的两堆石子的数目，如果轮到你先取，假设双方都采取最好的策略，问最后你是胜者还是败者。




## Input ##

输入包含若干行，表示若干种石子的初始情况，其中每一行包含两个非负整数a和b，表示两堆石子的数目，a和b都不大于1,000,000,000。


## Output ##
输出对应也有若干行，每行包含一个数字1或0，如果最后你是胜者，则为1，反之，则为0。


## Sample Input ##

2 1
8 4
4 7

## Sample Output ##
0
1
0

## 	Source ##

[NOI](http://poj.org/searchproblem?field=source&key=NOI)
## 解题思路 ##

[威佐夫博弈（Wythoff's game）](https://baike.baidu.com/item/%E5%A8%81%E4%BD%90%E5%A4%AB%E5%8D%9A%E5%BC%88/19858256?fromtitle=%E5%A8%81%E4%BD%90%E5%A4%AB%E5%8D%9A%E5%A5%95&fromid=7139745&fr=aladdin)，是ACM题中常见的组合游戏中的一种，大致上是这样的：
比如有两堆石子，先设定一堆有 10，另一堆有 15 个，双方轮流取走一些石子，合法的取法有如下两种：
1. 在一堆石子中取走任意多颗；
2. 在两堆石子中取走相同多的任意颗；

约定取走最后一颗石子的人为赢家，求必胜策略。
有两堆各若干个物品，两个人轮流从某一堆或同时从两堆中取同样多的物品，规定每次至少取一个，多者不限，最后取光者得胜。如果甲面对（0，0），那么甲已经输了，这种局势我们称为奇异局势。前几个奇异局势是：（0，0）、（1，2）、（3，5）、（4，7）、（6，10）.可以看出,a0=b0=0,ak是未在前面出现过的最小自然数,而 bk=ak+k. 那么任给一个局势（a，b），怎样判断它是不是奇异局势呢？
我们有如下公式：
 ak =[k（1+√5）/2]，bk= ak + k （k=0，1，2，...,n 方括号表示取整函数)
奇妙的是其中出现了黄金分割数（1+√5）/2 = 1。618...,因此,由ak，bk组成的矩形近似为黄金矩形，由于2/（1+√5）=（√5-1）/2，可以先求出j=[a（√5-1）/2]，若a=[j（1+√5）/2]，那么a = aj，bj = aj + j，若不等于，那么a = aj+1，bj+1 = aj+1+ j + 1，若都不是，那么就不是奇异局势。然后再按照上述法则进行，一定会遇到奇异局势。
### 奇异局势的性质 ###
1. 任何自然数都包含在一个且仅有一个奇异局势中。
由于a[k]是未在前面出现过的最小自然数，所以有a[k] > a[k-1] ，而 b[k]= a[k] + k > a[k-1] + k > a[k-1] + k - 1 = b[k-1] > a[k-1] 。所以性质1成立。
2. 任意操作都可将奇异局势变为非奇异局势。
事实上，若只改变奇异局势（a[k]，b[k]）的某一个分量，那么另一个分量不可能在其他奇异局势中，所以必然是非奇异局势。如果使（a[k]，b[k]）的两个分量同时减少，则由于其差不变，且不可能是其他奇异局势的差，因此也是非奇异局势。
3. 采用适当的方法，可以将非奇异局势变为奇异局势。
假设面对的局势是（a,b），若 b = a，则同时从两堆中取走 a 个物体，就变为了奇异局势（0，0）；如果a = a[k] ，b > b[k] 那么，取走b - b[k]个物体，即变为奇异局势；如果 a = a[k] ， b < b[k] 则同时从两堆中拿走a-a[b-a]（注：这里b-a是a的下标， 不是a*(b-a)） 个物体变为奇异局势（ a[b-a], b-a+a[b-a]）；如果a > a[k] ，b= a[k] + k 则从第一堆中拿走多余的数量a - a[k] 即可；如果a < a[k] ，b= b[k],分两种情况，第一种，a=a[n] （n< k）从第二堆里面拿走 b - b[n] 即可；第二种，a=b[n] （n < k）从第二堆里面拿走 b - a[n] 即可。


## 源码 ##

### Python ###
```
from math import sqrt
import sys

def solution(a ,b):
    a = int(a)
    b = int(b)
    if a<b :
        a ^= b
        b ^= a
        a ^= b
    k = a - b
    a = int(k * (1 + sqrt(5)) / 2.0)
    if a == b:
        print("0\n")
    else:
        print("1\n")

for line in sys.stdin:
    line = line.strip()
    a, b = line.strip().split(' ')
    solution(a, b)
```

### C ###
```
#include<iostream>
#include<cstdio>
#include<cstring>
#include<cmath>
 
using namespace std;
 
int a,b;
 
int main(){
 
    //freopen("input.txt","r",stdin);
 
    while(~scanf("%d%d",&a,&b)){
        if(a<b){
            a^=b;
            b^=a;
            a^=b;
        }
        int k=a-b;
        a=(int)(k*(1+sqrt(5))/2.0);
        if(a==b)
            printf("0\n");
        else
            printf("1\n");
    }
    return 0;
```