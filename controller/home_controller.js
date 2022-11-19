
module.exports.test= function(req,res){
    return res.end('<h1> express is up 4 codia</h1>')
}


module.exports.para=function(req,res){
    return res.end('<p> this is para from conroller</p>')
}


module.exports.home=function(req,res){
    console.log(typeof(req.cookies))
    var cookies1=req.cookies
    console.log(Object.keys(cookies1).length)
    return res.render('home',{title:"sweet home"})
}