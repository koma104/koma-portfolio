const inview = document.querySelectorAll('.inview');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const hero = document.querySelector('#hero');
const access = document.querySelector('#access');
const bg = document.querySelector('.bg');

// 各要素のフェード表示
const setItemShow = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('show');
    }
  });
};
const ioEl = new IntersectionObserver(setItemShow);
inview.forEach((el) => {
  ioEl.observe(el);
});

// ロゴ、ハンバーガーメニューの表示
const setItemHidden = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      logo.style.visibility = 'hidden';
      logo.classList.remove('active');
      hamburger.style.visibility = 'hidden';
      hamburger.classList.remove('active');
    } else {
      logo.style.visibility = 'visible';
      logo.classList.add('active');
      hamburger.style.visibility = 'visible';
      hamburger.classList.add('active');
    }
  });
};
const opHidden = {
  rootMargin: '-40%',
};
const ioHead = new IntersectionObserver(setItemHidden, opHidden);
ioHead.observe(hero);

// Accessの背景画像を表示
const setItemBg = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      bg.style.visibility = 'visible';
      bg.classList.add('active');
    } else {
      bg.style.visibility = 'hidden';
      bg.classList.remove('active');
    }
  });
};
const opBg = {
  rootMargin: '-40%',
};
const ioBg = new IntersectionObserver(setItemBg, opBg);
ioBg.observe(access);

// heroイメージの拡大縮小
const Threshold = () => {
  let thresholds = [];
  let numSteps = 1000;

  for (let i = 1; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }
  return thresholds;
};

const heroImages = document.querySelectorAll('.hero-img img');
const opHero = {
  threshold: Threshold(),
};
const largeImage = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let ratio = entry.intersectionRatio * 100;

      heroImages.forEach((i) => {
        i.style.width = `${133.3 - ratio}%`;
      });
    }
  });
};
const ioHero = new IntersectionObserver(largeImage, opHero);
ioHero.observe(hero);
