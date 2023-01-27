import Joi from 'joi';

// console.log(Joi);

const passScheme = Joi.string().min(3).max(10);

// Експортується по дефолту одна сущность
export default function validatePass(pass) {
  return passScheme.validate(pass);
};