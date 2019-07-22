var express = require('express');
var app = express();


app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/assets',express.static(__dirname + '/assets'));




app.get('/', function (req, res) {
  res.render('index.html');
});
app.get('/list', function (req, res) {
  res.render('list.html');
});

app.listen(3000, function () {
  console.log('WORDSTACK 3000!');
});
