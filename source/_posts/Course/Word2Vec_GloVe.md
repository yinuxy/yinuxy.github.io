---
layout: post
date: 2020/01/16 11:37:16 
title: Word2Vec——使用GloVe训练中文词向量
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@master/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: Algorithm
tag:
  - Word2Vec
  - 词向量


mathjax: true

---

> <center><font  size = "5" color = "#1BC3FB"  face = "楷体">Word2Vec——使用GloVe训练中文词向量</font></center>

<!-- more -->
## 准备语料 ##
准备好中文语料：[中文语料库](https://github.com/Embedding/Chinese-Word-Vectors)，或者使用[Leavingseason](https://www.cnblogs.com/sylvanas2012/p/5428746.html)准备好的语料进行训练：http://pan.baidu.com/s/1jHZCvvo
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.27/img/Word2Vec_GloVe/output_1.png)
## 准备源码 ##
到[斯坦福GloVe开源代码gihub地址](https://github.com/stanfordnlp/GloVe)下载代码；解压后将语料×××.txt添加到GloVe-master文件夹下
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.27/img/Word2Vec_GloVe/output_2.png)
## 修改训练语料地址 ##
打开demo.sh文件，修改相应的内容
因为demo默认是下载网上的语料来训练的，因此如果要训练自己的语料，需要注释掉
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.27/img/Word2Vec_GloVe/output_3.png)
修改参数设置，将CORPUS设置成语料的名字
```
CORPUS=text8                                     要生成词向量的文本
VOCAB_FILE=vocab.txt                             得到的词和词频
COOCCURRENCE_FILE=cooccurrence.bin
COOCCURRENCE_SHUF_FILE=cooccurrence.shuf.bin
BUILDDIR=build
SAVE_FILE=vectors
VERBOSE=2
MEMORY=4.0                                        内存
VOCAB_MIN_COUNT=5                                 最小词频数
VECTOR_SIZE=50                                    词向量维度
MAX_ITER=15                                       训练迭代次数
WINDOW_SIZE=15                                    上下文窗口数
BINARY=2                                          保存文件类型（2进制）
NUM_THREADS=8                                     线程数
X_MAX=10
```
## 执行bash文件 ##
进入到主文件夹下
```
make
```
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.27/img/Word2Vec_GloVe/output_5.png)
```
bash demo.sh
```
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.27/img/Word2Vec_GloVe/output_6.png)
注意，如果训练数据较大，则训练时间较长，那么建议使用nohup来运行程序
```
nohup bash demo.sh >output.txt 2>&1 &
```
训练后会得到vetors.txt，打开后在第一行加上vacob_size vector_size，这样才能用word2vec的load函数加载成功
vacob_size vector_size可在训练时看到：
![](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.27/img/Word2Vec_GloVe/output_7.png)

## 参数说明 ##
进入glove目录下，首先先参考README.txt,里面主要介绍这个程序包含了四部分子程序，按步骤分别是`vocab_count`、`cooccur`、`shuffle`、`glove`：
1. `vocab_count`:用于计算原文本的单词统计（生成vocab.txt,每一行为：单词  词频）
2. `cooccur`：用于统计词与词的共现，类似word2vec的窗口内的任意两个词（生成的是cooccurrence.bin,二进制文件）
3. `shuffle`：对于2中的共现结果重新整理
4. `glove`：glove算法的训练模型，会运用到之前生成的相关文件（1&3），最终会输出vectors.txt和vectors.bin（前者直接可以打开，下文主要针对它做研究，后者还是二进制文件）