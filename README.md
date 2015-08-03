handlebars templates

simple steps:


install:
sudo npm install handlebars -g

in handlebars folder create the html calling handlebars tags

try not use extension in the end of files to be easy.

<div>

<h1 style="color:green"> {{title}}</h1>

<h2 style="color:red"> {{body}}</h2>


</div>



Precompiling using terminal:

handlebars handlebars/h1-h2 -f public/javascripts/templates/h1-h2.js


call the template:

$(document).ready(function() {
var context = {
		title: "All about Handlebars",
		body: "<p> This is a post about tags </p>"
}

html = Handlebars.templates ['h1-h2'](context);
$(document.body).html(html);

});