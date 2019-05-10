/*
** Tobias Estefors
** toes0001
*/
window.onload = function(){
    var form = document.forms['registration_form'];
    form.onsubmit = function() {validate()};
}

function validate(){
    var frm = document.getElementById('registration_form');
    frm.action = "javascript:void(0)"; 
    if (document.getElementById("field_firstname").value.length==0) {
        alert("Du måste fylla i ett förnamn");
        return false;
    }
    if (document.getElementById("field_lastname").value.length==0) {
        alert("Du måste fylla i ett efternamn");
        return false;
    }
    if (document.getElementById("field_email").value.length==0) {
        alert("Du måste fylla i en epostadress");
        return false;
    }else{
        var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/; 
        if(!pattern.test(document.getElementById("field_email").value)){
            alert("Du måste fylla i en korrekt epostadress");
            return false;   		
        }
    }
    if (document.getElementById("field_organisation").value.length==0) {
        alert("Du måste fylla i en organisation");
        return false;
    }
    if(document.getElementById("pres_type_2").checked || document.getElementById("pres_type_1").checked) {
        if(document.getElementById("field_pres_title").value.length==0){
            alert("Fyll i en titel på föreläsning/seminarium");
            return false;
        }
    }
    if(document.getElementById('field_message').value.length>200){
        alert("Meddelandet får max vara 200 tecken!")
        return false;
    }else if(document.getElementById('field_message').value.length==0){
        alert("Meddelande får inte vara tomt");
        return false;
    }
    frm.action="dummy.html"
    return true;
}