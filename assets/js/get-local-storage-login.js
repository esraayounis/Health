let name=localStorage.getItem('name')?localStorage.getItem('name'):''
console.log(name);
function Logout()
{
  localStorage.removeItem('name');
  localStorage.removeItem('email');

  var media_query = 'screen and (max-width:600px)';
  // matched or not
  var matched = window.matchMedia(media_query).matches;

  if(matched)
  {
    window.location.href="login-web.html";
  }
  else{
    
  }
}