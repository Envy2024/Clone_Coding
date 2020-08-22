// Main Page Slide
var control = document.querySelectorAll('.visual .control ul li a'),
  slideSize = control.length,
  slides = document.querySelectorAll('.visual .slide a');
for (var i = 0; i < slideSize; i++) {
  control[i].addEventListener('click', function (e) {
    // 다른 요소의 on class 제거
    e.preventDefault();
    for (var j = 0; j < slideSize; j++) {
      if (control[j].classList.contains('on')) {
        control[j].className = '';
        slides[j].className = '';
        break;
      }
    }
    // 클릭된 요소에 on class 추가
    e.target.className = 'on';
    for (var j = 0; j < slideSize; j++) {
      if (e.target === control[j]) {
        slides[j].className = 'active';

      }
    }
  });
}