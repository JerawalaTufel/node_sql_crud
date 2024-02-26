const Joi = require("joi")

module.exports = {
    addProductValidation : (req , res , cb) => {
        const schema = Joi.object({
            name : Joi.string().trim().max(50).required(),
            description : Joi.string().trim().max(50).required(),
            price : Joi.number().required(),
            quantity : Joi.number().required()
        })
        const {error} = schema.validate(req)
        if(error){
            return res.status(400).send({
                "status" : 400,
                "message" : error.details[0].message
            });
        }
        return cb(true);

    }   
}