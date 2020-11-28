
function validar(){
  var name = form.name;
  var lname = form.lname
  var password = form.password

  if(name.value === ""){
        name.setCustomValidity("First Name cannot be empty");
    }

    if(lname.value === ""){
        lname.setCustomValidity("Last Name cannot be empty");
    }
    
    if(password.value == ""){
        password.setCustomValidity("Password cannot be empty");
    }
}