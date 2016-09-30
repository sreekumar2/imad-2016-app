//counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    
  //create a request object
  var request = new XMLHttpRequest();
  
  // capture the response and store it in a variablr
  request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          // take some action
          if (requeat.status === 200){
             var counter = request.responseText;
             var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      
      // not done yet
  };
  
 //make the request
 request.open('GET','http://sreekumar2.imad.hasura-app.io/counter', true);
 request.send(null);    
};