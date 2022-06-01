// DEPENDENCIDES
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Profile = require('../models/profile.js');

// INDEX
router.get('/', (req, res) => {
    Profile.find({}, (err, foundProfiles) => {
        res.render('profile/index.ejs', {
            profiles: foundProfiles
        });
    });   
});

// NEW
router.get('/new', (req, res) => {
    res.render('profile/new.ejs');
});



// UPDATE
router.put('/:id', (req, res) => {
    Profile.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/profile');
    });
});

// CREATE
router.post('/', (req, res) => {
    Profile.create(req.body, (err, createdProfile) => {
        res.redirect('/profile');
    });
});

// EDIT
router.get('/:id/edit', (req, res) => {
    Profile.findById(req.params.id, (err, foundProfile) => {
        res.render('profile/edit.ejs', {
            profile: foundProfile
        });
    });
});

// SHOW
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('products/show.ejs', {
            product: foundProduct
        });
    });
});

module.exports = router;