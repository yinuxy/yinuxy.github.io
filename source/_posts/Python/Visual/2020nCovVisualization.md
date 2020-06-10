---
title: 使用 Python可视化神器 Plotly 动态演示全球疫情变化趋势
date: 2020-03-09 17:13:57
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories:
 - 可视化
tags:
  - Python可视化
  - Plotly
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.13/thumbnail/script_%E7%9C%8B%E5%9B%BE%E7%8E%8B.jpg
mathjax: true
---

> <center><font  size = "5"  face = "楷体">使用 Python可视化神器 Plotly 动态演示全球疫情变化趋势</font></center>

<!-- more -->

## 数据来源 ##
疫情的数据来源于开源项目 [Akshare](https://pypi.org/project/akshare/)。

## 准备工作 ##
运行环境：
1. Windows 10系统
2. Anaconda（Python 3.7）
3. Jupyter Notebook
本次使用到的Python库： `akshare`, `pandas`, `plotly`

## 数据导入 ##
```
import akshare as ak
import pandas as pd
import plotly
from plotly.offline import iplot, init_notebook_mode
import plotly.express as px
from datetime import datetime

init_notebook_mode()
```
`init_notebook_mode()`是离线使用`plotly`，不需注册账号即可使用，但是功能没有在线模式全，下面简单的介绍一下两种模式：
plotly的两种模式

> 离线模式：没有数量限制，图片都在本地。
> 在线模式：最多可以上传25张，可以通过浏览器在线编辑、观看。更好的分享给别，有分为三种情况——公开(public)、私人(private)、秘密(secret)。

```
# 从 akshare 获取数
# df_all_history = ak.epidemic_history()

# 从csv文件获取数据
df_all_history = pd.read_csv('epidemic_all_20200307.csv',index_col=0)


df_all_history
```
由于使用该项目获取数据时，有时不太稳定，可能会遇到连接失败的情况，所以，这里选用保存好的数据。
## 提取数据 ##
从上面获取的数据，有些数据格式需要加以调整，对于日期，我们这里会组织两列数据，一列是时间格式的日期（ `['date']`），一列是字符串格式的日期 (` ['dates']`)。这样设置的原因，是因为我们后续分别需要用到这两种格式的日期。
```
df_all = df_all_history

# 将字符串格式的日期 另保存为一列
df_all['dates'] = df_all_history['date']

# 将字符串格式的日期转换为 日期格式
df_all['date'] = pd.to_datetime(df_all['date'])
```
## 获取国外的疫情数据 ##
上面的数据，是全球的数据，我们可以把其中属于中国的剔除，就可以得到国外的数据了。
```
# 国外，按国家统计
df_oversea = df_all.query("country!='中国'")
df_oversea.fillna(value="", inplace=True)

df_oversea
```
## 数据可视化 ##
先来用 plotly express 看下国外疫情分国家的整体走势。
```
fig_oversea = px.line(df_oversea, x='dates', y='confirmed',
                      line_group='country',
                      color='country',
                      color_discrete_sequence=px.colors.qualitative.D3,
                      hover_name='country',
                     )

fig_oversea.show()
```
效果如下
<fancybox>
    <img src='https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.42/img/2020nCovVisualization/output_1.png'>
</fancybox>
从上图可以看出，国外的疫情发展情况，大部分国家从2月10日期，发展趋势较为明显，因此，后面我们重点分析这段时间之后的情况。
```
# 现有数据演示从 2020年2月10日开始
df_oversea_recent = df_oversea.set_index('date')
df_oversea_recent = df_oversea_recent['2020-02-10':]
df_oversea_recent
```
由于部分国家的数据不是从2020年2月10日开始记录的，所以要补充数据。我们可以手动新建一个 excel数据表，将补充日期的数值填充为 0 。
这里主要补充的是伊朗的数据，因为伊朗实在是发展太快了，必须纳入分析的范围内。其他国家，如果有需要补充的，后续可以继续完善。
```
# 由于部分国家，数据不是从2020年2月10日开始的，所以要补充数据，数值为 0
# 数据在 excel 表格中进行补充，这里进行读取

df_oversea_buchong = pd.read_excel('epidemic_buchong.xlsx')
df_oversea_buchong['dates'] = df_oversea_buchong['date'].apply(lambda x:x.strftime('%Y-%m-%d'))
df_oversea_buchong.set_index('date', inplace=True)
df_oversea_buchong.fillna(value="", inplace=True)
print(df_oversea_buchong.info())
df_oversea_buchong
```
将需要补充的数据弄好后，我们可以合并上面这两部分数据，一起进行分析。
```
# 合并补充数据
df_oversea_recent_new = df_oversea_recent.append(df_oversea_buchong)
df_oversea_recent_new.sort_index(inplace=True)
df_oversea_recent_new
```
得到合并的数据后，首先，用气泡图来对变化情况进行可视化，这里用的是 plotly express 的散点图。
```
fig_oversea_recent = px.scatter(df_oversea_recent_new, x='dead', y='confirmed',
                                size='confirmed', text='country', color='country',
                                color_discrete_sequence=px.colors.qualitative.Light24,
                                animation_frame='dates',animation_group='country',
                                hover_name='country',
                                range_x=[-10,260],
                                range_y=[0,8000],
                                size_max=50,
                                template='plotly_white',

)

fig_oversea_recent.show()
```
效果如下
<fancybox>
    <img src='https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.42/img/2020nCovVisualization/outpur_3.png'>
</fancybox>


## 源码及数据文件 ##

{% raw %}
<btns center rounded   grid5>
<a href='https://github.com/InfiniteYinux/Python/tree/master/Visualization/Epidemic-analysis'><i class='fas fa-download'></i>下载源码</a>
<a href='https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.42/img/2020nCovVisualization/data/'><i class='fas fa-download'></i>下载数据</a>
</btns>
{% endraw %}