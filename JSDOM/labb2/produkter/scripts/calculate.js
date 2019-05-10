/*
** Tobias Estefors
** toes0001
*/
window.onload = function(){setUp()};


function setUp(){
	var table = document.getElementById("pricetable");
    var tr = table.tHead.children[0],
    th = document.createElement("th");
    th.innerHTML = "Summa";
    tr.appendChild(th);
    var rows = document.getElementById("pricetable").rows;
    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].insertCell(-1)
    }
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    row.id="sumrow";
    var btn = document.createElement("input");
    btn.type = "button";
    btn.value = "Beräkna pris";
    btn.onclick = function(){calculate()};
    btn.class += "btn";
    btn.class += "btn-primary";
    var container = document.getElementById("content");
    container.appendChild(btn);
}
function calculate(){
    var table =document.getElementById("pricetable");
    var rows = table.rows;
    var i;
    var finalsum=0;
    var finalantal=0;
    for (i = 1; i < rows.length-1; i++) {
        var x = table.rows[i].cells;
        var sum1 = x[3].innerHTML;
        var sum2 = parseInt(x[4].firstChild.value,10);
        var sum3= sum1*sum2;
        finalantal+=sum2;
        finalsum += sum3;
        x[5].innerHTML = sum3;
    } 
    var x = table.rows[rows.length-1].cells;
    x[5].innerHTML=finalsum;
    x[4].innerHTML=finalantal;
}
