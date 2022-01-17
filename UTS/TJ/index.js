var pass = document.getElementById("pass")
  , pass2 = document.getElementById("pass2");

function validatePassword(){
  if(pass.value != pass2.value) {
    pass2.setCustomValidity("Passwords Don't Match");
  } else {
    pass2.setCustomValidity('');
  }
}

pass.onchange = validatePassword;
pass2.onkeyup = validatePassword;