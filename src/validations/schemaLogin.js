const yup = require('./configurationsYup');

const schemaLogin = yup.object().shape({
    email: yup.string().email().required('E-mail é um campo obrigatório.'),
    password: yup.string().required('Senha é um campo obrigatório.').min(8).max(15)
});

module.exports = schemaLogin;