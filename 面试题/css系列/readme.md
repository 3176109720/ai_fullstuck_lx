# 1. 说说你对css盒模型的理解
1. 盒模型是什么？
  浏览器在渲染一个html容器时，会根据某一个标准来绘制出一个矩形容器，这个容器包含四个部分 内容，内边距，边框，外边距 content, padding, border, margin

2. 有什么盒模型
  - 标准盒模型
    盒子总宽度：width + padding + border + margin    也就是说在标准盒模型中(width = content) 

  - 怪异盒模型(IE)
    盒子总宽度: width + margin  也就是说在怪异盒模型中(width = content +padding + border)

3. 如何设置盒子模型的类型: box-sizing: content-box(标准) || border-box(怪异)  
  
# 2. css中的选择器有哪些？说说优先级
1. id选择器                     
2. 类名选择器        // class
3. 标签选择器        // <p> <span> ....
4. 后代选择器      
5. 子级选择器        // 只选子级不管孙子级
6. 相邻兄弟选择器 // 只选相邻的兄弟不选自己   只有后一位的兄弟才是相邻的兄弟   前面的容器以及后两位在内的后面的容器不会被选   .xx + .xx {}        

7. 群组选择器       //.xx, .xx, .xx {}  修改选中的所有元素


8. 伪类选择器      
9. 伪元素选择器     // .xx::before { content: 'xx'; }   // .xx::after { content: 'xx'; }    
10. 属性选择器      // .xx[拥有的属性] { }

优先级
!important > 内联(行内样式) > id选择器 > 类名选择器 > （后代选择器 == 子级选择器 == 兄弟选择器） > 标签选择器   

大部分文字文本相关的属性会被继承

# 3. 说说css中的单位有哪些？
1. px : 绝对单位 像素单位，屏幕上的发光点
2. rem : 相对单位，相对于根字体大小
3. em : 相对单位，用于字体上会继承父容器的字体大小，用在它处，是相对于当前容器自己的字体大小来定的  
4. vw/vh : 相对单位，相对于窗口宽高比
5. % : 相对单位，相对于父容器

# 4. css中有哪些方式可以隐藏页面元素？区别是什么？
1. display: none           显示方式设置为隐藏                              脱离文档流   无法响应事件    回流重绘            
2. visibility: hidden      元素可见性设置为隐藏                            占据文档流   无法响应事件    重绘               
3. opacity: 0              元素透明度设置为0                               占据文档流   响应事件        重绘 || 不重绘
4. position: absolute                                                      脱离文档流   无法响应事件    回流重绘
5. clip-path: circle(0%)   剪裁元素为一个半径为 0% 的圆形，即将其完全隐藏   占据文档流   无法响应事件    重绘
6. width: 0 height: 0      宽度和高度都设置为0，元素完全隐藏                 占据文档流   无法响应事件    重绘

# 5. 清除浮动
1. 在浮动元素的最后面添加一个空容器 并设置clear: both
2. 在父容器伪元素 after 上进行清除浮动
3. bfc 

# 6. 谈谈你对BFC的理解
- 是什么
  块级格式化上下文，是页面中一个渲染区域，有一套属于自己的渲染规则

- 渲染规则
  1. BFC容器在计算高度时，浮动元素的高度也会计算在内
  2. BFC容器内的子元素的margin-top不会和BfC这个父容器发成重叠 内部元素的margin-top和margin-bottom会重叠
  3. bfc中的子容器依然按照正常容器的渲染规则

- 触发条件
  1. overflow: hidden || auto  || scroll  ||  overlay 
  2. float
  3. display: inline-block || inline-xxx  || flex  || table-xxx || grid
  4. position: absolute || fixed

- 应用
  1. 清除浮动
  2. 防止margin重叠


# 7. 水平垂直居中的方式有哪些？ !!!!!
1. 已知父子容器宽高  margin挤到中间过去
2. 已知子容器宽高    position + margin 负值                                               
3. 不知道子容器宽高  flex， position + translate,  grid,  table:  text-align  + vertical-align  (子容器不能是块级)


# 8. 三栏布局怎么实现？
- 两栏布局：
1. flex 
2. grid
3. float + margin-left

- 三栏布局:
1. flex  优先渲染中间  +  order 排序
2. grid 
3. table
4. 圣杯布局：float + margin负值 + position:relative
5. 双飞翼布局：float + margin负值
6. position : absolute
6. 左右先加载内容后加载：float + margin

# 9. 说一说弹性盒子
- flex属性可以将一个容器转换为一个弹性容器， 可以简便，响应式的实现布局， 弹性容器有主轴与交叉轴之分，通常默认x轴为主轴

- 属性
 1. 父容器: 
 2. 子容器: 

- 应用场景
 1. 水平垂直居中
 2. 多栏布局

# 10. 如何用css实现一个三角形和扇形
 - 三角形: border

 - 扇形:conic-gradient， clip-path 