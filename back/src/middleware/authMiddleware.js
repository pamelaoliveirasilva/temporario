const jwt = require('jsonwebtoken');
const knex = require('../config/database');

const verifyToken = async (req, res, next) => {
	const { authorization } = req.headers;

	if (!authorization) {
		return res.status(401).json({ mensagem: 'Não autorizado' });
	}

	try {
		const token = authorization.replace('Bearer ', '').trim();

		const { id } = jwt.verify(token, process.env.JWT_SECRET);

		const users = await knex('usuarios').where({ id });

		if (users.length === 0) {
			return res.status(404).json({ mensagem: 'Usuário não encontrado' });
		}

		const { senha, ...user } = users[0];

		req.user = user;

		next();
	} catch (error) {
		if (error.message === 'invalid token') {
			return res.status(404).json({ mensagem: 'Token inválido' });
		}
		return res.status(400).json(error.message);
	}
};

module.exports = verifyToken;
