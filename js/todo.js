const todoForm = document.querySelector(".todo-form")
const todoInput = todoForm.querySelector("input")
const toDoList = document.querySelector(".todo-list")

const TODOS_KEY = "todos"

function deleteToDo(event){
    const li = event.target.parentElement
    todos = todos.filter(todo => todo.id != parseInt(li.id))
    li.remove()
    saveToDo(todos)
}

function saveToDo(todos){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function paintToDo(newToDoObj){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newToDoObj.text
    const button = document.createElement("button")
    button.innerText = "x"
    li.appendChild(span)
    li.appendChild(button)
    li.id = newToDoObj.id
    toDoList.appendChild(li)
    button.addEventListener("click", deleteToDo)
}

function handleToSubmit(event){
    event.preventDefault()
    const newToDo = todoInput.value
    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    }
    todoInput.value = ""
    todos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDo(todos)
}

const savedToDos = localStorage.getItem(TODOS_KEY)
let todos = []

if(savedToDos){
    const parseToDo = JSON.parse(savedToDos)
    todos = parseToDo
    todos.forEach(paintToDo)
}

todoForm.addEventListener("submit", handleToSubmit)