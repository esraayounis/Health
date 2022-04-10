window.onload = function () {
    
    var service = localStorage.getItem("selected-service");
    document.getElementById('selected-service').innerHTML = service;

    var name = localStorage.getItem("selected-name");
    document.getElementById('selected-name').innerHTML = name;


    var serviceOrder = localStorage.getItem("service-num");
    if(serviceOrder == "3" || serviceOrder == "4"){
      var totalPrice =  document.querySelector('.details-price').innerText;
      localStorage.setItem("total-price", totalPrice);
    }

    else{
      var totalPrice = localStorage.getItem("total-price");
      document.querySelector('.details-price').innerText = totalPrice;
    }

    var media_query = 'screen and (max-width:600px)';
    var matched = window.matchMedia(media_query).matches;
    if(matched){
        var mobCardImg =  localStorage.getItem("selected-mob-img");
        document.getElementById('mob-detail-img').innerHTML = mobCardImg;

        var mobTitle =  localStorage.getItem("selected-mob-title");
        document.getElementById('mob-detail-title').innerHTML = mobTitle;

        var mobCardDetails =  localStorage.getItem("selected-mob-Details");
        document.getElementById('mob-card-details').innerHTML = mobCardDetails;
    }

    else{
        var mainCardImg =  localStorage.getItem("selected-main-img");
        document.getElementById('main-detail-img').innerHTML = mainCardImg;

        var mainCardDetails =  localStorage.getItem("selected-main-Details");
        document.getElementById('main-card-details').innerHTML = mainCardDetails;
    }

    
    // Active Details tabs when click on it in details page
    var service = localStorage.getItem("selected-service");

    // Government
    if ( service =="إصدار إقامة") {
      document.getElementById("nav-iqama-issurance-tab").classList.add("active");
      document.getElementById('nav-iqama-issurance').classList.add('active');
      document.getElementById('nav-iqama-issurance').classList.add('show');
    }
    
    else if ( service =="تجديد إقامة") {
      document.getElementById("nav-renewal-iqama-tab").classList.add("active");
      document.getElementById('nav-renewal-iqama').classList.add('active');
      document.getElementById('nav-renewal-iqama').classList.add('show');
    }
    
    else if ( service =="شهادة صحية") {
      document.getElementById("nav-health-certificate-tab").classList.add("active");
      document.getElementById('nav-health-certificate').classList.add('active');
      document.getElementById('nav-health-certificate').classList.add('show');
    }

    else if ( service =="رخصة مرور") {
      document.getElementById("nav-traffic-license-tab").classList.add("active");
      document.getElementById('nav-traffic-license').classList.add('active');
      document.getElementById('nav-traffic-license').classList.add('show');
    }

    
    // Consult
    else if ( service =="زيارة عيادة" || service =="زيارة طبيب") {
        document.getElementById("nav-clinic-tab").classList.add("active");
        document.getElementById('nav-clinic').classList.add('active');
        document.getElementById('nav-clinic').classList.add('show');  
    }
    else if ( service =="زيارة منزلية") {
        document.getElementById("nav-home-tab").classList.add("active");
        document.getElementById('nav-home').classList.add('active');
        document.getElementById('nav-home').classList.add('show');
    }
    
    else if ( service =="استشارة فيديو") {
        document.getElementById("nav-phone-tab").classList.add("active");
        document.getElementById('nav-phone').classList.add('active');
        document.getElementById('nav-phone').classList.add('show');
    }
      
    localStorage.setItem("selected-service", service);
    console.log(service)

}