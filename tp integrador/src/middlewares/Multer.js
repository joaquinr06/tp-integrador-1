const path = require('path');
const multer = require('multer');
const fs = require('fs');


const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/images'));
    },
    filename: (req, file, cb) => {
        if (path.extname(file.fieldname) != '.jpg' || '.png') {
            fs.appendFileSync(path.resolve(__dirname, '../logs/logs.txt'), `error con el formato - ${file.fieldname}\n`)
        }
        cb(null, `image -${Date.now()})${path.extname(file.originalname)}`);
    }
});

const upload = multer(Storage) // nombre de la variable si fuera otra
module.exports = upload


