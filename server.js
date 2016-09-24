var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res){
   res.sendfile(path.join(__dirname, 'ui', 'index.html')); 
});
    



app.get('/ui/styles.css', function (req, res){
   res.sendfile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.css', function (req, res){
   res.sendfile(path.join(__dirname, 'ui', 'main.css'));
});

app.get('/ui/madi.png', function (req, res){
    res.sendfile(path.join(__dirname, 'ui', 'madi.png'));
}); 

var port = 8080; //use 8080 forlocal development because you might already have apache running on 80
app.listen(8080, function (){
   console.log('IMAD course app listening on port ${port}!'); 
});