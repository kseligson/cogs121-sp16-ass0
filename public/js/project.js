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
	$('.message .glyphicon-pencil').click(updateModal);
}

function deleteMessage(e) {
	e.preventDefault();

	var messageID = $(this).closest('.message').attr('id');
	var idNumber = messageID.substr('message'.length);

	$.post('/delete/' + idNumber, function() {
		window.location.href='/';
	});
}

function updateModal(e) {
	e.preventDefault();
	var messageID = $(this).closest('.message').attr('id');
	var idNumber = messageID.substr('message'.length);
	console.log(idNumber);

	$('#updateModal').modal();
	$('#updateModal .modal-body').html("<form action='/update/" + idNumber + "' method='post' align='center'>"+
		"<div id='email-area' align='center'><strong>Email:</strong> <input type='text' name='email' id='email-text'></div><br>" +
		"<div id='content-area'><strong>Content:</strong> <textarea name='content' id='content-text'></textarea></div><br>" +
		"<input type='submit' value='Submit' id='submitbtn'></form>");
}