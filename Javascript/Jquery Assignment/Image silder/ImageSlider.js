		$(document).ready(function(){
			document.getElementById('m1').style.display="block";
		});
		var st;
		$(document).ready(function(){
			$("#play").click(function(){

				var slideIndex = 0;
				showSlides();

				function showSlides() {
				  var i;
				  var slides = document.getElementsByClassName("slide");
				  for (i = 0; i < slides.length; i++) {
				    slides[i].style.display = "none";
				  }
				  slideIndex++;
				  if (slideIndex > slides.length) {slideIndex = 1}
				  slides[slideIndex-1].style.display = "block";
				  st=setTimeout(showSlides, 1000); 
				}
			})
		})
		$(document).ready(function(){
			$("#pause").click(function(){
				clearTimeout(st);
			})

		})
		var j=0;
		$(document).ready(function(){
			$(".next").click(function(){
				var slides=document.getElementsByClassName("slide");
				for (i = 0; i < slides.length; i++) {
				    slides[i].style.display = "none";
				  }
				if(j<slides.length-1){
					j=j+1;					
				} else {
					j=0	;
				}
				slides[j].style.display="block";
			})
		})
		$(document).ready(function(){
			$(".prev").click(function(){
				var slides=document.getElementsByClassName("slide");
				for (i = 0; i < slides.length; i++) {
				    slides[i].style.display = "none";
				  }
				  if(j<=1){
				  	j=slides.length-1;
				  } else {
				  	j=j-1;
				  }
				  slides[j].style.display="block";
			})
		})