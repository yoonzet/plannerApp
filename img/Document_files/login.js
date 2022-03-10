const loginBG = document.querySelector('.login-bg');
const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form input');
const greeting = document.querySelector('.greeting p');
const logout = document.querySelector('.greeting .logout');

const HIDDEN_CLASSNAME ='hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(event){
    event.preventDefault(); //새로고침 막아줌
    loginBG.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY ,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function logOut(){
    localStorage.removeItem(USERNAME_KEY, JSON.stringify(saveUsername));
    location.reload();
}

logout.addEventListener('click',logOut);

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null){
    // loginBG.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    paintGreeting(saveUsername);
    loginBG.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}
