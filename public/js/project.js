'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.message .glyphicon-remove').click(deleteMessage);
}

function deleteMessage(e) {
	e.preventDefault();

	var messageID = $(this).closest('.message').attr('id');
	var idNumber = messageID.substr('message'.length);
	console.log(messageID);
	console.log(idNumber);

	$.post('/delete/' + idNumber, function() {
		window.location.href='/';
	});
}