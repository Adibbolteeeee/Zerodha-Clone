const Joi = require("joi");

module.exports.signupSchema = Joi.object({
    user : Joi.object({
        email : Joi.string().required(),
        username : Joi.string().required(),
        password : Joi.string().required(),
    }).required(),
});

module.exports.loginSchema = Joi.object({
    user : Joi.object({
        email : Joi.string().required(),
        password : Joi.string().required(),
    }).required(),
});