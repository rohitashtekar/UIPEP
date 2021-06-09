const express = require('express');
const app = express();
const router = express.Router();
const {products} = require('../data');

app.use(express.json());

router.get('/', (req,res) => {
    const {limit,search} = req.query;

    let sortedProducts = [...products];
    if(limit) { 
        sortedProducts = sortedProducts.slice(0,Number(limit));
       
    }
    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    res.status(200).json({success: true, products: sortedProducts});
});

module.exports = router;
