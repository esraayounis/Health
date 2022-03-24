// -----  Share slected card to details page -----

$('.details-btn').click(function(){
       debugger
    var $target = $(this).parents('.card-detail');
    var selectedCard = $target[0].innerHTML
    localStorage.setItem("detials", selectedCard)
    document.getElementById('documentCard').innerHTML=selectedCard;

    var type = localStorage.getItem("selected-service");
    var serviceOrder = localStorage.getItem("service-num");

    var selectedName = document.querySelector('#documentCard #selected-name').innerText;
    localStorage.setItem("selected-name", selectedName);

    var media_query = 'screen and (max-width:600px)';
    var matched = window.matchMedia(media_query).matches;
    if(matched){
        var mobCardImg =  document.querySelector('#documentCard #mob-img').innerHTML;
        localStorage.setItem("selected-mob-img", mobCardImg);
        var mobTitle =  document.querySelector('#documentCard #mob-title').innerHTML;
        localStorage.setItem("selected-mob-title", mobTitle);
        var mobCardDetails =  document.querySelector('#documentCard #mob-card-details').innerHTML;
        localStorage.setItem("selected-mob-Details", mobCardDetails);
        var mobPrice =  document.querySelector('#documentCard #mob-price');
        if(mobPrice != null)
        {
            var mobPrice =  document.querySelector('#documentCard #mob-price').innerHTML;
            localStorage.setItem("mob-price", mobPrice);  
        }
        else{
            localStorage.setItem("main-price", null);  
        }
        console.log(mobPrice)
       
    }

    else{
        var mainCardImg =  document.querySelector('#documentCard #main-img').innerHTML;
        localStorage.setItem("selected-main-img", mainCardImg);
        var mainCardDetails =  document.querySelector('#documentCard #main-card-details').innerHTML;
        localStorage.setItem("selected-main-Details", mainCardDetails);
        var mainPrice =  document.querySelector('#documentCard #price');
        if(mainPrice != null)
        {
            var mainPrice =  document.querySelector('#documentCard #price').innerHTML;
            localStorage.setItem("main-price", mainPrice);  
        }
        else{
            localStorage.setItem("main-price", null);  
        }
        console.log(mainPrice)
    }

    if(serviceOrder == "1" )
    {
        window.location.href = "";
    }
    else if(serviceOrder == "2")
    {
        window.location.href = "government-details.html";
    }
    else if(serviceOrder == "3")
    {
        window.location.href = "consult-details.html";
    }
    else if(serviceOrder == "4")
    {
        if(type == " زيارة طبيب"){
            window.location.href = "consult-details.html";
        }
        else if(type == " زيارة تمريض"){
            window.location.href = "nurse-details.html";
        }
        else if(type == " زيارة جليس"){
            window.location.href = "sitter-details.html";
        }
        else  if(type == " خدمات منزلية"){
            window.location.href = "home-details.html";
        }
        
    }
    else if(serviceOrder == "5" ||  serviceOrder == "covid")
    {
        window.location.href = "medical-exams-details.html";
    }
    else
    {
        window.location.href = "special-offer-details.html";
    }
});

// ----- Share card details to reservation page-----
function shareCardData()
{
    debugger

    // save patient reservation data
    let patientName,patientEmail,patientPhone,reservation;
    patientName = document.getElementById("patientName").value;
    patientEmail = document.getElementById("patientEmail").value;
    patientPhone = document.getElementById("phone1").value;
    reservation = document.querySelector(".patient-reserve .current").innerText;

    let user_records=new Array();
    user_records.push({
        "patientName":patientName,
        "patientEmail":patientEmail,
        "patientPhone":patientPhone,
        "reservation":reservation,
    })

    localStorage.setItem("patientName",patientName)
    localStorage.setItem("patientEmail",patientEmail)
    localStorage.setItem("patientPhone",patientPhone)
    localStorage.setItem("reservation",reservation)
debugger
    //addReservations();
    var sharedCardWeb = document.getElementById('set-card-data-web').innerHTML;
    localStorage.setItem("card-web", sharedCardWeb);
    var sharedCardMob = document.getElementById('set-card-data-mob').innerHTML;
    localStorage.setItem("card-mob", sharedCardMob);

    var type =  localStorage.getItem("selected-service");
    var name = localStorage.getItem("selected-name");
    var queryString = "?type=" + type + "&name=" + name; 
    window.location.href = "reservations.html" + queryString; 
}


//change selected service in details page

$('.details-tab').click(function(){
    debugger
    var selectedService = document.querySelector('.details-tab.active .selected-tab').innerText;
    localStorage.setItem("selected-service", selectedService);
    setTimeout(getServiceTabPrice, 4000);   
});

function getServiceTabPrice() {
    debugger
    var price =  document.querySelector('.details-child.show .details-price').innerText;
    var media_query = 'screen and (max-width:600px)';
    var matched = window.matchMedia(media_query).matches;
    if(matched){
        localStorage.setItem("mob-price", price);
    }
    else{
        localStorage.setItem("main-price", price);
    }
  }
  


function bestOffers($this){
    debugger
    var selectedCard = $this.innerHTML
    localStorage.setItem("detials", selectedCard)
    document.getElementById('documentOffer').innerHTML = selectedCard;

    var selectedName = document.querySelector('#documentOffer .offer-title').innerText;
    localStorage.setItem("selected-name", selectedName);

    var status = localStorage.getItem('status');
    console.log(status);
    if (status == "" || status == null ){
        alert("من فضلك سجل دخول أولا")
    }
    else{
        
        var mainOrederCardImg =  document.querySelector('#documentOffer .offer-details-img').innerHTML;
        localStorage.setItem("selected-main-order-img", mainOrederCardImg);


        var title =  document.querySelector('#documentOffer .offer-title').innerHTML;
        localStorage.setItem("title", title);

        var mainOrderPrice =  document.querySelector('#documentOffer #offer-price').innerHTML;
        localStorage.setItem("selected-main-order-price", mainOrderPrice);
        var orderDiscount =  document.querySelector('#documentOffer .home-offer').innerHTML;
        localStorage.setItem("selected-order-discount", orderDiscount);
        window.location.href = "special-offer-details.html";
    }
}

// ----- Special Offers-----

function mostOfferWatching($this){

    var selectedCard = $this.innerHTML
    localStorage.setItem("detials", selectedCard)
    document.getElementById('documentOfferCard').innerHTML = selectedCard;

    var selectedName = document.querySelector('#documentOfferCard #watch-selected-card-type').innerText;
    localStorage.setItem("selected-name", selectedName);

    var status = localStorage.getItem('status');
    console.log(status);
    if (status == "" || status == null ){
        alert("من فضلك سجل دخول أولا")
    }
    else{
        
        var mainOrederCardImg =  document.querySelector('#documentOfferCard .watch-img').innerHTML;
        localStorage.setItem("selected-main-order-img", mainOrederCardImg);
        var desc =  document.querySelector('#documentOfferCard .watch-desc').innerHTML;
        localStorage.setItem("desc", desc);

        var title =  document.querySelector('#documentOfferCard .watch-title').innerHTML;
        localStorage.setItem("title", title);

        var mobOrderCardDetails =  document.querySelector('#documentOfferCard .watch-details').innerHTML;
        localStorage.setItem("selected-main-order-Details", mobOrderCardDetails);
        var mainOrderPrice =  document.querySelector('#documentOfferCard #watch-price').innerHTML;
        localStorage.setItem("selected-main-order-price", mainOrderPrice);
        var orderDiscount =  document.querySelector('#documentOfferCard .watch-discount').innerHTML;
        localStorage.setItem("selected-order-discount", orderDiscount);
        window.location.href = "special-offer-details.html";
    }
 }
// Most Offer Ordering in Mobile

function mostOfferordering($this){

    var selectedCard = $this.innerHTML
    localStorage.setItem("detials", selectedCard)
    document.getElementById('documentOfferCard').innerHTML = selectedCard;

    var selectedName = document.querySelector('#documentOfferCard #mob-order-selected-card-type').innerText;
    localStorage.setItem("selected-name", selectedName);

    var status = localStorage.getItem('status');
    console.log(status);
    if (status == "" || status == null ){
        alert("من فضلك سجل دخول أولا")
    }
    else{
        
        var mainOrederCardImg =  document.querySelector('#documentOfferCard .mob-order-img').innerHTML;
        localStorage.setItem("selected-main-order-img", mainOrederCardImg);
        var desc =  document.querySelector('#documentOfferCard .desc').innerHTML;
        localStorage.setItem("desc", desc);

        var title =  document.querySelector('#documentOfferCard .mob-order-title').innerHTML;
        localStorage.setItem("title", title);

        var mobOrderCardDetails =  document.querySelector('#documentOfferCard .mob-order-details').innerHTML;
        localStorage.setItem("selected-main-order-Details", mobOrderCardDetails);
        var mainOrderPrice =  document.querySelector('#documentOfferCard #mob-order-price').innerHTML;
        localStorage.setItem("selected-main-order-price", mainOrderPrice);
        var orderDiscount =  document.querySelector('#documentOfferCard .mob-order-discount').innerHTML;
        localStorage.setItem("selected-order-discount", orderDiscount);
        window.location.href = "special-offer-details.html";
    }
}

// Most Offer Ordering in Web

$('.order-btn').click(function(){
    var $target = $(this).parents('.order');
    console.log($target)
    var selectedCard = $target[0].innerHTML
    localStorage.setItem("detials", selectedCard)
    document.getElementById('documentOfferCard').innerHTML = selectedCard;

    var selectedName = document.querySelector('#documentOfferCard #order-selected-card-type').innerText;
    localStorage.setItem("selected-name", selectedName);

    var status = localStorage.getItem('status');
    console.log(status);
    if (status == "" || status == null ){
        alert("من فضلك سجل دخول أولا")
    }
    else{
        
        var mainOrederCardImg =  document.querySelector('#documentOfferCard .order-img').innerHTML;
        localStorage.setItem("selected-main-order-img", mainOrederCardImg);
        var desc =  document.querySelector('#documentOfferCard .desc').innerHTML;
        localStorage.setItem("desc", desc);

        var title =  document.querySelector('#documentOfferCard .title').innerHTML;
        localStorage.setItem("title", title);

        var mobOrderCardDetails =  document.querySelector('#documentOfferCard .order-details').innerHTML;
        localStorage.setItem("selected-main-order-Details", mobOrderCardDetails);
        var mainOrderPrice =  document.querySelector('#documentOfferCard #order-price').innerHTML;
        localStorage.setItem("selected-main-order-price", mainOrderPrice);
        var orderDiscount =  document.querySelector('#documentOfferCard .discount-offer').innerHTML;
        localStorage.setItem("selected-order-discount", orderDiscount);
        window.location.href = "special-offer-details.html";
    }
});

// ----- Offers Details -----
function shareOfferDetails(){
    var shareOfferDetailsdWeb = document.getElementById('offer-details-web').innerHTML;
    localStorage.setItem("offer-details-web", shareOfferDetailsdWeb);
    var shareDoctorDetailsdWeb = document.getElementById('doctor-details-web').innerHTML;
    localStorage.setItem("doctor-details-web", shareDoctorDetailsdWeb);
    var shareDoctorDetailsdMob = document.getElementById('doctor-details-mob').innerHTML;
    localStorage.setItem("doctor-details-mob", shareDoctorDetailsdMob);
    window.location.href = "special-offer-reserve.html"; 
}

// ------ Special Labs -----
$('.save-lab-card').click(function(){
       debugger
    var $target = $(this).parents('.card-box');
    var selectedCard = $target[0].innerHTML
    localStorage.setItem("detials", selectedCard)
    document.getElementById('documentCard').innerHTML = selectedCard;
    var serviceName = document.getElementById("selected-service-name").innerText;
    localStorage.setItem("serviceName", serviceName);

    var selectedName = document.querySelector('#documentCard #selected-exam-type').innerText;
    localStorage.setItem("selected-name", selectedName);

    var status = localStorage.getItem('status');
    console.log(status);
    if (status == "" || status == null ){
        alert("من فضلك سجل دخول أولا")
    }
    else{
    
        var mainCardImg =  document.querySelector('#documentCard #lab-img').innerHTML;
        localStorage.setItem("selected-main-img", mainCardImg);
        var mainCardDetails =  document.querySelector('#documentCard .desc-laborat').innerHTML;
        localStorage.setItem("selected-main-Details", mainCardDetails);
        var mainLabDiscount =  document.querySelector('#documentCard .lab-discount').innerHTML;
        localStorage.setItem("selected-lab-Discount", mainLabDiscount);
        localStorage.setItem("best-labs","bestLabs");
        window.location.href = "medical-exams-details.html";

    }
});


// ----- Add to Faviorts -----

$('#save-btn').click(function(){ 
    
    document.getElementById("save").style.fill = "red";
    var faviorts =  document.getElementById("save-btn");
    var add = Number(faviorts.getAttribute('data-count') || 0);
    faviorts.setAttribute('data-count', add + 1);
    var faviortCount =  document.querySelector("[data-count]").childElementCount;
    localStorage.setItem("faviorts-count", faviortCount);
    var media_query = 'screen and (max-width:600px)';
    var matched = window.matchMedia(media_query).matches;
    if(matched){
       var cardImg =  document.getElementById("mob-detail-img").innerHTML;
        var cardDetails =  document.getElementById("mob-card-details").innerHTML;
        var price =  document.getElementById("total-price").innerHTML;
        localStorage.setItem("saveCardImg" , cardImg);
        localStorage.setItem("saveCardDetails" , cardDetails);
        localStorage.setItem("price" , price);
    }
    else{
        var cardImg =  document.getElementById("main-detail-img").innerHTML;
        var cardDetails =  document.getElementById("main-card-details").innerHTML;
        var price =  document.getElementById("total-price").innerHTML;
        localStorage.setItem("saveCardImg" , cardImg);
        localStorage.setItem("saveCardDetails" , cardDetails);
        localStorage.setItem("price" , price);
    }
}); 

// ----- Add to Reservations -----
// function addReservations()
// var notifications =  document.getElementById("cart");
// var buttons =  document.querySelectorAll('.details-btn');
// for(var btn of buttons){
//     debugger
//     btn.addEventListener('click',(e)=>{
//         debugger
//         var add = Number(notifications.getAttribute('data-count') || 0);
//         notifications.setAttribute('data-count', add + 1);
//         notifications.classList.add('zero');
//         var reservationCount =  document.querySelector("[data-count]").childElementCount;
//         localStorage.setItem("reservations-count", reservationCount)

//         // copy paste element
//         var parent = e.target.parentNode;
//         var clone = parent.cloneNode(true);
//         console.log(clone)
//         localStorage.setItem("cloneCardData" , clone);

//         if(clone){
//             notifications.onclick =()=>{
//                 window.location.href = "profile-info.html"
//             }
//         }
//     });
//  }






