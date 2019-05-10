/*
** Tobias Estefors
** toes0001
*/
window.onload = function(){
    $("#tabell").hide();
    var btn=document.getElementById("sok-button");
    btn.onclick = function() {setSource()};
}

function setSource() {
    var source;
    source = document.createElement("script");
    var name=document.getElementById("livsmedelsSokOrd").value;
    source.src ="https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php?namn="+ name +"&callback=getLivsmedel"
    document.body.appendChild(source);
}

function getLivsmedel(response){
	var table = document.getElementById("tabell").getElementsByTagName("tbody")[0];
	var livsmedelArray = response.livsmedel;
	if(livsmedelArray.length==0){
		$("#tabell").hide();
		return;
	}
	if(table.rows.length!=1){
	    for(var i =1; i <= table.rows.length-1;){
	        table.deleteRow(i);
	    }
    }
    for (var i = 0; i < livsmedelArray.length; i++) {
        var livsmedel = livsmedelArray[i];
        var row = table.insertRow(-1);
   		var cell1 = row.insertCell(0);
    	var cell2 = row.insertCell(1);
    	var cell3 = row.insertCell(2);
    	var cell4 = row.insertCell(3);
    	var cell5 = row.insertCell(4);
    	cell1.innerHTML = livsmedel.namn;
    	cell2.innerHTML = livsmedel.energi;
    	cell3.innerHTML = livsmedel.kolhydrater;
    	cell4.innerHTML = livsmedel.protein;
    	cell5.innerHTML = livsmedel.fett;
    }
    $("#tabell").show();
}