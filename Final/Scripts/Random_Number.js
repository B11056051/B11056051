var Min = document.getElementById("Min");
var Max = document.getElementById("Max");
var Num = document.getElementById("Num"); //要抽出多少個數字
var btn = document.getElementById("btn");
var result = document.getElementById("result");


btn.addEventListener("click", function() {
    var min = Number(Min.value);
    var max = Number(Max.value);
    var num = Number(Num.value);

    //清空結果區域
    result.innerHTML = "";

    //判斷錯誤
    if (min == "" || max == "" || num == "") {
        Toast("請輸入完整資料!");
    } else if (num <= 0) {
        Toast("抽出的數量請大於0!");
    } else if (min > max) {
        Toast("最小值不可大於最大值!");
    } else if (num > max - min + 1) {
        Toast("抽出的數量已超出範圍!");
    } else {
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

        //輸出
        for (var i = 0; i < array.length; i++) {
            //如果太多數字，就換行
            if (i % 20 == 0) {
                result.innerHTML += "<br>";
            }
            result.innerHTML += array[i] + ", ";
            //去掉最後一個逗號
            if (i == array.length - 1) {
                result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 2);
            }
        }
    }
});

//彈出提示框
var toastLiveExample = document.getElementById('liveToast'); // 提示框
var host_name = document.getElementById('host_name-B'); //寫入訊息

function Toast(message) {
    host_name.innerHTML = message;
    var toast = new bootstrap.Toast(toastLiveExample);
    toast.show()
}