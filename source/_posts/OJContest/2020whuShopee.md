---
layout: post
date: 2020-04-13 08:30:00
title: “Shopee杯” E 起来编程暨武汉大学 2020 年大学生程序设计大赛（网络预选赛）解题报告
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: ACM解题报告
tags:



thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.13/thumbnail/algorithm.jpg
mathjax: true
---

> <center><font  size = "5" face = "楷体">“Shopee杯” E 起来编程暨武汉大学 2020 年大学生程序设计大赛（网络预选赛）解题报告</font></center>

<!-- more -->

比赛地址：[“Shopee杯” e起来编程暨武汉大学2020年大学生程序设计大赛（网络预选赛）](https://ac.nowcoder.com/acm/contest/5166#question)
整场比赛体验极差，英语杀我（题目都看不懂还做个屁啊！！！），结束后当天晚上讲题，对照题解自己又去做了一遍。

## 	[E-Yu is a Brutal Creature](https://ac.nowcoder.com/acm/contest/5166/E) ##
### 题意 ###
找出$0 \sim n$之间所有满足$(n+1)|(n^2+1)$的自然数

### 解题思路 ###
根据平方差公式：$n^2-1=(n+1)(n-1)$ 可知 $(n+1)|(n^2+1)$。
于是可知 $(n^2+1) - (n^2-1)=2$ 也应当是 $n+1$ 的倍数。
符合条件的数，只有 $0$ 和 $1$ 。
所以当$n = 0$时，答案为 $0$ ，当 $n > 0$ 时，答案为 $n - 1$ 。 

```
#include <bits/stdc++.h>
using namespace std;
int main() {
    int T;
    scanf("%d", &T);
    while (T--) {
        int n;
        scanf("%d", &n);
        printf("%d\n", n ? (n - 1) : n);
    }
    return 0;   
}
```


## 	[B-Best Match](https://ac.nowcoder.com/acm/contest/5166/B) ##
### 题意 ###
给定一个数组，求有多少个数对 $a_i$ , $a_j$ , $i \neq j$ 满足 $a_i + a_j == 0$。

### 解题思路 ###
记录下数组中每个权值的出现次数，记数组中权值 $i$ 的出现次数为 $cnt_i$ 。那么答案就是：
<center> $\sum\limits_{i=1}^{max(a)} cnt_i \times cnt_{-i} + cnt_0 \times (cnt_0 - 1)/2$ </center>

```
#include<bits/stdc++.h>
using namespace std;
int read(){
    int c=0,nx,sign=1;
    while(!isdigit(nx = getchar()))
        if(nx=='-')
            sign=-1;
    while(isdigit(nx))
        c=c*10+nx-'0',nx=getchar();
    return sign*c;
}
const int N = 5e5 + 20;
long long cnt[100];
int main(){
    int n = read();
    for(int i=1;i<=n;i++)
        cnt[read() + 20]++;
    long long ans = cnt[20] * (cnt[20] - 1) / 2;
    for(int i=1;i<=20;i++)
        if(cnt[i + 20] and cnt[20 - i])
            ans += cnt[i + 20]  * cnt[20 - i];
    printf("%lld",ans);
}
```


## 	[A-A Monument For Heroes](https://ac.nowcoder.com/acm/contest/5166/A) ##
### 题意 ###
给你若干字符串，求按照首尾字母相同的方式接龙能接上多少个，且必须按照题目输入的顺序接, 也就是先出现的字符串必须接在前面。
### 解题思路 ###
使用 DP 实现，记 $dp[i][j]$ 表示以 $i$ 开头，$j$ 结尾的接龙的最长长度。
随后依次枚举每个字符串，假设字符串 $s$ 的开头是 $c_1$ ，结尾为 $c_2$ ，那么
更新所有 $dp[i][c_2]$，更新方式为 $dp[i][c_2] = max(dp[i][c_2] , dp[i][c_1]+|s|)$ 。

```
#include<bits/stdc++.h>
#define inf 1<<29
#define maxn 1000010
typedef long long ll;
using namespace std;
int n,mp[210][210],ans;
char str[110];
int main(){
    cin>>n;
    for(int i=1;i<=n;++i){
        scanf("%s",str);
        int len=strlen(str);
        char s=str[0],t=str[len-1];
        for(int j='a';j<='z';++j){
            if(mp[j][s]){
                mp[j][t]=max(mp[j][t],mp[j][s]+len);
            }
             
        }
        mp[s][t]=max(mp[s][t],len);
    }
    for(int i='a';i<='z';++i) ans=max(ans,mp[i][i]);
    cout<<ans<<endl;
    return 0;
}
```

## 	[D-DIY Masks at Home](https://ac.nowcoder.com/acm/contest/5166/D) ##
### 题意 ###
给你一个由大写字母构成的二维矩阵，你需要找到一个最大的正方形，使得这个正方形内只包含一种字母。
### 解题思路 ###
本题实际上有多种通过方法，下面介绍两种参考方法：

1. （暴力哈希）将原矩阵内每一种字母都替换成一个素数，然后计算这个矩阵的二维前缀积（对大素数取模）。那么在给定二分长度 k 的前提下，我们每次可以枚举一个矩形的左上角 $(i,j)$ ，利用逆元计算出这么个矩形的积，再和这种字母的纯 $k ∗ k$ 正方形对应的哈希值比对。如果担心碰撞，只需改成双哈希就好。总复杂度为常数有点大的 $O(nmlog(n))$ 。
2. 我们如果在原矩阵 F 的基础上预处理出一个新矩阵 $G$, 第 $i$ 行第 $j$ 列的值的意义为：这个值在这一行前面有多少个连续的数和它相同（包括自己）。
随后我们对于每一列从上到下遍历，如果一个边长为 $k$，右下角位于 $(i,j)$ 的矩形存在的话，一定会满足： ${\min\limits_{i-k < t\leq i} \{G[t][j]\} \geq k}$ 可想而知，对于我们枚举的右下角，右上角也是具备单调性的，所以我们可以采用二分 + 对每一列维护 $RMQ$ 数组的方法获得一个 $O(nmlog(n))$ 的方法。

```
#include<bits/stdc++.h>
#define inf 1<<29
#define maxn 1000010
typedef long long ll;
using namespace std;
int n,mp[210][210],ans;
char str[110];
int main(){
    cin>>n;
    for(int i=1;i<=n;++i){
        scanf("%s",str);
        int len=strlen(str);
        char s=str[0],t=str[len-1];
        for(int j='a';j<='z';++j){
            if(mp[j][s]){
                mp[j][t]=max(mp[j][t],mp[j][s]+len);
            }
        }
        mp[s][t]=max(mp[s][t],len);
    }
    for(int i='a';i<='z';++i) ans=max(ans,mp[i][i]);
    cout<<ans<<endl;
    return 0;
}
```

## 	[C-Can You Help ZSGW](https://ac.nowcoder.com/acm/contest/5166/C) ##
### 题意 ###
有一个排列，已知我们对于这个排列执行单调栈算法过程中，遍历到每一个位置之后单调栈的大小，有些位置缺失可以任意。求一个满足这种情况的字典序最小的排列。

### 解题思路 ###
首先我们应该做的事，是补全这个单调栈数组 $b$。单调栈数组由于单调栈算法的特点，必然满足这么几个特点：
1. $b[1] = 1$
2. 若 $b[i] > b[i − 1]$ ，则 $b[i] = b[i − 1] + 1$ ，且 $a[i] > a[i − 1]$ 。
3. 对于 $b[i] <= b[i − 1]$ ，一定有 $a[i] < a[i − 1]$ 。

我们从左到右依次补全每一个为 $−1$ 的格子，那么策略应该是：
1. 若 $i = 1$ ，$b[i] = 1$ 。
2. 否则，如果我们填一个比 $b[i − 1]$ 小的数的话，就意味着之后补全的时候 $a[i − 1] > a[i]$ ，在字典序上不会是个好主意。所以应该填 $b[i − 1] + 1$ 。

补全数组之后，规律如下：
首先我们可以发现所有为 $1$ 的位置组成了以 $1$ 截止的降序序列。然后对于每个被 $1$ 分割的子区间，$2$ 也会满足类似的规律。然后对于 $2$ 进一步分割的子区间 $3$ 也会如此。于是我们按照权值递增的顺序，依次填入每个数，然后分治递归填写子区间。标程的复杂度为 $O(nlog(n))$，实际上利用分治区间的单调性可以进一步优化到 $O(n)$。

```
#include <bits/stdc++.h>
using namespace std;
 
int T, n;
int p[200005];
int lst[200005], tail;
int pre[200005];
int nxt[200005];
int s[200005];
 
int main() {
    scanf("%d", &T);
    for(int k = 0; k < T; ++k) {
        scanf("%d", &n);
        for(int i = 0; i <= n; ++i) nxt[i] = pre[i] = 0;
        tail = 0;
        for(int i = 1; i <= n; ++i) scanf("%d", &p[i]);
        p[1] = 1;
        for(int i = 2; i <= n; ++i) if(p[i] == -1) {
            if(p[i + 1] - p[i - 1] == 2) p[i] = p[i - 1] + 1;
            else p[i] = p[i - 1] + 1;
        }
        for(int i = 1; i <= n; ++i) {
            if(p[i] > p[i - 1]) {
                nxt[tail] = i;
                pre[i] = tail;
                tail = i;
            } else {
                int x = lst[p[i]];
                nxt[pre[x]] = i;
                pre[i] = pre[x];
                nxt[i] = x;
                pre[x] = i;
            }
            lst[p[i]] = i;
        }
        for(int i = 1, j = nxt[0]; i <= n; ++i, j = nxt[j]) s[j] = i;
        for(int i = 1; i <= n; ++i) printf("%d ", s[i]);
        printf("\n");
    }
    return 0;
}
```