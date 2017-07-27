 $(function(){
        var phone = false;
        var password = false;
        var repassword = false;
        var setnum = false;
        var msg = false;
//       phone
        $('input[name="phone"]').focus(function(){
            $("#sp1").text('请选择区域并输入您的手机号!').removeClass('state1 state4 state3').addClass('state2');
        }).blur(function(){
            var len=/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8})?$/;
            if(reg.test($(this).val())){
                $("sp1").text('手机号输入正确!').removeClass('state1 state4 state3').addClass('state4');
                phone = true;
            }else{
                $("#sp1").text('手机号输入错误,应为11位!').removeClass('state1 state2 state4').addClass('state3');
            }
        })

//        password
        $('input[name="password"]').focus(function(){
            $("#sp2").text('密码6-20位字符,字母开头,只包含字母数字下划线!').removeClass().addClass('state2');
        }).blur(function(){
            var reg = /^[a-z | A-Z]\w{5,19}$/;
            if(reg.test($(this).val())){
                $("#sp2").text('密码输入正确!').removeClass().addClass('state4');
                password = true;
            }else{
                $("#sp2").text('密码格式不符合,请重新输入!').removeClass().addClass('state3');
            }
        })

//        repassword
        $('input[name="repassword"]').focus(function(){
           $("#sp3").text('请输入确认密码!').removeClass().addClass('state2');
        }).blur(function(){
            var reg = /^[a-z | A-Z]\w{5,19}$/;
            if(reg.test($(this).val()) && $(this).val() == $('input[name="password"]').val()){
                $("#sp3").text('确认密码输入正确!').removeClass().addClass('state4');
                repassword = true;
            }else{
                $("#sp3").text('两次输入不一致!').removeClass().addClass('state3');
            }
        })

//        setnum
        $('input[name="setnum"]').focus(function(){
            $("#sp4").text('请输入正确的验证码!').removeClass().addClass('state2');
        }).blur(function(){
            var reg = /^[a-z | A-Z]\w{5,19}$/;
            if(reg.test($(this).val())){
                $("#sp4").text('验证码输入正确!').removeClass().addClass('state4');
                setnum = true;
            }else{
                $("#sp4").text('验证码输入错误，请输入重新输入!').removeClass().addClass('state3');
            }
        })
        
//       msg        
        $('input[name="msg"]').focus(function(){
            $("#sp5").text('请输入正确的短信验证码!').removeClass().addClass('state2');
        }).blur(function(){
            var reg = /^[a-z | A-Z]\w{5,19}$/;
            if(reg.test($(this).val())){
                $("#sp5").text('短信验证码输入正确!').removeClass().addClass('state4');
                msg = true;
            }else{
                $("#sp5").text('短信验证码输入错误，请输入重新输入!').removeClass().addClass('state3');
            }
        })
        
//      提交按钮
         $('input[type="submit"]').click(function(){
           if(phone && password && repassword && setnum && msg){
               $('form').submit();
           } else{
               alert('您未填写齐全，或填写格式错误!');
               return false;
           }
        });
     })