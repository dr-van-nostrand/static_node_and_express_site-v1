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
    next();
});

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

  if (err.status === 404) {
    res.status(404).render('not-found', { err });
  } else {
    err.message = err.message || `Oops!  It looks like something went wrong on the server.`;
    res.status(err.status || 500).render('error', { err });
  }
});
  

//PASO 2.2
// app.listen(4000, () => {
//     console.log('La aplicacion esta corriendo en un localhost:4000!')
// });

const PORT = process.env.PORT || 4000

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.js')
})

app.listen(PORT,() => {
  console.log(`App is started on port ${PORT}`)
})