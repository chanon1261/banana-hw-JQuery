$("#banner-secondary *").hide()
$("#banner-secondary").html('\
  <input type="text" placeholder="Enter Username" id="uname" required>\
  <input type="password" placeholder="Enter Passs" id="pname" required> <br>\
  <button type="submit" id="sbt">Login</button>\
  ')

$("#sbt").click(function(){
  if($(uname).val() == 'bananacoding' ){
    if($(pname).val() == 'password' ){
      alert("Hello! Login success!!");
    }else
    {
      alert("Login again!!");
    }
  }
  
});
