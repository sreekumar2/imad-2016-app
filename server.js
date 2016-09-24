var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = { `article-one`: {
        title: 'Article one 1 sreekumar',
    heading: 'Article one',
    date: 'sep19 ,2016',
    content: ` 
             <p>
                   This will be my first article.This will be my first article.This will be my first article.
                   This will be my first article.This will be my first article.This will be my first article.
                   This will be my first article.
            </p>
             <p>
                 This will be my first article.This will be my first article.This will be my first article.
                 This will be my first article.This will be my first article.This will be my first article.
                 This will be my first article.
             </p>
             <p>
                 This will be my first article.This will be my first article.This will be my first article.
                 This will be my first article.This will be my first article.This will be my first article.
                 This will be my first article.
             </p>`
    },
     `article-two`:{
         title: 'Article two 2 sreekumar',
    heading: 'Article two',
    date: 'sep20 ,2016',
    content: ` 
             <p>
                   This will be my tird article
             </p>`
     },
     `article-three`: {
         title: 'Article three 3 sreekumar',
    heading: 'Article three',
    date: 'sep21 ,2016',
    content: ` 
             <p>
                   This will be my tird article
             </p>`
     }
    
    
};
   
    function createTemplate (data) {
        var title = data.title;
        var date = data.date;
        var heading = data.heading;
        var content = data.content;
        
        var htmlTemplate = `
                <html>
                    <head>
                        <title>
                           ${title}
                        </title>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link href="/ui/style.css" rel="stylesheet" />
                    </head>
                    <body>
                        <div class="cointainer">
                            <div>
                               <a href="/">home</a>
                            </div>
                            <hr/>
                            <h3>
                                ${heading}
                            </h3>
                            <div>
                                ${date}
                            </div>
                            <div>
                                ${content}
                            </div>
                        </div>
                    </body>
                </html>
                `;
                return htmlTemplate;
        
    }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articlename == article-one
    //articles[articlenNmae]== {} content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[airtcleName]));
});

app.get('/ui/styles.css', function (req, res){
   res.sendfile(path.join(__dirname, 'ui' 'style.css'));
});

app.get('/ui/main.css', function (req, res){
   res.sendfile(path.join(__dirname, 'ui' 'main.css'));
});

app.get('/ui/madi.png', function (req, res){
    res.sendfile(path.join(__dirname, 'ui', 'madi.png'));
}); 

var port = 8080; //use 8080 forlocal development because you might already have apache running on 80
app.listen(8080, function (){
   console.log('IMAD course app listening on port ${port}!'); 
});