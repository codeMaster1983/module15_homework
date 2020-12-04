const btn = document.querySelector('.j-btn-test');
let btn1 = document.getElementById('icon1');
let btn2 = document.getElementById('icon2');

btn.addEventListener('click', () => {
  if (btn1.getAttribute('class') === 'btn_icon_show') {
  btn1.setAttribute('class', 'btn_icon_hide');
  btn2.setAttribute('class', 'btn_icon_show');
  } else {
  btn1.setAttribute('class', 'btn_icon_show');
  btn2.setAttribute('class', 'btn_icon_hide');
  }
});
