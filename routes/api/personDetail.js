var keystone = require('keystone');
exports = module.exports = function (req, res) {
	console.log('personDetail: ',req.params.key);
	keystone.list('nhanSu').model
		.findOne()
		.where('key',req.params.key)
		.exec(function(err,results) {
		res.json(results);
	})
}
