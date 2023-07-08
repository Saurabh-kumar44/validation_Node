const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const User=require('../models/users');

//authenticayion using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function(email,password,done){
//find a user and establish indenetiy
        User.findOne({email: email}, function(err,user){
            if(err){
                console.log('error in finding u ser using passport');
                    return done(err);
            }
            if(!user || user.password != password ){
                console.log("invalid username or password");
                return(null, false);
            }
            return (done,user);

        })
    }
))

//serialize the user to decide which key is to kept in cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
})


//deserialize the user from key in cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        console.log("error in finnddig user");
        return done(err);
    })
    return done(null,user);
})

module.exports = passport;



