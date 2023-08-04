const path = require('path');
const fs = require('fs');


const ruta = path.resolve(__dirname, '../data/products.json');
const jsonProducts = fs.readFileSync(ruta, {encoding: 'utf-8'});
let products = JSON.parse(jsonProducts);



const productController = {
    crear: (req, res) => {
        let product = {};
        if (!req.body.name) {
            return res.json({mgs: 'el campo Name es required'});
        }
        product.id = products.length + 1
        product.name = req.body.name;
        product.price = req.body.price;
        product.discount = req.body.discount;
        product.category = req.body.category;
        product.description = req.body.description;
        product.image = req.body.image;
        products.push(product);

        let productsJson = JSON.stringify(products, null, 4);

        fs.writeFileSync(ruta, productsJson,{encoding: 'utf-8'});
        res.status(201).json(product);

    },
    listar: (req, res) => {
        res.json(products);
    },
    detalle: (req, res) => {
        res.json('detalle de un producto');
    },
    id: (req, res) =>{
         let id = +req.params.id;
         let producto = products.filter(product => product.id == id);
         res.json(producto);
    }
}

module.exports = productController;