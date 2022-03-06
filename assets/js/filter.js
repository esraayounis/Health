$(document).ready(function(){
    
    $(".filter-button").click(function(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    ul = document.getElementById("myUL-mob");
    li = ul.getElementsByClassName("card-box");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("title-card")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  });
});
