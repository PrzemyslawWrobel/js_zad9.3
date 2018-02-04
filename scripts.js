var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
	
var dinosaur = 'triceratops';
	dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var	textZamiana = text.replace('Velociraptor', dinosaurUpperCased);
console.log(textZamiana);

var	polowa = textZamiana.slice(0, text.length / 2);

console.log("Połowa zdania to: " + polowa);
