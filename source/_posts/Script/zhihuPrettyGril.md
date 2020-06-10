---
layout: post
title: 使用Python爬取知乎上的高颜值小姐姐
date: 2020-03-06 22:17:17
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: Python
tags:
  - Python
  - 爬虫


thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.13/thumbnail/script_%E7%9C%8B%E5%9B%BE%E7%8E%8B.jpg
mathjax: true
---

> <center><font  size = "5"  face = "楷体">“你见过的有些人能漂亮到什么程度？”</font></center>

<!-- more -->

## 爬取链接 ##
原问题在这儿[你见过的有些人能漂亮到什么程度？](https://www.zhihu.com/question/266808424)

## 爬取思路 ##
使用Python爬虫爬取这个问题下的高赞照片。
1. 爬虫爬了下这个问题下的高赞照片。在欣赏小姐姐的美照之前，我们先来分享一下思路。
2. 通过知乎回答的url，先把回答一页一页的爬下来，存到本地数据库。随后从数据库里读取数据，筛选出高赞的回答，把回答里的图片解析出来。

## 函数解析 ##
```
def get_answers_by_page(page_no):
    offset = page_no * 10
    url = "<answer url>&offset={}&limit=10&sort_by=default&platform=desktop".format(offset)
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
    }
    r = requests.get(url, verify=False, headers=headers)
    content = r.content.decode("utf-8")
    data = json.loads(content)
    is_end = data["paging"]["is_end"]
    items = data["data"]
    client = pymongo.MongoClient()
    db = client["beauty"]
    if len(items) > 0:
        db.answers.insert_many(items)
    return is_end

def get_answers():
    page_no = 0
    client = pymongo.MongoClient()
    while True:
        print(page_no)
        is_end = get_answers_by_page(page_no)
        page_no += 1
        if is_end:
            break

def query():
    client = pymongo.MongoClient()
    db = client["beauty"]
    items = db.answers.find({"voteup_count": {"$gte": 100}}).sort([("voteup_count", pymongo.DESCENDING)])
    count = 0

    for item in items:
        content = item["content"]
        vote_num = item["voteup_count"]
        author = item["author"]["name"]
        matched = re.findall(r'data-original="([^"]+)"', content)
        print("> 来自 {}\n".format(item["url"]))
        print("> 作者 {}\n".format(author))
        print("> 赞数 {}\n".format(vote_num))
        img_urls = []
        for img_url in matched:
            if img_url not in img_urls:
                print("![]({})".format(img_url))
                img_urls.append(img_url)
        count += len(img_urls)
        print("\n\n")
    print(count)
```
`get_answers_by_page` - 这个函数用于获取一页的回答内容，获取的内容会存到本地MongoDB里
`get_answers` - 这个函数用于获取所有页的内容，它会调用上面的函数，循环获取每一页的内容
`query` - 这个函数用于从MongoDB里查询数据，筛选高赞回答，并且把结果打印出来

如果要完整的运行这个项目，大家可以下载源代码后，在本地运行。
运行项目后，程序会筛选出所有赞数大于100的回答，并且把回答里的图片整理出来。赞数越高的回答，小姐姐的颜值越高。

## 源码下载 ##
<btn center large>[<i class='fas fa-download'></i> 源码下载](https://github.com/InfiniteYinux/Python/tree/master/pythonScript/zhihu-pretty-girl)</btn>















