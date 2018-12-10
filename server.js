var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    ejs = require('ejs'),
    Account = require('./models/model'), //läs in modellen här
    bodyParser = require('body-parser'); //

// mongoose instans
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://be9.asuscomm.com/accountdb', { useMongoClient: true }); //eliminerar ett problem med mongoose 4.11

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))

var routes = require('./routes/route'); //importing route
routes(app); //register the route

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' hittade inte' })
});

app.listen(port);
console.log(`Account RESTful API server startad på port: ${port} `);