var keystone = require('keystone');

exports = module.exports = function (req, res) {
	console.log('onePost: ',req.params.key);
	keystone.list('Post').model
		.findOne()
		.where('slug',req.params.key)
		.exec(function(err,results) {
		res.json(results);
	})
}
