// ----- Special Offers-----
function saveSelectedOfferCard(){
    debugger
    // console.log(this)
    var status = localStorage.getItem('status');
    console.log(status);
    if (status == "" || status == null ){
        alert("من فضلك سجل دخول أولا")
    }
    else{
        var saveCardWeb = document.getElementById('selected-card-web').innerHTML;
        localStorage.setItem("selected-card-web", saveCardWeb);
        var saveCardMob = document.getElementById('selected-card-mob').innerHTML;
        localStorage.setItem("selected-card-mob", saveCardMob);
        var type =  document.getElementById('selected-card-type').innerHTML;
        localStorage.setItem("selected-card", type);
        var queryString = "?type=" + type; 
        window.location.href = "special-offer-details.html" + queryString; 
    }
}

// ----- Offers Details -----
function shareOfferDetails(){
    debugger
    var shareOfferDetailsdWeb = document.getElementById('offer-details-web').innerHTML;
    localStorage.setItem("offer-details-web", shareOfferDetailsdWeb);
    var shareDoctorDetailsdWeb = document.getElementById('doctor-details-web').innerHTML;
    localStorage.setItem("doctor-details-web", shareDoctorDetailsdWeb);
    // var shareOfferDetailsdMob = document.getElementById('offer-details-mob').innerHTML;
    // localStorage.setItem("offer-details-mob", shareOfferDetailsdMob);
    // var shareDoctorDetailsdMob = document.getElementById('doctor-details-mob').innerHTML;
    // localStorage.setItem("doctor-details-mob", shareDoctorDetailsdMob);
    var type = localStorage.getItem("selected-card");
    var queryString = "?type=" + type; 
    window.location.href = "special-offer-reserve.html" + queryString; 
}

// ------ Special Labs -----
function saveSelectedlabCard(){
    var status = localStorage.getItem('status');
    console.log(status);
    if (status == "" || status == null ){
        alert("من فضلك سجل دخول أولا")
    }
    else{
        var saveCardWeb = document.getElementById('selected-card-web').innerHTML;
        localStorage.setItem("selected-card-web", saveCardWeb);
        // var saveCardMob = document.getElementById('selected-card-mob').innerHTML;
        // localStorage.setItem("selected-card-mob", saveCardMob);
       var type =  document.getElementById('selected-card-type').innerHTML;
        localStorage.setItem("selected-card", type);
        var queryString = "?type=" + type; 
        window.location.href = "special-offer-details.html" + queryString; 
    }
}

   // Share Data
   $('.nav-link').click(function(){
    var newName =  $(".nav-link.active p").text();
    console.log(newName);
    localStorage.setItem("selected-tab", newName);
});

// ----- Card Details -----
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

