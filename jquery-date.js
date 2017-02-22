$.fn.extend({
    // 把日期设置成指定的时间
    setDate: function (year, month) {
        var nowTime = new Date();
        year = year || nowTime.getFullYear();
        month = month || nowTime.getMonth();
        // 设置时间
        nowTime.setFullYear(year);
        nowTime.setMonth(month - 1);
        // 获取月份共有多少天
        var nextMonth = new Date(nowTime.getFullYear(), (nowTime.getMonth() + 1), 0);
        var total = nextMonth.getDate();
        // 获取今天的日期
        var nowDate = nowDate = new Date().getDate();
        // 获取本月的第一天是星期几
        nowTime.setDate(1);
        var today = nowTime.getDay() === 0 ? 7 : nowTime.getDay();

        var html = '';
        for (var i = 0; i < 7; i++) {
            if (i < today - 1 ) {
                html += '<div></div>';
            }
        }
        // 循环遍历当月所有日期
        for (var i = 0; i < total; i++) {
            (i + 1) === nowDate ? html += '<div class="active">'+ (i+1) +'</div>' 
                        : html += '<div>'+ (i+1) +'</div>';    
        }
        this.empty();
        this.prepend(html);
    }
});