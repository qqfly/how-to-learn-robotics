// MathJax v3 configuration for MkDocs Material (pymdownx.arithmatex, generic mode)
// Inline math:  $ ... $   Display math:  $$ ... $$
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*",
    processHtmlClass: "arithmatex"
  }
};

// Re-typeset on page change — required for navigation.instant (AJAX 换页后无自动排版)。
// 注意：SVG 版 MathJax 没有 output.clearCache（那是 CHTML 清字体缓存用的），
// 调它会抛异常并中断整个回调，导致 typesetPromise 不执行、公式不渲染。故不要调用它。
document$.subscribe(() => {
  if (!window.MathJax?.typesetPromise) return;
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});
