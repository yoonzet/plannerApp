const todoForm = document.querySelector('.todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-list');
const todoClear = document.querySelector('.clear');


const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos) );
}

//요일 클리어
function clearToDos(){
    localStorage.removeItem(TODOS_KEY, JSON.stringify(toDos));
    let ul = document.querySelector('ul').innerHTML = '';
}
//

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}



function paintTodo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '×';
    button.addEventListener('click', deleteTodo);
    todoClear.addEventListener('click', clearToDos);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodObj = {
        text: newTodo,
        id: Date.now(),
    }
    todoInput.value = "";
    toDos.push(newTodObj);
    paintTodo(newTodObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}