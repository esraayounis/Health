
    window.onload = function () {
          // Faviorts
          var faviortsCount = localStorage.getItem("faviorts-count");
          var img = localStorage.getItem("saveCardImg");
          var details = localStorage.getItem("saveCardDetails");
          var price = localStorage.getItem("price");
          if(faviortsCount == "0"){
            document.getElementById("faviorts-count").innerText = "0";
            document.querySelector("#faviorts .not-found-data").style.display = "block";
          }
  
          else{
              document.getElementById("faviorts-count").innerText = faviortsCount;
              document.querySelector("#faviorts .not-found-data").style.display = "none";
              document.getElementById("faviort-img").innerHTML = img;
              document.getElementById("faviort-details").innerHTML = details;
              document.getElementById("faviort-price").innerHTML = price;
          }
  
            // Reservations
          // var img = localStorage.getItem("saveCardImg");
          // var details = localStorage.getItem("saveCardDetails");
          // var price = localStorage.getItem("price");
          // var reservationsCount = localStorage.getItem("reservations-count");
          // if(reservationsCount == "0"){
          //   document.getElementById("current-reserv-count").innerText = "0";
          //   document.querySelector(".tab-pane#nav-current .not-found-data").style.display = "block";
          // }
  
          // else{
          //     document.getElementById("current-reserv-count").innerText = reservationsCount;
          //     document.querySelector(".tab-pane#nav-current .not-found-data").style.display = "none";
          //     document.getElementById("current-res-img").innerText = img;
          //     document.getElementById("current-res-details").innerText = details;
          //     document.getElementById("current-price").innerText = price;
          // }
    }

    unsave.addEventListener('click', function(ev) {
        debugger
        var btn = ev.target
        var cardBody = btn.parentElement
        var card = cardBody.parentElement

        card.parentElement.removeChild(card)
    })