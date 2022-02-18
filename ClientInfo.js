var testCase = [
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
    {nickname:'김닉네임닉네임', id:'IdIdID', createdAt:'2022/02/18', recentLogin:'2022/02/18', feed:'500/10', firewoods:500},
];

const userCount = document.getElementById('userCount');
userCount.innerHTML = `전체 유저 ${testCase.length} 명`;

const TableArea = document.querySelector('.clientList');

const clientTable = document.createElement("table");
clientTable.id = 'Table';

let nickname = document.createElement('td');
nickname.innerHTML = "닉네임";

let id = document.createElement('td');
data1 = id.innerHTML = "아이디";

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

testCase.forEach(element => {
    const newData = clientTable.insertRow();

    const newData1 = newData.insertCell(0);
    const newData2 = newData.insertCell(1);
    const newData3 = newData.insertCell(2);
    const newData4 = newData.insertCell(3);
    const newData5 = newData.insertCell(4);
    const newData6 = newData.insertCell(5);

    newData1.innerText = testCase[0].nickname;
    newData2.innerText = testCase[0].id;
    newData3.innerText = testCase[0].createdAt;
    newData4.innerText = testCase[0].recentLogin;
    newData5.innerText = testCase[0].feed;
    newData6.innerText = testCase[0].firewoods;
});

TableArea.appendChild(clientTable);