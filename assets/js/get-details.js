
    window.onload = function () {
        debugger 

        var selectCard = localStorage.getItem("detials");
        console.log(selectCard)
      
        var service = localStorage.getItem("selected-service");
        document.getElementById('selected-service').innerHTML = service;

        var name = localStorage.getItem("selected-name");
        document.getElementById('selected-name').innerHTML = name;

       
        var media_query = 'screen and (max-width:600px)';
        var matched = window.matchMedia(media_query).matches;
        if(matched){
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
    
        else{
            var mainCardImg =  localStorage.getItem("selected-main-img");
            document.getElementById('main-detail-img').innerHTML = mainCardImg;

            var mainCardDetails =  localStorage.getItem("selected-main-Details");
            document.getElementById('main-card-details').innerHTML = mainCardDetails;

            var mainPrice =  localStorage.getItem("main-price");
            console.log(mainPrice)
            if (mainPrice != "null"){
                document.getElementById('total-price').innerHTML = mainPrice;
            }
          
        }
    }