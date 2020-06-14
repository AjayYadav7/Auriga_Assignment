$(document).ready(function(){
			document.getElementById("d1").style.display="block";
		})
		var j=1;
		var pwidth=0;
		$(document).ready(function(){
			$(".next").click(function(){
				if(pwidth<100){
				pwidth=pwidth+4;
				var z=pwidth+"%";
				document.getElementById("progressbar").style.width=z;
				}
			})
		})


		$(document).ready(function(){
			$(".next").click(function(){
				 var i, tabcontainer, tabs;
				 var f="d"+j;
				 var radioValue = $("input[name='optradio']:checked").val();
		         localStorage.setItem(f,radioValue);
				 ++j;
				 var c="d"+j;
				  tabcontainer = document.getElementsByClassName("tabcontainer");
				  for (i = 0; i < tabcontainer.length; i++) {
				    tabcontainer[i].style.display = "none";
				  }
				  document.getElementById(c).style.display = "block";
			});
		});
		
		$(document).ready(function(){
			$(".previous").click(function(){
				var i,tabcontainer,tabs;
				--j;
				var c="d"+j;
				tabcontainer=document.getElementsByClassName("tabcontainer");
				for(i=0;i<tabcontainer.length;i++){
					tabcontainer[i].style.display="none";
				}
				document.getElementById(c).style.display="block";
			})
		})

		var answer=["none","Prathiba Devi Singh Patil","Indra Gandhi","six","Narendra Modi","arvind Kejriwal","Biro Brothers","Marie curie","Thermometer","rotatory Steam engine","sir frank whittle","thirteen","goat","monkey","hello","four","thirty six","elephant",
		"holi","diwali","peace","red","twenty four","hockey","blue"]
		$(document).ready(function(){
			$(".submit").click(function(){
				var n=localStorage.length;
				var k=1;
				var count=0;
				for(k=1;k<=n;k++){
					var d="d"+k;
					if(answer[k-1]==localStorage.getItem(d)){
						count++;
					}
				}
				document.getElementById("first").style.display="none";
				document.getElementById("second").style.display="none";
				document.getElementById("quiz").style.display="none";
				var marks_got=count*100/25;
				document.getElementById("final").style.display="block";
				document.getElementById("marks").innerHTML=marks_got+"%";
				if(marks_got<36){
					document.getElementById("final").style.backgroundColor="red";
					document.getElementById("score").innerHTML="Fail";
				} else if(marks_got<50) {
					document.getElementById("final").style.backgroundColor="orange";
					document.getElementById("score").innerHTML="Average";
				} else if(marks_got<70){
					document.getElementById("final").style.backgroundColor="green";
					document.getElementById("score").innerHTML="Good";
				} else if(marks_got<90){
					document.getElementById("final").style.backgroundColor="darkgreen";
					document.getElementById("score").innerHTML="Very Good";
				} else if(marks_got<100){
					document.getElementById("final").style.backgroundColor="goldenrod";
					document.getElementById("score").innerHTML="Excellent";
				} 

			})
		})
		