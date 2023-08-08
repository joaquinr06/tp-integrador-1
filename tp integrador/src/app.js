let path = require('path');
let express = require('express');
let app = express();
let home = require('./routes/homeRoute');
let product = require('./routes/productsRoute');
let error = require('./middlewares/error')

/* Configuraciones de la app*/
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Rutas*/
app.use('/', home);
app.use('/products', product)
app.use(error);

/* Server*/
app.listen(3000, () => console.log('Server andando joya'));