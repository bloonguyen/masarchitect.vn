export function cloudinaryModify(url,param) {
	if (url) {
		var position = url.indexOf('upload/') + 7;
		var output = [url.slice(0,position),param,'/',url.slice(position)].join('');
		return output;
	}
}
