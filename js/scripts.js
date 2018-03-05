var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var bigLetters = dinosaur.toUpperCase();
var textReplace = text.replace("Velociraptor", bigLetters);
var textReplaceCut = textReplace.length/2;
var textFinal = textReplace.slice(0,72);
console.log(textFinal);