$(function () {
    // 获取当前时间
    var now = new Date();
    // 显示五年
    var yearHtml = '';
    for (var i = 0; i < 5; i++) {
        var year = now.getFullYear() ;
        i === 0 ? yearHtml += '<option value='+ (year - i) +' selected>'+ (year - i) +'</option>' 
                : yearHtml += '<option value='+ (year - i) +'>'+ (year - i) +'</option>';
    }
    $("#set-year").prepend(yearHtml);

    // 显示月份
    var monthHtml = '';
    var nowMonth = now.getMonth();
    for (var i = 1; i <= 12; i++) {
        (nowMonth + 1) === i ? monthHtml += '<option value='+ i +' selected>'+ i +'</option>' 
                       : monthHtml += '<option value='+ i +'>'+ i +'</option>';
    }
    $("#set-month").prepend(monthHtml);

    $("#show-day").setDate(2017, 2);
    $("#date-sure").on("click", function () {
        var year = $("#set-year").val();
        var month = $("#set-month").val();
        console.log(year+"===="+month);
        $("#show-day").setDate(year, month);
    });

});