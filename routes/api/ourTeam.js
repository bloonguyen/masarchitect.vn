var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var nhanSu = keystone.lists['nhanSu'];
	nhanSu.model.find()
		.sort('chucVu')
		.exec(function(err,results) {
			res.json(results);
		})
}
