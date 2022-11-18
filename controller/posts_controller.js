module.exports.home=function(req,res){
    res.end("<h1> home of post</h1>")
}

module.exports.post=function(req,res){
    res.end("<h1> users posts list</h1>")
}