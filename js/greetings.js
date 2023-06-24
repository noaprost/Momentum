const loginForm = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-form input")
const greeting = document.querySelector(".greeting")

//input값을 받아서 h1으로 넘기기 v
//local storage에 저장해서 값 불러 오기 v
//유효성 검사 하기 v

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const userName = loginInput.value
    localStorage.setItem(USERNAME_KEY, userName)
    showGreetingMessage(userName)
}

function showGreetingMessage(userName){
    greeting.innerText = `Hello, ${userName}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUserName = localStorage.getItem(USERNAME_KEY)

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}else{
    showGreetingMessage(savedUserName)
}

