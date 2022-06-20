var min = document.getElementById("min");
var max = document.getElementById("max");
var num = document.getElementById("num"); //要抽出多少個數字
var btn = document.getElementById("btn");
var result = document.getElementById("result");


btn.addEventListener("click", function() {
    //清空result
    result.innerHTML = "";
    if (min.value == "" || max.value == "" || num.value == "") {
        alert("請輸入完整資料!");
    } else if (num.value <= 0) {
        alert("抽出的數量請大於0!");
    } else if (min.value > max.value) {
        alert("最小值不可大於最大值!");
    } else if (num.value > max.value - min.value + 1) {
        alert("抽出的數量已超出範圍!");
    } else {
        var array = [];
        for (var i = 0; i < num.value; i++) {
            var random = Math.floor(Math.random() * (parseInt(max.value) - parseInt(min.value) + 1) + parseInt(min.value));
            if (array.indexOf(random) == -1) {
                array.push(random);
            } else {
                i--;
            }
        }
        //如果太多數字，就換行
        for (var i = 0; i < array.length; i++) {
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