window.onload = function () {
        debugger
  document.getElementById('main-lab-discount').style.display = "none";
  document.getElementById('mob-lab-discount').style.display = "none";
  localStorage.getItem("best-labs","bestLabs")

  var storedTests = localStorage.getItem("requiredTests");
  if(storedTests!= null)
  {
    document.getElementById('no-exams').style.display = "none";
    document.getElementById('list').innerHTML = storedTests;
  }

  else{
    document.getElementById('no-exams').style.display = "block";
  }
    
  var selectCard = localStorage.getItem("detials");
  console.log(selectCard)

  var service = localStorage.getItem("selected-service");
  document.getElementById('selected-service').innerHTML = service;

  var name =  localStorage.getItem("serviceName")
  document.getElementById('selected-name').innerHTML = name;

  var media_query = 'screen and (max-width:600px)';
  var matched = window.matchMedia(media_query).matches;
  // mob
  if(matched){
    if(localStorage.getItem("best-labs") == "bestLabs")
    {
      document.getElementById('mob-lab-discount').style.display = "block";
      var labDiscount = localStorage.getItem("selected-lab-Discount");
      document.getElementById('mob-lab-discount').innerHTML = labDiscount;

      var labCardImg =  localStorage.getItem("selected-main-img");
      var labCardDetails =  localStorage.getItem("selected-main-Details");
      
      document.getElementById('mob-detail-title').innerHTML = name;
      document.getElementById('mob-detail-img').innerHTML = labCardImg;
      document.getElementById('mob-card-details').innerHTML = labCardDetails;
  
    }

    else{
      document.getElementById('main-lab-discount').style.display = "none";
      var mobCardImg =  localStorage.getItem("selected-mob-img");
      document.getElementById('mob-detail-img').innerHTML = mobCardImg;
  
      var mobTitle =  localStorage.getItem("selected-mob-title");
      document.getElementById('mob-detail-title').innerHTML = mobTitle;
  
      var mobCardDetails =  localStorage.getItem("selected-mob-Details");
      document.getElementById('mob-card-details').innerHTML = mobCardDetails;
  
      var mobPrice =  localStorage.getItem("mob-price");
      if (mobPrice != "null"){
          document.getElementById('total-price').innerHTML = mobPrice;
      }
    }
  }

// web
  else{
    var mainCardImg =  localStorage.getItem("selected-main-img");
    document.getElementById('main-detail-img').innerHTML = mainCardImg;

    var mainCardDetails =  localStorage.getItem("selected-main-Details");
    document.getElementById('main-card-details').innerHTML = mainCardDetails;
     var title = localStorage.getItem("selected-name");
    document.getElementById('main-detail-title').innerHTML = title;
   
    if(localStorage.getItem("best-labs") == "bestLabs")
    {
      document.getElementById('main-lab-discount').style.display = "block";
      var labDiscount = localStorage.getItem("selected-lab-Discount");
      document.getElementById('main-lab-discount').innerHTML = labDiscount;
    }

    else{
      document.getElementById('main-lab-discount').style.display = "none";
    }
  
  }
}
