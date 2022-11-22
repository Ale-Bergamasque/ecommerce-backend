const knex = require('../connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const schemaLogin = require('../validations/schemaLogin');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        await schemaLogin.validate(req.body);

        const user = await knex('users').where({ email }).first();

        if (!user) {
            return res.status(404).json("Email e/ou senha incorretos.");
        }

        const validatePassword = await bcrypt.compare(password, user.password);

        if (!validatePassword) {
            return res.status(400).json("Email e/ou senha incorretos.");
        }

        const token = jwt.sign({ id: user.id }, process.env.HASH_PASSWORD, { expiresIn: '8h' });

        const { password: _, ...dataUser } = user;

        return res.status(200).json({
            user: dataUser,
            token
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    login
}