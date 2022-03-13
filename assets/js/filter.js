
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



  $(".filter-exam").click(function(){
      debugger
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



//   const taskInput = document.querySelector(".task-input input"),
//   filters = document.querySelectorAll(".filters span"),
//   clearAll = document.querySelector(".clear-btn"),
//   taskBox = document.querySelector(".task-box");
//   let editId,
//   isEditTask = false,
//   todos = JSON.parse(localStorage.getItem("todo-list"));
//   filters.forEach(btn => {
//       btn.addEventListener("click", () => {
//           document.querySelector("span.active").classList.remove("active");
//           btn.classList.add("active");
//           showTodo(btn.id);
//       });
//   });
//   function showTodo(filter) {
//       let liTag = "";
//       if(todos) {
//           todos.forEach((todo, id) => {
//               let completed = todo.status == "completed" ? "checked" : "";
//               if(filter == todo.status || filter == "all") {
//                   liTag += `<li class="task">
//                               <label for="${id}">
//                                   <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
//                                   <p class="${completed}">${todo.name}</p>
//                               </label>
//                               <div class="settings">
//                                   <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
//                                   <ul class="task-menu">
//                                       <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
//                                       <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
//                                   </ul>
//                               </div>
//                           </li>`;
//               }
//           });
//       }
//       taskBox.innerHTML = liTag || `<span>You don't have any task here</span>`;
//       let checkTask = taskBox.querySelectorAll(".task");
//       !checkTask.length ? clearAll.classList.remove("active") : clearAll.classList.add("active");
//       taskBox.offsetHeight >= 300 ? taskBox.classList.add("overflow") : taskBox.classList.remove("overflow");
//   }
//   showTodo("all");
//   function showMenu(selectedTask) {
//       let menuDiv = selectedTask.parentElement.lastElementChild;
//       menuDiv.classList.add("show");
//       document.addEventListener("click", e => {
//           if(e.target.tagName != "I" || e.target != selectedTask) {
//               menuDiv.classList.remove("show");
//           }
//       });
//   }
//   function updateStatus(selectedTask) {
//       let taskName = selectedTask.parentElement.lastElementChild;
//       if(selectedTask.checked) {
//           taskName.classList.add("checked");
//           todos[selectedTask.id].status = "completed";
//       } else {
//           taskName.classList.remove("checked");
//           todos[selectedTask.id].status = "pending";
//       }
//       localStorage.setItem("todo-list", JSON.stringify(todos))
//   }
//   function editTask(taskId, textName) {
//       editId = taskId;
//       isEditTask = true;
//       taskInput.value = textName;
//       taskInput.focus();
//       taskInput.classList.add("active");
//   }
//   function deleteTask(deleteId, filter) {
//       isEditTask = false;
//       todos.splice(deleteId, 1);
//       localStorage.setItem("todo-list", JSON.stringify(todos));
//       showTodo(filter);
//   }
//   clearAll.addEventListener("click", () => {
//       isEditTask = false;
//       todos.splice(0, todos.length);
//       localStorage.setItem("todo-list", JSON.stringify(todos));
//       showTodo()
//   });
//   taskInput.addEventListener("keyup", e => {
//       let userTask = taskInput.value.trim();
//       if(e.key == "Enter" && userTask) {
//           if(!isEditTask) {
//               todos = !todos ? [] : todos;
//               let taskInfo = {name: userTask, status: "pending"};
//               todos.push(taskInfo);
//           } else {
//               isEditTask = false;
//               todos[editId].name = userTask;
//           }
//           taskInput.value = "";
//           localStorage.setItem("todo-list", JSON.stringify(todos));
//           showTodo(document.querySelector("span.active").id);
//       }
//   });

