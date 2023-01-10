//日期拆分
function date_sort(date) {
    var time = {};
    var f = date.split(' ', 2); 
    if (f[0].search("/") != -1) { 
        var d = (f[0] ? f[0] : '').split('/', 3); 
    } else {
        var d = (f[0] ? f[0] : '').split('-', 3); 
    }
    time.year = parseInt(d[0]); 
    time.month = parseInt(d[1]);
    time.day = parseInt(d[2]);
    return time;
}
