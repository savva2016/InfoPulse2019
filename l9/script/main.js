$("span.close").click(function(event) {
	event.preventDefault();
	$(this).parent().remove()
});