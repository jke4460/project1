$(document).ready(function () {
    //gnb navigation
    var $gnb = $('#gnb > ul');
    var $gnbDep2 = $gnb.find('>li > div');

    /* 
    1) depth1, depth2 활성화를 위해 변수설정 dep1, dep2
    2) depth2 div => $gnbDep2를 화면에서 숨기기 hide()
    3) depth1 li에 마우스와 포커스가 진입 이벤트
        $gnbDep2 모두 열리기 slideDown()
        현재 진입한 li는 .on 추가, 나머지 li는 제거
    4) $gnb에서 마우스가 벗어나는 이벤트 
        function gnbReturn () {
            $gnbDep2 모두 닫기기 slideUp()
            depth1li.on 이 있는 경우 모두 .on 제거
            현재페이지 활성화 처리(인덱스를 제외한 서브일 경우만 if ) =>data-dep-one="1" data-dep-two="3"
        }

    5) 포커스 나가기 : 첫번째와 마지막 a 태그에서 포커스 되는 경우만 제어하면 됨
        시간차를 두고 포커스를 받아줄때를 기다려서
        gnbReturn함수와 동일한 동작 실행
        $gnbDep2 모두 닫기기 slideUp()
        depth1li.on 이 있는 경우 모두 .on 제거
        현재페이지 활성화 처리(인덱스를 제외한 서브일 경우만 if ) =>data-dep-one="1" data-dep-two="3"   
    */
    var dep1 = $('body').data('dep-one') - 1;       //0
    var dep2 = $('body').data('dep-two') - 1;       //2
    $gnbDep2.hide();
    $gnb.find('>li').on('mouseenter focusin', function () {
        $gnbDep2.stop().slideDown();
        $(this).addClass('on').add().siblings().removeClass('on');
    });
    $gnb.on('mouseleave', gnbReturn);
    if (dep1 >= 0) gnbReturn ();        //index가 아닌 서브일 경우만
    $gnb.find('a:first, a:last').on('blur', function () {
        setTimeout(function () {
            //#gnb a 가 포커스를 가지고 있지(:focus) 않은 경우
            if (!$gnb.find('a').is(':focus')) gnbReturn ();
        }, 10);
    });
    function gnbReturn () {
        $gnbDep2.stop().slideUp();
        $gnb.find('>li.on').removeClass('on');
        if (dep1 >= 0) $gnb.find("> li").eq(dep1).addClass('on').find('div ul li').eq(dep2).addClass('on');
    }
});