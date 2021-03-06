'use strict';

const adminId = document.getElementById('idBox'),
    adminPassword = document.getElementById('passwordBox'),
    adminName = document.querySelector(".usernameBox"),
    USERNAME = "currentUser",
    USER_PW = "currentPassword",
    btn = document.getElementById('loginBtn');


function saveName(ID, PASSWORD){
    if(ID.length > 0 && PASSWORD.length > 0) {
       localStorage.setItem(USERNAME, ID);
       localStorage.setItem(USER_PW, PASSWORD);
       toHome();
       history.go(0);
    }
    else{
        alert('아이디와 비밀번호를 입력해주세요.');
    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = adminId.value;
    const CurrentPassword = adminPassword.value;
    saveName(currentValue, CurrentPassword);
    paintGreeting(currentValue);
}

function askForName(){
    btn.addEventListener("click", handleSubmit);
}

function paintGreeting(text){
    const logoutBtn = document.createElement('div');
    logoutBtn.id = 'logOutBtn';
    logoutBtn.innerText= "로그아웃";

    if(text.length > 0){
        adminName.innerText = `${text}님`;
        adminName.appendChild(logoutBtn);
    }
}

function toHome(){
    window.history.pushState(undefined,"",'/CampingOwners/pages/Home.html');
    history.go(0);
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