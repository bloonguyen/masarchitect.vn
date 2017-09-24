var keystone = require('keystone');
var congTrinh = keystone.list('congTrinh');
var loaiCongTrinh = keystone.list('loaiCongTrinh');

exports = module.exports = function (req, res) {
	console.log('params ====> ',req.params.name);
	congTrinh.model.findOne()
		.where('key',req.params.name)
		.populate('theLoai')
		.exec(function(err,results) {
			res.json(results);
		})
}
