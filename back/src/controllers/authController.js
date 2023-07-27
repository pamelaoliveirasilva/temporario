const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../config/database');

const login = async (req, res) => {
	const { email, senha } = req.body;

	if (!email || !senha) {
		return res.status(404).json({ mensagem: 'É obrigatório e-mail e senha' });
	}

	try {
		const users = await knex('usuarios').where({ email });

		if (!users.length) {
			return res.status(400).json({ mensagem: 'O e-mail não existe no cadastro' });
		}

		const user = users[0];

		const passwordCorrect = await bcrypt.compare(senha, user.senha);

		if (!passwordCorrect) {
			return res.status(400).json({ mensagem: 'Senha incorreta para este e-mail' });
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '8h' });

		const { senha: _, ...userDate } = user;

		return res.status(200).json({
			usuario: userDate,
			token,
		});
	} catch (error) {
		return res.status(400).json(error.message);
	}
};

const logout = (req, res) => {
	localStorage.removeItem('token')
	return res.status(200).json({mensagem:'Logount realizado com sucesso'})
}

module.exports = {
	login,
	logout
};
