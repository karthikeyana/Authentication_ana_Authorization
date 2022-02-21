const CustomAPIError = require('../error/custom-error');

const errorHandlerMiddleware = (err,req,res,next) =>{
    if(err instanceof CustomAPIError){
        res.send(err.statusCode).json({msg:err.message})
    }
    console.log(err)
    return res.status(500).send('something went wrong try again later');
}

module.exports = errorHandlerMiddleware;