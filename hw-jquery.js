$("#banner-secondary *").hide()
$("#banner-secondary").html('\
  <input type="text" placeholder="Enter Username" id="uname" required>\
  <input type="text" placeholder="Enter Passs" id="pname" required> <br>\
  <button type="submit" id="sbt">Login</button>\
  ')

$("#sbt").click(function(){
  if($(uname).val() == 'bananacoding' && $(pname).val() == 'password'  ){
    alert("Hello! Login success!!");
  }else{
    alert("Login again!!");
  }
 
});

