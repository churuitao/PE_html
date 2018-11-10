let cover = document.getElementById("cover");
let picture = document.getElementById("pu-two-img");
let img =document.getElementById("phone");
img.onclick = function(){
	cover.style.display = "block";
	picture.style.display = "block";
}

cover.onclick = function(){
	cover.style.display = "none";
	picture.style.display = "none";
}
