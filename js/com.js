// 2016-7-19 首页js的一些效果
$(function(){
	var $tops = $('#tops');
	var $footers = $('#footers');
	var $footers_back = $('#footers_back').height();
	var $floating_box = $('#floating_box');
	var $people_cens = $('#people_cens');
	var floating_boxUl = $floating_box.find('li');
		console.log(floating_boxUl.size())

	$tops.click(function(){
	
		$('body,html').animate({"scrollTop":0},1000,function(){
			 $floating_box.fadeOut();
		});
		return false; 
	})

	floating_boxUl.mouseover(function(){
		
		$(this).addClass('selected').siblings().removeClass('selected');
	});
	
	$(window).scroll(function() {

		var isN = $footers.height();
		var isy = $footers.offset().top;
		var isT = $(window).scrollTop()+120;

		if( isT > ( isy - isN - $footers_back -20))
		{
			
			$floating_box.addClass('floating_boxss').css({bottom:(isN+$footers_back+20)+'px'});
			$people_cens.addClass('people_censaa').css({bottom:(isN+$footers_back+20)+'px'});
		}else{
			$floating_box.removeClass('floating_boxss')
			$people_cens.removeClass('people_censaa')

		}
		if( isT>600 )
		{
			$floating_box.fadeIn();
			$people_cens.fadeIn();
		}else{

			$floating_box.fadeOut();
			$people_cens.fadeOut();
		}
	});

})