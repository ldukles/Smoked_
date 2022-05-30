// DEPENDENCIDES
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Product = require('../models/product.js');

// SEED ROUTE
const productSeed = require('../models/productSeed.js');

router.get('/seed', (req, res) => {
    Product.deleteMany({}, (error, allProducts) => {});
    Product.create(productSeed, (error, data) => {
        res.redirect('/products');
    });
});

// INDEX
router.get('/', (req, res) => {
    Product.find({}, (err, foundProducts) => {
        res.render('products/index.ejs', {
            products: foundProducts
        });
    });   
});

// N
router.get('/new', (req, res) => {
    res.render('products/new.ejs');
});

// D

// U

// C
router.post('/', (req, res) => {
    Product.create(req.body, (err, createdProduct) => {
        res.redirect('/products');
    });
});

// E

// S
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('products/show.ejs', {
            product: foundProduct
        });
    });
});

module.exports = router;