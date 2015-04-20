var express = require('express');
var jade = require('jade');

var app = express();
app.engine('jade', jade.__express);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render('index');
});

app.listen(process.env.PORT || 3000);