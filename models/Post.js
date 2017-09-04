var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'tieuDe' },
	autokey: { path: 'slug', from: 'tieuDe', unique: true },
});

Post.add({
	tieuDe: { type: String, required: true },
	trangThai: { type: Types.Select, options: 'draft, published, archived', default: 'published', index: true },
	kieu: { type: Types.Select, options: [
		{value:'news',label:'Tin Tức'},
		{value:'press',label:'Truyền thông'},
	]},
	ngonNgu: { type: Types.Select, options: [
		{value:'vi',label:'Tiếng Việt'},
		{value:'en',label:'Tiếng Anh'},
	]},
	youtubeLink: {type: String},
	ngayDang: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	hinhDaiDien: { type: Types.CloudinaryImage },
	noiDung: {
		tomTat: { type: Types.Html, wysiwyg: true, height: 150 },
		dayDu: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

// Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
