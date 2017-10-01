var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'tieuDe' },
	autokey: { path: 'slug', from: 'tieuDe', unique: true },
	label: 'Bài viết'
});

Post.add({
	tieuDe: { type: String, required: true,label: 'Tiêu đề' },
	trangThai: { type: Types.Select, options: 'draft, published, archived', default: 'published', index: true,label: 'Trạng thái' },
	kieu: { type: Types.Select,
		options: [
		{value:'news',label:'Tin Tức'},
		{value:'press',label:'Truyền thông'},
		],
		label: 'Kiểu'
	},
	ngonNgu: { type: Types.Select,
		options: [
		{value:'vi',label:'Tiếng Việt'},
		{value:'en',label:'Tiếng Anh'},
		],
		label: 'Ngôn ngữ'
	},
	youtubeLink: {type: String},
	ngayDang: { type: Types.Date, index: true, dependsOn: { state: 'published' }, label:'Ngày đăng' },
	hinhDaiDien: { type: Types.CloudinaryImage, label: 'Hình đại diện' },
	noiDung: {
		tomTat: { type: Types.Textarea, wysiwyg: true, height: 150, label: 'Tóm tắt' },
		dayDu: { type: Types.Html, wysiwyg: true, height: 400, label: 'Đầy đủ' },
	},
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

// Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
