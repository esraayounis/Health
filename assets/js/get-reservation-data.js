// Get Shared Data
window.onload = function () {
    document.querySelector('.desktop-show #error-discount-text').style.display ="none";
    document.querySelector('.desktop-show #succuss-discount-text').style.display ="none";
    document.querySelector('.desktop-show #delete-code-btn').style.display ="none";
    document.querySelector('.desktop-show #div-discount').style.display ="none";
    document.querySelector('.desktop-show #select-payment-method').style.display ="none";
    document.querySelector('.desktop-show #visa-data').style.display ="none";
 
    document.querySelector('.mobile-show #error-discount-text').style.display ="none";
    document.querySelector('.mobile-show #succuss-discount-text').style.display ="none";
    document.querySelector('.mobile-show #delete-code-btn').style.display ="none";
    document.querySelector('.mobile-show #div-discount').style.display ="none";
    document.querySelector('.mobile-show #select-payment-method-mob').style.display ="none";
    document.querySelector('.mobile-show #visa-data').style.display ="none";

    setTimeout(() => {
        
    document.querySelector('.value-card').style.display ="none";
    document.querySelector('.save-icons').style.display ="none";
    var selectedService =  localStorage.getItem("service-num");
    if(selectedService == "2" || selectedService == "5"){
        var getSelectedBranch = localStorage.getItem("selected-branch");
        document.querySelector('.selected-address').style.display ="none";
        var selectedBranch= document.getElementById('address-branch');
        var branch = `<p>${getSelectedBranch}</p>`;
        selectedBranch.insertAdjacentHTML('beforeend',branch)
        selectedPeriod = null;
        localStorage.setItem("branch", getSelectedBranch);
        localStorage.setItem("period", selectedPeriod);
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
        localStorage.setItem("branch", getSelectedBranch);
        localStorage.setItem("period", getSelectedPeriod);
    }

    else{
        selectedBranch = "";
        selectedPeriod = "";
        localStorage.setItem("branch", selectedBranch);
        localStorage.setItem("period", selectedPeriod);
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
    
    var card1 =  localStorage.getItem("card-web");
    var card2 =  localStorage.getItem("card-mob");
    document.getElementById('card-data-web').innerHTML = card1;
    document.getElementById('card-data-mob').innerHTML = card2;
}

//  Payment Method
    $('input[type="radio"]').click(function() {

        document.getElementById('select-payment-method').style.display ="none";
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
        var paymentMethod;
        if(inputValue == "visa")
        {
            localStorage.setItem("visa-payment", inputValue);
        }
        else{
            localStorage.setItem("visa-payment", "");
        }
        if(inputValue == "visa" || inputValue == "epay"){
            paymentMethod = "تم الدفع"
        }
        else if(inputValue == "cash"){
            paymentMethod = "الدفع عند الاستلام"
        }
        localStorage.setItem("payment-method", paymentMethod);


    });



    function onlyNumberKey(evt) {

        // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    }

    function applyDiscount(){  
        var promoCode = document.querySelector('.discount-code').value;
         var price = document.getElementById('totalPrice').innerText;
         var matches = price.match(/(\d+)/);

        if(promoCode != ""){
        //   if(promoCode == "code1"){ return 10;}
            var discount = 20;
          
            var total = matches[0] - discount;
            document.getElementById('total').innerHTML = total;
            document.getElementById('succuss-discount-text').style.display ="block";
            document.getElementById('delete-code-btn').style.display ="block";
            document.getElementById('div-discount').style.display ="block";
            document.getElementById('discount-value').innerHTML = discount;
            document.getElementById('error-discount-text').style.display ="none";
            document.querySelector('.price').style.display ="flex";

        }
        else{
            document.getElementById('div-discount').style.display ="none";
            document.getElementById('succuss-discount-text').style.display ="none";
            document.getElementById('delete-code-btn').style.display ="none";
            document.querySelector('.price').style.display ="none";
            document.getElementById('error-discount-text').style.display ="block";
        }
    }

    function deleteCode(){
        var deletePromo = document.querySelector('.discount-code').value = "";
        document.getElementById('succuss-discount-text').style.display ="none";
        document.querySelector('.price').style.display ="none";
        document.getElementById('error-discount-text').style.display ="none";
    }


    function checkRadio()
    {
        
        var payment = document.querySelectorAll('.payment');
        var paymentType = '';
        for(var i in  payment){
            if(payment[i].checked == true)
            {
              paymentType = payment[i].value;
            }
           
        } 
        return paymentType != '' ? true : false;
    }


    function buyNow(){
        var payment = checkRadio();
        var media_query = 'screen and (max-width:600px)';
        var matched = window.matchMedia(media_query).matches;
        if(matched){
            if (payment == false)
            {
                document.getElementById('select-payment-method-mob').style.display ="block";
                return false;
            }
            else{
                document.getElementById('select-payment-method-mob').style.display ="none";
            }
            var image = document.getElementById('mob-detail-img').innerHTML;
            var title = document.querySelector('#mob-detail-title .title-card').innerHTML;
        }

        else{
            if (payment == false)
            {
                document.getElementById('select-payment-method').style.display ="block";
                return false;
            }
            else{
                document.getElementById('select-payment-method').style.display ="none";
            }
            var image = document.getElementById('main-detail-img').innerHTML;
            var title = document.querySelector('#main-card-details .title-card').innerHTML;
        }


        var serviceNum =  localStorage.getItem("service-num");
        if(serviceNum == "4"){
            var address = "";
        }
        else{
            var address = document.querySelector('.address').innerHTML;
        }

        var reservationDate = document.getElementById('date').innerHTML;
        var reservationDiscount = document.getElementById('discount-value').innerHTML;
        if(reservationDiscount != ""){
            var reservationTotalPrice = document.getElementById('total').innerHTML;
        }
        else{
            var reservationTotalPrice = document.getElementById('totalPrice').innerHTML;
            reservationDiscount = "لا يوجد"
        }

        var selectedBranch = localStorage.getItem("branch");
        var selectedPeriod = localStorage.getItem("period");
        var paymentMethod =  localStorage.getItem("payment-method");
     
        var retrievedReservations = JSON.parse(localStorage.getItem('reservationList')) || [];
        console.log(retrievedReservations)
        if(retrievedReservations == ""){
            reservationList = [];
            let reservations = {
                cardImg: image,
                title: title,
                address: address,
                date: reservationDate,
                discount: reservationDiscount,
                price: reservationTotalPrice,
                paymentMethod:paymentMethod,
                branch: selectedBranch,
                period: selectedPeriod
            }
            reservationList.push(reservations);
            localStorage.setItem('reservationList', JSON.stringify(reservationList) );
        }
    
        else{
        let reservations = {
            cardImg: image,
            title: title,
            address: address,
            date: reservationDate,
            discount: reservationDiscount,
            price: reservationTotalPrice,
            paymentMethod:paymentMethod,
            branch: selectedBranch,
            period: selectedPeriod
        }
        
        retrievedReservations.push(reservations);
        localStorage.setItem('reservationList', JSON.stringify(retrievedReservations));
       }

        document.querySelector('.cc-number').oninput = () =>{
            var ccNumber = document.querySelector('.cc-number').value;
            document.querySelector('.cc-number').innerText = ccNumber;
        }
    
        if(matched){
            document.querySelector('.cc-number-mob').oninput = () =>{
                var ccNumber = document.querySelector('.cc-number-mob').value;
                document.querySelector('.cc-number-mob').innerText = ccNumber;
            }
        }
        else{
            document.querySelector('#exp-month').oninput = () =>{
                var expMonth = document.querySelector('#exp-month').value;
                document.querySelector('#exp-month').innerText = expMonth;
            }
        }
    
        document.
        querySelector('#exp-year').oninput = () =>{
            var expYear = document.querySelector('#exp-year').value;
            document.querySelector('#exp-year').innerText = expYear;
        }
    
        document.querySelector('.cc-cvc').oninput = () =>{
            var cvv = document.querySelector('.cc-cvc').value;
            document.querySelector('.cc-cvc').innerText = cvv;
        }
      
        var visa = localStorage.getItem("visa-payment")
        if(visa == "visa" && document.querySelector('.cc-cvc').value == ''){

            document.getElementById('visa-data').style.display ="block";
            return false;
        }

        else{
            if(matched){
            document.getElementById('select-payment-method-mob').style.display ="none";}
            else{
                document.getElementById('select-payment-method').style.display ="none";
            }
            document.getElementById('visa-data').style.display ="none";
        }


        window.location.href ="success.html";
    }