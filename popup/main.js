const popupImg = document.querySelectorAll('.popup-img');

// .popup-imgをクリックしたら.activeを付与
popupImg.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
