'use strict'

$(function() {

	// サイボウズの掲示板や報告書のタイトルをページのタイトルに設定する
	// ページタイプ判別のためにパラメータ要素分解
	var a_params = location.search.split("?");
	if (a_params = a_params.length > 1 && a_params[1].split("&")) {
		var a_get = [];
		for (var i=0,len=a_params.length; i<len; i++) {
			a_get[a_params[i].split("=")[0]] = a_params[i].split("=")[1];
		}
		var s_subject = '';
		switch (true) {
			case (a_get['page']==='DBRecord'): // デヂエの詳細ビュー
				s_subject = $('table.vr_viewTitleAreaSubject').text();
				break;
			default:
				s_subject = $('span.vr_viewTitleAreaSubject').text();
				break;
		}
		if (s_subject.length > 0) {
			$('title').text(s_subject);
		}
	}
});
