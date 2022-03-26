window.onload = function () {
        

  if(localStorage.getItem("best-labs") == "bestLabs"){
    document.getElementById('main-lab-discount').style.display = "none";
    document.getElementById('mob-lab-discount').style.display = "none";
    localStorage.getItem("best-labs","bestLabs")
  
    var storedTests = localStorage.getItem("requiredTests");
    
    var service = localStorage.getItem("selected-service");
    document.getElementById('selected-service').innerHTML = service;
  
    var name =  localStorage.getItem("selected-name")
    document.getElementById('selected-name').innerHTML = name;
  
    var media_query = 'screen and (max-width:600px)';
    var matched = window.matchMedia(media_query).matches;
    // mob
    if(matched){
        
        if(localStorage.getItem("best-labs") == "bestLabs")
        {
          var examName =  localStorage.getItem("serviceName")
          document.getElementById('selected-name').innerHTML = examName;
          document.getElementById('mob-lab-discount').style.display = "block";
          var labDiscount = localStorage.getItem("selected-lab-Discount");
          document.getElementById('mob-lab-discount').innerHTML = labDiscount;
  
          var labCardImg =  localStorage.getItem("selected-main-img");
          var labCardDetails =  localStorage.getItem("selected-main-Details");
          
          document.getElementById('mob-detail-title').innerHTML = examName;
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
          document.querySelector('.details-price').innerText = mobPrice;
        }
        }
  
        if(storedTests!= null)
        {
          document.getElementById('no-exams-mob').style.display = "none";
          document.getElementById('list').innerHTML = storedTests;
        }
  
        else{
          document.getElementById('no-exams-mob').style.display = "block";
        }
    }
  
  // web
    else{
      
      var mainCardImg =  localStorage.getItem("selected-main-img");
      document.getElementById('main-detail-img').innerHTML = mainCardImg;
  
      var mainCardDetails =  localStorage.getItem("selected-main-Details");
      document.getElementById('main-card-details').innerHTML = mainCardDetails;
  
     
      if(localStorage.getItem("best-labs") == "bestLabs")
      {
            //  var title = localStorage.getItem("selected-name");
      // document.getElementById('main-detail-title').innerHTML = title;
        var examName =  localStorage.getItem("serviceName")
        document.getElementById('selected-name').innerHTML = examName;
        document.getElementById('main-lab-discount').style.display = "block";
        var labDiscount = localStorage.getItem("selected-lab-Discount");
        document.getElementById('main-lab-discount').innerHTML = labDiscount;
      }
  
      else{
        document.getElementById('main-lab-discount').style.display = "none";
      }
  
  
      if(storedTests!= null)
      {
        document.getElementById('no-exams').style.display = "none";
        document.getElementById('list').innerHTML = storedTests;
      }
  
      else{
        document.getElementById('no-exams').style.display = "block";
      }
    
    }
  }

}
