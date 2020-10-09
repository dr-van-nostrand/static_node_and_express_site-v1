//PASO 1
const express = require('express');

//PASO 2.1
const app = express();

//PASO 4.1 (instalar template pug)
app.set('view engine', 'pug');

// PASO 3.1 CUSTOMIZANDO EL ERROR
app.use('/',(req, res) => {
    res.send('test testTEEEESTO');
});

app.use('/d',(req, res) => {
    res.send('TEEEESTINGGGGG');
});

//PASO 2.2
app.listen(3000, () => {
    console.log('La aplicacion esta corriendo en un localhost:3000!')
});