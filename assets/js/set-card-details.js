// -----  Share slected card to details page -----

$('.details-btn').click(function(){
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
        if(serviceOrder == "3" || serviceOrder == "4"){
           //do nothing
       }

       else{
            var mobPrice =  document.querySelector('#documentCard #mob-price').innerText;
            if(mobPrice != null || mobPrice != "")
            {
                localStorage.setItem("total-price", mobPrice);  
            }
            else{
                localStorage.setItem("total-price", "");  
            }
       }
    }

    else{
        var mainCardImg =  document.querySelector('#documentCard #main-img').innerHTML;
        localStorage.setItem("selected-main-img", mainCardImg);
        var mainCardDetails =  document.querySelector('#documentCard #main-card-details').innerHTML;
        localStorage.setItem("selected-main-Details", mainCardDetails);
        if(serviceOrder == "3" || serviceOrder == "4"){
          //do nothing
        }

        else{
            var mainPrice =  document.querySelector('#documentCard #price').innerText;;
            if(mainPrice != null || mainPrice != "") 
            {
                localStorage.setItem("total-price", mainPrice);  
            }
            else{
                localStorage.setItem("total-price", "");  
            }
        }
       
    }

    // var selectTime = localStorage.getItem("selected-time");
    // console.log(selectTime)
    // var selectDate = localStorage.getItem("selected-date");
    // var text = "???? ???????? ????????????";
    // localStorage.setItem("selected-date", selectDate + text + selectTime);

    if(serviceOrder == "1" )
    {
        window.location.href = "";
    }
    else if(serviceOrder == "2")
    {

       var branch =  document.querySelector(".selected-address .current").innerText;
       localStorage.setItem("selected-branch", branch);

        window.location.href = "government-details.html";
    }
    else if(serviceOrder == "3")
    {
        window.location.href = "consult-details.html";
    }
    else if(serviceOrder == "4")
    {
        if(type != "?????????? ????????")
        {
            
            var branch =  document.querySelector(".selected-address .current").innerText;
            localStorage.setItem("selected-branch", branch);
            var period =  document.querySelector(".selected-period .current").innerText;
            localStorage.setItem("selected-period", period);

        }

        if(type == "?????????? ????????"){
            window.location.href = "consult-details.html";
        }
        else if(type == "?????????? ??????????"){
            window.location.href = "nurse-details.html";
        }
        else if(type == "?????????? ????????"){
            window.location.href = "sitter-details.html";
        }
        else  if(type == "?????????? ????????????"){
            window.location.href = "home-details.html";
        }
        
    }
    else if(serviceOrder == "5" ||  serviceOrder == "covid")
    {
        var branch =  document.querySelector(".selected-address .current").innerText;
        localStorage.setItem("selected-branch", branch);
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
    
    // save patient reservation data
    let patientName,patientEmail,patientPhone,reservation,date;
    patientName = document.getElementById("patientName").value;
    patientEmail = document.getElementById("patientEmail").value;
    patientPhone = document.getElementById("phone").value;
    reservation = document.querySelector(".patient-reserve .current").innerText;
    date = document.getElementById("reservation-date").innerHTML;

    let user_records=new Array();
    user_records.push({
        "patientName":patientName,
        "patientEmail":patientEmail,
        "patientPhone":patientPhone,
        "reservation":reservation,
        "date":date
    })

    localStorage.setItem("patientName",patientName)
    localStorage.setItem("patientEmail",patientEmail)
    localStorage.setItem("patientPhone",patientPhone)
    localStorage.setItem("reservation",reservation)
    localStorage.setItem("date",date)

    //addReservations();
    
    var sharedCardWeb = document.getElementById('set-card-data-web').innerHTML;
    localStorage.setItem("card-web", sharedCardWeb);
    var sharedCardMob = document.getElementById('set-card-data-mob').innerHTML;
    localStorage.setItem("card-mob", sharedCardMob);
    localStorage.getItem("total-price");

    window.location.href = "reservations.html"; 
}


// ----- Change selected service in details page------

$('.details-tab').click(function(){
    
    var selectedService = document.querySelector('.details-tab.active .selected-tab').innerText;
    localStorage.setItem("selected-service", selectedService);
    setTimeout(getServiceTabPrice, 4000);   
});

function getServiceTabPrice() {
    
    var price =  document.querySelector('.details-child.show .details-price').innerText;
    localStorage.setItem("total-price", price);
}
  
function bestOffers($this){
    
    var selectedCard = $this.innerHTML
    localStorage.setItem("detials", selectedCard)
    document.getElementById('documentOffer').innerHTML = selectedCard;

    var selectedName = document.querySelector('#documentOffer .offer-title').innerText;
    localStorage.setItem("selected-name", selectedName);

    var status = localStorage.getItem('status');
    console.log(status);
    if (status == "" || status == null ){
        alert("???? ???????? ?????? ???????? ????????")
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
        alert("???? ???????? ?????? ???????? ????????")
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
        alert("???? ???????? ?????? ???????? ????????")
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

// ------Most Offer Ordering in Web----

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
        alert("???? ???????? ?????? ???????? ????????")
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
    
     // save patient reservation data
     let patientName,patientEmail,patientPhone,reservation,date,selectedDoctor;
     patientName = document.getElementById("patientName").value;
     patientEmail = document.getElementById("patientEmail").value;
     patientPhone = document.getElementById("phone").value;
     reservation = document.querySelector(".patient-reserve .current").innerText;
     date = document.getElementById("reservation-date").innerHTML;
     selectedDoctor = document.querySelector(".selected-doctor .current").innerText;
 
     let user_records=new Array();
     user_records.push({
         "patientName":patientName,
         "patientEmail":patientEmail,
         "patientPhone":patientPhone,
         "reservation":reservation,
         "date":date
     })
 
     localStorage.setItem("patientName",patientName)
     localStorage.setItem("patientEmail",patientEmail)
     localStorage.setItem("patientPhone",patientPhone)
     localStorage.setItem("reservation",reservation)
     localStorage.setItem("date",date)
     localStorage.setItem("offer-doctor",selectedDoctor)

    var shareOfferDetailsdWeb = document.getElementById('offer-details-web').innerHTML;
    localStorage.setItem("offer-details-web", shareOfferDetailsdWeb);
    var shareDoctorDetailsdWeb = document.getElementById('doctor-details-web').innerHTML;
    localStorage.setItem("doctor-details-web", shareDoctorDetailsdWeb);
    var shareDoctorDetailsdMob = document.getElementById('doctor-details-mob').innerHTML;
    localStorage.setItem("doctor-details-mob", shareDoctorDetailsdMob);
    localStorage.getItem("total-price");
    window.location.href = "special-offer-reserve.html"; 
}

// ------ Special Labs -----

$('.save-lab-card').click(function(){
       
    var $target = $(this).parents('.card-box');
    var selectedCard = $target[0].innerHTML
    localStorage.setItem("detials", selectedCard)
    document.getElementById('documentCard').innerHTML = selectedCard;
    var serviceName = document.getElementById("selected-service-name").innerText;
    localStorage.setItem("selected-service", serviceName);

    var selectedName = document.querySelector('#documentCard #selected-exam-type').innerText;
    localStorage.setItem("selected-name", selectedName);

    var status = localStorage.getItem('status');
    console.log(status);
    if (status == "" || status == null ){
        alert("???? ???????? ?????? ???????? ????????")
    }
    else{
    
        var mainCardImg =  document.querySelector('#documentCard #lab-img').innerHTML;
        localStorage.setItem("selected-main-img", mainCardImg);
        var mainCardDetails =  document.querySelector('#documentCard .desc-laborat').innerHTML;
        localStorage.setItem("selected-main-Details", mainCardDetails);
        var mainLabDiscount =  document.querySelector('#documentCard .lab-discount').innerHTML;
        localStorage.setItem("selected-lab-Discount", mainLabDiscount);
        localStorage.setItem("best-labs","bestLabs");
        window.location.href = "medical-exams-details.html?type=bestLabs";

    }
});


// ----- Add to Faviorts -----

$('#save-btn').click(function(){ 
     $('#save').toggleClass("heart-active");
     var cardImg =  document.getElementById("main-detail-img").innerHTML;
     var cardDetails =  document.getElementById("main-card-details").innerHTML;
     var price =  document.querySelector('.details-price').innerText;
     const div = document.querySelector('#save');
     var checkActiveStatus =  div.classList.contains('heart-active');
     if(checkActiveStatus == true)
     {
        var faviorts =  document.getElementById("save-btn");
        var add = Number(faviorts.getAttribute('data-count') || 0);
        faviorts.setAttribute('data-count', add + 1);
        var faviortCount =  document.querySelector("[data-count]").childElementCount;
        localStorage.setItem("faviorts-count", faviortCount);
        var retrievedFaviorts = localStorage.getItem('faviortsList');
        console.log(retrievedFaviorts)
        if(retrievedFaviorts == null){
            faviortsList = [];
            let faviort = {
                cardImg: cardImg,
                cardDetails: cardDetails,
                price: price
            }
            faviortsList.push(faviort);
            localStorage.setItem('faviortsList', JSON.stringify(faviortsList) );
        }

        else{
         var retrievedFaviorts = JSON.parse(localStorage.getItem('faviortsList'));
        let faviort = {
            cardImg: cardImg,
            cardDetails: cardDetails,
            price: price
        }
        
        retrievedFaviorts.push(faviort);
        localStorage.setItem('faviortsList', JSON.stringify(retrievedFaviorts));
        }
     }
     else{
        var faviorts =  document.getElementById("save-btn");
        var add = Number(faviorts.getAttribute('data-count') || 0);
        faviorts.setAttribute('data-count', add - 1);
        var faviortCount =  document.querySelector("[data-count]").childElementCount;
        localStorage.setItem("faviorts-count", faviortCount);
        var retrievedFaviorts = localStorage.getItem('faviortsList');
        console.log(retrievedFaviorts)
        if(retrievedFaviorts == null){
            faviortsList = [];
            let faviort = {
                cardImg: cardImg,
                cardDetails: cardDetails,
                price: price
            }
            faviortsList.pop(faviort);
            localStorage.setItem('faviortsList', JSON.stringify(faviortsList) );
        }

        else{
            var retrievedFaviorts = JSON.parse(localStorage.getItem('faviortsList'));
        let faviort = {
            cardImg: cardImg,
            cardDetails: cardDetails,
            price: price
        }
        
        retrievedFaviorts.pop(faviort);
        localStorage.setItem('faviortsList', JSON.stringify(retrievedFaviorts));
        }
     }
     
   
});

$('#save-btn-mob').click(function(){ 
    $('#save-mob').toggleClass("heart-active");
    var cardImg =  document.getElementById("mob-detail-img").innerHTML;
    var title =  document.querySelector("#mob-detail-title .title-card").innerHTML;
    var cardDetails =  document.getElementById("mob-card-details").innerHTML;
    var price =  document.querySelector('.details-price').innerText;
    const div = document.querySelector('#save-mob');
    var checkActiveStatus =  div.classList.contains('heart-active');
    if(checkActiveStatus == true)
    {
       var faviorts =  document.getElementById("save-btn-mob");
       var add = Number(faviorts.getAttribute('data-count') || 0);
        faviorts.setAttribute('data-count', add + 1);
        var faviortCount =  document.querySelector("[data-count]").childElementCount;
        localStorage.setItem("faviorts-count", faviortCount);

        var retrievedFaviorts = JSON.parse(localStorage.getItem('faviortsListMob')) || [];
        console.log(retrievedFaviorts)
        if(retrievedFaviorts == ""){
            faviortsList = [];
            let faviort = {
                cardImg: cardImg,
                title: title,
                cardDetails: cardDetails,
                price: price
            }
            faviortsList.push(faviort);
            localStorage.setItem('faviortsListMob', JSON.stringify(faviortsList) );
        }

        else{
        let faviort = {
            cardImg: cardImg,
            title: title,
            cardDetails: cardDetails,
            price: price
        }
        
        retrievedFaviorts.push(faviort);
        localStorage.setItem('faviortsListMob', JSON.stringify(retrievedFaviorts));
        }
    }
    else{
        var faviorts =  document.getElementById("save-btn-mob");
       var add = Number(faviorts.getAttribute('data-count') || 0);
        faviorts.setAttribute('data-count', add - 1);
        var faviortCount =  document.querySelector("[data-count]").childElementCount;
        localStorage.setItem("faviorts-count", faviortCount);

        var retrievedFaviorts = JSON.parse(localStorage.getItem('faviortsListMob')) || [];
        console.log(retrievedFaviorts)
        if(retrievedFaviorts == ""){
            faviortsList = [];
            let faviort = {
                cardImg: cardImg,
                title: title,
                cardDetails: cardDetails,
                price: price
            }
            faviortsList.pop(faviort);
            localStorage.setItem('faviortsListMob', JSON.stringify(faviortsList) );
        }

        else{
        let faviort = {
            cardImg: cardImg,
            title: title,
            cardDetails: cardDetails,
            price: price
        }
        
        retrievedFaviorts.pop(faviort);
        localStorage.setItem('faviortsListMob', JSON.stringify(retrievedFaviorts));
        }

    }
  
});

// ----- Add to Reservations -----
$('#cart').click(function(){ 
    window.location.href = "profile-info.html?type=reservations"
});


// ----- Get Date & Time -----

$('.select-Time').click(function(){
    
    var selectTime = this.innerText;
    console.log(selectTime)
    localStorage.setItem("selected-time", selectTime)

});

