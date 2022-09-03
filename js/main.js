
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}


var cartSpan = document.getElementById("cart");
var wishSpan = document.getElementById("wish");
var currentCount = 0;
var currentCount2 = 0;



function plusOne(){
	currentCount += 1;
	cartSpan.innerHTML = currentCount;

}
function plusTwo(){
	currentCount2 += 1;
	wishSpan.innerHTML = currentCount2;


}

window.addEventListener("load",function(){
	setTimeout(
		function open(event){
			document.querySelector(".popup").style.display = "block";
		},
		1000
	)
});
document.querySelector("#close").addEventListener("click",function(){
	document.querySelector(".popup").style.display = "none";
});
var user1 = document.getElementById("user-input1");
var user2 = document.getElementById("user-input2");
var username = document.getElementById("name");
username.innerHTML = user2.value;
function shut(){
	if ( user1.value == "" | user2.value == ""){
		user1.value = "";
		user2.value = "";
		alert
		("enter values");
	}
	else{
		document.querySelector("#close1").addEventListener("click",function(){
			document.querySelector(".popup").style.display = "none";
		});
	}
	username.innerHTML = user2.value;

}