var thead = document.getElementById('tableTitle');
var tbody = document.getElementsByClassName('content')[0];

var tr = document.createElement("tr");
for (var i = 5; i >= 1; i--) {
    j = ((3 * (8 - i)) - 1);
    var th = document.createElement('th');
    th.innerHTML = i + "號餐" + '<br/>' + j + "元";
    thead.appendChild(tr);
    tr.appendChild(th);
}

tr.insertCell(0);
tr.cells[0].innerHTML = "";
tr.cells[0].style.border = "none";

for (var x = 3; x < 8; x++) {
    var tr2 = document.createElement("tr");
    var td = document.createElement('td');
    td.innerHTML = x;
    td.style.color = "purple";
    td.style.fontWeight = "bolder";
    td.style.fontSize = "18px";
    td.style.textAlign = "center";
    tr2.appendChild(td);
    tbody.appendChild(tr2);
    for (var y = 8; y <= 20; y += 3) {
        var td = document.createElement("td");
        td.innerHTML = x + "*" + y + "=" + x * y;
        tr2.appendChild(td);
        tbody.appendChild(tr2);
    }
}