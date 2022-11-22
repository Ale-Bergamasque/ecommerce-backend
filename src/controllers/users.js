const knex = require('../connection');
const bcrypt = require('bcrypt');
const schemaRegisterUser = require('../validations/schemaRegisterUser');

const registerUser = async (req, res) => {
    const { storeName, email, password, confirmPassword } = req.body;

    try {
        await schemaRegisterUser.validate(req.body);

        const space = password.includes(" ");

        if (space) {
            return res.status(404).json("A senha não pode possuir espaços em branco.");
        }

        if (password !== confirmPassword) {
            return res.status(404).json("As senhas não conferem.");
        }

        const findUser = await knex('users').where({ email }).first();

        if (findUser) {
            return res.status(400).json("O email informado já possui um cadastro.");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = await knex('users').insert({
            store_name: storeName,
            email,
            password: encryptedPassword
        }).returning(['id', 'store_name', 'email']);

        if (!newUser) {
            return res.status(400).json("O usuário não foi cadastrado.");
        }

        return res.status(200).json(newUser[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    registerUser
}