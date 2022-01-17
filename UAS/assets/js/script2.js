function validate(){
  var nama = document.getElementById("nama").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;
  var kodep = document.getElementById("kodep").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(nama.length < 5){
    text = "Karakter nama minimal 5";
    error_message.innerHTML = text;
    return false;
  }
  if(username.length < 6){
    text = "Karakter username minimal 6";
    error_message.innerHTML = text;
    return false;
  }
  if(password.length < 8){
    text = "Karakter Password minimal 8";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Masukkan alamat email dengan benar";
    error_message.innerHTML = text;
    return false;
  }
  if(alamat.length <= 10){
    text = "Masukkan alamat lebih dari 10 karakter";
    error_message.innerHTML = text;
    return false;
  }
   if(isNaN(kodep) || kodep.length != 5){
    text = "Inputan hanya berupa angka!";
    error_message.innerHTML = text;
    return false;
  }
  alert("Selamat! Anda berhasil masuk!");
  return true;
}