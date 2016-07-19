$(document).ready(function() {
	$("form").submit(function(event) {
		var html = ('<li>' + '<span class="shopping-item">' + $('#shopping-list-entry').val() + '</span>' + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<i class="fa fa-check-square-o" aria-hidden="true">' + '</i>' + '</button>' + '<button class="shopping-item-delete">' + '<i class="fa fa-minus-square-o" aria-hidden="true">' + '</i>' + '</button>' + '</div>' + '</li>');
			if ($("#shopping-list-entry").val() === '') {
				$('input').css('border-color', 'red');
				return false;};	
	  	$('ul').append(html);
	   		$('#shopping-list-entry').val('').css('border-color', 'lightgrey');
	 			event.preventDefault();});

	$('body').on('click','.clear-checked', function(event) 
	 	{$('li').find('.shopping-item__checked').closest('li').remove();});


	 $('ul').on('click','.shopping-item-delete', function(event) 
	 	{$(this).closest("li").remove();})
			.on('click','button.shopping-item-toggle', function() 
	 			{$(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked')});
	 
	$('.bottom').click(
		function (e) {
			$('html, body').animate({scrollTop: $('ul').height()}, 800);}
	);

	$('.top').click(
		function (e) {
			$('html, body').animate({scrollTop: '0px'}, 800);});
	});