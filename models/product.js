// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATING A NEW PRODUCTSCHEMA OBJECT
const productSchema = new Schema({
name: {type: String, required: true},
img: {type: String, required: true},
productType: {type: String, required: true},
strain: {type: String, required: true},
indicaSativa: {type: String, required: true},
thc: {type: Number, required: true},
dispensary: {type: String, required: true},
company: {type: String, required: true},
rating: {type: Number, required: true},
comments: {type: String, required: true},
}, 
{
timestamps: true,
});

// SETTING ^ THIS TO A VARIABLE
const Product = mongoose.model('Product', productSchema);

// EXPORTING VARIABLE
module.exports = Product;