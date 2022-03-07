$(document).ready(function(){
    
    $(".filter-button").click(function(){
        debugger
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    ul = document.getElementById("myUL-mob");
    li = ul.getElementsByClassName("card-box");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("title-card txt-md")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  });


//   $(".filter-exam").click(function(){
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInputExam");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("examinations");
//     li = ul.getElementsByClassName("exam");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByClassName("w-100 mx-4")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
//   });
});
