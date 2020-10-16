//PASO 1
const express = require('express');

//PASO 2.1
const app = express();

//PASO 13 (instalar static assets)
app.use('/static', express.static('public'));

//PASO 4.1 (instalar template pug)
app.set('view engine', 'pug');

const routes = require('./routes');
app.use(routes);


//PASO 9.2 LINKEAR ROUTER
app.use('/', routes);
app.use((req, res, next) => {
    console.log('world');
    next();
});

// 3 ERROR messages
app.use((req, res, next) => {
    const err = new Error('Ooops');
    err.status = 500;
    next(err);
});

 
// PASO 3.1 CUSTOMIZANDO EL ERROR
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);

});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

//PASO 2.2
app.listen(3000, () => {
    console.log('La aplicacion esta corriendo en un localhost:3000!')
});