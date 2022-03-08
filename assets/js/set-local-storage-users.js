function saveDataNewUsers()
{
    let name,email,psw;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    psw=document.getElementById("psw").value;

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.email==email}))
    {
      alert("duplicate data");
    }
    else
    {
        user_records.push({
        "name":name,
        "email":email,
        "psw":psw
    })
    localStorage.setItem("users",JSON.stringify(user_records));
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("psw",psw)
    }
}