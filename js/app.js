$(document).ready(function() {

	$("form").submit(function(event) {
		var html = ('<li>' + '<span class="shopping-item">' + $('#shopping-list-entry').val() + '</span>' + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label">' + 'check' + '</span>' + '</button>' + '<button class="shopping-item-delete">' + '<span class="button-label">' + 'delete' + '</span>' + '</button>' + '</div>' + '</li>');
		if ($("#shopping-list-entry").val() === '') {
			$('input').css('background-color', 'aliceblue');
			return false;};
	   $('ul').append(html);
	   $('#shopping-list-entry').val('').css('background-color', 'white');
	 	event.preventDefault();

	  });

	 $('ul').on('click','.shopping-item-delete', function(event) 
	 	{$(this).closest("li").remove();})
		
		.on('click','button.shopping-item-toggle', function() 
	 	{$(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked')});
















	});