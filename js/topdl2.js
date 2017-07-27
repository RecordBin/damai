	function onMouse(){
		var topDl2 = document.getElementById("topdl2");
		var topDl2a = document.getElementById("topdl2a");
		topDl2.onmouseover = function(){
			topDl2.style.height = 34 + "px";
			topDl2.style.borderLeft = 1+"px";
			topDl2.style.borderLeftColor = "#dedede";
			topDl2.style.borderLeftStyle = "solid";
			topDl2.style.borderRight = 1+"px";
			topDl2.style.borderRightColor = "#dedede";
			topDl2.style.borderRightStyle = "solid";
			topDl2.style.backgroundColor = "white";
				topDl2a.style.border = "none";		
		}
		topDl2.onmouseout = function(){
			var topDl2 = document.getElementById("topdl2");
			var topDl2a = document.getElementById("topdl2a");
			topDl2.style.backgroundColor = "#F7F7F7";
			topDl2.style.border = "none";
				topDl2a.style.borderLeft = 1+"px";
				topDl2a.style.borderLeftColor = "#dedede";
				topDl2a.style.borderLeftStyle = "solid";
				topDl2a.style.borderRight = 1+"px";
				topDl2a.style.borderRightColor = "#dedede";
				topDl2a.style.borderRightStyle = "solid";
				topDl2a.style.paddingLeft = 10 + "px";
				topDl2a.style.paddingRight = 15 + "px";
		}
	}