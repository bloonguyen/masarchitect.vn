var keystone = require('keystone');
var Types = keystone.Field.Types;

var slidePhoto = new keystone.List('slidePhoto', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Hình ảnh trang bìa',
	plural: 'Hình ảnh trang bìa'

});

slidePhoto.add({
	name: {type:String, required:true},
	type: {type:Types.Select, options: [
		{value:'portrait',label:'Màn hình dọc'},
		{value:'landscape',label:'Màn hình ngang'}
	]},
	image: {type: Types.CloudinaryImage},
});

slidePhoto.register();
