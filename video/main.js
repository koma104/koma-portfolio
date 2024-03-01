const videos = document.querySelectorAll('.container .video');
const modal = document.querySelector('.modal');
const modalVideo = document.querySelector('.modal video');
const modalTitle = document.querySelector('.modal .modal-title');
const modalClose = document.querySelector('.modal .modal-closeWrap');
const modalBg = document.querySelector('.modal-bg');
const body = document.querySelector('body');

// サムネがクリックされたらモーダルを開く
videos.forEach((video) => {
  video.addEventListener('click', () => {
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
    const videoEl = video.querySelector('video');
    modalVideo.src = videoEl.getAttribute('src');
    const videoTitle = video.querySelector('.video-title');
    modalTitle.innerHTML = videoTitle.innerHTML;
    modalVideo.play();
  });
});

// 閉じるボタンまたはモーダルの背景がクリックされたらモーダルを閉じる
const closeEl = [modalClose, modalBg];
closeEl.forEach((el) => {
  el.addEventListener('click', () => {
    modal.style.display = 'none';
    body.style.overflow = 'auto';
    modalVideo.pause();
  });
});
