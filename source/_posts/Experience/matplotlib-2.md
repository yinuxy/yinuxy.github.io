---

layout: post
date: 2019-08-10 08:30:00
title: matplotlib - Pyplot 教程
author: 
  name: YINUXY
  avatar: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/avatar/avatar.png
  url: httpS://blog.yinuxy.com
categories: 
 - 可视化
tags:
  - Python可视化
  - matplotlib
thumbnail: https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.13/thumbnail/matplotlib.jpg
mathjax: true


---

提供类似MATLAB的绘图框架。
![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/matplotlibPyplot/fengmian.png)
<!-- more -->
# Pyplot 教程 #
关于pylot接口的介绍。

## pyplot 简介 ##
[matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) 是命令样式函数的集合，使matplotlib像MATLAB一样工作。 每个pyplot函数对图形进行一些更改：例如，创建图形，在图形中创建绘图区域，在绘图区域中绘制一些线条，用标签装饰图形等。

在[matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot)中，各种状态在函数调用中保留，以便跟踪当前图形和绘图区域等内容，并且绘图函数指向当前轴（请注意“轴”在此处以及在大多数位置 文档是指[图形的轴部分](https://matplotlib.org/tutorials/introductory/usage.html#figure-parts)，而不是多个轴的严格数学术语。

注意: pyplot API通常不如面向对象的API灵活。您在此处看到的大多数函数调用也可以作为Axes对象中的方法调用。 我们建议您浏览教程和示例以了解其工作原理。

使用pyplot生成可视化非常快速：


```python
import matplotlib.pyplot as plt
plt.plot([1, 2, 3, 4])
plt.ylabel('some numbers')
plt.show()
```


    <Figure size 640x480 with 1 Axes>


您可能想知道为什么x轴的范围是0-3，y轴的范围是1-4。如果为[plot()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot)命令提供单个列表或数组，则matplotlib假定它是一系列y值，并自动为您生成x值。由于python范围以0开头，因此默认的x向量与y具有相同的长度，但从0开始。因此x数据为 [0,1,2,3]。


```python
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])

```




    [<matplotlib.lines.Line2D at 0x1de069a2a20>]




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/matplotlibPyplot/output_3_1.png)


## 格式化绘图的样式 ##
对于每对x，y对的参数，有一个可选的第三个参数，它是指示绘图的颜色和线型的格式字符串。格式字符串的字母和符号来自MATLAB，您可以将颜色字符串与线型字符串连接起来。默认格式字符串为“b-”，为蓝色实线。例如，要用红色圆圈绘制上述内容，您将发出：


```python
#plt.plot(x,y,format_string,**kwargs) 
#x轴数据，y轴数据，format_string控制曲线的格式字串 
#format_string 由颜色字符，风格字符，和标记字符 

plt.plot([1, 2, 3, 4], [1, 4, 9, 16], 'ro')
plt.axis([0, 6, 0, 20])
plt.show()
```


![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/matplotlibPyplot/output_5_0.png)


有关线型和格式字符串的完整列表，请参阅 [plot()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot) 文档。 上例中的 [axis()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.axis.html#matplotlib.pyplot.axis) 命令采用 [xmin, xmax, ymin, ymax] 列表并指定轴的视口。

如果matplotlib仅限于使用列表，那么数字处理将毫无用处。通常，您将使用numpy数组。实际上，所有序列都在内部转换为numpy数组。 下面的示例说明了使用数组在一个命令中绘制具有不同格式样式的多行。


```python
import numpy as np

# 每隔200ms均匀采样一次
t = np.arange(0., 5., 0.2)

# 红色的破折号，蓝色的正方形和绿色的三角形
plt.plot(t, t, 'r--', t, t**2, 'bs', t, t**3, 'g^')
plt.show()
```


![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/matplotlibPyplot/output_7_0.png)


## 使用关键字字符串绘图 ##
在某些情况下，您可以使用允许您使用字符串访问特定变量的格式的数据。例如，使用 [numpy.recarray](https://docs.scipy.org/doc/numpy/reference/generated/numpy.recarray.html#numpy.recarray) 或[pandas.DataFrame](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.html#pandas.DataFrame)。

Matplotlib允许您使用data关键字参数提供此类对象。如果提供，那么您可以生成包含与这些变量对应的字符串的图。

```
matplotlib.pyplot.scatter(x, y, s=None, c=None, marker=None, cmap=None, norm=None, vmin=None, vmax=None, alpha=None, linewidths=None, verts=None, edgecolors=None, *, data=None, **kwargs)
```
x，y：表示的是大小为(n,)的数组，也就是我们即将绘制散点图的数据点    
s:是一个实数或者是一个数组大小为(n,)，这个是一个可选的参数。    
c:表示的是颜色，也是一个可选项。默认是蓝色'b',表示的是标记的颜色，或者可以是一个表示颜色的字符，或者是一个长度为n的表示颜色的序列等等，感觉还没用到过现在不解释了。但是c不可以是一个单独的RGB数字，也不可以是一个RGBA的序列。可以是他们的2维数组（只有一行）。    
marker:表示的是标记的样式，默认的是'o'。    
cmap:Colormap实体或者是一个colormap的名字，cmap仅仅当c是一个浮点数数组的时候才使用。如果没有申明就是image.cmap    
norm:Normalize实体来将数据亮度转化到0-1之间，也是只有c是一个浮点数的数组的时候才使用。如果没有申明，就是默认为colors.Normalize。    
vmin,vmax:实数，当norm存在的时候忽略。用来进行亮度数据的归一化。    
alpha：实数，0-1之间。    
linewidths:也就是标记点的长度。    


```python
data = {'a': np.arange(50),
        'c': np.random.randint(0, 50, 50),
        'd': np.random.randn(50)}
data['b'] = data['a'] + 10 * np.random.randn(50)
data['d'] = np.abs(data['d']) * 100

plt.scatter('a', 'b', c='c', s='d', data=data)
plt.xlabel('entry a')
plt.ylabel('entry b')
plt.show()
```


![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/matplotlibPyplot/output_10_0.png)



```python
data = {'a': np.arange(50),
        'c': np.random.randint(0, 50, 50),
        'd': np.random.randn(50)}
print(data)
data['b'] = data['a'] + 10 * np.random.randn(50)
data['d'] = np.abs(data['d']) * 100
print(data)
```

    {'a': array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16,
           17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
           34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]), 'c': array([47,  5, 29, 21, 15, 12, 29, 23, 10, 25, 26, 45, 32, 30, 37, 27, 43,
            9, 26, 45, 48, 14, 23, 30, 22,  0,  5, 47, 21, 26, 35,  7,  2, 19,
           24, 41, 26,  9, 20, 16, 15, 29, 23,  4, 21, 12, 23, 30, 41, 19]), 'd': array([ 0.91474741,  1.4102975 , -0.09708013, -1.47629846, -1.57769092,
           -0.46290149,  1.23430367,  0.38467709, -0.01272562, -1.44240598,
           -0.21927709, -0.30498565, -0.11862153, -1.24972745, -1.32424128,
           -1.5610827 ,  1.26963903,  0.62084676, -1.0549506 ,  0.37044246,
           -0.39299613,  0.42897231, -0.33461671, -0.86706857, -0.76486767,
           -1.3074562 , -0.33973554, -1.08680383,  0.27878669,  1.0599157 ,
           -0.38176051,  0.79680669, -0.6874751 ,  1.38240815, -0.1344723 ,
            0.7627456 ,  0.36115735,  0.83799247,  0.02523584,  0.81839594,
           -0.77025921, -0.06682006,  0.06934268,  0.36251595, -0.99875799,
            1.23386736, -0.32016664,  0.45225071,  0.55994446,  0.47643056])}
    {'a': array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16,
           17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
           34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]), 'c': array([47,  5, 29, 21, 15, 12, 29, 23, 10, 25, 26, 45, 32, 30, 37, 27, 43,
            9, 26, 45, 48, 14, 23, 30, 22,  0,  5, 47, 21, 26, 35,  7,  2, 19,
           24, 41, 26,  9, 20, 16, 15, 29, 23,  4, 21, 12, 23, 30, 41, 19]), 'd': array([ 91.4747409 , 141.02975036,   9.70801323, 147.6298458 ,
           157.76909222,  46.29014854, 123.43036704,  38.46770907,
             1.27256168, 144.24059782,  21.92770893,  30.49856537,
            11.86215303, 124.972745  , 132.42412769, 156.10827022,
           126.96390267,  62.0846764 , 105.49506   ,  37.0442464 ,
            39.29961326,  42.89723069,  33.46167088,  86.70685708,
            76.48676738, 130.74561997,  33.97355351, 108.68038257,
            27.87866927, 105.9915699 ,  38.17605117,  79.68066907,
            68.74750955, 138.2408153 ,  13.44723023,  76.27455996,
            36.1157352 ,  83.79924741,   2.52358383,  81.83959391,
            77.02592105,   6.68200567,   6.93426756,  36.25159505,
            99.87579944, 123.38673588,  32.01666378,  45.22507109,
            55.99444581,  47.6430561 ]), 'b': array([  4.62276015,   7.74528096,  -4.77823695, -11.7847356 ,
            18.05816585,  -8.1731315 ,   4.98414606,  18.1539417 ,
            11.06732176,  15.32465307,   5.923213  ,   6.77520583,
            -8.72986134,  19.414693  ,  22.05933889,  10.92443259,
            16.1005237 ,  28.55305548,   7.16710341,  19.82975597,
            35.25631478,  13.32137703,   9.26598849,  14.25528353,
            17.70779422,  18.62234998,  41.83152657,  26.02409203,
            23.25997035,  20.38161932,   2.84095495,  36.00225335,
            46.69340509,  22.75167791,  34.33249818,  25.09595488,
            41.37140253,  16.54690243,  32.4532621 ,  31.12442736,
            40.99257063,  49.49197597,  55.91868808,  55.13338215,
            33.1365961 ,  48.95821962,  25.50538193,  58.72572039,
            49.63841177,  41.7925894 ])}
    

## 用分类变量绘图 ##
也可以使用分类变量创建绘图。Matplotlib允许您将分类变量直接传递给许多绘图函数。例如：


```python
names = ['group_a', 'group_b', 'group_c']
values = [1, 10, 100]

# 表示figure 的大小为宽、长（单位为inch）
plt.figure(1, figsize=(18, 6))

# plt.subplot(ABC)表示第A行,B图形的总数量，C第几个图形
plt.subplot(131)

# 直方图
plt.bar(names, values)
plt.subplot(132)
#散点图
plt.scatter(names, values)
plt.subplot(133)
#折线图
plt.plot(names, values)
plt.suptitle('Categorical Plotting')
plt.show()
```


![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/matplotlibPyplot/output_13_0.png)


## 控制线的属性 ##
线可以设置许多属性：linewidth，dash style，antialiased等; 请参阅 [matplotlib.lines.Line2D](https://matplotlib.org/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D)。 有几种方法可以设置线属性。

使用关键字args：
```
plt.plot(x, y, linewidth=2.0)
```
使用Line2D实例的setter方法。 plot返回Line2D对象列表; 例如，line1，line2 = plot（x1，y1，x2，y2）。 在下面的代码中，我们假设我们只有一行，因此返回的列表的长度为1.我们使用tuple解压缩为line，以获取该列表的第一个元素：
```
line, = plt.plot(x, y, '-')
line.set_antialiased(False) # turn off antialising
```
使用 [setp()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.setp.html#matplotlib.pyplot.setp) 命令。 下面的示例使用MATLAB样式命令在行列表上设置多个属性。setp透明地使用对象列表或单个对象。您可以使用python关键字参数或MATLAB样式的字符串/值对：
```
lines = plt.plot(x1, y1, x2, y2)
# use keyword args
plt.setp(lines, color='r', linewidth=2.0)
# or MATLAB style string value pairs
plt.setp(lines, 'color', 'r', 'linewidth', 2.0)
```
以下是可用的[Line2D](https://matplotlib.org/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D)属性。
<table align="center">
    <thead>
        <tr>
            <th>属性</th>
            <th>值类型</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>alpha</th>
            <th>float</th>
        </tr>
        <tr>
            <th>animated</th>
            <th>[True | False]</th>
        </tr>
        <tr>
            <th>antialiased 或 aa</th>
            <th>[True | False]</th>
        </tr>
        <tr>
            <th>clip_box</th>
            <th>matplotlib.transform.Bbox实例</th>
        </tr>
        <tr>
            <th>clip_on</th>
            <th>[True | False]</th>
        </tr>
        <tr>
            <th>clip_path</th>
            <th>路径实例和变换实例(修补程序)</th>
        </tr>
        <tr>
            <th>color 或 c</th>
            <th>任何Matplotlib颜色</th>
        </tr>
        <tr>
            <th>contains</th>
            <th>the hit testing function</th>
        </tr>
        <tr>
            <th>dash_capstyle</th>
            <th>['butt' | 'round' | 'projecting']</th>
        </tr>
        <tr>
            <th>dash_joinstyle</th>
            <th>['miter' | 'round' | 'bevel']</th>
        </tr>
        <tr>
            <th>dashes</th>
            <th>以点为单位的开/关油墨顺序</th>
        </tr>
        <tr>
            <th>data</th>
            <th>(np.array xdata, np.array ydata)</th>
        </tr>
        <tr>
            <th>figure</th>
            <th>matplotlib.quire.Figure实例</th>
        </tr>
        <tr>
            <th>label</th>
            <th>任何字符串</th>
        </tr>
        <tr>
            <th>linestyle or ls</th>
            <th>[ '-' | '--' | '-.' | ':' | 'steps' | ...]</th>
        </tr>
        <tr>
            <th>linewidth or lw</th>
            <th>浮点值</th>
        </tr>
        <tr>
            <th>lod</th>
            <th>[True | False]</th>
        </tr>
        <tr>
            <th>marker</th>
            <th>[ '+' | ',' | '.' | '1' | '2' | '3' | '4' ]</th>
        </tr>
        <tr>
            <th>markeredgecolor or mec</th>
            <th>任何Matplotlib颜色</th>
        </tr>
        <tr>
            <th>markeredgewidth or mew</th>
            <th>浮点值</th>
        </tr>
        <tr>
            <th>markerfacecolor or mfc</th>
            <th>任何Matplotlib颜色</th>
        </tr>
        <tr>
            <th>markersize or ms</th>
            <th>浮点数</th>
        </tr>
        <tr>
            <th>markevery</th>
            <th>[ None | integer | (startind, stride) ]</th>
        </tr>
        <tr>
            <th>picker</th>
            <th>用于交互式选线</th>
        </tr>
        <tr>
            <th>pickradius</th>
            <th>线拾取选择半径</th>
        </tr>
        <tr>
            <th>solid_capstyle</th>
            <th>['butt' | 'round' | 'projecting']</th>
        </tr>
        <tr>
            <th>solid_joinstyle</th>
            <th>['miter' | 'round' | 'bevel']</th>
        </tr>
        <tr>
            <th>transform</th>
            <th>matplotlib.transforms.Transform实例</th>
        </tr>
        <tr>
            <th>visible</th>
            <th>[True | False]</th>
        </tr>
        <tr>
            <th>xdata</th>
            <th>np.array</th>
        </tr>
        <tr>
            <th>ydata</th>
            <th>np.array</th>
        </tr>
        <tr>
            <th>zorder</th>
            <th>任意数字</th>
        </tr>
    </tbody>
</table>

若要获取可设置行属性的列表，请使用一行或多行作为参数调用[setp()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.setp.html#matplotlib.pyplot.setp) 函数。



## 使用多个图形和轴 ##
MATLAB和[pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot)，都有当前图形和当前轴的概念。所有打印命令都适用于当前轴。函数gca() 返回当前轴([matplotlib.axes.Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)实例)，[gcf()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.gcf.html#matplotlib.pyplot.gcf) 返回当前地物([matplotlib.figure.Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)实例)。通常情况下，你不必担心这一点，因为这一切都是在幕后处理的。下面是创建两个子图的脚本。


```python
def f(t):
    return np.exp(-t) * np.cos(2*np.pi*t)

t1 = np.arange(0.0, 5.0, 0.1)
t2 = np.arange(0.0, 5.0, 0.02)

plt.figure(1)
plt.subplot(211)
plt.plot(t1, f(t1), 'bo', t2, f(t2), 'k')

plt.subplot(212)
plt.plot(t2, np.cos(2*np.pi*t2), 'r--')
plt.show()
```


![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/matplotlibPyplot/output_16_0.png)


这里的 [figure()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.figure.html#matplotlib.pyplot.figure) 命令是可选的，因为默认情况下将创建 figure(1)，就像默认情况下创建 subplot(111) 一样，如果不手动指定任何轴。[subplot()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplot.html#matplotlib.pyplot.subplot)命令指定numrows, numcols, plot_number，其中 plot_number 的范围 从1到numrows*numcols。如果 numrows * numcols <10，则subplot命令中的逗号是可选的。因此 subplot(211) 与 subplot(2, 1, 1) 相同。

您可以创建任意数量的子图和轴。如果要手动放置轴，即不在矩形网格上，请使用 axes() 命令，该命令允许您将位置指定为axes([left，bottom，width，height])，其中所有值均为小数（0到1）坐标。有关手动放置轴的示例，请参阅[Axes Demo](https://matplotlib.org/gallery/subplots_axes_and_figures/axes_demo.html);有关具有大量子图的示例，请参阅 [Basic Subplot Demo](https://matplotlib.org/gallery/subplots_axes_and_figures/subplot_demo.html)。

您可以使用具有增加的图号的多个[figure()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.figure.html#matplotlib.pyplot.figure) 调用来创建多个数字。当然，每个图形可以包含您心中所需的轴和子图：


```python
import matplotlib.pyplot as plt
plt.figure(1)                # the first figure
plt.subplot(211)             # the first subplot in the first figure
plt.plot([1, 2, 3])
plt.subplot(212)             # the second subplot in the first figure
plt.plot([4, 5, 6])


plt.figure(2)                # a second figure
plt.plot([4, 5, 6])          # creates a subplot(111) by default

plt.figure(1)                # figure 1 current; subplot(212) still current
plt.subplot(211)             # make subplot(211) in figure1 current
plt.title('Easy as 1, 2, 3') # subplot 211 title
```




    Text(0.5, 1.0, 'Easy as 1, 2, 3')




![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/matplotlibPyplot/output_18_1.png)



![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/matplotlibPyplot/output_18_2.png)


您可以使用 [clf()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.clf.html#matplotlib.pyplot.clf) 清除当前图形，使用 [cla()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.cla.html#matplotlib.pyplot.cla) 清除当前轴。如果您发现在幕后为您维护状态（特别是当前图像，图形和轴）很烦人，请不要绝望：这只是围绕面向对象API的瘦状态包装器，您可以使用它（见[Artist tutorial](https://matplotlib.org/tutorials/intermediate/artists.html)）

如果你要制作大量的图像，你还需要注意一件事：在用 [close()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.close.html#matplotlib.pyplot.close) 显式关闭数字之前，数字所需的内存不会完全释放。删除对图的所有引用，和/或使用窗口管理器来杀死屏幕上出现图形的窗口是不够的，因为pyplot会保持内部引用，直到调用close()。
## 使用文本 ##
[text()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.text.html#matplotlib.pyplot.text) 命令可用于在任意位置添加文本，而[xlabel()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.xlabel.html#matplotlib.pyplot.xlabel), [ylabel()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.ylabel.html#matplotlib.pyplot.ylabel) 和 [title()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.title.html#matplotlib.pyplot.title) 用于在指定位置添加文本(有关更详细的示例，请参见Matplotlib图中的文本)


```python
mu, sigma = 100, 15
x = mu + sigma * np.random.randn(10000)

# the histogram of the data
n, bins, patches = plt.hist(x, 50, density=1, facecolor='g', alpha=0.75)


plt.xlabel('Smarts')
plt.ylabel('Probability')
plt.title('Histogram of IQ')
plt.text(60, .025, r'$\mu=100,\ \sigma=15$')
plt.axis([40, 160, 0, 0.03])
plt.grid(True)
plt.show()
```


![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/matplotlibPyplot/output_20_0.png)


所有[text()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.text.html#matplotlib.pyplot.text) 命令都返回一个[matplotlib.text.Text](https://matplotlib.org/api/text_api.html#matplotlib.text.Text)实例。与上面的行一样，您可以通过将关键字参数传递给文本函数或使用[setp()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.setp.html#matplotlib.pyplot.setp)来自定义属性：

    t = plt.xlabel('my data', fontsize=14, color='red')
[文本属性和布局](https://matplotlib.org/tutorials/text/text_props.html)中更详细地介绍了这些属性。
### 在文本中使用数学表达式 ###
matplotlib在任何文本表达式中接受TeX方程表达式。 例如，要在标题中写入表达式σi= 15，您可以编写由美元符号包围的TeX表达式：

    plt.title(r'$\sigma_i=15$')
标题字符串前面的r很重要 - 它表示该字符串是一个原始字符串，而不是将反斜杠视为python转义。matplotlib有一个内置的TeX表达式解析器和布局引擎，并提供自己的数学字体 - 有关详细信息，请参阅编写[数学表达式](https://matplotlib.org/tutorials/text/mathtext.html)。因此，您可以跨平台使用数学文本，而无需安装TeX。 对于安装了LaTeX和dvipng的用户，您还可以使用LaTeX格式化文本并将输出直接合并到显示图或保存的postscript中 - 请参阅使用[LaTeX](https://matplotlib.org/tutorials/text/usetex.html)进行文本渲染。

## 注释文本 ##
上面的基本[text()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.text.html#matplotlib.pyplot.text) 命令的使用将文本放在Axes上的任意位置。文本的常见用途是注释绘图的某些功能，而[annotate()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.text.html#matplotlib.pyplot.text)方法提供帮助功能以使注释变得容易。在注释中，有两点需要考虑：由参数xy表示的注释位置和文本xytext的位置。 这两个参数都是（x，y）元组。


```python
ax = plt.subplot(111)

t = np.arange(0.0, 5.0, 0.01)
s = np.cos(2*np.pi*t)
line, = plt.plot(t, s, lw=2)

plt.annotate('local max', xy=(2, 1), xytext=(3, 1.5),
             arrowprops=dict(facecolor='red', shrink=0.05),
             )

plt.ylim(-2, 2)
plt.show()
```


![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/matplotlibPyplot/output_22_0.png)


在此基本示例中，xy（箭头提示）和xytext位置（文本位置）都在数据坐标中。 可以选择各种其他坐标系 - 有关详细信息，请参阅[基本注释](https://matplotlib.org/tutorials/text/annotations.html#annotations-tutorial)和[高级注释](https://matplotlib.org/tutorials/text/annotations.html#plotting-guide-annotation)。更多示例可以在[Annotating Plots](https://matplotlib.org/gallery/text_labels_and_annotations/annotation_demo.html)中找到。

## 对数和其他非线性轴 ##
[matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) 不仅支持线性轴刻度，还支持对数和logit刻度。 如果数据跨越许多数量级，则通常使用此方法。 更改轴的比例很容易：

    plt.xscale('log')
下面显示了具有相同数据和y轴不同比例的四个图的示例。


```python
from matplotlib.ticker import NullFormatter  # useful for `logit` scale

# Fixing random state for reproducibility
np.random.seed(19680801)

# make up some data in the interval ]0, 1[
y = np.random.normal(loc=0.5, scale=0.4, size=1000)
y = y[(y > 0) & (y < 1)]
y.sort()
x = np.arange(len(y))

# plot with various axes scales
plt.figure(1)

# linear
plt.subplot(221)
plt.plot(x, y)
plt.yscale('linear')
plt.title('linear')
plt.grid(True)


# log
plt.subplot(222)
plt.plot(x, y)
plt.yscale('log')
plt.title('log')
plt.grid(True)


# 对称 log
plt.subplot(223)
plt.plot(x, y - y.mean())
plt.yscale('symlog', linthreshy=0.01)
plt.title('symlog')
plt.grid(True)

# logit
plt.subplot(224)
plt.plot(x, y)
plt.yscale('logit')
plt.title('logit')
plt.grid(True)

# 使用“NullFormatter”将y轴上的小标记标签格式化为空字符串，以避免轴上有太多标签。
plt.gca().yaxis.set_minor_formatter(NullFormatter())

# 调整subplot布局，因为logit 1可能比平常占用更多的空间，这是由于像“1 - 10^{-3}”这样的y-tick标签造成的。
plt.subplots_adjust(top=0.92, bottom=0.08, left=0.10, right=0.95, hspace=0.25,
                    wspace=0.35)

plt.show()
```


![png](https://cdn.jsdelivr.net/gh/InfiniteYinux/cloud@2.45/img/matplotlibPyplot/output_24_0.png)


您也可以添加自己的比例，有关详细信息，请参阅[开发人员指南](https://matplotlib.org/devel/add_new_projection.html#adding-new-scales)以创建比例和转换。


```python

```
