var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var gioiThieu = keystone.lists['gioiThieu'];
	gioiThieu.model.find()
		.exec(function(err,results) {
			res.json(results);
		})
}
