//Name: Omar Bafagih
//Student ID: 101209028

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


//SHOULD HAVE THE FOLLOWING COLLECTIONS ON MY DB:
//  -- sessions
//  -- orders
//  -- users



//routers
const livegamesRouter = require('./routers/livegamesRouter');
//const ordersRouter = require('./routers/orders-router');




//setting up middleware
const path = require('path');
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next){
    console.log(`${req.method} for ${req.url}`);
    next();
});



//server routes

//routes using routers
app.use('/livegames',livegamesRouter);
//app.use('/orders', ordersRouter);

//session/authentication routes
app.get('/', function (req, res){
    res.render('index');
  });

 
app.listen(PORT, () => "Server listening on port 5000");

