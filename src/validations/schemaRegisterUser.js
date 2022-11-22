const yup = require('./configurationsYup');

const schemaRegisterUser = yup.object().shape({
    storeName: yup.
        string().
        required('Nome da loja é um campo obrigatório').
        max(200),
    email: yup.
        string().
        email('Email deve ser um campo válido.').
        required('E-mail é um campo obrigatório.').
        max(200),
    password: yup.string().
        required('Senha é um campo obrigatório.').
        min(8, 'A senha deve ter no mínimo 8 caracteres.').
        max(15, 'A senha deve ter no máximo 15 caracteres.'),
    confirmPassword: yup.
        string().
        required('Confirme a sua senha.').
        min(8, 'A senha deve ter no mínimo 8 caracteres.').
        max(15, 'A senha deve ter no máximo 15 caracteres.')
});

module.exports = schemaRegisterUser;