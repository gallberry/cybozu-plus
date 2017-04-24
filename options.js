'use strict'

$(function() {
	// オプションボタン押下時処理
	$('#Act_save').click(function() {
		chrome.storage.sync.set({
			highlight_name: $('#Area_HighlightName').val()
		}, function() {
			$('#Area_status').text('Options saved.');
			setTimeout(function() {
				$('#Area_status').text('');
			}, 750);
		});
	});

	// オプションページ表示時処理
	chrome.storage.sync.get({
		highlight_name: ''
	}, function(items) {
		$('#Area_HighlightName').val(items.highlight_name);
	});
});
