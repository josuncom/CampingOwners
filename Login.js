'use strict';

const adminId = document.getElementById('idBox'),
    adminPassword = document.getElementById('passwordBox'),
    adminName = document.querySelector(".usernameBox"),
    btn = document.getElementById('loginBtn');

const USERNAME = "currentUser";

function toLogin(){
    let loginForm = document.querySelector(".loginContainer");
    loginForm.classList.toggle("active");
}

function saveName(text){
    if(text.length > 0) {
       localStorage.setItem(USERNAME, text);
       toLogin();
       history.go(0);
    }
    else{
        alert('아이디와 비밀번호를 입력해주세요.');
    }
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

    if(text.length > 0){
        adminName.innerText = `${text}님`;
        adminName.appendChild(logoutBtn);
    }
    
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