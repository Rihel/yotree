$(document).ready(function () {
    $.get('/wap/common/header.html', function (data) {
        $('.main').before($(data));
        $(".af1").slide({
                affect: 2,
                time: 3000,
                speed: 400,
                dot_text: false,
            });
    });
    $.get('/wap/common/footer.html', function (data) {
        $('.main').after($(data));
    });
    var weixin = '<section id="weixin"><img src="images/weixin.jpg"></section>';

    if (isWeiXin()) {
        $('#dibu').before($(weixin));
    }
    $('body').scrollactive();
    //alert(isWeiXin());
})

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}