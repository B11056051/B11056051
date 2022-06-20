var Time = document.getElementById('Time');


function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = formatTime(h);
    m = formatTime(m);
    s = formatTime(s);

    function formatTime(time) {
        if (time < 10) {
            time = "0" + time;
        }
        return time;
    }
    Time.innerHTML = h + "時" + m + "分" + s + "秒";
}

showTime();