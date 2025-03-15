const ua = navigator.userAgent;
  // Chrome判定: "Chrome" が含まれ、なおかつ Edge や Opera ではない場合
  const isChrome = ua.indexOf("Chrome") > -1 && ua.indexOf("Edg") === -1 && ua.indexOf("OPR") === -1;

  if (isChrome) {
    // Chromeの場合、class "warning" を持つすべての要素を削除
    const postsElements = document.querySelectorAll('.warning');
    postsElements.forEach(function(element) {
      element.parentNode.removeChild(element);
    });
  }