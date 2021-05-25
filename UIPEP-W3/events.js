let image = document.querySelector('.image');
let text = document.createTextNode(image.alt);

image.parentNode.replaceChild(text, image);

