   // Share Data
$('.nav-link').click(function(){
    var newName =  $(".nav-link.active p").text();
    console.log(newName);
    localStorage.setItem("selected-tab", newName);
});

function shareCardData()
{
    var sharedCardWeb = document.getElementById('set-card-data-web').innerHTML;
    localStorage.setItem("card-web", sharedCardWeb);
    var sharedCardMob = document.getElementById('set-card-data-mob').innerHTML;
    localStorage.setItem("card-mob", sharedCardMob);
    var type =  localStorage.getItem("selected-tab");
    var name = document.getElementById('selected-name').innerHTML;
    var queryString = "?type=" + type + "&name=" + name; 
    window.location.href = "reservations.html" + queryString; 
}

// ----- Special Offers-----
function saveSelectedOfferCard(){
    if (sessionStorage.getItem('status') != null){
        var saveCardWeb = document.getElementById('selected-card-web').innerHTML;
        localStorage.setItem("selected-card-web", saveCardWeb);
        // var saveCardMob = document.getElementById('selected-card-mob').innerHTML;
        // localStorage.setItem("selected-card-mob", saveCardMob);
       var type =  document.getElementById('selected-card-type').innerHTML;
        localStorage.setItem("selected-card", type);
        var queryString = "?type=" + type; 
        window.location.href = "special-offer-details.html" + queryString; 
    }
    else{
       alert("من فضلك سجل دخول أولا")
    }
}

// ------ Special Labs -----
function saveSelectedlabCard(){
    if (sessionStorage.getItem('status') != null){
        var saveCardWeb = document.getElementById('selected-card-web').innerHTML;
        localStorage.setItem("selected-card-web", saveCardWeb);
        // var saveCardMob = document.getElementById('selected-card-mob').innerHTML;
        // localStorage.setItem("selected-card-mob", saveCardMob);
       var type =  document.getElementById('selected-card-type').innerHTML;
        localStorage.setItem("selected-card", type);
        var queryString = "?type=" + type; 
        window.location.href = "special-offer-details.html" + queryString; 
    }
    else{
       alert("من فضلك سجل دخول أولا")
    }
}

