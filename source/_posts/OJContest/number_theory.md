---
layout: post
date: 2019-09-20 20:30:00
title: Comet OJ - Contest  \#11 eon题解
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: Algorithm
tag:
  - 数论
  - ACM


thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.13/thumbnail/algorithm.jpg
mathjax: true


---

> <center><font  size = "5" color = "#1BC3FB"  face = "楷体">在一上来动不动就用循环体我就剁手！</font></center>

<!-- more -->

## 题目描述 ##

「这次练习用的数也太大了吧，我怎么记得住。」线段树小声嘀咕着，「我用所有的手指也只能数到 10231023 。」

「这可不是数据结构会作出的发言。」链表指引着面前的少女把数写进她的本体——一棵二叉树的图样中。有光自最浅的节点倾泻而下。「接下来你应该把这个十进制数按数位拆开，重新排列出一个最大的数，然后算出这个数和原数的差。」她正要问线段树是否听懂了任务，却被线段树的发问打断了。

「上一代数据结构，他们会区间排序，能轻松地击溃那些题目，是这样吗？他们于代码的溪流中降生，在算法的庇佑下抽枝长叶，以天赐的技巧征服了我们一代至今无法涉足的外界，是这样吗？」

链表沉默半晌，转移了话题：「你还不会输出，那便直接告诉我练习的答案对 10 取模的值。」

你对这个种族的历史毫无兴趣，只想知道练习题的答案，也就是说——

***

### 简洁题意： ###

对于一个数 nn ，记 mm 为把 nn 的各数位重排序得到的最大的数，求 m-nm−n 对 1010 取模的值(也就是 m-nm−n 除以 10 的余数)。

举例来说，当 n=213 时， 各数位重排序有 123、132、213、231、312、321 六种可能，其中最大的数字是 321 ，所以 m=321，输出的答案即为 (m-n) = 108 对 10 取模的结果，也就是 8。

## 输入描述 ##

一行一个整数 n (0 < n < 10<sup>10<sup>6</sup></sup> ,也就是说 n 是位数不超过 10n<sup>6</sup> 的正整数。)。

## 输出描述 ##
一个整数，表示答案。


样例输入 1 | 样例输出 1
-|-
213 | 8

样例解释 1
此样例的解释在题目描述里。

样例输入 2 | 样例输出 2
-|-
71806291 | 9

样例解释 2
答案为 98762110−71806291=26955819≡9(mod10) 。

样例输入 2 | 样例输出 2
-|-
12345678912345678912345 | 6

样例解释 3
请特别注意， n 的值可能非常大，无法用 32-bits 或 64-bits 整数储存。

## 解题思路 ##

<font  size = "4" color = "000000"  face = "黑体">一看到这个题第一眼我以为就是卡数据想都没想就选了Python用了两个循环就交了，结果当然是WA了，结果卡出1900ms，后来仔细审了下题，因本题数据非常大，而且所求只与数位有关，然后结果就是最大数的最低位（即原数的数位的最小值）和原数最低位的差。这样它的时间复杂度就为O(n)。</font>

## 源码 ##

### Python ###
```
num = input()
num = list(num)
for i in num:
    i = int(i)
minnum = min(num)
print((int(minnum) - int(num[len(num)-1]))%10)
```

### C ###
```
#include <bits/stdc++.h>
 
using namespace std;
typedef unsigned long long ull;
const int N=1e7;
int a[N];
int main(){
    string s;
    cin>>s;
    int x=s.size();
    int y;
    y=s[x-1]-'0';
    int minn=0x3f3f3f3f;
    for(int i=0;i<s.size();i++)
    {
        if(s[i]-'0'<minn) minn=s[i]-'0';
    }
    int p=minn-y;
    if(p==0) cout<<0;
    else cout<<p+10; 
}
```