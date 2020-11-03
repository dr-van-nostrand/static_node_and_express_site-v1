//PASO 9 ROUTER
const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');


// GET HOME PAGE
router.get('/', function(req, res, next) {
    // Pass all the data to 'index' template
    res.render('index', { projects });
});

//CREATE ABOUT
router.get('/about', (req, res) => {
  res.render('about')
});

/* GET generated error route - create and throw 500 server error */
router.get('/error', (req, res, next) => {

  // Log out custom error handler indication
  console.log('Custom error route called');

  const err = new Error();
  err.message = `Custom 500 error thrown`
  err.status = 500;
  throw err;
});



/* GET WORK page. */
router.get('/projects/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );

    if (project) {
      // 2. Pass the project data to the 'project' template
      res.render('project', { project});
    } else {
      const err = new Error();
      err.status = 404;
      err.message = `Looks like the quote you requested doesn't exist.`
      next(err);
    }
  });
  
  module.exports = router;