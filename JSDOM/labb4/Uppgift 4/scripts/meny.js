/*
** Tobias Estefors
** toes0001
*/
$(document).ready(generateMenu);
function generateMenu() {
    var title = document.getElementsByClassName("post"); //Hämtar alla recept
    var titles=[];
    for(var i=0; i < title.length; i++){
        titles.push(title[i].getElementsByTagName("h4")[0].innerText); //Går ner i domträdet och hämtar alla headers för att vi inte vill ha hela recepten
        title[i].getElementsByTagName("h4")[0].id = title[i].getElementsByTagName("h4")[0].innerText; //Ändrar DOM id till dess titel
    }
    var ul = document.createElement("ul"); //skapar en lista med hälp av dom
    for(var i=0; i < titles.length;i++){
        var a= document.createElement("a"); //skapar länk
        a.textContent = titles[i]; //sätter dom attribut
        var link="#" + titles[i]; 
        a.setAttribute("href", link); 
        var li = document.createElement("li"); //skapar dom länk
        li.appendChild(a); 
        ul.appendChild(li);
    }
    //Ser till att listan läggs till i den contentarea som är barn till receptmeny
    var contentarea=document.getElementById("receptmeny").getElementsByClassName("contentarea")[0]; 
    contentarea.appendChild(ul);
}