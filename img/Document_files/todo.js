const todoForm = document.querySelectorAll('.todo-form');
const todoInput = document.getElementsByClassName('todo-input');
const todoList = document.getElementsByClassName('todo-list');


const TODOS_KEY = 'todos';

let toDos = [ ];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos) );
}


function paintTodo(newTodo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;
    li.appendChild(span);
    // for (let i of todoList){
    //     if(span.innerText.length>0){
    //         i.appendChild(li);
    //         console.log(li)
    //     }else{
    //         li.remove();
    //     }
    // }
    todoList.appendChild(li);
  
}

// function handleTodoSubmit(event){
//     event.preventDefault();
//     const Todo = todoInput.value;
//     todoInput.value = "";
//     printTodo(Todo);        
// }
// function todoInput(event){
//     event.target.value;
// }


function handleTodoSubmit(event){
    event.preventDefault();
    for(const dayInput of todoInput){
        const newTodo = dayInput.value;
        if(newTodo.length > 0){
            dayInput.value = "";
            paintTodo(newTodo);
        }            
    } 
}
// function list(event){
//     li = event.target.parentElement;
//     todoList.appendChild(li);
//     console.lot
// }

// Array.from(todoInput).forEach(list => list.addEventListener('submit', list));

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}



for (let i of todoForm){
    i.addEventListener("submit", handleTodoSubmit, paintTodo);
}
// todoForm.addEventListener("submit", handleTodoSubmit);
