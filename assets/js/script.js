document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.getElementById('readMoreBtn');
  const profile = document.querySelector('.profile');
  const details = document.querySelector('.profile-details');

  readMoreBtn.addEventListener('click', function() {
    if (!profile.classList.contains('expanded')) {
      // 展開処理：詳細情報の高さをscrollHeightにして表示
      details.style.height = details.scrollHeight + 'px';
      details.style.opacity = 1;
      profile.classList.add('expanded');
      // read less時は矢印が上向きになる（パス：M4 10L8 6L12 10）
      readMoreBtn.innerHTML = '<span>隠す</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10L8 6L12 10" stroke="#007BFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      
      // トランジション終了後、高さをautoに戻す
      details.addEventListener('transitionend', function handler(e) {
        if (e.propertyName === 'height' && profile.classList.contains('expanded')) {
          details.style.height = 'auto';
          details.removeEventListener('transitionend', handler);
        }
      });
    } else {
      // 折りたたみ処理：まず固定値にしてから0へ
      details.style.height = details.scrollHeight + 'px';
      details.offsetHeight; // リフローを強制
      details.style.height = '0';
      details.style.opacity = 0;
      profile.classList.remove('expanded');
      // read more時は下向きの矢印（パス：M4 6L8 10L12 6）
      readMoreBtn.innerHTML = '<span>さらに表示</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="#007BFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }
  });
});
