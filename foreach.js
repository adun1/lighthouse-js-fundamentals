var cats = ['mac', 'itty'];

function kittyInfo(cat, index, arr)
{
	console.log(cat + " is " + index + " in " + arr);
}
cats.forEach(kittyInfo);
