  var myclick2 = function(v) {  
                var llis = document.getElementsByClassName("rightli");  
                for(var i = 0; i < llis.length; i++) {  
                    var lli = llis[i];  
                    if(lli == document.getElementById("right" + v)) {  
                        lli.style.borderTopColor = "#FF0000";
                        lli.style.borderBottomColor = "#FFFFFF";
                    } else {  
                        lli.style.borderBottomColor = "#DEDEDE"; 
                        lli.style.borderTopColor = "#DEDEDE";
                    }  
                }  
  
                var divs = document.getElementsByClassName("rTab");  
                for(var i = 0; i < divs.length; i++) {  
  
                    var divv = divs[i];  
  
                    if(divv == document.getElementById("right" + v + "_content")) {  
                        divv.style.display = "block";  
                    } else {  
                        divv.style.display = "none";  
                    }  
                }   
            }  