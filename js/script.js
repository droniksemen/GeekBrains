function init(){
	var images = document.getElementsByTagName("img");

	for (var i = 0; i < images.length; i++) {
		//images[i].onclick = changeBigPicture;
		images[i].addEventListener("click", changeBigPicture);
	}
}

function changeBigPicture(event){
	var appDiv = document.getElementById("big_picture");
	appDiv.innerHTML = "";	
	var eventElement = event.target;
	var imageNumber = eventElement.getAttribute("data-image");
	var src = "img/big/" + imageNumber + ".jpg";
	var imageDomElement = document.createElement("img");
	imageDomElement.src = src;

	imageDomElement.setAttribute('onerror', 'alert("Нет такой картинки")' );

	appDiv.appendChild(imageDomElement);
}

window.onload = init;