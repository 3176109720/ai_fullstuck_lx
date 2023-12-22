(function(doc, win) {
    // 用js动态修改页面跟字体大小
    var docEl = doc.documentElement     // 获取整个页面根节点  <html> --- </html>
    var recalc = function() {
        var clientWidth = docEl.clientWidth
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
    }

    doc.addEventListener('DOMContentLoaded', recalc)   // 监听页面加载完毕
    win.addEventListener('resize', recalc)  // 监听屏幕变化

})(document, window)