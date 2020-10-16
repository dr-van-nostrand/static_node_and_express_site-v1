//PASO 9 ROUTER
const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

// GET HOME PAGE
router.get('/', function(req, res, next) {
    // Pass all the data to 'index' template
    res.render('index', { projects });
});

/* GET WORK page. */
router.get('/projects/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );
    if (project) {
      // 2. Pass the project data to the 'project' template
      const thumbs = project.image_urls[1];
      return res.render('project', { project, thumbs });
    } else {
      const err = new Error();
      err.status = 404;
      console.log(`ERROR: ${err.status}. Project '${projectId}' doesn't exist! Not yet, anyway...`);
      res.render('error', {message: `${err.status}. Project '${projectId}' doesn't exist! Not yet, anyway...`});    }
  });
  
  module.exports = router;


























module.exports = router;