'use strict'


$(function() {
	/**
	 *すべてのタブに対する操作
	 */
	chrome.tabs.getAllInWindow(window.id, function(tabs) {
		// タブの一覧を表示して、選択したタブに移動する
		// ※取得できるタブの種類はmanifestのpermissionsで定義
		var a_tabs = [];
		for (var i=0,len=tabs.length; i<len; i++) {
			if ('title' in tabs[i]) {
				// console.log(tabs[i]);
				a_tabs.push('<a class="Act_ShowTab" data-tabid="' + tabs[i].id + '">' + tabs[i].title + '</a><br>');
			}
		}
		// 一覧表示エリアにタイトルリストを表示
		document.getElementById('Area_TabList').innerHTML = a_tabs.join('');
		// クリックしたタブをアクティブにする
		$('a.Act_ShowTab').click(function() {
			var tab_id = parseInt($(this).attr('data-tabid'));
			chrome.tabs.update(tab_id, {selected: true});
		});
	});

	/**
	 * 選択中のタブに対する操作
	 */
	chrome.tabs.getSelected(window.id, function(tab) {
	});

	/**
	 * イベントアクション
	 */

	// QRコードを表示する
	$('#Act_Show_Qr').click(function() {
		chrome.tabs.getSelected(window.id, function(tab) {
			var s_src = 'http://chart.googleapis.com/chart?cht=qr&chs=150x150&choe=UTF-8&chl=' + encodeURIComponent(tab.url);
			document.getElementById('Area_Qrcode').innerHTML = '<img src="' + s_src + '">';
			$('#Act_Show_Qr').remove();
		});
	});
});
