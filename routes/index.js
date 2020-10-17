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

/* GET WORK page. */
router.get('/projects/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );
    if (project) {
      // 2. Pass the project data to the 'project' template
      res.render('project', { project});
    } else {
      res.sendStatus(404);
    }
  });
  
  module.exports = router;