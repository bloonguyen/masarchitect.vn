var keystone = require('keystone');


exports = module.exports = function (req, res) {
	var congTrinh = keystone.lists['congTrinh'];
	var loaiCongTrinh = keystone.lists['loaiCongTrinh'];
	congTrinh.model.findOne()
		.where('key',req.params.name)
		.populate('theLoai')
		.exec(function(err,results) {
			res.json(results);
		})
}
