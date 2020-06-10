---

layout: post
date: 2019-07-25 08:30:00
title: Seaborn中文教程（转）
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: 
 - 可视化
tags:
  - Python可视化
  - seaborn
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.13/thumbnail/seaborn.jpg
mathjax: true


---
Seaborn是基于matplotlib的图形可视化python包。它提供了一种高度交互式界面，便于用户能够做出各种有吸引力的统计图表。
Seaborn是在matplotlib的基础上进行了更高级的API封装，从而使得作图更加容易，在大多数情况下使用seaborn能做出很具有吸引力的图，而使用matplotlib就能制作具有更多特色的图。应该把Seaborn视为matplotlib的补充，而不是替代物。同时它能高度兼容numpy与pandas数据结构以及scipy与statsmodels等统计模式。

<!-- more -->
# 章节概要 #
1. Seaborn介绍：
2. 安装Seaborn
3. 加载库和数据文件
4. Seaborn的绘图功能
5. 用Matplotlib定制
6. Pandas的作用
7. Seaborn 主题
8. 调色盘
9. 图形重叠
10. 融合数据
11. 迷你画廊 

## 安装Seaborn ##
首先确定你的电脑已安装以下应用 
- Python 2.7+ or Python 3 
- Pandas 
- Matplotlib 
- Seaborn 
- Jupyter Notebook(可选)

打开Jupyter Notebook, 过几秒钟会弹出网页窗口Home。 
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/assets@master/1.png)
点击右侧的New，新建一个Notebook，弹出一个新的网页窗口，点击上方可命名文件。
![image.png](https://cdn.jsdelivr.net/gh/InfiniteYinux/assets@master/2.png)

## Seaborn介绍： ##
Seaborn属于Matplotlib的一个高级接口，为我们进行数据的可视化分析提供了极大的方便。 

## 加载库和数据文件 ##
加载pandas、matplotlib、seaborn。


```python
# coding: utf-8

#加载pandas
import pandas as pd

#加载matplotlib
from matplotlib import pyplot as plt

#在notebook中显示数据点
%matplotlib inline

#加载seaborn
import seaborn as sb
```

这里提供了一个数据文件，下载链接为
[Pokemon.csv](https://elitedatascience.com/wp-content/uploads/2017/04/Pokemon.csv)


用pandas读取数据文件，并显示前五行。


```python
#用pandas读取Pokemon.csv
df = pd.read_csv("f:/Pokemon.csv", encoding = "unicode_escape")

#读取前五行，编译后的结果为一个列表。
df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>#</th>
      <th>Name</th>
      <th>Type 1</th>
      <th>Type 2</th>
      <th>Total</th>
      <th>HP</th>
      <th>Attack</th>
      <th>Defense</th>
      <th>Sp. Atk</th>
      <th>Sp. Def</th>
      <th>Speed</th>
      <th>Stage</th>
      <th>Legendary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Bulbasaur</td>
      <td>Grass</td>
      <td>Poison</td>
      <td>318</td>
      <td>45</td>
      <td>49</td>
      <td>49</td>
      <td>65</td>
      <td>65</td>
      <td>45</td>
      <td>1</td>
      <td>False</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>Ivysaur</td>
      <td>Grass</td>
      <td>Poison</td>
      <td>405</td>
      <td>60</td>
      <td>62</td>
      <td>63</td>
      <td>80</td>
      <td>80</td>
      <td>60</td>
      <td>2</td>
      <td>False</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>Venusaur</td>
      <td>Grass</td>
      <td>Poison</td>
      <td>525</td>
      <td>80</td>
      <td>82</td>
      <td>83</td>
      <td>100</td>
      <td>100</td>
      <td>80</td>
      <td>3</td>
      <td>False</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>Charmander</td>
      <td>Fire</td>
      <td>NaN</td>
      <td>309</td>
      <td>39</td>
      <td>52</td>
      <td>43</td>
      <td>60</td>
      <td>50</td>
      <td>65</td>
      <td>1</td>
      <td>False</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>Charmeleon</td>
      <td>Fire</td>
      <td>NaN</td>
      <td>405</td>
      <td>58</td>
      <td>64</td>
      <td>58</td>
      <td>80</td>
      <td>65</td>
      <td>80</td>
      <td>2</td>
      <td>False</td>
    </tr>
  </tbody>
</table>
</div>




```python
#绘制散点图
sb.lmplot(x = 'Attack', y = 'Defense', data = df)
```

    D:\Function\Anaconda3\lib\site-packages\scipy\stats\stats.py:1713: FutureWarning: Using a non-tuple sequence for multidimensional indexing is deprecated; use `arr[tuple(seq)]` instead of `arr[seq]`. In the future this will be interpreted as an array index, `arr[np.array(seq)]`, which will result either in an error or a different result.
      return np.add.reduce(sorted[indexer] * weights, axis=axis) / sumval
    




    <seaborn.axisgrid.FacetGrid at 0x2ea94d27c50>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_8_2.png)


## Seaborn的绘图功能 ##
Seaborn最大的优点之一在于其种类繁多的绘图功能，下面我们利用lmplot()函数，用一行代码来绘制散点图。我们希望x轴显示Attack数据，y轴显示Defense数据，则可以编写代码。 

事实上seaborn并没有专门用来绘制散点图的功能，实际上我们用它来拟合和绘制回归线。 
幸运的是，我们可以通过设置函数的参数来得到我们想要的散点图。用fit_reg = False 移去回归线，用hug参数来用不同颜色显示Pokemon进化阶段的信息。 


```python
#移去回归线，用不同颜色来表示pokemon的进化阶段，即刻得到散点图：

sb.lmplot(x = 'Attack', y = 'Defense', data = df,
         fit_reg = False,
         hue = 'Stage')
```




    <seaborn.axisgrid.FacetGrid at 0x2ea950e4278>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_11_1.png)


从散点图可以看出，所有的数据点都分布在数轴的正半轴，然而散点图的数轴从负数开始的，我们可以对它进行改进。

## 用Matplotlib定制 ## 
虽然Seaborn是Matplotlib的一个高级接口，但是我们有时候也需要用到Matplotlib。其中包括设置数轴的范围。我们利用Matplotlib的ylim()和xlim()函数来设置数轴的范围。 


```python
#设置数轴范围


plt.gca().set(xlim = (0, None), ylim = (0, None),
             xlabel='Attack', ylabel='Defense')
```




    [(0, 1.0), Text(0, 0.5, 'Defense'), (0, 1.0), Text(0.5, 0, 'Attack')]




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_14_1.png)


## Pandas的作用  ##
尽管这是一个Seaborn教程，pandas依然在实际应用中起到了十分重要的作用。下面我们根据Pokemon的攻击数据来绘制箱形图


```python
sb.boxplot(data = df)
#得到的箱形图： 
```




    <matplotlib.axes._subplots.AxesSubplot at 0x2ea950c99b0>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_16_1.png)


很好，这是一个良好的开端，但是我们可以移除不需要的几列数据。

    移除掉Total，因为我们有独立的统计数据。
    移除掉Stage跟Legendary，因为它们不是攻击统计数据。
    我们可以创建一个新的数据集stats_df，满足我们上述的要求。


```python
#创建新数据集
stats_df = df.drop(['Total', 'Stage', 'Legendary'], axis = 1)

#Boxplot
sb.boxplot(data = stats_df)
```




    <matplotlib.axes._subplots.AxesSubplot at 0x2ea962be358>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_18_1.png)


得到了一个改进了的箱形图。

## Seaborn 主题 ##
Seaborn的另一个好处就是其恰到好处、开箱即用的风格主题。其默认的主题为“darkgrid”
下一步，我们把主题改为“whitegrid”来创建一个小提琴图

    小提琴图常常作为箱形图的替代
    小提琴图通过小提琴的厚度展示了数据的分布，而不仅仅是总结数据。
    根据Pokemon的主要类型，我们可以将Attack数据的分布可视化。 


```python
#设置主题
sb.set_style('whitegrid')

#violin plot
sb.violinplot(x = 'Type 1', y = 'Attack', data = df)
```




    <matplotlib.axes._subplots.AxesSubplot at 0x2ea96343828>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_21_1.png)


可以得到小提琴图，x轴显示的是Pokemon的Type1，y轴显示的是不同Pokemon的攻击数值。 

## 调色盘 ##
Seaborn可以根据我们的需求，来设置颜色。我们可以创建一个python命令列表，用颜色的十六进制数值来设置。数值可以在[Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Category:Type_color_templates)中寻找。


```python
#创建颜色列表
pkmn_type_colors = ['#78C850',
                    '#F08030',
                    '#6890F0',
                    '#A8B820',
                    '#A8A878',
                    '#A040A0',
                    '#F8D030',
                    '#E0C068',
                    '#EE99AC',
                    '#C03028',
                    '#F85888',
                    '#B8A038',
                    '#705898',
                    '#98D8D8',
                    '#7038F8'
                   ]

#导入小提琴图中
sb.violinplot(x = 'Type 1', y = 'Attack', data = df,
             palette = pkmn_type_colors)

```

    D:\Function\Anaconda3\lib\site-packages\scipy\stats\stats.py:1713: FutureWarning: Using a non-tuple sequence for multidimensional indexing is deprecated; use `arr[tuple(seq)]` instead of `arr[seq]`. In the future this will be interpreted as an array index, `arr[np.array(seq)]`, which will result either in an error or a different result.
      return np.add.reduce(sorted[indexer] * weights, axis=axis) / sumval
    




    <matplotlib.axes._subplots.AxesSubplot at 0x2ea94d24470>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_24_2.png)


为了能够让数据文件中的151个Pokemon都能够在图中简单展示，我们可以用群集图 swarm plot达到这一目的。 


```python
sb.swarmplot(x = 'Type 1', y = 'Attack', data = df,
            palette = pkmn_type_colors)
```




    <matplotlib.axes._subplots.AxesSubplot at 0x2ea96d5bda0>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_26_1.png)


## 图形重叠 ##
我们已经绘制出了小提琴图和群集图，Seaborn允许我们将这两张图整合在一张图上，步骤如下：

    首先，我们用Matplotlib设置图形比例。
    然后，我们绘制小提琴图，用inner = None将小提琴中间的木杆移去。
    接着，我们绘制群集图，并将数据点的颜色变为黑色。
    最后，我们可以用Matplotlib设置一个标题。



```python
#设置图形比例
plt.figure(figsize = (10, 6))

#创建violinplot
sb.violinplot(x = 'Type 1', y = 'Attack', data = df,
              inner = None,
             palette = pkmn_type_colors)

#创建swarmplot
sb.swarmplot(x = 'Type 1', y = 'Attack', data = df,
             color = 'k',
            palette = pkmn_type_colors)

#设置标题
plt.title('Attack by Type')

#其中alpha为透明度。 编译后可以得到如下图形。 
```




    Text(0.5, 1.0, 'Attack by Type')




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_28_1.png)


现在我们可以清晰的看到不同Pokemon的攻击值了。那么我们怎么看其他的数值呢？

## 融合数据 ##
为了展现其他的数据，我们当然可以重复以上的步骤，绘制多张图。但是我们同样也可以在一张图上表示所有的数据，这时候pandas就派上用场了。
我们可以利用pandas的melt()函数来将一些数据进行融合，这样就可以在不同Pokemon之间直接进行比对，melt()需要导入3个参数，分别为：

    需要融合的数据列表
    需要保留的ID变量，其他变量将会被Pandas融合。
    融合而成的新变量的名字。



```python
#数据融合
melted_df = pd.melt(stats_df,
                   id_vars = ['Name', 'Type 1', 'Type 2'],
                   var_name = 'Stat')

#前五行
melted_df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Name</th>
      <th>Type 1</th>
      <th>Type 2</th>
      <th>Stat</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Bulbasaur</td>
      <td>Grass</td>
      <td>Poison</td>
      <td>#</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Ivysaur</td>
      <td>Grass</td>
      <td>Poison</td>
      <td>#</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Venusaur</td>
      <td>Grass</td>
      <td>Poison</td>
      <td>#</td>
      <td>3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Charmander</td>
      <td>Fire</td>
      <td>NaN</td>
      <td>#</td>
      <td>4</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Charmeleon</td>
      <td>Fire</td>
      <td>NaN</td>
      <td>#</td>
      <td>5</td>
    </tr>
  </tbody>
</table>
</div>



我们为已经融合的数据列表melted_df绘制群集图。


```python
#数据融合
melted_df = pd.melt(stats_df,
                   id_vars = ['Name', 'Type 1', 'Type 2'],
                   var_name = 'Stat')

#前五行
melted_df.head()

#绘制群集图
sb.swarmplot(x = 'Stat', y = 'value', data = melted_df,
            hue = 'Type 1')

#就可以得到如下的群集图。x轴为Stat中融合的六个变量，y轴为Stat的值，不同颜色代表不同的Pokemon Type 1。
```




    <matplotlib.axes._subplots.AxesSubplot at 0x2ea9887da58>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_33_1.png)


这张图表有一些细节需要完善：

    扩大图表。
    使用split = True 来分隔色调。
    使用我们自定义的颜色。
    调整y轴的范围
    将图例放在右侧。


```python
#扩大图表
plt.figure(figsize = (10, 8))

#绘制群集图，使用split = True 来分割，使用自定义的颜色
sb.swarmplot(x = 'Stat', y = 'value', data = melted_df,
            hue = "Type 1",
            split = True,
            palette = pkmn_type_colors)

#调整Y轴的范围
plt.ylim(0,260)

#将图例放在右侧
plt.legend(bbox_to_anchor = (1,1), loc = 2)
```

    D:\Function\Anaconda3\lib\site-packages\seaborn\categorical.py:2974: UserWarning: The `split` parameter has been renamed to `dodge`.
      warnings.warn(msg, UserWarning)
    




    <matplotlib.legend.Legend at 0x2ea98a7f0b8>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_35_2.png)


即可得到一个已经细节完善后的图表。 

## 迷你画廊 ##
### Heatmap ###
Heatmap可以帮助可视化矩阵状的数据。


```python
#计算相关性
corr = stats_df.corr()

#Hteatmap
sb.heatmap(corr)
```




    <matplotlib.axes._subplots.AxesSubplot at 0x2ea98dac4e0>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_38_1.png)


### Histogram ###
Histogram能够绘制变量的数值分布。


```python
#绘制直方图
sb.distplot(df.Attack)
```




    <matplotlib.axes._subplots.AxesSubplot at 0x2ea988d2da0>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_40_1.png)


### Bar Plot ###
条形图可以帮助分类变量的可视化。 


```python
#绘制条形图abs
sb.countplot(x = 'Type 1', data = df, palette = pkmn_type_colors)

#倾斜x轴的标签
plt.xticks(rotation = -45)
```




    (array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14]),
     <a list of 15 Text xticklabel objects>)




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_42_1.png)


### Factor plots ###
Factor plots能够根据类别分离图表。 


```python
#分离图表
g = sb.factorplot(x = 'Type 1',
                  y = 'Attack',
                  data = df,
                  hue = 'Stage',  #用不同的颜色表示Stage
                  col = 'Stage',  #根据Stage来分离图表
                  kind = 'swarm', #创建群集图
                 )

#倾斜x轴的标签
plt.xticks(rotation = -45)
```

    D:\Function\Anaconda3\lib\site-packages\seaborn\categorical.py:3666: UserWarning: The `factorplot` function has been renamed to `catplot`. The original name will be removed in a future release. Please update your code. Note that the default `kind` in `factorplot` (`'point'`) has changed `'strip'` in `catplot`.
      warnings.warn(msg)
    




    (array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14]),
     <a list of 15 Text xticklabel objects>)




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_44_2.png)


可以得到根据Stage分离的三个图表，分别用不同颜色的点表示不同的Pokemon。 

### Density Plot ###
密度图显示的是两个变量之间的分布。 
曲线越密集的地方说明两个变量的关系越近，越稀疏的地方说明关系越远。 


```python
#创建密度图
sb.kdeplot(df.Attack, df.Defense)
```

    D:\Function\Anaconda3\lib\site-packages\scipy\stats\stats.py:1713: FutureWarning: Using a non-tuple sequence for multidimensional indexing is deprecated; use `arr[tuple(seq)]` instead of `arr[seq]`. In the future this will be interpreted as an array index, `arr[np.array(seq)]`, which will result either in an error or a different result.
      return np.add.reduce(sorted[indexer] * weights, axis=axis) / sumval
    




    <matplotlib.axes._subplots.AxesSubplot at 0x2ea9a8d6f60>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_47_2.png)


### Joint Distribution Plot ###
联合分布图将散点图和直方图的信息结合起来，提供双变量分布的详细信息。 



```python
#创建联合分布图
sb.jointplot(x = 'Attack', y = 'Defense', data = df)
```




    <seaborn.axisgrid.JointGrid at 0x2ea9ab74da0>




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/seaborn/output_49_1.png)


这里只是介绍了Seaborn常用的绘图功能，还有更强大的功能[Example gallery](http://seaborn.pydata.org/examples/anscombes_quartet.html)需要我们去学习，去探索。


```python

```
