//局部插件  实现读取所有的区域号码，添加到页面的下拉列表

;(function($){
	$.fn.extend({
		showCountry:function(currYear){
			$(this).append("<option>请选择手机号区域</option>");
			//获取所有年份 
			var phone = ["🇨🇳中国＋86","🇭🇰香港＋852","🇲🇴澳门＋853",
			"🇰🇷韩国＋82","🇯🇵日本＋81","🇬🇧英国＋44","🇮🇹意大利＋39",
			"🇨🇳中国＋86","🇭🇰香港＋852","🇲🇴澳门＋853",
			"🇰🇷韩国＋82","🇯🇵日本＋81","🇬🇧英国＋44","🇮🇹意大利＋39",
			"🇨🇳中国＋86","🇭🇰香港＋852","🇲🇴澳门＋853",
			"🇰🇷韩国＋82","🇯🇵日本＋81","🇬🇧英国＋44","🇮🇹意大利＋39",];
			for(var i=0;i<phone.length;i++){
				$(this).append('<option value=' + phone[i] + ' ' +(i == currYear?'selected':'') + '>' + phone[i] + '</option>');
			}			
			return this;//支持链式的写法
		}
	})
})(jQuery);
