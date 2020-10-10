//PASO 1
const express = require('express');

//PASO 2.1
const app = express();


app.get('/', (req, res) =>{
    res.render('index')
});

app.get('/about', (req, res) =>{
    res.render('about')
});

app.get('/layout', (req, res) =>{
    res.render('layout')
});

app.get('/project', (req, res) =>{
    res.render('project')
});

//PASO 13 (instalar static assets)
app.use('/static', express.static('public'));

//PASO 4.1 (instalar template pug)
const routes = require('./routes');
app.set('view engine', 'pug');

//PASO 9.2 LINKEAR ROUTER
app.use('/', routes);
app.use((req, res, next) => {
    console.log('world');
    next();
});

//3 ERROR messages
// app.use((req, res, next) => {
//     const err = new Error('Ooops');
//     err.status = 500;
//     next(err);
// });

 
// PASO 3.1 CUSTOMIZANDO EL ERROR
// app.use((req, res, next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);

// });

// app.use((err, req, res, next) => {
//     res.locals.error = err;
//     res.status(err.status);
//     res.render('error');
// });

/* ERROR HANDLERS */
/* 404 handler to catch undefined or non-existent route requests */ 
app.use((req, res, next) => {
    console.log('404 error handler called');
  
    /* TODO 1: Send a response to the client
      - Set the response status to 404
      - Render the 'not-found' view
    */ 
   res.status(404).render('not-found');
  
  });
  
  /* Global error handler */
  app.use((err, req, res, next) => {
  
    if (err) {
      console.log('Global error handler called', err);
    }
  
    /* TODO 2: Handle errors caught by your route handlers
      - If the error status is 404:
          * Set the response status to 404
          * Render the 'not-found' view and pass the error object to the view
      - Else:
          * Set the error message to the given message, or specify a general, 
            default error message
          * Set response status to the given error status OR, 
            set it to 500 by default if no error status is set
          * Render the 'error' view, passing it the error object
    */
   if (err.status === 404) {
    res.status(404).render('not-found', { err });
  } else {
    err.message = err.message || `Oops!  It looks like something went wrong on the server.`;
    res.status(err.status || 500).render('error', { err });
  }
  });

//PASO 2.2
app.listen(3000, () => {
    console.log('La aplicacion esta corriendo en un localhost:3000!')
});