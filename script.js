let openPoupBtn = document.querySelector('.open-popup-btn');
let closePoupBtn = document.querySelector('.popup-close-btn');

openPoupBtn.addEventListener('click', function() {
    document.body.classList.add('popup-active');
});
closePoupBtn.addEventListener('click', function() {
    document.body.classList.remove('popup-active');
});