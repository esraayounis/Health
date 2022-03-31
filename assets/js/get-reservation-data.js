// Get Shared Data
window.onload = function () {
    document.getElementById('error-discount-text').style.display ="none";
    document.getElementById('succuss-discount-text').style.display ="none"; 
    document.getElementById('delete-code-btn').style.display ="none"; 
    
    var patientName = localStorage.getItem("patientName",patientName)
    var patientEmail = localStorage.getItem("patientEmail",patientEmail)
    var patientPhone = localStorage.getItem("patientPhone",patientPhone)
    var reservation = localStorage.getItem("reservation",reservation)
    var date = localStorage.getItem("date",date)
    var type =  localStorage.getItem("selected-service");
    var name = localStorage.getItem("selected-name");
    
    document.getElementById('selected-service').innerHTML = type;
    document.getElementById('type').innerHTML = type;
    document.getElementById('name').innerHTML = name;
    document.getElementById('pName').innerHTML = patientName;
    document.getElementById('pEmail').innerHTML = patientEmail;
    document.getElementById('pPhone').innerHTML = patientPhone;
    document.getElementById('reservationFor').innerHTML = reservation;
    document.getElementById('date').innerHTML = date;

    var totalPrice = localStorage.getItem("total-price");
    document.getElementById('totalPrice').innerHTML = totalPrice;
    
    var card1 =  localStorage.getItem("card-web");
    var card2 =  localStorage.getItem("card-mob");
    document.getElementById('card-data-web').innerHTML = card1;
    document.getElementById('card-data-mob').innerHTML = card2;
}

//  Payment Method
$(document).ready(function() {
    debugger
    $('input[type="radio"]').click(function() {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });
});