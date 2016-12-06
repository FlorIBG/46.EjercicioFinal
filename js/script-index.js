$(document).ready(function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	$(".js-back").hide();
	printNews ();
//pintarRecetas();
	renderActivities(activities);
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for (var i = 0; i<recipesArray.length;i++) {
			if (recipesArray[i].highlighted==true) {
					renderRecipe(recipesArray[i]);
			}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	var a = $('<a class="item-recipe"></a>');

	//span attribution
 	var spanAttribution = $('<span class="attribution"><span/>');
	//span titulo de la receta
 	var spanTitle = $('<span class="title-recipe"><span/>');
	spanTitle.attr("title",recipe.title);
	spanTitle.text(recipe.title);
	//span metha data
	var spanMetadata = $('<span class="metadata-recipe"><span/>');
	//span autor de la receta
	var spanAuthor = $('<span class="author-recipe"><span/>');
	spanAuthor.text(recipe.name);
//span bookmarks-recipe
var spanBookmark = $('<span class="bookmarks-recipe"><span/>');
	//span icon-bookmark
	var spanIcon = $('<span class="icon-bookmark"><span/>');
	spanIcon.text(recipe.cookTime);
	//IMAGEN
	var img = $('<img/>');
	img.attr('src',recipe.source.url);
	//div extra
	//var divA = $('<div class="cuadro"></div>');
	spanBookmark.append(spanIcon);
	spanMetadata.append(spanBookmark);
	spanMetadata.append(spanAuthor);
	spanAttribution.append(spanMetadata);
	spanAttribution.append(spanTitle);
	a.append(img);
	a.append(spanAttribution);

	$('.list-recipes').append(a);

}

function printNews () {
	$(".callout-news p").append("Nuevas Recetas");
}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	if (activitiesArray.length>0) {
		$(".wrapper-message").hide('fast');
	}
	for (var i = 0; i<activitiesArray.length;i++) {
			renderActivity(activitiesArray[i]);
	}

}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	console.log(recipe);
	var templateActivity =
	'<a href="#" class="item-activity">' +
	    '<span class="attribution">' +
	        '<span class="avatar">' +
	            '<img src="<%= userAvatar %>" class="avatar">' +
	         '</span>' +
	         '<span class="meta">' +
	              '<span class="author"><%= userName %></span>' +
	              '<span class="recipe"><%= recipeName %></span>' +
	              '<span class="location">&mdash;<%= place %></span>' +
	          '</span>' +
	      '</span>' +
	      '<div class="bg-image" style="background-image: url(&quot;<%= image %>&quot;)"></div>'
	 '</a>';
	 console.log("algo")
	 var compiled = _.template(templateActivity);
	  console.log("algo 2")
	 var a = compiled(recipe);
	  console.log("algo 3")
	 console.log(a);
	 var element = $(a);
	 $('.list-activities').append(element);
}
