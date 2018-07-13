(function(){
  'use strict';

  const slideBar = document.getElementById('load__bar').style;
  const slideButton = document.getElementsByClassName('slide__button');

  for (let button of slideButton) {
    button.addEventListener('click', () => {
      for (var i = 0; i < 100; i++) {
        slideBar.transition = 'width' +' '+ Math.random();
        slideBar.width = i +"%"
      }
    })
  }
})();
