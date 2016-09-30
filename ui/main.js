//counter code
var button = document.getElementById('counter');
var counter = 0;
button.oneclick = function () {
    
    
  // make a request to the counter end points
  
  
  // capture the response and store it in a variablr
  
  
  // render the variable in the correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
    
};