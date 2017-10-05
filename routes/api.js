var express = require('express');
var router = new express.Router();

var about = require('./api/about');
var onePost = require('./api/onePost');
var ourTeam = require('./api/ourTeam');
var personDetail = require('./api/personDetail');
var post = require('./api/post');
var project = require('./api/project');
var projectCategory = require('./api/projectCategory');
var slide = require('./api/slide');

router.use('/blog', post);
router.use('/post/:key', onePost);
router.use('/project_category/:name', projectCategory);
router.use('/project_category', projectCategory);
router.use('/project/:name', project);
router.use('/our_team', ourTeam);
router.use('/slide/:type', slide);
router.use('/about', about);
router.use('/ourteam/:key', personDetail);


module.exports = router;
