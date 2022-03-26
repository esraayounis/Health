
       // filter in web
    $(".filter-button").click(function(){
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
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
    
    // filter in mobile
    $(document).ready(function() {
     var inputFilter = $('#myInput');
        inputFilter.on('keyup', function() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
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
    });


// filter exam in web
  $(".filter-exam").click(function(){
      
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInputExam");
    filter = input.value.toUpperCase();
    ul = document.getElementById("examinations");
    li = ul.getElementsByClassName("exam");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("w-100 mx-4")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  });

// filter exam in mobile
$(document).ready(function() {
    var inputFilter = $('#myInputExamMob');
    inputFilter.on('keyup', function() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInputExamMob");
    filter = input.value.toUpperCase();
    ul = document.getElementById("examinations-mob");
    li = ul.getElementsByClassName("item");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("w-100")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});
});
