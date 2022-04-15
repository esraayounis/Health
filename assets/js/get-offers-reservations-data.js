// Get Shared Data
window.onload = function () {
    
    var name = localStorage.getItem("selected-name");
    document.getElementById('selected-name').innerHTML = name;
    
   var offercard1 =  localStorage.getItem("offer-details-web");
   document.getElementById('offer-details-web').innerHTML = offercard1;
   var doctorcard1 =  localStorage.getItem("doctor-details-web"); 
   document.getElementById('doctor-details-web').innerHTML = doctorcard1;
   var doctorcard2 =  localStorage.getItem("doctor-details-mob");
   document.getElementById('doctor-details-mob').innerHTML = doctorcard2;
   setTimeout(() => {
    document.querySelector('#doctor-details-web #choose-doctor').style.display ="none";
    document.querySelector('#doctor-details-mob #choose-doctor').style.display ="none";
   }, 50);
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

    var patientName = localStorage.getItem("patientName",patientName)
    var patientEmail = localStorage.getItem("patientEmail",patientEmail)
    var patientPhone = localStorage.getItem("patientPhone",patientPhone)
    var reservation = localStorage.getItem("reservation",reservation)
    var date = localStorage.getItem("date",date)

    document.getElementById('pName').innerHTML = patientName;
    document.getElementById('pEmail').innerHTML = patientEmail;
    document.getElementById('pPhone').innerHTML = patientPhone;
    document.getElementById('reservationFor').innerHTML = reservation;
    document.getElementById('date').innerHTML = date;

    var totalPrice = localStorage.getItem("total-price");
    document.getElementById('totalPrice').innerHTML = totalPrice;
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
        var promoCode = document.getElementById('discount-code').value;
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
        }


    
       
        var image = document.querySelector('.offers-img').innerHTML;

        var title = document.getElementById('title').innerHTML;

        var priceDetails = document.getElementById('main-details').innerHTML;

        var reservationDate = document.getElementById('date').innerHTML;

        var reservationDiscount = document.getElementById('discount-value').innerHTML;

        if(reservationDiscount != ""){
            var reservationTotalPrice = document.getElementById('total').innerHTML;
        }
        else{
            var reservationTotalPrice = document.getElementById('totalPrice').innerHTML;
            reservationDiscount = "لا يوجد"
        }

        var paymentMethod =  localStorage.getItem("payment-method");
         var reservationList =  document.querySelector('.reservationList');
         const elemObj = `<div class="card-box p-2 py-4 card-detail">
            <div class="row">
             <div class="col-lg-3 p-lg-0">
                 <div class="avatar offer text-center">${image}</div>
             </div>
             <div class="col-lg-6 p-lg-0 detail">
                <div class="d-flex align-items-center">
                 <p><span class="reserve-title">التفاصيل:</span></p>
                 <p >${title}</p>
                </div>
                <div class="d-flex align-items-center">
                 <p><span class="reserve-title">تفاصيل السعر:</span></p>
                 <p >${priceDetails}</p>
                </div>
                <div class="d-flex align-items-center">
                    <p><span class="reserve-title">التاريخ:</span></p>
                    <p >${reservationDate}</p>
                </div>

                <div class="d-flex align-items-center">
                  <p><span class="reserve-title">الخصم:</span></p>
                  <p>${reservationDiscount}</p>
                </div>

                <div class="d-flex align-items-center">
                    <p><span class="reserve-title">الأجمالي:</span></p>
                    <p >${reservationTotalPrice}</p>
                </div>
             </div>
             <div class="col-lg-3">
             <div class="txt-payment paid">
             </div>
             
              <span class="txt-payment not-paid"></span>
             </div>
            </div>
         </div>`
         reservationList.insertAdjacentHTML('beforeend',elemObj);
         console.log(reservationList)
    
        if(paymentMethod == "الدفع عند الاستلام"){
            var divUnPaid =  document.querySelector('.paid');
            var unpaid =  `${paymentMethod}`
            divUnPaid.insertAdjacentHTML('beforeend',unpaid);
        }

        else{
    
            var divPaid =  document.querySelector('.paid');
            var paid =  `<label class="">
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
                ${paymentMethod}
                </label>`
            divPaid.insertAdjacentHTML('beforeend',paid);
             
        }
    
        localStorage.setItem('reservationPage',reservationList.innerHTML);

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
                document.getElementById('select-payment-method').style.display ="none";}
            }
            document.getElementById('visa-data').style.display ="none";
        }

        window.location.href ="success.html";
    }