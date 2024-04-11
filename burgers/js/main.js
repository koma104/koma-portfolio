// ハンバーガーメニューのクリックイベント
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#nav');
const navLinks = document.querySelectorAll('#nav a');
const mask = document.querySelector('.mask');

const navgation = () => {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  mask.addEventListener('click', () => {
    nav.classList.remove('open');
  });

  // リンクをクリックした時にメニューを閉じる
  navLinks.forEach((navlink) => {
    navlink.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
};

navgation();
