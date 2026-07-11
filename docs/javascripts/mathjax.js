// MathJax v3 configuration for MkDocs Material (pymdownx.arithmatex, generic mode)
// Inline math:  $ ... $   Display math:  $$ ... $$
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    // 本地 SVG 包不含 boldsymbol 扩展（autoload 会因无 CDN 失败），
    // 兜底映射到 \mathbf，避免正文误用时渲染成红字。全书公式约定：不加粗，用普通斜体。
    macros: { boldsymbol: ["\\mathbf{#1}", 1] }
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
