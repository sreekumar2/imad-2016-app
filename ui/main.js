console.log('Loaded!');

//change the text of the main-text div
var element  = document.getElementById('main-text'
);
element.innerHTML = 'Hello sree';

//move the image
var img = document.getElementById('madi'); 
img.oneclick = function () {
  img.style.marginLeft = '100px';
 };