const { Router } = require('express');
const users = require('./controllers/users');
const login = require('./controllers/login');
const checkLogin = require('./middlewares/checkLogin.js');
const products = require('./controllers/products');
const listAllCategories = require('./controllers/categories');

const routes = Router();

routes.post('/user-register', users.registerUser);
routes.post('/login', login.login);
routes.get('/products', products.listAllProducts);
routes.get('/products/:id', products.listProductById);
routes.get('/categories', listAllCategories);

routes.use(checkLogin);

routes.post('/product-register', products.registerProduct);
routes.put('/product-edit/:id', products.editProduct);
routes.delete('/product-delete/:id', products.deleteProduct);
routes.get('/user-products', products.listUserProduct);

module.exports = routes;