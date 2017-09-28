var keystone = require('keystone');
var gioiThieu = keystone.list('gioiThieu');

exports = module.exports = function (req, res) {
	gioiThieu.model.find()
		.exec(function(err,results) {
			res.json(results);
		})
}
