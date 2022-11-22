const knex = require('../connection');
const uploadFile = require('../supabase/uploadFile');
const deleteFile = require('../supabase/deleteFile');
const schemaRegisterProduct = require('../validations/schemaRegisterProduct');
const schemaEditProduct = require('../validations/schemaEditProduct');

const listAllProducts = async (req, res) => {

    try {
        const products = await knex('products');

        return res.status(200).json(products);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const listProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const products = await knex('products')
            .join('users', 'users.id', '=', 'products.user_id')
            .select(
                'products.id',
                'products.user_id',
                'users.store_name',
                'products.product_name',
                'products.category_id',
                'products.product_description',
                'products.price',
                'products.stock',
                'products.product_photo',
                'products.photo_name')
            .where('products.id', id)
            .first();

        if (!products) {
            return res.status(400).json("Produto não encontrado.")
        }

        return res.status(200).json(products);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const registerProduct = async (req, res) => {
    const { user } = req;
    const { product_name, category_id, product_description, price, stock, product_photo, photo_name } = req.body;

    try {
        await schemaRegisterProduct.validate(req.body);

        const {
            error: supabaseUpdaloadError,
            errorPublicURL,
            publicURL, photoRename } = await uploadFile(product_photo, user.store_name, photo_name);

        if (supabaseUpdaloadError || errorPublicURL) return res.status(400).json(supabaseUpdaloadError.message || errorPublicURL.message);

        const product = await knex('products').insert({
            user_id: user.id,
            product_name,
            category_id,
            product_description,
            price,
            stock,
            product_photo: publicURL,
            photo_name: photoRename
        }).returning('*');

        if (!product) {
            return res.status(400).json("O produto não foi cadastrado.");
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const listUserProduct = async (req, res) => {
    const { user } = req;

    try {
        const products = await knex('products')
            .where({ user_id: user.id });

        return res.status(200).json(products);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const editProduct = async (req, res) => {
    const { user } = req;
    const { id } = req.params;
    const { product_name, category_id, product_description, price, stock } = req.body;
    let { product_photo, photo_name } = req.body;

    try {
        const findProduct = await knex('products').where({
            id,
            user_id: user.id
        }).first();

        if (!findProduct) {
            return res.status(404).json("Produto não encontrado.");
        }

        await schemaEditProduct.validate(req.body);

        if (photo_name !== findProduct.photo_name) {

            const { error } = await deleteFile(user.store_name, findProduct.photo_name);

            const {
                error: supabaseUpdaloadError,
                errorPublicURL,
                publicURL, photoRename } = await uploadFile(product_photo, user.store_name, photo_name);

            if (supabaseUpdaloadError || errorPublicURL) return res.status(400).json(supabaseUpdaloadError || errorPublicURL)

            if (error) {
                return res.status(400).json(error.message);
            }

            product_photo = publicURL;
            photo_name = photoRename;
        } else {
            photo_name = findProduct.photo_name;
            product_photo = findProduct.product_photo;
        }

        const product = await knex('products')
            .where({ id })
            .update({
                user_id: user.id,
                product_name,
                category_id,
                product_description,
                price,
                stock,
                product_photo,
                photo_name
            });

        if (!product) {
            return res.status(400).json("O produto não foi atualizado.");
        }

        return res.status(200).json("O produto foi atualizado com sucesso.");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const deleteProduct = async (req, res) => {
    const { user } = req;
    const { id } = req.params;

    try {
        const findProduct = await knex('products').where({
            id,
            user_id: user.id
        }).first();

        if (!findProduct) {
            return res.status(404).json("Produto não encontrado.");
        }

        const { error: supabaseDeleteError } = await deleteFile(user.store_name, findProduct.photo_name);

        if (supabaseDeleteError) {
            return res.status(400).json(supabaseDeleteError.message);
        }

        const deleteProduct = await knex('products').where({
            id,
            user_id: user.id
        }).del();

        if (!deleteProduct) {
            return res.status(400).json("O produto não foi excluido.");
        }

        return res.status(200).json("Produto excluído com sucesso.");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listAllProducts,
    listProductById,
    registerProduct,
    listUserProduct,
    editProduct,
    deleteProduct
}