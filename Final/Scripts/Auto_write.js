import { Now, Year, Years, Month, Months, Day, Days, Hour, Hours, Minute, Minutes, Second, Seconds } from './Time.js'; //格式化時間

var auto_write = document.getElementById("Auto_write"); //自動打字區域
var hide = document.getElementById("hide"); //輸入框


var speed = 0;

//自動寫字
function Write(text, speed) {
    var i = 0;

    //隱藏輸入框
    hide.style.display = "none";

    var timer = setInterval(function() {
        if (text.length > i) {
            auto_write.innerHTML += text.charAt(i);
            if (text.charAt(i) == "\n") {
                auto_write.innerHTML += "<br>";
            } else if (text.charAt(i) == "\r") {
                auto_write.innerHTML += "<hr>";
            }
            i++;

            //顯示輸入框
            if (i == text.length) {
                hide.style.display = "";
                auto_write.appendChild(hide);
            }
        } else {
            clearInterval(timer);
        }
    }, speed);
    return;
}

//來訪紀錄，HttpOnly cookie保護
var count_cookie = document.cookie.split(";"); //取得cookie內容
function Welcome() {
    var count = 0; //登入次數

    var Now_Date = Years + Months + Days; //現在時間

    //上次登入時間
    for (var i = 0; i < count_cookie.length; i++) {
        if (count_cookie[i].indexOf("Date") != -1) {
            var Last_Data = count_cookie[i].split("=")[1];
            //console.log("上次登入:" + Last_Data);
        }
    };

    //登入總次數
    for (var j = 0; j < count_cookie.length; j++) {
        if (count_cookie[j].indexOf("Last_count") != -1) {
            let Last_count1 = count_cookie[j].split("=")[1];
            var Last_count = Last_count1.split(",")[0];
            //console.log("登入次數:" + Last_count + "次");
        }
    }

    if (count_cookie == "") {
        count = 1;
        Last_count = count;
        document.cookie = "Last_count=" + Last_count;
        document.cookie = "Date=" + Now_Date;
    } else if (Last_Data != Now_Date) {
        count++;
        Last_count = parseInt(count) + parseInt(Last_count);
        document.cookie = "Last_count=" + Last_count;
        document.cookie = "Date=" + Now_Date;
    }

    if (Last_count > 1) {
        return "第" + Last_count + "天"
    } else {
        return "首次"
    }
}

//個人化名字
function Name() {
    for (var i = 0; i < count_cookie.length; i++) {
        if (count_cookie[i].indexOf("Name") != -1) {
            var Last_Names = count_cookie[i].split("=")[1];
            //console.log("名字:" + Last_Names);
            return Last_Names
        }
    }
    if (Last_Names == null) {
        return "訪客"
    }
}

//Toast-彈出訊息
var toastTrigger = document.getElementsByClassName('liveToastBtn')[0]; //觸發按鈕
var toastLiveExample = document.getElementById('liveToast'); // 提示框

var input_text = document.getElementById("input_text"); //輸入框的值
var host_name = document.getElementById('host_name'); //寫入名字

//按鈕偵測
if (toastTrigger) {
    toastTrigger.addEventListener('click', function() {
        //驗證輸入框
        if (input_text.value == "") {
            input_text.style.boxShadow = "0px 0px 3px 3px red";
        } else {
            input_text.style.boxShadow = "";
            host_name.innerHTML = input_text.value;
            var toast = new bootstrap.Toast(toastLiveExample);
            toast.show()

            // 將名字寫入cookie
            document.cookie = "Name=" + host_name.innerHTML;
            document.cookie = "path=/";
            //document.cookie = 'HttpOnly=true';
            //document.cookie = 'Secure';

            //重新輸入
            auto_write.innerHTML = "";
            input_text.value = "";
            SetX();
            setTimeout(() => {
                window.location.reload();
            }, 1000 * 2);
        }
    });
}


//現在時間
function Now_time() {
    return Years + Months + Days + " " + Hours + Minutes;
}

//時間判斷
function Time() {
    if (Hour >= 0 && Hour <= 6) {
        return "凌晨了，要早點睡喔！";
    } else if (Hour >= 7 && Hour <= 12) {
        return "早上了，美好的一天開始了！";
    } else if (Hour >= 13 && Hour <= 18) {
        return "下午了，記得吃午餐了嗎！";
    } else if (Hour >= 19 && Hour <= 24) {
        return "晚上了，忙了一整天了吧，早點去睡吧！";
    }
}

//資料設定
function SetX() {
    var text1 = "嗨! " + Name() + "\n\n歡迎" + Welcome() + "來到這個地方\n" + "\n目前的時間為:  " + Now_time() + "\n\n現在已經是" + Time();
    var text2 = "\n \n \r \n如果可以的話，請告訴我你的名字，以便在你下次來訪時讓我可以記得你!(可隨時更改)";
    var text3 = "(名字使用cookie儲存，已對cookie使用HttpOnly防止XXS攻擊)"
    var text = text1 + text2;
    speed = 60;

    Write(text, speed);
}

SetX();