  var myclick3 = function(v) {  
                var llis = document.getElementsByClassName("F1li");  
                for(var i = 0; i < llis.length; i++) {  
                    var lli = llis[i];  
                    if(lli == document.getElementById("F1tabli" + v)) {  
                        //lli.style.borderTopColor = "#FF0000";
                        lli.style.borderBottomColor = "#FFFFFF";
                    } else {  
                        lli.style.borderBottomColor = "#DEDEDE"; 
                        lli.style.borderTopColor = "#DEDEDE";
                    }  
                }  
  
                var divs = document.getElementsByClassName("F1Tabox");  
                for(var i = 0; i < divs.length; i++) {  
  
                    var divv = divs[i];  
  
                    if(divv == document.getElementById("F1Tabbox" + v)) {  
                        divv.style.display = "block";  
                    } else {  
                        divv.style.display = "none";  
                    }  
                }   
            }  