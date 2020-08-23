// Main Page Slide
var control = document.querySelectorAll('.visual .control ul li a'),
  slideSize = control.length,
  slides = document.querySelectorAll('.visual .slide a'),
  currentIndex = 0,
  timer = 4600;

var slideInterval = setInterval(slideIntervalFunc, timer);

for (var i = 0; i < slideSize; i++) {
  control[i].addEventListener('click', function (e) {
    // 다른 요소의 on class 제거
    e.preventDefault();
    clearSlide();
    // 클릭된 요소에 on class 추가
    e.target.className = 'on';
    for (var j = 0; j < slideSize; j++) {
      if (e.target === control[j]) {
        slides[j].className = 'active';
        currentIndex = j;
      }
    }
    clearInterval(slideInterval);
    slideInterval = setInterval(slideIntervalFunc, timer);
  });
}

function slideIntervalFunc() {
  // setInterval(function () {
  clearSlide();
  if (currentIndex < slideSize - 1) { // 4 5
    currentIndex += 1;
  } else {
    currentIndex = 0;
  }
  // 클릭된 요소에 on class 추가
  control[currentIndex].className = 'on';
  slides[currentIndex].className = 'active';

  // }, 2000);
}

function clearSlide() {
  for (var i = 0; i < slideSize; i++) {
    if (control[i].classList.contains('on')) {
      control[i].className = '';
      slides[i].className = '';
      break;
    }
  }
}