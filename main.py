# -*- coding: utf-8 -*-
"""
Created on Sun Apr  5 09:53:37 2020

@author: Yinux
"""

import os
note = """
---
date: 
title: 
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/avatar/avatar.png
  url: https://blog.yinuxy.com
categories: Docker
tags:
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.30/thumbnail/docker.jpg

---


<!-- more -->
"""

path = r'source/_posts/'
file_count=0
for dirpath, dirnames, filenames in os.walk(path):
    for file in filenames:
        file_count=file_count+1
filename = path + str(file_count) + '.md'
file = open(filename, 'w')
file.write(note)   #msg也就是下面的Hello world!
file.close()
print("成功创建第"+str(file_count)+"个文档，开始您的写作吧~奥利给！")
