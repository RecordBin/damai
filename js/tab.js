  var myclick = function(v) {  
                var llis = document.getElementsByClassName("tabli");  
                for(var i = 0; i < llis.length; i++) {  
                    var lli = llis[i];  
                    if(lli == document.getElementById("tab" + v)) {  
                        lli.style.borderTopColor = "#FF0000";
                        lli.style.borderBottomColor = "#FFFFFF";
                    } else {  
                        lli.style.borderBottomColor = "#DEDEDE"; 
                        lli.style.borderTopColor = "#DEDEDE";
                    }  
                }  
  
                var divs = document.getElementsByClassName("tab_css");  
                for(var i = 0; i < divs.length; i++) {  
  
                    var divv = divs[i];  
  
                    if(divv == document.getElementById("tab" + v + "_content")) {  
                        divv.style.display = "block";  
                    } else {  
                        divv.style.display = "none";  
                    }  
                }   
            }  