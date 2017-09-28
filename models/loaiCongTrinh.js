var keystone = require('keystone');

var loaiCongTrinh = new keystone.List('loaiCongTrinh', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Loại công trình',
	plural: 'Loại công trình'
});

loaiCongTrinh.add({
	name: { type: String, required: true },
	tiengAnh: { type: String }
});

loaiCongTrinh.relationship({ ref: 'congTrinh', path: 'congTrinhs', refPath: 'theLoai' });

loaiCongTrinh.register();
