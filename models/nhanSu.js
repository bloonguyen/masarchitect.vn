var keystone = require('keystone');
var Types = keystone.Field.Types;


var nhanSu = new keystone.List('nhanSu', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Nhân sự',
	plural: 'Nhân sự',
});

nhanSu.add({
	name: { type: String, required: true, label:'Tên' },
	englishName: {type: String, label: 'Tên tiếng Anh'},
	chucVu: {type: Types.Select, numeric:true, options: [
		{ value: 0, label: 'Giám đốc'},
    	{ value: 1, label: 'Chủ trì kết cấu' },
		{ value: 2, label: 'Chủ trì kiến trúc' },
		{ value: 3, label: 'Chuyên viên' }
	], label: 'Chức vụ'},
	vaiTroTiengViet:{type: String, label:'Vai trò tiếng Việt'},
	vaiTroTiengAnh:{type: String, label:'Vai trò tiếng Anh'},
	CVTiengAnh: { type: Types.Html, wysiwyg: true , label: 'CV tiếng Việt' },
	CVTiengViet: { type: Types.Html, wysiwyg: true , label: 'CV tiếng Anh' },
	anhDaiDien: { type: Types.CloudinaryImage },
});

nhanSu.register();
