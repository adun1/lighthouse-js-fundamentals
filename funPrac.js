function movies(messageFunction, name){
  messageFunction(name);
}

movies(function displayFavorite(movieName){console.log("My favorite movie is " + movieName);}, "Finding Nemo");