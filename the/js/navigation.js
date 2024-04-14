const navigation = () => {
  const nav = document.querySelector('#navi');
  const navLinks = document.querySelectorAll('.menu a');
  const hamburger = document.querySelector('.hamburger');
  const mask = document.querySelector('.mask');
  const htmlBody = document.querySelectorAll('html, body');

  // ハンバーガーメニューのクリックイベント
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
      // ナビゲーション表示時の背景固定
      htmlBody.forEach((element) => {
        element.style.overflow = 'hidden';
      });
    } else {
      // ナビゲーション表示時の背景固定解除
      htmlBody.forEach((element) => {
        element.style.overflow = 'unset';
      });
    }
  });

  // .logoをクリックした時にメニューを閉じる
  logo.addEventListener('click', () => {
    nav.classList.remove('open');
    // ナビゲーション表示時の背景固定解除
    htmlBody.forEach((element) => {
      element.style.overflow = 'unset';
    });
  });

  // リンクをクリックした時にメニューを閉じる
  navLinks.forEach((navlink) => {
    navlink.addEventListener('click', () => {
      nav.classList.remove('open');
      // ナビゲーション表示時の背景固定解除
      htmlBody.forEach((element) => {
        element.style.overflow = 'unset';
      });
    });
  });

  // maskのエリアをクリックした時にメニューを閉じる
  mask.addEventListener('click', () => {
    nav.classList.remove('open');
    // ナビゲーション表示時の背景固定解除
    htmlBody.forEach((element) => {
      element.style.overflow = 'unset';
    });
  });
};

navigation();
