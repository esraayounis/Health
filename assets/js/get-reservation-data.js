// Get Shared Data
window.onload = function () {
    document.getElementById('error-discount-text').style.display ="none";
    document.getElementById('succuss-discount-text').style.display ="none";
    document.getElementById('delete-code-btn').style.display ="none";
    document.getElementById('div-discount').style.display ="none";

    setTimeout(() => {
    document.querySelector('.value-card').style.display ="none";

    var selectedService =  localStorage.getItem("service-num");
    if(selectedService == "2" || selectedService == "5"){
        var getSelectedBranch = localStorage.getItem("selected-branch");
        document.querySelector('.selected-address').style.display ="none";
        var selectedBranch= document.getElementById('address-branch');
        var branch = `<p>${getSelectedBranch}</p>`;
        selectedBranch.insertAdjacentHTML('beforeend',branch)
    }

    else if(selectedService == "4"){
        var getSelectedBranch = localStorage.getItem("selected-branch");
        document.querySelector('.selected-address').style.display ="none";
        var selectedBranch= document.getElementById('address-branch');
        var branch = `<p>${getSelectedBranch}</p>`;
        selectedBranch.insertAdjacentHTML('beforeend',branch)

        var getSelectedPeriod = localStorage.getItem("selected-period");
        document.querySelector('.selected-period').style.display ="none";
        var selectedPeriod = document.getElementById('period');
        var period = `<p>${getSelectedPeriod}</p>`;
        selectedPeriod.insertAdjacentHTML('beforeend',period)
    }

    else{
        //do nothing
    }
    }, 50);



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
    debugger
    var card1 =  localStorage.getItem("card-web");
    var card2 =  localStorage.getItem("card-mob");
    document.getElementById('card-data-web').innerHTML = card1;
    document.getElementById('card-data-mob').innerHTML = card2;
}

//  Payment Method
    $('input[type="radio"]').click(function() {
        debugger
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
        if(paymentMethod == "visa" || paymentMethod == "epay"){
            paymentMethod = "تم الدفع"
        }
        else if(paymentMethod == "cash"){
            paymentMethod = "الدفع عند الاستلام"
        }
        localStorage.setItem("payment-method", paymentMethod)
    });



    function onlyNumberKey(evt) {

        // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    }

    function applyDiscount(){  debugger
        var promoCode = document.getElementById('discount-code').value;
         var price = document.getElementById('totalPrice').innerText;
         var matches = price.match(/(\d+)/);

        if(promoCode != ""){
        //   if(promoCode == "code1"){ return 10;}
            var discount = 20;
          debugger
            var total = matches[0] - discount;
            document.getElementById('total').innerHTML = total;
            document.getElementById('succuss-discount-text').style.display ="block";
            document.getElementById('delete-code-btn').style.display ="block";
            document.getElementById('div-discount').style.display ="block";
            document.getElementById('discount-value').innerHTML = discount;
            document.getElementById('error-discount-text').style.display ="none";

        }
        else{
            document.getElementById('div-discount').style.display ="none";
            document.getElementById('succuss-discount-text').style.display ="none";
            document.getElementById('delete-code-btn').style.display ="none";
            document.getElementById('error-discount-text').style.display ="block";
        }
    }

    function deleteCode(){
        var deletePromo = document.getElementById('discount-code').value = "";
        document.getElementById('succuss-discount-text').style.display ="none";
        document.getElementById('error-discount-text').style.display ="none";
    }

    document.querySelector('.cc-number').oninput = () =>{
        var ccNumber = document.querySelector('.cc-number').value;
        document.querySelector('.cc-number').innerText = ccNumber;
    }

    // document.querySelector('.cc-number-mob').oninput = () =>{
    //     var ccNumber = document.querySelector('.cc-number-mob').value;
    //     document.querySelector('.cc-number-mob').innerText = ccNumber;
    // }

    document.querySelector('#exp-month').oninput = () =>{
        var expMonth = document.querySelector('#exp-month').value;
        document.querySelector('#exp-month').innerText = expMonth;
    }

    document.querySelector('#exp-year').oninput = () =>{
        var expYear = document.querySelector('#exp-year').value;
        document.querySelector('#exp-year').innerText = expYear;
    }

    document.querySelector('.cc-cvc').oninput = () =>{
        var cvv = document.querySelector('.cc-cvc').value;
        document.querySelector('.cc-cvc').innerText = cvv;
    }

    function checkRadio()
    {
        var payment = document.querySelector('.pay');
        var paymentType = '';
        for(i = 0; i < payment.length; i++)
            {
            console.log(payment[i].type + ":" + payment[i].value);
                if(payment[i].checked)
                {
                    console.log(payment[i].value)
                    paymentType = payment[i].value;
                }
        }
        return paymentType != '' ? true : false;
    }


    function buyNow(){
        debugger
        var payment = checkRadio();
        if (payment == false)
        {
            document.getElementById('payment-type').style.display ="block";
        }
        else{
            document.getElementById('payment-type').style.display ="none";
        }

        var reservationDate = document.getElementById('date').innerHTML;
        localStorage.setItem("reservation-date", reservationDate);

        var reservationDiscount = document.getElementById('discount-value').innerHTML;
        localStorage.setItem("reservation-discount", reservationDiscount);

        if(reservationDiscount != ""){
            var reservationTotalPrice = document.getElementById('total').innerHTML;
            localStorage.setItem("reservation-total-price", reservationTotalPrice);
        }
        else{
            var reservationTotalPrice = document.getElementById('totalPrice').innerHTML;
            localStorage.setItem("reservation-total-price", reservationTotalPrice);
        }

        var paymentMethod =  localStorage.getItem("payment-method")
       
        var media_query = 'screen and (max-width:600px)';
        var matched = window.matchMedia(media_query).matches;
        if(matched){
            var card =  localStorage.getItem("card-mob");
        }
        else{
            var card =  localStorage.getItem("card-web");
        }
        
        
         var reservationObjects = {
            card:card,
            date:reservationDate,
            price:reservationTotalPrice,
            discount:reservationDiscount,
            paymentmethod:paymentMethod
         }

         var reservationList =  [];
         reservationList.push(reservationObjects); 
         console.log(reservationList)
         localStorage.setItem('reservationPage', JSON.stringify(reservationList));
        window.location.href ="success.html";
    }