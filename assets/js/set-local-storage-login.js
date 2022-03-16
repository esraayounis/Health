
let name=localStorage.getItem('name')?localStorage.getItem('name'):''
console.log(name);

function saveData()
{
let emailLogin,pswLogin;
emailLogin = document.getElementById("email-login").value;

pswLogin = document.getElementById("psw-login").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==emailLogin && v.psw==pswLogin}))
{

  localStorage.setItem('status','loggedIn') 
  let current_user=user_records.filter((v)=>{return v.email==emailLogin && v.psw==pswLogin})[0]
  localStorage.setItem('name',current_user.name);
  localStorage.setItem('email',current_user.email);
  window.location.href="index.html"
}
else
{
    //alert('Login Fail');
}

}
