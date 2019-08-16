$(document).ready(function () {
    var $visual = $('#slider ul');

    $('#prev').on('click', function () {
        if ($visual.is(':animated')) return false;
        $visual.prepend($visual.children().last().clone()).css({marginLeft:-600}).animate({marginLeft:0}, function () {
            $(this).children().last().remove();
        });
    });
    $('#next').on('click', function() {
        if ($visual.is(':animated')) return false;
        $visual.append($visual.children().first().clone()).animate({marginLeft:-600}, function () {
            $(this).css({marginLeft:0}).children().first().remove();
        });
    });

    var $slider = $('#slider2 ul');

    $('#prev1').on('click', function () {
        if ($slider.is(':animated')) return false;
        $slider.prepend($slider.children().last().clone()).css({marginLeft:-1200}).animate({marginLeft:0}, function () {
            $(this).children().last().remove();
        });
    });
    $('#next1').on('click', function() {
        if ($slider.is(':animated')) return false;
        $slider.append($slider.children().first().clone()).animate({marginLeft:-1200}, function () {
            $(this).css({marginLeft:0}).children().first().remove();
        });
    });

    var $store= $('#store');
	var $storeEle = $store.find('li') ;
	$storeEle.find('a').on({
		mouseenter:function () {
			$(this).parent().addClass('on');
		},
		mouseleave:function() {
			$(this).parent().removeClass('on');
		}
	});
});