function saveDataNewUsers()
{
    let name,email,psw,phone,birthdate,gender;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    psw = document.getElementById("psw").value;
    phone = document.getElementById("phone").value;
    birthdate = document.getElementById("birthdate").value;
    gender = document.querySelector(".list .selected").text;

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.email==email}))
    {
     // alert("duplicate data");
    }
    else
    {
        user_records.push({
        "name":name,
        "email":email,
        "psw":psw,
        "phone":phone,
        "birthdate":birthdate,
        "gender":gender
    })
    localStorage.setItem("users",JSON.stringify(user_records));
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("psw",psw)
    localStorage.setItem("phone",phone)
    localStorage.setItem("birthdate",birthdate)
    localStorage.setItem("gender",gender)
    }

    localStorage.setItem('status','loggedIn') 
    window.location.href="index.html"

}