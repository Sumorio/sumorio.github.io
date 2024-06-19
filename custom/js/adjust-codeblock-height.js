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

  
// 给超长代码增加滚动条，代码框高度超过 800px，则开启折叠，折叠框最大高度为 300px。

