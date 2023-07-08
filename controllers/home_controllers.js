module.exports.home =function(req,res){
    console.log(req.cookies);
    // return res.end('<h1>Express is up for Codeial!</h1>');
    return res.render('home',{
        title:"home"
    })
}