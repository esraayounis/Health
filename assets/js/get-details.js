
    window.onload = function () {
        debugger

        // Reservations
        var reservations = localStorage.getItem("cloneCardData");
        var reservationsCount = localStorage.getItem("reservations-count");
        console.log(reservations);
        if(reservations == ""){
          document.getElementById("current-reserv-count").innerText = "0"
        }

        else{
            document.getElementById("current-reserv-count").innerText = reservationsCount;
        }


        // Faviorts
        var img = localStorage.getItem("saveCardImg");
        var details = localStorage.getItem("saveCardDetails");
        var price = localStorage.getItem("price");
        if(reservations == ""){
          document.getElementById("faviorts-count").innerText = "0"
        }

        else{
            document.getElementById("faviorts-count").innerText = reservationsCount;
        }

    }