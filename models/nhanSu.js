var keystone = require('keystone');
var Types = keystone.Field.Types;


var nhanSu = new keystone.List('nhanSu', {
	autokey: { from: 'name', path: 'key', unique: true }
});

nhanSu.add({
	name: { type: String, required: true },
	englishName: {type: String},
	chucVu: {type: Types.Select, numeric:true, options: [
		{ value: 0, label: 'Giám đốc'},
    	{ value: 1, label: 'Chủ trì kết cấu' },
		{ value: 2, label: 'Chủ trì kiến trúc' },
		{ value: 3, label: 'Chuyên viên' }
	]},
	giaiThichTiengAnh: { type: Types.Textarea },
	giaiThichTiengViet: { type: Types.Textarea },
	anhDaiDien: { type: Types.CloudinaryImage },
});

nhanSu.register();
