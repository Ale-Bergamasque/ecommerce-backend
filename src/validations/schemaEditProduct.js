const yup = require('./configurationsYup');

const schemaEditProduct = yup.object().shape({
    product_name: yup.string().required('Título é um campo obrigatório.').max(200),
    category_id: yup.string().required('Categoria é um campo obrigatório.'),
    product_description: yup.string().required('Descrição do produto é um campo obrigatório.').max(2000),
    price: yup.number().required('Preço é um campo obrigatório.'),
    stock: yup.number().required('Estoque é um campo obrigatório.'),
    product_photo: yup.string().required('Foto do produto é um campo obrigatório.'),
    photo_name: yup.string().required().max(200)
});

module.exports = schemaEditProduct;