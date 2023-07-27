const knex = require('../config/database');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
	const { nome_usuario, email, senha } = req.body;

	try {
		const checkEmail = await knex('usuarios').where({ email }).first();

		if (checkEmail) return res.status(400).json({ message: 'Email já cadastrado' });

		const encryptedPassword = await bcrypt.hash(senha, 10);

		const newUser = {
			nome_usuario,
			email,
			senha: encryptedPassword,
		};

		await knex('usuarios').insert(newUser);

		return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro ao registrar o usuário' });
	}
};

const editUser = async (req, res) => {
	const userId = req.user.id;
	const { nome_usuario, email, senha, cpf, telefone } = req.body;

	try {
		const existingUser = await knex('usuarios')
			.where('email', email)
			.whereNot('id', userId)
			.first();
		if (existingUser) {
			return res.status(400).json({ mensagem: 'Email já está em uso por outro usuário' });
		}

		if (senha) {
			const hashedPassword = await bcrypt.hash(senha, 10);

			await knex('usuarios')
				.where({ id: userId })
				.update({ nome_usuario, email, senha: hashedPassword, cpf, telefone });
		} else {
			await knex('usuarios').where({ id: userId }).update({ nome_usuario, email, cpf, telefone });
		}

		return res.status(200).json({ mensagem: 'Usuário atualizado com sucesso!' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ mensagem: 'Erro ao atualizar o usuário' });
	}
};

module.exports = {
	editUser,
	registerUser,
};
