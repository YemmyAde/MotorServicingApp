// const { userSchema } = require('../models');
const Joi = require('@hapi/joi');

const signupValidation = (newUser) => {
  const userSchema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(250).required().messages({
      'string.base': `Name should be a text`,
      'string.empty': `Name cannot be an empty field`,
      'any.required': `Name is a required field`,
      'string.alphanum': `Name must be text`,
    }),
    lastName: Joi.string().max(250).required().messages({
      'string.base': `Last-Name should be a text`,
      'string.empty': `Last-Name cannot be an empty field`,
      'any.required': `Last-Name is a required field`,
      'any.required': `Last-Name is a required field`,
    }),
    email: Joi.string().min(6).email().required().messages({
      'email.base': `Please enter a valid email`,
      'email.empty': `Please enter a valid email`,
      'any.required': `Please enter a valid email`,
      'string.email': 'Please enter a valid email',
    }),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .min(6)
      .max(1024)
      .required()
      .messages({
        'email.base': `Please enter a valid email`,
        'email.empty': `Please enter a valid email`,
        'any.required': `Please enter a valid email`,
        'string.email': 'Please enter a valid email',
      }),
    repeatPassword: Joi.ref('password'),
  });

  return userSchema.validate(newUser);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).email().required().messages({
      'email.base': `Please enter a valid email`,
      'email.empty': `Please enter a valid email`,
      'any.required': `Please enter a valid email`,
      'string.email': 'Please enter a valid email',
    }),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .max(1024)
      .required()
      .messages({
        'email.base': `Please enter a valid email`,
        'email.empty': `Please enter a valid email`,
        'any.required': `Please enter a valid email`,
        'string.email': 'Please enter a valid email',
      }),
  });
  return schema.validate(data);
};
const resetPasswordValidator = (data) => {
  schema = Joi.object({
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .max(1024)
      .required()
      .messages({
        'email.base': `Please enter a valid email`,
        'email.empty': `Please enter a valid email`,
        'any.required': `Please enter a valid email`,
        'string.email': 'Please enter a valid email',
      }),
    repeatPassword: Joi.ref('password'),
  });
  return schema.validate(data);
};
module.exports = {
  signupValidation,
  loginValidation,
  resetPasswordValidator,
};
