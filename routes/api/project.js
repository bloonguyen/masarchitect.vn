var keystone = require('keystone');
var congTrinh = keystone.list('congTrinh');

exports = module.exports = function (req, res) {
	console.log('params ====> ',req.params.name);
	congTrinh.model.find()
		.where('key',req.params.name)
		.exec(function(err,results) {
			res.json(results);
		})
}
