var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * =============
 */
 var myStorage = new keystone.Storage({
   adapter: keystone.Storage.Adapters.FS,
   fs: {
     path: 'public/images/vrImage',
     publicPath: '/images/vrImage',
   },
 });
var congTrinh = new keystone.List('congTrinh', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Công trình',
	plural: 'Công trình'
});

congTrinh.add({
	name: { type: String, required: true, label:'Tên công trình' },
	diaChi: {type: String, label:'Địa chỉ'},
	theLoai: {type: Types.Relationship, ref: 'loaiCongTrinh', many: true, label:'Thể loại'},
	giaiThichTiengAnh: { type: Types.Textarea, label:'Giải thích tiếng Anh'},
	giaiThichTiengViet: { type: Types.Textarea, label:'Giải thích tiếng Việt'},
	ngayHoanThanh: { type: Types.Date, default: Date.now, label:'Ngày hoàn thành' },
	hinhDaiDien: { type: Types.CloudinaryImage, label: 'Hình đại diện' },
	hinhAnhCongTrinh: { type: Types.CloudinaryImages, label:'Hình ảnh công trình' },
	// vrImage: { type: Types.File, storage: myStorage, label:'Hình 360' },
	// vrThumbnail: {type: Types.CloudinaryImage, label:'Thumbnail 360'}
});

congTrinh.register();
