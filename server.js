var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 articleOne : {

  title : 'Article one | Varshini Ch',
    heading: 'Article one ',
    Date :'sept 1, 2017',
    content:`<p>
            this is the articleONE - Varsha. and my dte of birth is:22nd june 
            </p>
            <p>
            this is the articleONE - Varsha. second para and my dte of birth is:22nd june 
            </p>
            <p>
            third para of this is the articleONE - Varsha. and my dte of birth is:22nd june 
            </p>`
    
},  
    articleTwo: {
        title : 'Article Two | Varshini Ch P',
    heading: 'Article two ',
    Date :'sept 15, 2017',
    content:`<p>
            this is the articleTwo - Varsha. and my dte of birth is:22nd june 
            /p>`
    
},
    articleThree:{
             title : 'Article THREE | Varshini Ch P D',
    heading: 'Article three ',
    Date :'sept 15, 2017',
    content:`<p>
            this is the articleThree- Varsha. and my dte of birth is:22nd june 
            /p>`
    
},
        
    };


function createTemplate (data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmlTemplate =`
<html>
    <head>
            <title>
            $(title)
            </title>
             <meta name = "viewport" content="width=device-width,initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    
    <body>
        <div class = "container">
            <div>
            <a href="/"> HOME</a>
            </div>
             </div>
            <hr/>
            <h1>
            ${heading}
            </h1>
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

app.get('/:articleName',function(req,res){
      res.send(createTemplate((articles[articleName])));

});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
    //res.send("article THREE is requested and will be served here");
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
