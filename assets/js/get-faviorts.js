
window.onload = function () {
          // Faviorts
    
    var retrievedFaviorts = JSON.parse(localStorage.getItem('faviortsList'));
    console.log(retrievedFaviorts)
    if(retrievedFaviorts == null){
    document.getElementById("faviorts-count").innerText = "0";
    document.querySelector("#faviorts .not-found-data").style.display = "block";
    }

    else{
        document.querySelector("#faviorts .not-found-data").style.display = "none";
        for (i = 0; i < retrievedFaviorts.length; i++){
            document.getElementById("faviorts-count").innerText = i+1;
            const faviortsContainer = document.querySelector('.faviorts-container')
            const navlistElement = ` <div class=" card-box p-2 py-4 card-doctor card-detail">
            <div class="row">
                <div class="col-lg-3 p-lg-0">
                    <div class="avatar text-center" id="faviort-img">
                        ${retrievedFaviorts[i].cardImg}
                    </div>
                </div>
                <div class="col-lg-6 p-lg-0 detail" id="faviort-details">
                ${retrievedFaviorts[i].cardDetails}
                </div>
                <div class="col-lg-3 value-card text-center">
                    <div>
                        <p class="mb-1">الإجمالي</p>
                        <h5 id="faviort-price"> ${retrievedFaviorts[i].price}</h5>
                    </div>
                    
                </div>
                <button type="button" class="btn" onclick="deleteFaviortsItem(this)">مسح</button>
            </div>
        </div>`    
        faviortsContainer.insertAdjacentHTML('beforeend',navlistElement);
        }
    }
}



function deleteFaviortsItem(elem){ 
      
    var parent = elem.parentNode;
    var grand_father = parent.parentNode;
    grand_father.removeChild(parent);
    
//     if(grand_father.innerText == ""){
//       document.getElementById("faviorts-count").innerText = "0";
//       document.querySelector("#faviorts .faviorts-container").style.display = "none";
//       document.querySelector("#faviorts .not-found-data").style.display = "block";
//   }

//   else{
//       document.querySelector("#faviorts .not-found-data").style.display = "none";
//   }
}