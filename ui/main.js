console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text'
);
element.innerhtml = 'New value';

//move the image
var img = document.getElementById('madi');
var margingLeft = 0;
function novwRight () {
    marginLeft = marginLeft +5;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    };