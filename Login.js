'use strict';

const adminId = document.getElementById('idBox'),
    adminPassword = document.getElementById('passwordBox'),
    adminName = document.querySelector(".usernameBox"),
    btn = document.getElementById('loginBtn');

const USERNAME = "currentUser";


function saveName(text){
    localStorage.setItem(USERNAME, text);
    history.go(0);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = adminId.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    btn.addEventListener("click", handleSubmit);
}

function paintGreeting(text){
    const logoutBtn = document.createElement("button");
    logoutBtn.id = 'logOutBtn';
    logoutBtn.innerText= "로그아웃";
    adminName.innerText = `${text}님`;
    adminName.appendChild(logoutBtn);
}

function logOut(){
    
    localStorage.removeItem(USERNAME);
    history.go(0);
    
}

function a(){
    const BTN = document.getElementById('logOutBtn');
    BTN.addEventListener("click", logOut);
}

function loadName(){
    const currentUser = localStorage.getItem(USERNAME);
    if(currentUser === null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
        a();        
    }
}

function init(){
    loadName();
}

init();