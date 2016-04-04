'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.glyphicon-remove').click(deleteMessage);
}

function deleteMessage(e) {
	console.log(e);
}