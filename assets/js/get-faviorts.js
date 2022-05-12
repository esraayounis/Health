
window.onload = function () {
          // Faviorts
    debugger
    var retrievedFaviorts = localStorage.getItem('faviortsList');
    console.log(retrievedFaviorts)
    if(retrievedFaviorts == null || retrievedFaviorts == "[]"){
    document.getElementById("faviorts-count").innerText = "0";
    document.querySelector("#faviorts .faviorts-container").style.display = "none";
    document.querySelector("#faviorts .not-found-data").style.display = "block";
    }

    else{
        var retrievedFaviorts = JSON.parse(localStorage.getItem('faviortsList'))
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
                    <button type="button" class="btn delete" id="${i}" onclick="deleteFaviortsItem(this, ${i})">مسح</button>
                </div>
            </div>
            
            
        </div>`    
        faviortsContainer.insertAdjacentHTML('beforeend',navlistElement);
        }
    }
}


function deleteFaviortsItem(elem, index){ 

    var element = elem.offsetParent.children[2].children[0].children[3].lastElementChild.children[index];
    element.remove();
    console.log(element)

    var retrievedFaviorts = JSON.parse(localStorage.getItem('faviortsList'));
    for (i = 0; i < retrievedFaviorts.length; i++){
      if(elem.id == i){
        retrievedFaviorts.splice(retrievedFaviorts[i], 1);
        console.log(retrievedFaviorts)
        localStorage.setItem('faviortsList', JSON.stringify(retrievedFaviorts));
        if(retrievedFaviorts == "[]")
        {
            document.getElementById("faviorts-count").innerText = "0";
            document.querySelector("#faviorts .faviorts-container").style.display = "none";
            document.querySelector("#faviorts .not-found-data").style.display = "block";
        }
        else{
            document.querySelector("#faviorts .not-found-data").style.display = "none";
            var faviortsCount = document.getElementById("faviorts-count").innerText;
            document.getElementById("faviorts-count").innerText = faviortsCount-1;
            
        }
      }
    }
}