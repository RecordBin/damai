		var myclick1 = function(v) {  
                var lis = document.getElementsByClassName("tabboxli");  

                for(var i = 0; i < lis.length; i++) {  
                    var llim = lis[i];  
                    if(llim == document.getElementById("tabox" + v)) {  
                        llim.style.backgroundColor = "#ff3c3c";
                    } else {  
                        llim.style.backgroundColor = "white";  
                    }  
                }  
  
                var divsm = document.getElementsByClassName("tabBox");  
                for(var i = 0; i < divsm.length; i++) {  
  
                    var divm = divsm[i];  
  
                    if(divm == document.getElementById("tabox" + v + "_con")) {  
                        divm.style.display = "block";  
                    } else {  
                        divm.style.display = "none";  
                    }  
                }  
  
            }  