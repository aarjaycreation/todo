/*
     ██  █████  ██    ██  █████  ███████  ██████ ██████  ██ ██████  ████████ ███████ 
     ██ ██   ██ ██    ██ ██   ██ ██      ██      ██   ██ ██ ██   ██    ██    ██      
     ██ ███████ ██    ██ ███████ ███████ ██      ██████  ██ ██████     ██    ███████ 
██   ██ ██   ██  ██  ██  ██   ██      ██ ██      ██   ██ ██ ██         ██         ██ 
 █████  ██   ██   ████   ██   ██ ███████  ██████ ██   ██ ██ ██         ██    ███████
 */

// var nameInput = document.getElementById('todo-input');
// document.querySelector('form.todo-form').addEventListener('submit', function (e) {
//    //  prevent the normal submission of the form
//      e.preventDefault(); console.log(nameInput.value); });

// add #add button onclick function
document.querySelector("#add").onclick = function () {
  // checking not todo empaty
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("write your todo");
  } 
 //   whan we add the todo 
  else {
    document.querySelector("#todos").innerHTML += `
         <div class="todo">
               <div class="d-flex justify-content-between gap-2 mt-1">
                    <span id="taskname">
                         ${document.querySelector("#newtask input").value}
                    </span>
                    <button class="delete allbutton">
                         <i class="far fa-trash-alt"></i>
                    </button>
               </div>
          </div>
         `;

    var current_todos = document.querySelectorAll(".delete"); //
    console.log(current_todos.length)// for tasting
    for (var i = 0; i < current_todos.length; i++) {
      current_todos[i].onclick = function () {
        this.parentNode.remove();
      }; // remove funtion end 
    }
  } //else end
}; //main funtion end 




