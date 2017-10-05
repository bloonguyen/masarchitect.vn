var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var loaiCongTrinh = keystone.lists['loaiCongTrinh'];
	var congTrinh = keystone.lists['congTrinh'];
	console.log('params ====> ',req.params.name);
	if (!req.params.name) {
		loaiCongTrinh.model.find()
			.exec(function(err,results) {
				res.json(results);
			})
	}
	else {
		if (req.params.name == 'all') {
		 	congTrinh.model.find()
			.exec(function(err,results) {
				res.json(results);
			})
		}
		else {
			loaiCongTrinh.model.findOne()
			.where('key',req.params.name)
			.exec(function(err,category) {
				console.log('project category ====>',category,category.id);

				congTrinh.model.find()
				.where('theLoai',category.id)
				.exec(function(err,results) {
					res.json(results);
				})
			})
		}
	}
}
