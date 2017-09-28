var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * =============
 */

var congTrinh = new keystone.List('congTrinh', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Công trình',
	plural: 'Công trình'
});

congTrinh.add({
	name: { type: String, required: true },
	diaChi: {type: String},
	theLoai: {type: Types.Relationship, ref: 'loaiCongTrinh', many: true},
	giaiThichTiengAnh: { type: Types.Textarea},
	giaiThichTiengViet: { type: Types.Textarea},
	ngayHoanThanh: { type: Types.Date, default: Date.now },
	hinhDaiDien: { type: Types.CloudinaryImage },
	hinhAnhCongTrinh: { type: Types.CloudinaryImages },
});

congTrinh.register();
