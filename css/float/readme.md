# 浮动
1. 浮动会脱离文档流
2. 可以实现文字环绕
3. 可以使块级元素同行显示
4. 可以使行内元素设置宽高
5. 浮动元素可以使用 margin， 但是不能使用 margin: 0 auto ;


# 清除浮动
1. 给父容器设置高度
2. 增加子容器，并在该子容器身上清除浮动
3. 借助伪元素after 来清除浮动
4. bfc

# BFC -- Block Formatting Context
bfc的效果是让处于bfc内部的元素与外部的元素相互隔离，是内外元素定位不会相互影响
 - 块级格式化上下文

 - 如何创建bfc
  1. 浮动: float: left || right
  2. 定位: position: absolute | fixed
  3. 行内块: dispaly: inline-block
  4. 表格单元: display: table-cell | table-xxx
  5. overflow: auto | hidden | scroll
  6. 弹性盒子: display: flex | inline-flex

 - bfc容器的特征

  1. 内部盒子也会按照文档流的顺序排列
  2. bfc容器在计算高度时，会把浮动的子容器的高度计算在内
  3. 可以解决外边距重叠问题