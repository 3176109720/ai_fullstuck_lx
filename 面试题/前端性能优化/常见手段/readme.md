1. 减少http请求次数，使用http2.0
2. 使用服务端渲染 (让首屏加载更快，SEO好)
3. 合理使用CDN 
4. 将css放在文件头部，将js放在文件底部  <script async defer />
5. 使用精灵图 (雪花图)  --- 有效减少http请求次数
6. 善用缓存(http缓存)
7. 压缩文件
8. 懒加载
9. 尽量用css，字体，来表达图片  <i class="iconfont xxx"></i>
10. 使用webp格式图片 (更优秀的图片压缩算法)
11. webpack tree-shaking 打包文件名+hash 
12. 尽量减少回流重绘 
  - 不要使用js直接改css

  - 如果需要对DOM执行一系列的操作，先让DOM脱离文档流，再修改，再带回文档流  

13. 使用事件委托
