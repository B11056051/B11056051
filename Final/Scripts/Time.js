var Time = document.getElementById('Time');

// 格式化時間
function formatTime(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return parseInt(time);
}

var Now = new Date();
var Year = Now.getFullYear();
var Month = formatTime(Now.getMonth() + 1);
var Day = formatTime(Now.getDate());
var Hour = formatTime(Now.getHours());
var Minute = formatTime(Now.getMinutes());
var Second = formatTime(Now.getSeconds());


var Years = Year + '年';
var Months = Month + '月';
var Days = Day + '日';
var Hours = Hour + '時';
var Minutes = Minute + '分';
var Seconds = Second + '秒';

// 彈出提示框用
function showTime() {
    Time.innerHTML = Hours + Minutes + Seconds;
}
showTime();

export { Now, Year, Years, Month, Months, Day, Days, Hour, Hours, Minute, Minutes, Second, Seconds }; // 導出時間模塊