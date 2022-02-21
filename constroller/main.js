const jwt = require('jsonwebtoken');
const CustomError = require('../error/custom-error');

const login = (req,res) =>{
    let {username,password} = req.body;
    if(!username && !password) {
        throw new CustomError('please provide email and password',400);
    }
    let id = new Date().getDate();
    let token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'});   

    res.status(200).json({msg:'User Created',token})
}

const dashboard = (req,res)=>{
    
    const luckyNumer = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello ${req.user.username}`,secret:`Here is your authorized data, your lucky numer is ${luckyNumer}`}); 
    
}

module.exports = {
    login,dashboard
}