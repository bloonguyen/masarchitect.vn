var keystone = require('keystone');
var nhanSu = keystone.list('nhanSu');

exports = module.exports = function (req, res) {
	nhanSu.model.find()
		.exec(function(err,results) {
			res.json(results);
		})
}
