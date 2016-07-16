$(document).ready(function() {

$("form").on('click', 'button', function(event) {

   $("ul").append(
      "<li>" + [$("#shopping-list-entry").text()] + "</li>"
    );
 	event.preventDefault();
  });


  

 $('ul').on('click', 'button.shopping-item-delete', function(event) {
 $(event.target).closest("li").remove();
 });


 $('div.shopping-item-controls').on('click', 'button.shopping-item-toggle', function() {
 	$('span.shopping-item').toggleClass("shopping-item__checked")
 }

 	);
















	});