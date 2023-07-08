const express = require('express');
const app = express();
const port = 8000;


//including layouts library before routes
const expressLayouts=require('express-ejs-layouts');
//set up database
const db=require('./config/mongoose');

//for passport.js
const session=require('express-session');
// const passport=require('passport');
// const passportLocal=require('./config/passport-local-stratergy')


//for set up cookies
const cookieParser= require('cookie-parser');


// Parse URL-encoded bodies (if you are using form data)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(express.json());


//for handling post req
app.use(express.urlencoded());

app.use(cookieParser());
//include assets
app.use(express.static('./assets'));

//include layouts
app.use(expressLayouts);

//set the style and script at correct place in layout.ejs
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router
app.use('/', require('./routes'));
app.set('view engine','ejs');
app.set('views','./views'); 

//for passport.js
// app.use(session({
//     name: 'codial',
//     //todo change scret before deployment
//     secret:'changed',
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//         maxAge: (1000 * 60 * 100)
//     }}

// ));
// app.use(passport.initialize());
// app.use(passport.session());




app.listen(port, function(err){
    if(err){
        console.log(`error in running the server ${err}`);
    }
    console.log(`Server is running on port ${port}`);
})  