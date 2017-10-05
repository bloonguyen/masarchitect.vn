var fs = require('fs');
var path = require('path');
var keystone = require('keystone');
var express = require('express');
var bundle = require('./public/bundle/server.js');
var api = require('./routes/api.js');
var app = new express();
/********************Config Cloudinary***********/
keystone.set('cloudinary config', { cloud_name: 'masarchitect', api_key: '594464416512535', api_secret: 'C6AAoOxpSmGRu9KLn4nPNYh7pEc' });

// optional, will prefix each image public_id with {list.path}/{field.path}/
keystone.set('cloudinary folders', true);

// optional, will force cloudinary to serve images over https
// keystone.set('cloudinary secure', true);
/********************Config Cloudinary End***********/
keystone.import('models');



// Load your project's Models
keystone.set('app', app);
keystone.set('routes', app);


keystone.init({
	'name': 'masArchitecture',
	'brand': 'masArchitecture',
	'less': 'public',
	'static': 'public',
	'favicon': 'public/images/logo/favicon.png',
	'signin logo': ['/images/logo/transparent_grey.png', 200],
	'views': 'templates/views',
	'view engine': 'ejs',
	'custom engine': require('ejs').__express,
	'wysiwyg additional options': { 'external_plugins': { 'uploadimage': '/js/uploadimage/plugin.min.js' } },
	'wysiwyg cloudinary images': true,
	'wysiwyg additional buttons':'removeformat | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | code',
	'wysiwyg override toolbar':true,
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'f3de0808bf98d8d2639da4166645194f2ea2d303a00471df7a39cebaf077b36554d5b8c223775166f94b579fdcd2f37edbeedfd55993200cedc25ad38e0f84b3',

});

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('underscore'),
	e1nv: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});


keystone.initDatabaseConfig();
keystone.initExpressSession();
app.use(keystone.get('session options').cookieParser);
app.use(keystone.expressSession);
app.use(keystone.session.persist);
// Load your project's Routes
// keystone.set('routes', require('./routes'));
app.use(express.static('./public'));
app.use('/api',api);
app.use('/keystone', keystone.Admin.Server.createStaticRouter(keystone));
app.use('/keystone', keystone.Admin.Server.createDynamicRouter(keystone));
app.use('/',bundle);

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	'công trình': ['congTrinh','loaiCongTrinh'],
	'khác': [
		'users',
		'posts',
		'nhanSu',
		'slidePhoto',
		'gioiThieu'
	]
});


// Start Keystone to connect to your database and initialise the web server
keystone.openDatabaseConnection(function () {
	var server = app.listen(process.env.PORT || 3000, function () {
		console.log('-------------------------------');
		console.log('Express server ready on port %d', server.address().port);
		console.log('-------------------------------');
	});
});
