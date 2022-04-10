window.onload = function () {
  
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    
    const page_type = urlParams.get('type')
    
    console.log(page_type);
    document.getElementById('no-exams').style.display = "none";
    document.getElementById('no-exams-mob').style.display = "none";

    var storedTests = localStorage.getItem("requiredTests");

  if(page_type == "bestLabs"){

  
    var service = localStorage.getItem("selected-service");
    document.getElementById('selected-service').innerHTML = service;
  
    var name =  localStorage.getItem("selected-name")
    document.getElementById('selected-name').innerHTML = name;
  
    var media_query = 'screen and (max-width:600px)';
    var matched = window.matchMedia(media_query).matches;
    // mob
    if(matched){
      document.getElementById('main-lab-discount').style.display = "none";
      document.getElementById('mob-lab-discount').style.display = "block";
      document.getElementById('mob-detail-title').innerHTML = name;

      var labDiscount = localStorage.getItem("selected-lab-Discount");
      document.getElementById('mob-lab-discount').innerHTML = labDiscount;

      var labCardImg =  localStorage.getItem("selected-main-img");
      document.getElementById('mob-detail-img').innerHTML = labCardImg;

      var labCardDetails =  localStorage.getItem("selected-main-Details");
      document.getElementById('mob-card-details').innerHTML = labCardDetails;

      if(storedTests!= "null")
      {
        document.getElementById('no-exams-mob').style.display = "none";
        document.getElementById('list-mob').innerHTML = storedTests;
      }

      else{
        document.getElementById('no-exams-mob').style.display = "block";
      }
    }
  
   // web
    else{  

      document.getElementById('main-lab-discount').style.display = "block";
      document.getElementById('mob-lab-discount').style.display = "none";
      document.getElementById('main-detail-title').innerHTML = name;
      
      var mainCardImg =  localStorage.getItem("selected-main-img");
      document.getElementById('main-detail-img').innerHTML = mainCardImg;
  
      var mainCardDetails =  localStorage.getItem("selected-main-Details");
      document.getElementById('main-card-details').innerHTML = mainCardDetails;

      var labDiscount = localStorage.getItem("selected-lab-Discount");
      document.getElementById('main-lab-discount').innerHTML = labDiscount;

  
      if(storedTests!= "null")
      {
        document.getElementById('no-exams').style.display = "none";
        document.getElementById('list-web').innerHTML = storedTests;
      }
  
      else{
        document.getElementById('no-exams').style.display = "block";
      }
    
    }
  }

// Other Labs
  else{
    document.getElementById('main-lab-discount').style.display = "none";
    document.getElementById('mob-lab-discount').style.display = "none";
    var service = localStorage.getItem("selected-service");
    document.getElementById('selected-service').innerHTML = service;
  
    var name =  localStorage.getItem("selected-name")
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
        if(storedTests!= "null")
        {
          document.getElementById('no-exams-mob').style.display = "none";
          document.getElementById('list-mob').innerHTML = storedTests;
        }
  
        else{
          document.getElementById('no-exams-mob').style.display = "block";
        }
    }

    else{
        var mainCardImg =  localStorage.getItem("selected-main-img");
        document.getElementById('main-detail-img').innerHTML = mainCardImg;

        var mainCardDetails =  localStorage.getItem("selected-main-Details");
        document.getElementById('main-card-details').innerHTML = mainCardDetails;
        if(storedTests!= "null")
      {
        document.getElementById('no-exams').style.display = "none";
        document.getElementById('list-web').innerHTML = storedTests;
      }
  
      else{
        document.getElementById('no-exams').style.display = "block";
      }
    }

  }

}
