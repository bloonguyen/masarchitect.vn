var keystone = require('keystone');

module.exports = function (req, res) {
	console.log('params ====> ',req.params.type);
	console.log('list: ',keystone.lists['slidePhoto']);
	var slidePhoto = keystone.lists['slidePhoto'];

	slidePhoto.model.find()
		.where('type',req.params.type)
		.exec(function(err,results) {
			res.json(results);
		})
}
