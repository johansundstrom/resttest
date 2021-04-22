var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Account = require('./models/model'), //läs in modellen här
    bodyParser = require('body-parser'); //

// mongoose instans
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://be9.asuscomm.com/accountdb', { useMongoClient: true }); //eliminerar ett problem med mongoose 4.11
mongoose.connect('mongodb://be9.asuscomm.com/accountdb', {useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/route'); //importing routes
routes(app); //register the routes

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' hittade inte' })
});

app.listen(port);
console.log('Account RESTful API server startad på: ' + port);