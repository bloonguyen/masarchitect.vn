/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */
var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);
// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api')
};
// Setup Route Bindings
exports = module.exports = function(app) {


	// Views
	app.get('/', routes.views.index);
	app.get('/blog', routes.views.blog);
	app.get('/post/:key',routes.views.blog);
	app.get('/project/:name', routes.views.blog);
	app.get('/project_category/:name', routes.views.blog);
	app.get('/project_category/', routes.views.blog);
	app.get('/about', routes.views.blog);
	app.get('/about/:type', routes.views.blog);
	app.get('/contact',routes.views.blog);


	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

	//api
	app.use('/api/blog',routes.api.post);
	app.use('/api/post/:key',routes.api.onePost);
	app.get('/api/project_category/:name',routes.api.projectCategory);
	app.get('/api/project_category',routes.api.projectCategory);
	app.get('/api/project/:name',routes.api.project);
	app.get('/api/our_team',routes.api.ourTeam);
	app.get('/api/slide/:type',routes.api.slide);
	app.get('/api/about',routes.api.about);
	// app.get('*', routes.views.blog);

};
