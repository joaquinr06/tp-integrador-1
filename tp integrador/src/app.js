let express = require('express');
let app = express();
let home = require('./routes/homeRoute');
let product = require('./routes/productsRoute');


/* Configuraciones de la app*/ 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* Rutas*/ 
app.use('/', home);
app.use('/products', product)
/* Server*/ 
app.listen(3000,() => console.log('Server andando joya'));