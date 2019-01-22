console.clear();
var text = document.getElementById("text").innerHTML;

text = text.replace(/'/g, '"');
text = text.replace(/"s/g, "'s");
text = text.replace(/"re/g, "'re");


document.getElementById("text").innerHTML = text;


