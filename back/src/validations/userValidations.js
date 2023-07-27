const Joi = require('joi');

const registerUserSchema = Joi.object({
	nome_usuario: Joi.string().required().messages({
		'any.required': 'Campo nome deve ser informado',
		'string.empty': 'O campo nome não pode estar vazio',
	}),
	email: Joi.string().email().required().messages({
		'string.email': 'Email em formato invalido',
		'any.required': 'Campo email deve ser informado',
		'string.empty': 'O campo email não pode estar vazio',
	}),
	senha: Joi.string().required().min(6).messages({
		'any.required': 'Campo senha deve ser informado',
		'string.empty': 'O campo senha não pode estar vazio',
		'string.min': 'A senha precisa conter, no mínimo, 6 caracteres',
	}),
});

const editUserSchema = Joi.object({
	nome_usuario: Joi.string().required().messages({
		'any.required': 'O campo nome é obrigatório',
		'string.empty': 'O campo nome é obrigatório',
	}),
	email: Joi.string().email().required().messages({
		'string.email': 'O campo email precisa ter um formato válido',
		'any.required': 'O campo email é obrigatório',
		'string.empty': 'O campo email é obrigatório',
	}),
	senha: Joi.string().min(6).messages({
		'string.min': 'A senha precisa conter, no mínimo, 6 caracteres',
	}),
	cpf: Joi.string().length(11).allow('').messages({
		'string.length': 'O campo CPF deve conter exatamente 11 caracteres',
	}),
	telefone: Joi.string().allow('').messages({
		'string.empty': 'O campo telefone não pode estar em branco',
	}),
});

module.exports = { editUserSchema, registerUserSchema };
