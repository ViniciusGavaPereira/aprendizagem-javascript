function calculateArea(){
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 document.getElementById('result').innerHTML = "A área do retangulo é: " + (length * width);
};