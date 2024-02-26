const { listProduct , addProduct } = require('../controller/productController');

const apiRoute = require('express').Router();


// apiRoute.get('/', (req, res) => res.send('Hello World!'))
apiRoute.get('/list-product',listProduct)
apiRoute.post('/add-product',addProduct)

module.exports = apiRoute