window.onload = function () {
    var name = localStorage.getItem("selected-name");
    document.getElementById('selected-name').innerHTML = name;

    var title = localStorage.getItem("title");
    document.getElementById('title').innerHTML = title;

    var desc =  localStorage.getItem("desc");
    document.getElementById('desc').innerHTML = desc;

    var orderImg =  localStorage.getItem("selected-main-order-img");
    document.getElementById('main-img').innerHTML = orderImg;

    var discount =  localStorage.getItem("selected-order-discount");
    document.getElementById('discount').innerHTML = discount;

    var orderDetails =  localStorage.getItem("selected-main-order-Details");
    document.getElementById('main-details').innerHTML = orderDetails;

    var orderPrice =  localStorage.getItem("selected-main-order-price");
    document.getElementById('price').innerHTML = orderPrice;
        
}