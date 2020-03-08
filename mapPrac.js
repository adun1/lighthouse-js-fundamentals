var cats = ["mac", "itty"];

var capitalCats = cats.map(function(cat){
	cat = cat.toUpperCase();
	return cat;
});

console.log(cats);
console.log(capitalCats);
