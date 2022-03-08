$('.nav-link .link-tab').click(function(){
    var newName =  $(".nav-link .link-tab.active p").text();
    console.log(newName);
    localStorage.setItem("selected-tab", newName);
});


// Share Data
function shareCardData()
{
var sharedCardWeb = document.getElementById('set-card-data-web').innerHTML;
var cardData =  localStorage.setItem("card-web", sharedCardWeb);
var sharedCardMob = document.getElementById('set-card-data-mob').innerHTML;
var cardData =  localStorage.setItem("card-mob", sharedCardMob);
var type =  localStorage.getItem("selected-tab");
var name = document.getElementById('selected-name').innerHTML;
var queryString = "?type=" + type + "&name=" + name; 
window.location.href = "reservations.html" + queryString; 
}