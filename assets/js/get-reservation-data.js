// Get Shared Data
window.onload = function () {
    document.getElementById('error-discount-text').style.display ="none";
    document.getElementById('succuss-discount-text').style.display ="none";
    document.getElementById('delete-code-btn').style.display ="none";
    document.getElementById('div-discount').style.display ="none";
    document.getElementById('select-payment-method').style.display ="none";
    document.getElementById('visa-data').style.display ="none";

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


    function checkRadio()
    {
        debugger
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
        if (payment == false)
        {
            document.getElementById('select-payment-method').style.display ="block";
            return false;
        }
        else{
            document.getElementById('select-payment-method').style.display ="none";
        }

    
       
        var image = document.querySelector('.avatar').innerHTML;

        var title = document.querySelector('.title-card').innerHTML;

        var address = document.querySelector('.address').innerHTML;

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
                 <div class="avatar text-center">${image}</div>
             </div>
             <div class="col-lg-6 p-lg-0 detail">
                 <h6 class="title-card txt-md"> ${title}</h6>
              
                 <div class="d-flex align-items-center">
                  <p><span class="reserve-title" >العنوان:</span></p>
                  <p >${address}</p>
                 </div>
                
                <div class="align-items-center check-branch">
                    <p><span class="reserve-title">الفرع:</span></p>
                    <p >${branch}</p>
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
debugger
          
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
        

        var serviceNum =  localStorage.getItem("service-num");
        var serviceName = localStorage.getItem("selected-service");
        
        if (serviceNum == "3" || serviceName == " زيارة طبيب "){
          document.querySelector('.check-branch').style.display = "none";
          document.querySelector('.stars-special').style.display = "none";
          
        }
        else{
            document.querySelector('.check-branch').style.display = "flex";
            var branch = document.querySelector('.selected-address .current').innerHTML;
        }

         localStorage.setItem('reservationPage',reservationList.innerHTML);

        document.querySelector('.cc-number').oninput = () =>{
            var ccNumber = document.querySelector('.cc-number').value;
            document.querySelector('.cc-number').innerText = ccNumber;
        }
    
        var media_query = 'screen and (max-width:600px)';
        var matched = window.matchMedia(media_query).matches;
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
            document.getElementById('select-payment-method').style.display ="none";
            document.getElementById('visa-data').style.display ="none";
        }


        window.location.href ="success.html";
    }