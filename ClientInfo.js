let testCase = [
    {nickname:'김닉네임닉네임0', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임1', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임2', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임3', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임4', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임5', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임6', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임7', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임8', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임9', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임10', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임11', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임12', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임13', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임14', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임15', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임16', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임17', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임18', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임19', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임20', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
];


const CLIENT_INFO = "ClientInfo";
const userCount = document.getElementById('userCount');
const TableArea = document.querySelector('.clientList');
const clientTable = document.createElement("table");


function dataInit(){
    var cnt = 0;

    testCase.forEach(element => {
            localStorage.setItem(CLIENT_INFO, JSON.stringify(testCase));
            cnt++;
    })
}

function drawTable(){
    testCase.forEach(element => {
        var cnt = 0;
        const newData = clientTable.insertRow();
        const newData1 = newData.insertCell(0);
        const newData2 = newData.insertCell(1);
        const newData3 = newData.insertCell(2);
        const newData4 = newData.insertCell(3);
        const newData5 = newData.insertCell(4);
        const newData6 = newData.insertCell(5);
        const newData7 = newData.insertCell(6);
    
        newData1.innerText = element.nickname;
        newData2.innerText = element.id;
        newData3.innerText = element.createdAt;
        newData4.innerText = element.recentLogin;
        newData5.innerText = element.feed;
        newData6.innerText = element.firewoods;
        userCount.innerHTML = `전체 유저 ${testCase.length} 명`;
    
        const BUTTON = document.createElement('button');
        BUTTON.id = element.nickname;
        BUTTON.innerHTML = '삭제';
        newData7.appendChild(BUTTON);
    
        cnt++;
    
        TableArea.appendChild(clientTable);
    });
}

function tableSetting(){
    clientTable.id = 'Table';

    let nickname = document.createElement('td');
    nickname.innerHTML = "닉네임";

    let id = document.createElement('td');
    id.innerHTML = "아이디";

    let createdAt = document.createElement('td');
    createdAt.innerHTML = "가입일";

    let recentLogin = document.createElement('td');
    recentLogin.innerHTML = "최근접속일";

    let feed = document.createElement('td');
    feed.innerHTML = "글/댓글수";

    let firewoods = document.createElement('td');
    firewoods.innerHTML = "보유 장작";

    clientTable.appendChild(nickname);
    clientTable.appendChild(id);
    clientTable.appendChild(createdAt);
    clientTable.appendChild(recentLogin);
    clientTable.appendChild(feed);
    clientTable.appendChild(firewoods);
}


dataInit();
tableSetting();
drawTable();


const BTNS = document.querySelectorAll('button');

for(const button of BTNS){
    button.addEventListener('click', () => {
        if(confirm(`${button.id} 님의 계정을 삭제하시겠습니까?`) == true)
            data = localStorage.getItem(CLIENT_INFO);
            targetIndex = JSON.parse(data).findIndex(i => i.nickname == `${button.id}`);
            var removed = testCase.splice(targetIndex, 1);
            localStorage.removeItem(CLIENT_INFO);
            localStorage.setItem(CLIENT_INFO, JSON.stringify(testCase));
            clientTable.deleteRow(targetIndex);
        })
}



