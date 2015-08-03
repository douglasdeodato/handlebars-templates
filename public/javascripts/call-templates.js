$(document).ready(function() {
var context = {
		title: "All about Handlebars",
		body: "<p> This is a post about tags </p>"
}

html = Handlebars.templates ['h1-h2'](context);
$(document.body).html(html);

});