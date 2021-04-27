// all modules.

const Document = require('../models/document')
const Image = require('../models/image')
const io = require('../server')
const sockets = require('../sockets/homeSockets')

// controller.
exports.getAll = (req,res)=>{
    res.render('all',{name:req.params.name})
}
exports.checkQuery = async(req,res)=>{
    res.render('home')
}