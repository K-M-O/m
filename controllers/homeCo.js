// controller.
exports.getAll = (req,res)=>{
    res.render('all',{name:req.params.name})
}
exports.checkQuery = async(req,res)=>{
    res.render('home')
}