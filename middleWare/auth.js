const jwt = require('jsonwebtoken');
const CustomError = require('../error/custom-error');

const authenticationMiddleware = (req,res,next) => {
    const {authorization} = req.headers;
    if(!authorization && authorization.startWith('Bearer ')){
        throw new CustomError('No token provided',401)
    }
    const token = authorization.split(' ')[1];
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const {id,username} = decode;
        req.user = {id,username}
        next(); 
    }catch(e) {
        throw new CustomError('Not authorized to access this route',401)
    }
}

module.exports = authenticationMiddleware;