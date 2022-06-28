var Min = document.getElementById("Min");
var Max = document.getElementById("Max");
var Num = document.getElementById("Num"); //要抽出多少個數字
var Count = document.getElementById("Count"); // 重複抽的次數
var btn_run = document.getElementById("btn-run");
var btn_stop = document.getElementById("btn-stop");
//var fa_solid = document.getElementsByClassName("fa-solid")[1];
var btn_clear = document.getElementById("btn-clear");
var result = document.getElementById("result");
var Sum_Count = document.getElementById("Sum_Counts"); //顯示執行次數
var Speed = document.getElementById("Speed"); //執行速度

//隱藏暫停按鈕
btn_stop.style.display = "none";

btn_run.addEventListener("click", function() {
    var min = Number(Min.value);
    var max = Number(Max.value);
    var num = Number(Num.value);
    var count = Number(Count.value);
    var speed = Number(Speed.value); //執行速度
    //判斷錯誤
    if (Min.value.split() == '' || Max.value.split() == '' || Num.value.split() == '') {
        Toast("請輸入完整資料!");
    } else if (num <= 0) {
        Toast("抽出的數量請大於0!");
    } else if (min >= max) {
        Toast("最小值不可大於或等於最大值!");
    } else if (max <= min) {
        Toast("最大值不可小於或等於最小值!");
    } else if (num > max - min + 1) {
        Toast("抽出的數量已超出範圍!");
    } else if (num == max - min + 1) {
        Toast("抽出的數量將等於範圍內全部的數");
    } else if (num >= 1000) {
        Toast_Waring("指定抽出的數量較大，可能會造成網頁當機，是否繼續執行?");

        Continue.addEventListener("click", function() {
            let toast_Waring = new bootstrap.Toast(toastLiveExample_Waring);
            toast_Waring.hide();
            Main();
        })
    } else if (count <= 0 && Count.value.split() != '') {
        Toast("執行次數請大於0!");
    } else {
        Main();
    }

    function Main() {
        //var y = 0;
        var z = 0;
        var Steps = 0; //已執行的次數
        var Play = 1; //控制執行

        if (Count.value.split() == '') {
            count = 1;
        }

        if (Speed.value.split() == '') {
            speed = 0.1; //執行速度(ms)
        }

        //顯示暫停按鈕
        //btn_stop.style.display = "";

        control(Play);

        function control(status) {

            while (z < count) {
                function Run() {
                    result.innerHTML = "";
                    Sum_Count.innerHTML = "";
                    var array = [];

                    for (var i = 0; i < num; i++) {
                        var random = Math.floor(Math.random() * (max - min + 1) + min);
                        //不重複數字判斷
                        if (array.indexOf(random) == -1) {
                            array.push(random);
                        } else {
                            i--;
                        }
                    }

                    //泡沫排序法
                    for (var k = 0; k < array.length; k++) {
                        for (var o = 0; o < array.length; o++) {
                            if (array[o] > array[o + 1]) {
                                let temp = 0;
                                temp = array[o];
                                array[o] = array[o + 1];
                                array[o + 1] = temp;
                            }
                        }
                    }

                    //輸出結果
                    for (var t = 0; t < array.length; t++) {
                        result.innerHTML += array[t] + ", ";
                        //去掉最後一個逗號
                        if (t == array.length - 1) {
                            result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 2);
                        }
                    }

                    //顯示已執行的次數
                    Steps++;
                    Sum_Count.innerHTML = `<p>(已執行${Steps}次)</p>`;
                }

                setTimeout(Run, (speed * 1000) * z);

                if (status == 1) {
                    z++;
                } else if (status == 0) {
                    break;
                }
            }
        }
        /*
        //偵測暫停按鈕
        btn_stop.addEventListener("click", function() {
            //切換暫停按鈕圖示
            if (fa_solid.classList.contains("fa-stop")) {
                fa_solid.classList.remove('fa-stop');
                fa_solid.classList.add('fa-play');
                main(0);
            } else {
                fa_solid.classList.remove('fa-play');
                fa_solid.classList.add('fa-stop');
                main(1);
            }
        });
        */
    }
});

/*
var Timer = function(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        window.clearTimeout(timerId);
        timerId = null;
        remaining -= Date.now() - start;
    };

    this.resume = function() {
        if (timerId) {
            return;
        }

        start = Date.now();
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
};
*/

//清除輸出結果
btn_clear.addEventListener("click", function() {
    result.innerHTML = "";
    Sum_Count.innerHTML = "";
});

//彈出提示框
var toastLiveExample = document.getElementById('liveToast'); // 提示框
var host_name = document.getElementById('host_name_B'); //寫入訊息

function Toast(message) {
    host_name.innerHTML = message;
    var toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
}

//彈出提示框(警告詢問)
var toastLiveExample_Waring = document.getElementById('liveToast-Waring'); // 提示框
var host_name_Waring = document.getElementById('host_name_Waring'); //寫入訊息
var Continue = document.getElementById('Run');
//var Stop_Run = document.getElementById('Stop');

function Toast_Waring(message) {
    host_name_Waring.innerHTML = message;
    var toast = new bootstrap.Toast(toastLiveExample_Waring);
    toast.show();
}