let name=localStorage.getItem('name')?localStorage.getItem('name'):''
console.log(name);
document.getElementById("profile-name").value = name;
$(document).ready(function() {
  
     document.getElementById("profile-name").innerHTML = name;
     var media_query = 'screen and (max-width:600px)';
     var matched = window.matchMedia(media_query).matches;
     if (name == '') {
        // matched or not
        if(matched)
        {
          var usernamediv = document.querySelector('.username-mob');
          usernamediv.style.display = 'none';
          var logindiv = document.querySelector('.login-mob');
          logindiv.style.display = 'flex';
          var logindiv = document.querySelector('.login-mob1');
          logindiv.style.display = 'flex';
        }
        else{
          var usernamediv = document.querySelector('.username');
          usernamediv.style.display = 'none';
          var logindiv = document.querySelector('.login-group');
          logindiv.style.display = 'block';
        }
      }
      else {
        var usernamediv = document.querySelector('.username');
        usernamediv.style.display = 'block';
        var logindiv = document.querySelector('.login-group');
        logindiv.style.display = 'none';
        if(matched)
        {
          var usernamediv = document.querySelector('.username-mob');
          usernamediv.style.display = 'flex';
          var logindiv = document.querySelector('.login-mob');
          logindiv.style.display = 'none';
          var logindiv = document.querySelector('.login-mob1');
          logindiv.style.display = 'none';
        }
      }
    });
function Logout()
{
  localStorage.removeItem('name');
  localStorage.removeItem('email');

  var media_query = 'screen and (max-width:600px)';
  // matched or not
  var matched = window.matchMedia(media_query).matches;

  if(matched)
  {
    window.location.href="sign-up-mobile.html";
  }
  else{
    window.location.href="login-web.html";
  }
}