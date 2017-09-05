var keystone = require('keystone');
var slidePhoto = keystone.list('slidePhoto');

exports = module.exports = function (req, res) {
	console.log('params ====> ',req.params.type);
	slidePhoto.model.find()
		.where('type',req.params.type)
		.exec(function(err,results) {
			res.json(results);
		})
}
