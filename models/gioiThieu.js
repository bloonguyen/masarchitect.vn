var keystone = require('keystone');
var Types = keystone.Field.Types;

/*
*About Model
*/

var gioiThieu = new keystone.List('gioiThieu', {
	map: { name: 'ten' },
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Giới thiệu'
});


gioiThieu.add({
	ten: { type: String, required: true,label: 'Tên' },
	ngonNgu: { type: Types.Select,
		options: [
		{value:'vi',label:'Tiếng Việt'},
		{value:'en',label:'Tiếng Anh'},
		],
		label: 'Ngôn ngữ'
	},
	noiDung: { type: Types.Html, wysiwyg: true , label: 'Nội dung' }
});


gioiThieu.register();
