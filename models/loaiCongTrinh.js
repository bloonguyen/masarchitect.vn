var keystone = require('keystone');

var loaiCongTrinh = new keystone.List('loaiCongTrinh', {
	autokey: { from: 'name', path: 'key', unique: true },
});

loaiCongTrinh.add({
	name: { type: String, required: true },
	tiengAnh: { type: String }
});

loaiCongTrinh.relationship({ ref: 'congTrinh', path: 'congTrinhs', refPath: 'theLoai' });

loaiCongTrinh.register();
