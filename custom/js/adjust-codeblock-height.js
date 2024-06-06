// adjust-code-block-height.js
document.addEventListener("DOMContentLoaded", function() {
    // 选择所有的.md-text元素
    var codeBlocks = document.querySelectorAll('.md-text');
    // 遍历每个.md-text元素
    codeBlocks.forEach(function(block) {
      // 检查是否包含.highlight类的子元素，且父元素高度超过500px
      var highlightBlocks = block.querySelectorAll('.highlight');
      highlightBlocks.forEach(function(highlightBlock) {
        if (highlightBlock.clientHeight > 800) {
          highlightBlock.style.maxHeight = '300px';
          highlightBlock.style.overflow = 'auto';
        }
      });
    });
  });

  

// 获取所有可点击的元素
var clickableElements = document.querySelectorAll('a, button, input[type="button"], input[type="submit"], input[type="reset"], select');

// 设置鼠标样式
clickableElements.forEach(function(element) {
    element.style.cursor = 'url(https://cur.cursors-4u.net/food/foo-6/foo507.ani), url(https://cur.cursors-4u.net/food/foo-6/foo507.png), auto';
});
